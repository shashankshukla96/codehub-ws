const fs = require('fs');

let errorLogger = (err, req, res, next) => {
	fs.appendFileSync(
		'errorLogger.txt', err.stack + ' \n'
    );
    res.send(err.message)
};

module.exports = errorLogger;
