// Order Class is the core class representing an order.
// It has a method to get the order details.
class Order {
  constructor(items = [], quantities = [], giftWrap = false, priority = false) {
    this.items = items;
    this.quantities = quantities;
    this.giftWrap = giftWrap;
    this.priority = priority;
  }

  getDetails() {
    return `Order: ${this.items.join(
      ", "
    )} | Quantities: ${this.quantities.join(", ")} | Gift Wrap: ${
      this.giftWrap
    } | Priority: ${this.priority}`;
  }
}

// OrderBuilder Class is used to build an Order object step by step.
// It allows adding items, setting gift wrap, and priority options.
class OrderBuilder {
  constructor() {
    this.items = [];
    this.quantities = [];
    this.giftWrap = false;
    this.priority = false;
  }

  addItem(item, quantity) {
    this.items.push(item);
    this.quantities.push(quantity);
    return this;
  }

  setGiftWrap(giftWrap) {
    this.giftWrap = giftWrap;
    return this;
  }

  setPriority(priority) {
    this.priority = priority;
    return this;
  }

  build() {
    return new Order(this.items, this.quantities, this.giftWrap, this.priority);
  }
}

// Example usage:
const order = new OrderBuilder()
  .addItem("Laptop", 1)
  .addItem("Mouse", 2)
  .setGiftWrap(true)
  .setPriority(true)
  .build();
console.log(order.getDetails());

// Output:
// Order: Laptop, Mouse | Quantities: 1, 2 | Gift Wrap: true | Priority: true
