const express = require('express');
const app = express();

// Sample user data for login validation
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
];

// API endpoint for validating user login
app.post('/api/login', (req, res) => {
  // Extract the email and password from the request body
  const { email, password } = req.body;

  // Find the user with the matching email
  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    // Return an error response if the email or password is incorrect
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Return a success response if the login is valid
  res.json({ success: true });
});

// API endpoint for processing mobile money payment
app.post('/api/payment/mobilemoney', (req, res) => {
  // Extract the payment details from the request body
  const { provider, phoneNumber, amount } = req.body;

  // Perform payment processing logic based on the mobile money provider
  if (provider === 'airtelmoney') {
    // Process payment using Airtel Money
    // ...
  } else if (provider === 'mtnmoney') {
    // Process payment using MTN Mobile Money
    // ...
  } else {
    // Return an error response for an unsupported provider
    return res.status(400).json({ error: 'Unsupported mobile money provider' });
  }

  // Return a success response if the payment is processed
  res.json({ success: true });
});

// API endpoint for fetching notifications
app.get('/api/notifications', (req, res) => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: 'Notification 1', timestamp: '2023-11-15 10:00:00' },
    { id: 2, message: 'Notification 2', timestamp: '2023-11-15 11:00:00' },
    { id: 3, message: 'Notification 3', timestamp: '2023-11-15 12:00:00' },
  ];

  // Return the notifications data
  res.json(notifications);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});