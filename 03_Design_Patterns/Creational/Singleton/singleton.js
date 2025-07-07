// Order Class is the core class representing an order.
// It has a method to get the total amount of the order.
class Order {
  constructor(orderId, totalAmount) {
    this.orderId = orderId;
    this.totalAmount = totalAmount;
  }

  getTotalAmount() {
    return this.totalAmount;
  }
}

// Order Manager Class is responsible for managing orders.
// It follows the Singleton design pattern to ensure only one instance exists.
class OrderManager {
  static #instance = null;
  static #privateToken = Symbol("private constructor token");
  orderQueue = [];

  constructor(token) {
    if (token !== OrderManager.#privateToken) {
      throw new Error(
        "Use OrderManager.getInstance() to get the singleton instance."
      );
    }
  }

  static getInstance() {
    if (!OrderManager.#instance) {
      OrderManager.#instance = new OrderManager(OrderManager.#privateToken);
    }
    return OrderManager.#instance;
  }

  addOrder(order) {
    this.orderQueue.push(order);
    console.log(`Order ${order.orderId} added to queue.`);
  }

  processNextOrder() {
    const nextOrder = this.orderQueue.shift();
    if (nextOrder) {
      console.log(
        `Processing order ${
          nextOrder.orderId
        } for amount ${nextOrder.getTotalAmount()}`
      );
    } else {
      console.log("No orders to process");
    }
  }

  getPendingOrders() {
    return [...this.orderQueue];
  }
}

// Example Usage
const orderManager = OrderManager.getInstance();

orderManager.addOrder(new Order(101, 1000));
orderManager.addOrder(new Order(102, 200));

orderManager.processNextOrder();
console.log("Remaining Orders:", orderManager.getPendingOrders());

// Output
// Order 101 added to queue.
// Order 102 added to queue.
// Processing order 101 for amount 1000
// Remaining Orders: [ Order { orderId: 102, totalAmount: 200 } ]
