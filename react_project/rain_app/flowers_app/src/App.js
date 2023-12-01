import React, { useState, useEffect } from 'react';
import './App.css';
import kfc from './images/kfc.jpg';
import Comp1 from './component/Comp1';
import Comp3 from './component/Comp3';


const App = () => {
  const [reservation, setReservation] = useState(null);
  const [payment, setPayment] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Reservations
  const makeReservation = (reservationData) => {
    // Perform reservation logic and set the reservation state
    setReservation(reservationData);
  };

  // Payment Integration
  const processPayment = (paymentData) => {
    // Perform payment processing logic and set the payment state
    setPayment(paymentData);
  };

  // Notifications
  const fetchNotifications = () => {
    // Fetch notifications from an API and set the notifications state
    // Simulating API call with static data
    const notificationData = ['Notification 1', 'Notification 2'];
    setNotifications(notificationData);
  };

  // Fetch initial data
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    
    
    
    <div className="app">
      <div1 style={{ size: '20px' }}>
      <img src={kfc} alt="KFC" width={1000} height={300} />
      <header className="header">
        <h1>KFC APP</h1>
        
      </header>
      </div1>
      
     
      <div className="content">
        <h1 style={{ color: 'yellow' , fontSize:"20px"}}>What We Offer</h1>
        
        <Comp1 />
        <Comp3 />
        <div className="reservation">
          <h2 style={{ color: 'black', fontSize: '40px' }}>Reservation</h2>
          {reservation ? (
            <p style={{color:"green"}}>
              You have a reservation  {reservation.date} for {reservation.time} 2 people successful.
            </p>
          ) : (
            <form onSubmit={makeReservation}>
              <input type="date" name="date" placeholder="Select a date" />
              <input type="time" name="time" placeholder="Select a time" />
              <input type="number" name="people" placeholder="Number of people" />
              <button type="submit">Make Reservation</button>
            </form>
          )}
        </div>
        <div className="payment">
          <h2 style={{ color: 'black', fontSize: '40px' }}>Payment</h2>
          {payment ? (
            <p style={{color:"green"}}>Payment successful. Transaction ID: {payment.transactionId}</p>
          ) : (
            <form className="payment-form" onSubmit={processPayment}>
              <input type="text" name="cardNumber" placeholder="Card Number" className="input-field" />
              <input type="text" name="expiryDate" placeholder="Expiry Date" className="input-field" />
              <input type="text" name="cvv" placeholder="CVV" className="input-field" />
              <button type="submit" className="submit-button">Process Payment</button>
            </form>
          )}
        </div>
        <div className="notifications">
          <h2 style={{ color: 'black', fontSize: '40px' }}>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} style={{ color: 'orange', fontSize: '20px' }}>{notification}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;