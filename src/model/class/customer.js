class Customer {
	constructor(obj) {
		this.email = obj.email;
		this.name = obj.name;
		this.phone = obj.phone;
		this.password = obj.password;
		let date = new Date();
		this.subscriptionEndDate = date.setDate(date.getDate()+30);
		this.notifications = [];
	}
}

module.exports = Customer;
