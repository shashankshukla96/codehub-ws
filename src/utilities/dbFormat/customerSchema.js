const notification = require('./notificationSchema.js');

const customer = {
	email: {
		required: [true, 'Required field'],
		type: String,
		unique: true
	},
	name: {
		required: [true, 'Required field'],
		type: String
	},
	phone: {
		required: [true, 'Required field'],
		type: String
	},
	password: {
		required: [true, 'Password is required'],
		type: String
	},
	subscriptionEndDate: {
		required: [true, 'When subscription ends'],
		type: Date
	},
	notifications: {
		required: [true],
		type: [notification]
	}
};

module.exports = customer;
