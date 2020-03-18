const conn = require('../utilities/connection.js');
const Customer = require('./class/customer.js');
const bcrypt = require('bcrypt');

customer = {};

customer.signup = data => {
	const customer = new Customer(data);

	customer.password = bcrypt.hashSync(customer.password, 10);

	return conn.getCustomerCollection().then(model => {
		return model.create(customer).then(data => {
			return data;
		});
	});
};

customer.login = data => {
	const email = data.email;
	const password = data.password;

	return conn.getCustomerCollection().then(model => {
		return model.find({ email: email }).then(findData => {
			if (findData.length === 0) {
				console.log(findData);
				return 0;
			}
			return bcrypt.compare(password, findData[0].password).then(data => {
				console.log(data);
				if (data === true) return findData;
				else return false;
			});
		});
	});
};

customer.subscribe = data => {
	const user = data.email;
	const days = Number(data.days);

	return conn.getCustomerCollection().then(model => {
		return model.findOne({ email: user }).then(findData => {
			let currEndDate = new Date(findData.subscriptionEndDate);
			currEndDate.setDate(currEndDate.getDate() + days);
			return model
				.updateOne(
					{ email: user },
					{ $set: { subscriptionEndDate: currEndDate } }
				)
				.then(updatedData => {
					return updatedData;
				});
		});
	});
};

module.exports = customer;
