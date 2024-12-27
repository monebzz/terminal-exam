// middleware/validation.js
const validateVisitor = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    next();
};

const validateAttraction = (req, res, next) => {
    const { name, location, entryFee } = req.body;
    if (!name || !location || entryFee === undefined) {
        return res.status(400).json({ error: 'Name, location, and entry fee are required' });
    }
    if (entryFee < 0) {
        return res.status(400).json({ error: 'Entry fee cannot be negative' });
    }
    next();
};

const validateReview = (req, res, next) => {
    const { score, attractionId, visitorId } = req.body;
    if (!score || !attractionId || !visitorId) {
        return res.status(400).json({ error: 'Score, attraction ID, and visitor ID are required' });
    }
    if (score < 1 || score > 5) {
        return res.status(400).json({ error: 'Score must be between 1 and 5' });
    }
    next();
};

module.exports = { validateVisitor, validateAttraction, validateReview };
