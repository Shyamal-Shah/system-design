// PaymentMethod is the Strategy interface
// It defines a method for processing payments that all payment methods (strategies) must implement.
class PaymentMethod {
	processPayment(amount) {
		throw new Error("This method should be overridden by subclasses");
	}
}

// COD Strategy
class CashOnDeliveryPayment extends PaymentMethod {
	processPayment(amount) {
		// Logic for processing COD payment
		console.log(`Processing Cash on delivery payment of amount: ${amount}`);
	}
}

// UPI Strategy
class UPIPayment extends PaymentMethod {
	processPayment(amount) {
		// Logic for processing UPI payment
		console.log(`Processing UPI payment of amount: ${amount}`);
	}
}

// Credit Card Strategy
class CreditCardPayment extends PaymentMethod {
	processPayment(amount) {
		// Logic for processing Credit Card payment
		console.log(`Processing Credit Card payment of amount: ${amount}`);
	}
}

// OrderService class that uses the Strategy pattern
// It takes a PaymentMethod strategy as a parameter and uses it to process payments.
class OrderService {
	// This is called constructor injection, where the payment method is injected into the OrderService class.
	constructor(orderId, totalAmount, paymentMethod) {
		this.orderId = orderId;
		this.totalAmount = totalAmount;
		this.paymentMethod = paymentMethod;
	}

	// Method to process the order
	// It uses the injected payment method to process the payment.
	processOrder() {
		console.log(`Processing order ID: ${this.orderId}`);
		this.paymentMethod.processPayment(this.totalAmount);
	}
}

// Example usage
const order1 = new OrderService(101, 500, new CashOnDeliveryPayment());
order1.processOrder();

const order3 = new OrderService(103, 2500, new CreditCardPayment());
order3.processOrder();

const order2 = new OrderService(102, 1500, new UPIPayment());
order2.processOrder();

// Output:
// Processing order ID: 101
// Processing Cash on delivery payment of amount: 500
// Processing order ID: 102
// Processing UPI payment of amount: 1500
// Processing order ID: 103
// Processing Credit Card payment of amount: 2500
