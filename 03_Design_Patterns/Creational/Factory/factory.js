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

class OnlineOrder extends Order {
  constructor(orderId, totalAmount, deliveryAddress) {
    super(orderId, totalAmount);
    this.deliveryAddress = deliveryAddress;
  }

  getDeliveryAddress() {
    return this.deliveryAddress;
  }
}

class PhysicalOrder extends Order {
  constructor(orderId, totalAmount, storeLocation) {
    super(orderId, totalAmount);
    this.storeLocation = storeLocation;
  }

  getStoreLocation() {
    return this.storeLocation;
  }
}

class SubscriptionOrder extends Order {
  constructor(orderId, totalAmount, subscriptionDuration) {
    super(orderId, totalAmount);
    this.subscriptionDuration = subscriptionDuration;
  }

  getSubscriptionDuration() {
    return this.subscriptionDuration;
  }
}

class OrderFactory {
  static createOrder() {
    throw new Error("Method 'createOrder()' must be implemented.");
  }
}

class OnlineOrderFactory extends OrderFactory {
  static createOrder(orderId, totalAmount, deliveryAddress) {
    return new OnlineOrder(orderId, totalAmount, deliveryAddress);
  }
}
class PhysicalOrderFactory extends OrderFactory {
  static createOrder(orderId, totalAmount, storeLocation) {
    return new PhysicalOrder(orderId, totalAmount, storeLocation);
  }
}

class SubscriptionOrderFactory extends OrderFactory {
  static createOrder(orderId, totalAmount, subscriptionDuration) {
    return new SubscriptionOrder(orderId, totalAmount, subscriptionDuration);
  }
}

// Example usage
const onlineOrder = OnlineOrderFactory.createOrder(
  1,
  100,
  "Vadodara, Gujarat, India"
);

const physicalOrder = PhysicalOrderFactory.createOrder(
  2,
  200,
  "Store #5, Vadodara"
);
const subscriptionOrder = SubscriptionOrderFactory.createOrder(
  3,
  300,
  "6 months"
);

console.log(
  `Online Order ID: ${
    onlineOrder.orderId
  }, Total Amount: ${onlineOrder.getTotalAmount()}, Delivery Address: ${onlineOrder.getDeliveryAddress()}`
);
console.log(
  `Physical Order ID: ${
    physicalOrder.orderId
  }, Total Amount: ${physicalOrder.getTotalAmount()}, Store Location: ${physicalOrder.getStoreLocation()}`
);
console.log(
  `Subscription Order ID: ${
    subscriptionOrder.orderId
  }, Total Amount: ${subscriptionOrder.getTotalAmount()}, Subscription Duration: ${subscriptionOrder.getSubscriptionDuration()}`
);

// Output:
// Online Order ID: 1, Total Amount: 100, Delivery Address: Vadodara, Gujarat, India
// Physical Order ID: 2, Total Amount: 200, Store Location: Store #5, Vadodara
// Subscription Order ID: 3, Total Amount: 300, Subscription Duration: 6 months
