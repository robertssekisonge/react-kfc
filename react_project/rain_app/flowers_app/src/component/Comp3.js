import React, { useState, useEffect } from 'react';
import dish1 from './images/dish6.jpg';
import dish2 from './images/dish4.jpg';
import dish3 from './images/dish3.jpg';



function RestaurantApp() {
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setUser({ username, password });
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsername('');
    setPassword('');
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item of cartItems) {
      totalAmount += item.price;
    }
    return totalAmount;
  };

  // Fetch menu items from an API and set the menuItems state
  useEffect(() => {
    // Simulating API call with static data
    const menuData = [
      { id: 1, name: 'Item 1', price: 25000, image: dish1 },
      { id: 2, name: 'Item 2', price: 15000, image: dish2 },
      { id: 3, name: 'Item 3', price: 35000, image: dish3 },
    ];
    setMenuItems(menuData);
  }, []);

  const handleDelivery = () => {
    // Perform delivery procedures here
    // This is a placeholder function
    console.log('Delivery procedures initiated.');
    console.log('Items to be delivered:', cartItems);
    console.log('Total amount:', getTotalAmount());
  };

  return (
    <div>
     
     
      {user ? (
        <>
          <p className="welcome-message">Welcome, {user.username}!</p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>

          <div className="menu">
            <h2 style={{ color: 'black', fontSize: '40px' }}>Menu</h2>
            <div className="menu-items">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} className="dish-image" />
                  <h3 style={{ color: 'yellow', fontSize: '40px' }}>{item.name}</h3>
                  <p style={{color:'black', fontSize:"30px"}}>Price: shs{item.price}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ color: 'green', fontSize: '30px' }}>Cart Items:</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="50"
                  height="50"
                  className="dish-image"
                />
                {item.name} - shs{item.price}{' '}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3 style={{ color: 'red' }}>Total Amount: shs{getTotalAmount()}</h3>
          <button onClick={handleDelivery}>Proceed with Delivery</button>
        </>
      ) : (
        <>
          <p style={{ color: 'black' }}>Please login to continue.</p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter yourpassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show Password
              </label>
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {loginError && <p style={{ color: 'red' }}>Please enter both username and password.</p>}
          </form>
        </>
      )}
    </div>
  );
}

export default RestaurantApp;