const notification = {
	title: {
		required: [true],
		type: String
	},
	text: {
		required: [true],
		type: String
	},

	time: {
		required: [true],
		type: Date,
		default: new Date().toDateString()
	},
	read: {
		required: [true],
		type: Boolean
	}
};

module.exports = notification;
