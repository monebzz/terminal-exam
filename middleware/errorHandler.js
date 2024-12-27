// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
        return res.status(400).json({ error: 'Duplicate entry found' });
    }
    res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
