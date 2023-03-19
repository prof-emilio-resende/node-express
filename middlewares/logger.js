function logger(req, res, next) {
    console.log('LOGGED BEFORE...');
    next();
    console.log('LOGGED AFTER...');
}

module.exports = logger;