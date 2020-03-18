const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const customerRouter = require('./route/customerRoute.js');

const errorLogger = require('./utilities/errorlogger.js');
const requestLogger = require('./utilities/requestlogger.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);

app.use('/customer', customerRouter);

app.use(errorLogger);

app.listen(5500);
console.log('Server started on port: 5500');
