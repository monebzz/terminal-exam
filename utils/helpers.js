// utils/helpers.js
const calculateAverageRating = (reviews) => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.score, 0);
    return Number((sum / reviews.length).toFixed(1));
};

const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

module.exports = {
    calculateAverageRating,
    isValidEmail
};
