import React, { useState } from 'react';
import dish1 from './images/dish1.jpg';
import dish2 from './images/dish4.jpg';
import dish3 from './images/dish3.jpg';

function RestaurantApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [reservationCount, setReservationCount] = useState(0);

  const login = () => {
    setIsLoggedIn(true);
  };

  const addToCart = (item) => {
    if (!isLoggedIn) {
      alert('Please log in to add items to the cart.');
      return;
    }
    setCartItems([...cartItems, item]);
  };

  const makeReservation = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const time = event.target.time.value;
    const people = event.target.people.value;

    // Perform reservation logic here
    // You can store the reservation information in state or send it to an API

    setReservationCount(reservationCount + parseInt(people));
    
    event.target.reset();
  };

  // Fetch menu items from an API and set the menuItems state
  // ...

  return (
    <div>
      <h2>Restaurant App</h2>
      {!isLoggedIn && (
        <div>
          <p>Please log in to add items to the cart.</p>
          <button onClick={login}>Log In</button>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <div className="menu">
            <h2 style={{ color: 'black', fontSize: '40px' }}>Menu</h2>
            <div className="menu-items">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} className="dish-image" />
                  <h3 style={{ color: 'purple', fontSize: '20px' }}>{item.name}</h3>
                  <p>Price: shs{item.price}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
          <h3>Cart Items:</h3>
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
                {item.name} - shs{item.price} <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: shs{getTotalAmount()}</h3>
          <form onSubmit={makeReservation}>
            <input type="date" name="date" placeholder="Select a date" />
            <input type="time" name="time" placeholder="Select a time" />
            <input type="number" name="people" placeholder="Number of people" />
            <button type="submit">Make Reservation</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default RestaurantApp;