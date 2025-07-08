// Order Class is the core class representing an order.
// It has a method to process the order.
class Order {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
  processOrder() {
    console.log(`Processing order ${this.id} with amount ${this.amount}`);
  }
}

// OrderService is the abstract class that defines the interface for handling orders.
// It has a method handleOrder that should be overridden by concrete handlers.
class OrderService {
  constructor(nextHandler = null) {
    this.nextHandler = nextHandler;
  }

  handleOrder(order) {
    throw new Error("Method handleOrder() should be overridden");
  }
}

// AuthenticationHandler is a concrete handler that handles authentication of the order.
// It implements the handleOrder method and calls the next handler in the chain if it exists.
class AuthenticationHandler extends OrderService {
  constructor(nextHandler = null) {
    super(nextHandler);
  }
  handleOrder(order) {
    console.log(`Authenticating order ${order.id}`);
    // Simulate authentication logic
    if (this.nextHandler) {
      this.nextHandler.handleOrder(order);
    }
  }
}

// ValidationHandler is a concrete handler that handles validation of the order.
// It implements the handleOrder method and calls the next handler in the chain if it exists.
class ValidationHandler extends OrderService {
  constructor(nextHandler = null) {
    super(nextHandler);
  }
  handleOrder(order) {
    console.log(`Validating order ${order.id}`);
    // Simulate validation logic
    if (this.nextHandler) {
      this.nextHandler.handleOrder(order);
    }
  }
}

// ProcessingHandler is a concrete handler that processes the order.
// It implements the handleOrder method and calls the next handler in the chain if it exists.
class ProcessingHandler extends OrderService {
  constructor(nextHandler = null) {
    super(nextHandler);
  }
  handleOrder(order) {
    order.processOrder();
    // Simulate processing logic
    if (this.nextHandler) {
      this.nextHandler.handleOrder(order);
    }
  }
}

// Example usage
const order = new Order(1, 100);
const orderHandler = new AuthenticationHandler(
  new ValidationHandler(new ProcessingHandler())
);

orderHandler.handleOrder(order);

// Output

// Authenticating order 1
// Validating order 1
// Processing order 1 with amount 100
