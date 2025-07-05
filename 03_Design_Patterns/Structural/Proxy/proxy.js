class Order {
  constructor(orderId, totalAmount) {
    this.orderId = orderId;
    this.totalAmount = totalAmount;
  }

  getTotalAmount() {
    return this.totalAmount;
  }
}

class OrderServiceInterface {
  createOrder(order) {
    throw new Error("Method 'createOrder()' must be implemented.");
  }
  cancelOrder(orderId) {
    throw new Error("Method 'cancelOrder()' must be implemented.");
  }
}

class OrderService extends OrderServiceInterface {
  createOrder(order) {
    // Implementation for creating an order
  }

  cancelOrder(orderId) {
    // Implementation for canceling an order
  }
}

class OrderServiceProxy extends OrderServiceInterface {
  constructor() {
    super();
    this.orderService = new OrderService();
  }

  createOrder(order) {
    this.orderService.createOrder(order);
    console.log("Order created:", order);
  }

  cancelOrder(orderId) {
    // Add any additional logic or checks here
    this.orderService.cancelOrder(orderId);
    console.log("Order canceled:", orderId);
  }
}

const order = new Order(1, 100);
const orderServiceProxy = new OrderServiceProxy();

orderServiceProxy.createOrder(order);
orderServiceProxy.cancelOrder(order.orderId);

// Output

// Order created: Order { orderId: 1, totalAmount: 100 }
// Order canceled: 1
