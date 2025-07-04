// Publisher is the subject in the Observer pattern
// It maintains a list of subscribers and notifies them of any state changes.
class Publisher {
	constructor() {
		this.subscribers = [];
		this.state = null;
	}

	register(subscriber) {
		// Register a new subscriber
		this.subscribers.push(subscriber);
	}

	unregister(subscriber) {
		// Unregister an existing subscriber
		this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
	}

	notify(data) {
		// Notify all subscribers with the provided data
		this.subscribers.forEach((subscriber) => subscriber.update(data));
	}

	setState(data) {
		// Set the state and notify subscribers
		this.notify(data);
	}
}

// Subscriber is the observer in the Observer pattern
// It defines an update method that will be called by the publisher when the state changes.
class Subscriber {
	constructor(name) {
		this.name = name;
	}
	update(data) {
		console.log(`Subscriber ${this.name} received update: ${data}`);
	}
}

// OrderService is the publisher in the Observer pattern
// It manages orders and notifies subscribers when an order is processed.
class OrderService extends Publisher {
	constructor() {
		super();
		this.orders = [];
	}

	addOrder(orderId, totalAmount) {
		this.orders.push({ orderId, totalAmount });
		console.log(`Order added: ID=${orderId}, Total Amount=${totalAmount}`);
	}

	processOrder(orderId) {
		const order = this.orders.find((o) => o.orderId === orderId);
		if (order) {
			console.log(`\nProcessing order ID: ${orderId}`);
			this.setState(order);
		}
	}
}

// InventoryService is a subscriber that listens for order updates
// It handles inventory management when an order is processed.
class InventoryService extends Subscriber {
	constructor(orderService) {
		super("InventoryService");
		this.orderService = orderService;
		this.orderService.register(this);
	}

	update(order) {
		console.log(`InventoryService: Shipping the order: ${order.orderId}`);
	}
}

// AnalyticsService is a subscriber that listens for order updates
// It records metrics for each order processed.
class AnalyticsService extends Subscriber {
	constructor(orderService) {
		super("AnalyticsService");
		this.orderService = orderService;
		this.orderService.register(this);
	}
	update(order) {
		console.log(
			`AnalyticsService: Recording metrics for order ${order.orderId}, amount: ${order.totalAmount}`
		);
	}
}

// EmailService is a subscriber that listens for order updates
// It sends confirmation emails for each order processed.
class EmailService extends Subscriber {
	constructor(orderService) {
		super("EmailService");
		this.orderService = orderService;
		this.orderService.register(this);
	}

	update(order) {
		console.log(
			`EmailService: Sending confirmation for order: ${order.orderId} with amount: ${order.totalAmount}`
		);
	}
}

// Example usage
const orderService = new OrderService();
const inventoryService = new InventoryService(orderService);
const emailService = new EmailService(orderService);
const analyticsService = new AnalyticsService(orderService);

orderService.addOrder(101, 500);
orderService.addOrder(102, 1500);
orderService.addOrder(103, 2500);

orderService.processOrder(101);
orderService.processOrder(103);

orderService.unregister(inventoryService);
orderService.processOrder(102);

// Output:
// Order added: ID=101, Total Amount=500
// Order added: ID=102, Total Amount=1500
// Order added: ID=103, Total Amount=2500
//
// Processing order ID: 101
// InventoryService: Shipping the order: 101
// EmailService: Sending confirmation for order: 101 with amount: 500
// AnalyticsService: Recording metrics for order 101, amount: 500
//
// Processing order ID: 103
// InventoryService: Shipping the order: 103
// EmailService: Sending confirmation for order: 103 with amount: 2500
// AnalyticsService: Recording metrics for order 103, amount: 2500
//
// Processing order ID: 102
// EmailService: Sending confirmation for order: 102 with amount: 1500
// AnalyticsService: Recording metrics for order 102, amount: 1500
