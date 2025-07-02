# Object-Oriented Programming (OOP) Principles

Every software engineer learns about Object-Oriented Programming (OOP) principles early in their career most probably in their first programming course. Generally, these principles are explained using very basic examples of cars, shapes, animals etc.

However, not every engineer actually grasps how to use these principles, why they matter, and how to incorporate OOP principles into their code.

This document aims to provide a comprehensive overview of the core principles of OOP, their definitions, and how they can be applied in software development using an example of an Order management system. The example will illustrate how these principles can be used to create a robust, scalable, and maintainable system.

## 1. Encapsulation:

**Definition**: Encapsulation means creating a tightly coupled unit of the data and the methods required to create, update or delete the data. We achieve this using classes and objects.

**Example**: In an Order Management System, we can encapsulate the order details within an `Order` class. This class will have attributes like `order_id`, and `total_amount`, along with methods to manipulate this data.

```python
class Order:
    def __init__(self, order_id, total_amount):
        self.__order_id = order_id
        self.__total_amount = total_amount

    def get_total_amount(self):
        return self.__total_amount

    def set_total_amount(self, total_amount):
        if total_amount >= 0:
            self.__total_amount = total_amount

```

**Why it matters**: In this example, encapsulation allows us to manage the order data and its related operations within a single class. This prevents direct access to the order details, like `total_amount`, cannot be set to 0, which could lead to incorrect order processing. By encapsulating the order data, we can ensure that the order details are always valid and consistent, and we can easily add validation logic in the future without affecting other parts of the code.

## 2. Abstraction:

**Definition**: Abstraction means showing only the essential features of an object while hiding the complex implementation details. This allows users to interact with the object without needing to understand its internal workings.

**Example**: In our Order Management System, we can create an `OrderService` class that provides methods to create, update, and delete orders without exposing the underlying implementation details.

```python
class OrderService:

    def create_order(self, order):
        # Lots of logic to validate and process the order

    def update_order(self, order_id, updated_order_details):
       # Logic to find the order and update it


order_service = OrderService()
order = Order(order_id=1, total_amount=100.0)
order_service.create_order(order)
order_service.update_order(order_id=1, updated_order_details={"total_amount": 150.0})
```

**Why it matters**: Abstraction allows us to interact with the `OrderService` without needing to know how orders are stored or managed internally. This simplifies the interface for users of the service, making it easier to work with orders without getting bogged down in implementation details. It also allows us to change the underlying implementation without affecting the users of the service.

## 3. Inheritance:

**Definition**: Inheritance basically means creating a new class based on an existing class, allowing the new class to inherit as in use the existing attributes and methods of the parent class.

**Example**: In our Order Management System, we can create a `OnlineOrder` class that inherits from the `Order` class. This allows us to add additional attributes or methods specific to online orders while reusing the existing functionality of the `Order` class.

```python
class OnlineOrder(Order):
    def __init__(self, order_id, total_amount, delivery_fee):
        super().__init__(order_id, total_amount)
        self.delivery_fee = delivery_fee

    def get_total_amount(self):
        return super().get_total_amount() + self.delivery_fee
```

**Why it matters**: Inheritance promotes code reusability and reducing redundancy. In this example, the `OnlineOrder` class can use the methods and attributes of the `Order` class while adding its own specific functionality. This makes our code more organized and easier to maintain, and it makes it easier to add new features to the system without affecting existing code.

## 4. Polymorphism

**Definition**: Polymorphism is basically a concept that allows us to use a single interface to execute different logic based on the object type. It can also mean that a single method name can be used to perform different operations based on the object type.

**Example**: In our Order Management System, we can create a method that processes orders differently based on their type (e.g., `PhysicalOrder` or `OnlineOrder`). This allows us to use the same method name for different types of orders.

```python
class PhysicalOrder(Order):
    def __init__(self, order_id, total_amount, shipping_cost):
        super().__init__(order_id, total_amount)
        self.shipping_cost = shipping_cost

    def get_total_amount(self):
        return super().get_total_amount() + self.shipping_cost

class OnlineOrder(Order):
    def __init__(self, order_id, total_amount, delivery_fee):
        super().__init__(order_id, total_amount)
        self.delivery_fee = delivery_fee

    def get_total_amount(self):
        return super().get_total_amount() + self.delivery_fee

def process_order(order: Order):
    print(f"Processing order. Total amount: {order.get_total_amount()}")

order_type = "online"

if order_type == "online":
    order = OnlineOrder(order_id=1, total_amount=100.0, delivery_fee=10.0)
elif order_type == "physical":
    order = PhysicalOrder(order_id=2, total_amount=200.0)

process_order(order)
```

**Why it matters**: Polymorphism allows us to write more flexible and reusable code. In this example, we can use `process_order()` to handle different types of orders without needing to know their specific classes. This makes our code more modular and easier to maintain, as we can add new order types without modifying the `process_order()` function.

## Conclusion

Learning the basics of OOP principles is essential for every software engineer. However, understanding how to apply these principles in real-world scenarios is equally important. By using encapsulation, abstraction, inheritance, and polymorphism, we can create robust, scalable, and maintainable systems that are easier to work with and extend over time.

---

**Next**: Explore [SOLID Principles](../02_SOLID_Principles/README.md) to strengthen your design fundamentals further.
