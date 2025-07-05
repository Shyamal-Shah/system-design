// Invoice class is the core class representing an invoice.
// It has a method to generate the invoice for an order.
class Invoice {
  generateInvoice(order) {
    throw new Error("Method 'generateInvoice()' must be implemented.");
  }
}

// OnlineInvoice class is a concrete implementation of Invoice.
// It generates an invoice for online orders by emailing the invoice.
class OnlineInvoice extends Invoice {
  generateInvoice(order) {
    return `Emailing Invoice for Order ID: ${
      order.orderId
    }, Amount: ${order.getTotalAmount()}`;
  }
}

// PhysicalInvoice class is a concrete implementation of Invoice.
// It generates an invoice for physical orders by printing the invoice.
class PhysicalInvoice extends Invoice {
  generateInvoice(order) {
    return `Printing Invoice for Order ID: ${
      order.orderId
    }, Amount: ${order.getTotalAmount()}`;
  }
}

// Shipping class is the core class representing shipping details.
// It has a method to ship the order.
class Shipping {
  shipOrder(order) {
    throw new Error("Method 'shipOrder()' must be implemented.");
  }
}

// OnlineShipping class is a concrete implementation of Shipping.
// It ships online orders by providing a shipping service.
class OnlineShipping extends Shipping {
  shipOrder(order) {
    return `Shipping Online Order ID: ${order.orderId}`;
  }
}

// PhysicalShipping class is a concrete implementation of Shipping.
// It marks physical orders as in-store pickup.
class PhysicalShipping extends Shipping {
  shipOrder(order) {
    return `Marking Order ${order.orderId} as in-store pickup`;
  }
}

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

// OrderFactory is an abstract factory class that defines methods to create invoice and shipping details.
// It has two methods: createInvoice and createShipping.
class OrderFactory {
  createInvoice() {
    throw new Error("Method 'createInvoice()' must be implemented.");
  }
  createShipping() {
    throw new Error("Method 'createShipping()' must be implemented.");
  }
}

// OnlineOrderFactory is a concrete implementation of OrderFactory.
// It creates invoice and shipping details for online orders.
class OnlineOrderFactory extends OrderFactory {
  createInvoice() {
    return new OnlineInvoice();
  }
  createShipping() {
    return new OnlineShipping();
  }
}

// PhysicalOrderFactory is a concrete implementation of OrderFactory.
// It creates invoice and shipping details for physical orders.
class PhysicalOrderFactory extends OrderFactory {
  createInvoice() {
    return new PhysicalInvoice();
  }
  createShipping() {
    return new PhysicalShipping();
  }
}

// OrderProcessor is a class that processes orders using the factory.
// It takes an OrderFactory as a parameter and uses it to create invoice and shipping details.
class OrderProcessor {
  constructor(factory) {
    this.invoice = factory.createInvoice();
    this.shipment = factory.createShipping();
  }
  processOrder(order) {
    console.log(this.invoice.generateInvoice(order));
    console.log(this.shipment.shipOrder(order));
  }
}

// Example usage
const order1 = new Order(1, 100);
const order2 = new Order(2, 200);

const onlineFactory = new OnlineOrderFactory();
const onlineProcessor = new OrderProcessor(onlineFactory);
onlineProcessor.processOrder(order1);

const physicalFactory = new PhysicalOrderFactory();
const physicalProcessor = new OrderProcessor(physicalFactory);
physicalProcessor.processOrder(order2);

// Output:
// Emailing Invoice for Order ID: 1, Amount: 100
// Shipping Online Order ID: 1
// Printing Invoice for Order ID: 2, Amount: 200
// Marking Order 2 as in-store pickup
