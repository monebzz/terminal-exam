// config/database.js
module.exports = {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/tourism',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
};
