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
  static createOrder(orderId, totalAmount, orderType, additionalInfo) {
    switch (orderType) {
      case "online":
        return new OnlineOrder(orderId, totalAmount, additionalInfo);
      case "physical":
        return new PhysicalOrder(orderId, totalAmount, additionalInfo);
      case "subscription":
        return new SubscriptionOrder(orderId, totalAmount, additionalInfo);
      default:
        throw new Error("Invalid order type");
    }
  }
}

// Example usage
const onlineOrder = OrderFactory.createOrder(
  1,
  100,
  "online",
  "Vadodara, Gujarat, India"
);

const physicalOrder = OrderFactory.createOrder(
  2,
  200,
  "physical",
  "Store #5, Vadodara"
);
const subscriptionOrder = OrderFactory.createOrder(
  3,
  300,
  "subscription",
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
