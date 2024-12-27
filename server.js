// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const attractionRoutes = require('./routes/attractionRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./middleware/errorHandler');
const { url, options } = require('./config/database');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Basic root route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Tourism Management API',
        endpoints: {
            attractions: '/api/attractions',
            visitors: '/api/visitors',
            reviews: '/api/reviews'
        }
    });
});

// API Routes
app.use('/api/attractions', attractionRoutes);
app.use('/api/visitors', visitorRoutes);
app.use('/api/reviews', reviewRoutes);

// Error Handler
app.use(errorHandler);

// Connect to MongoDB
// server.js
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tourisms', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
