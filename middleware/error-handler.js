const util = require('util')

module.exports = () => {
    return (err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500).json({
            error: util.format(err)
        });
    }
}