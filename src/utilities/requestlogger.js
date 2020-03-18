const fs = require('fs');

let requestLogger = (req, res, next) => {
	fs.appendFileSync(
		'requestLogger.txt',
		req.path +
			' ' +
			req.method +
			' at ' +
			new Date() +
			' \n'
	);

	next();
};

module.exports = requestLogger;
