const express = require('express');
const shippingRoutes = require('./routes/shoppingRoutes');
const app = express();
app.use(express.json());
const authMiddleware = require("./middleware/verifySecret")
// Product routes 
app.use('/api/shipping',authMiddleware, shippingRoutes);
// Catch undefined routes
app.use((req, res) => {
    res.status(404).json({
      error: 'Route not found',
    });
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;