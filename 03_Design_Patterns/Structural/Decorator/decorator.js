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

// OrderDecorator is an abstract decorator class that extends the Order class.
// It can be used to add additional functionality to the Order class without modifying it.
class OrderDecorator extends Order {
  constructor(order) {
    super(order.orderId, order.totalAmount);
    this.order = order;
  }

  getTotalAmount() {
    return this.order.getTotalAmount();
  }
}

// DiscountDecorator is a concrete decorator that adds a discount to the order.
// It extends the OrderDecorator and overrides the getTotalAmount method to apply the discount.
class DiscountDecorator extends OrderDecorator {
  constructor(order, discount) {
    super(order);
    this.discount = discount;
  }

  getTotalAmount() {
    return this.order.getTotalAmount() - this.discount;
  }
}

// TaxDecorator is another concrete decorator that adds tax to the order.
// It also extends the OrderDecorator and overrides the getTotalAmount method to apply the tax.
class TaxDecorator extends OrderDecorator {
  constructor(order, taxRate) {
    super(order);
    this.taxRate = taxRate;
  }

  getTotalAmount() {
    const baseAmount = this.order.getTotalAmount();
    return baseAmount + (baseAmount * this.taxRate) / 100;
  }
}

// Example usage
const order1 = new Order(101, 1000);
const discountedOrder = new DiscountDecorator(order1, 100);
console.log(
  `Total amount after discount for order ${
    discountedOrder.orderId
  }: ${discountedOrder.getTotalAmount()}`
);
const taxedOrder = new TaxDecorator(discountedOrder, 10);
console.log(
  `Final amount for order ${taxedOrder.orderId}: ${taxedOrder.getTotalAmount()}`
);

// Output:
// Total amount after discount for order 101: 900
// Final amount for order 101: 990
