// Prototype Interface defines a method for cloning objects.
// It is an abstract class that will be extended by concrete classes.
class Prototype {
  clone() {
    throw new Error("Method clone() must be implemented");
  }
}

// Order Class is the core class representing an order.
// It has a method to get the total amount of the order.
class Order extends Prototype {
  constructor(orderId, totalAmount) {
    super();
    this.orderId = orderId;
    this.totalAmount = totalAmount;
  }

  getTotalAmount() {
    return this.totalAmount;
  }
  clone() {
    return new Order(this.orderId + 1, this.totalAmount); // In real-world, generate new unique ID
  }
}

// Order Manager Class is responsible for managing orders.
// It follows the Prototype design pattern to ensure we can create new orders based on existing ones.
class OrderManager {
  constructor() {
    this.orderQueue = [];
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
const orderManager = new OrderManager();
const order1 = new Order(101, 1000);
const order2 = order1.clone(); // Create a clone of order1
orderManager.addOrder(order1);
orderManager.addOrder(order2);
orderManager.processNextOrder();
console.log("Remaining Orders:", orderManager.getPendingOrders());

// Output:
// Order 101 added to queue.
// Order 102 added to queue.
// Processing order 101 for amount 1000
// Remaining Orders: [ Order { orderId: 102, totalAmount: 1000 } ]
