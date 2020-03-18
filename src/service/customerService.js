const customerModel = require('../model/customerModel.js');

customer = {};

customer.signup = data => {
	return customerModel.signup(data).then(signupData => {
		if (signupData) return 'Customer successfully registered';
		else {
			let error = new Error('Could not add customer');
			error.status = 501;
			throw error;
		}
	});
};

customer.login = login => {
	return customerModel.login(login).then(data => {
		if (data === 0) {
			throw new Error('This customer is not registered');
		} else if (data === false) {
			throw new Error('Wrong Password');
		} else return data;
	});
};

customer.subscribe = data => {
	return customerModel.subscribe(data).then(subs => {
		if (subs.nModified === 1) return 'Subscription successfully added';
		else {
			throw new Error('Could not add subscription');
		}
	});
};

module.exports = customer;
