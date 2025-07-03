# SOLID PRINCIPLES

SOLID principles are a set of 5 design principles mainly used in Object-Oriented Programming to create software that are easy to maintain, extend, and understand. The acronym SOLID stands for:

- **S**ingle Responsibility Principle (SRP)
- **O**pen/Closed Principle (OCP)
- **L**iskov Substitution Principle (LSP)
- **I**nterface Segregation Principle (ISP)
- **D**ependency Inversion Principle (DIP)

This document aims to provide a comprehensive overview of the SOLID principles, their definitions, how they can be applied, and why they matter in software development using an example of an Order management system. The example will illustrate how these principles can be used to write clean, maintainable, and scalable code.

## S - Single Responsibility Principle (SRP)

**Definition**: SRP basically states that when you create a class, it should only have one responsibility or job. This also means that once a class is created, it should not be changed to do something else. If you need to change the class to do something else, you should create a new class.

**Invalid SRP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount):
        self.order_id = order_id
        self.total_amount = total_amount

    def calculate_total(self):
        # Logic to calculate total amount
        pass

    def send_confirmation_email(self):
        # Logic to send confirmation email
        pass
```

This example violates the SRP because the `Order` class is responsible for both managing order details and sending confirmation emails. If we need to change how emails are sent, we would have to modify the `Order` class, which is not ideal.

**Valid SRP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount):
        self.order_id = order_id
        self.total_amount = total_amount

    def calculate_total(self):
        # Logic to calculate total amount
        pass

class EmailService:
    def send_confirmation_email(self, order):
        # Logic to send confirmation email
        pass
```

In this valid example, the `Order` class is only responsible for managing order details, while the `EmailService` class is responsible for sending confirmation emails. This adheres to the SRP, making the code cleaner and easier to maintain.

**Why it matters**: SRP is important because it makes the code easier to maintain, test and integrate. This means that if we want to integrate the order management system with a new email service, we can do so without affecting the `Order` class.

**System Design Impact**: Microservices embody SRP at system level; each microservice has one job.

## O - Open/Closed Principle (OCP)

**Definition**: OCP basically means that a class can be extended to add new features or functionalities but should not be modified to change the existing behavior.

**Invalid OCP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount, order_category):
        self.order_id = order_id
        self.total_amount = total_amount
        self.order_category = order_category

    def calculate_total(self):
        if self.order_category == "premium":
            # Logic to calculate total amount for premium orders
            self.total_amount *= 1.18
            pass
        else:
            # Logic to calculate total amount for regular orders
            self.total_amount *= 1.05
            pass
```

This example violates the OCP because if we want to add a new type of order let's say enterprise, we would have to modify the `Order` class which might introduce bugs and needs a full round of tests and refactoring. This can lead to a complex and difficult-to-maintain codebase.

**Valid OCP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount, order_category):
        self.order_id = order_id
        self.total_amount = total_amount
        self.order_category = order_category

    def calculate_total(self):
        return self.order_category.calculate_total(self)

    def calculate_tax(self):
        # Logic to calculate tax

class RegularOrder:
    def calculate_total(self, order):
        return order.total_amount * 1.05

class PremiumOrder:
    def calculate_total(self, order):
        return order.total_amount * 1.18

order1 = Order(order_id=1, total_amount=100.0, order_category=RegularOrder())
order2 = Order(order_id=2, total_amount=200.0, order_category=PremiumOrder())
```

This valid example shows that we can extend the class to add a new type of order without modifying the existing `Order` class. Instead, we create separate classes for each order type that implement a common interface or method. This adheres to the OCP, allowing us to add new functionalities without changing existing code.

The example also shows that we can create a new method `calculate_tax()` in the `Order` class that can be used by all order types. This allows us to add new functionalities without modifying the existing code.

**Why it matters**: OCP is important because it allows us to add new features or functionalities without modifying existing code. This makes the code more maintainable and reduces the risk of introducing bugs when adding new features.

**System Design Impact**: OCP enables feature toggles or plugin architectures without redeploying the core.

## L - Liskov Substitution Principle (LSP)

**Definition**: LSP basically means that if I have two subclass B and C of a parent class A, I should be able to use an object of class B or C in place of an object of class A without affecting the correctness of the program. In other words, a subclass should be substitutable for its parent class.

**Invalid LSP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount):
        self.order_id = order_id
        self.total_amount = total_amount

class OnlineOrder(Order):
    def __init__(self, order_id, total_amount, delivery_fee):
        super().__init__(order_id, total_amount)
        self.delivery_fee = delivery_fee

    def calculate_total(self):
        # Logic to calculate total amount for online orders
        pass

class PhysicalOrder(Order):
    def __init__(self, order_id, total_amount):
        super().__init__(order_id, total_amount)

    def calculate_total(self, shipping_cost):
        # Logic to calculate total amount for physical orders
        pass

def process_order(order: Order):
    print(f"Processing order {order.order_id}. Total amount: {order.calculate_total()}")

order1 = OnlineOrder(order_id=1, total_amount=100.0, delivery_fee=10.0)
order2 = PhysicalOrder(order_id=2, total_amount=200.0)

process_order(order1)
process_order(order2)
```

This example violates the LSP because the `PhysicalOrder` class does not implement the `calculate_total()` method in a way that is consistent with the `Order` or `OnlineOrder` class as it requires an additional `shipping_cost` parameter. If we try to use a `PhysicalOrder` object in place of an `Order` object, it will not work as expected.

**Valid LSP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount):
        self.order_id = order_id
        self.total_amount = total_amount


class OnlineOrder(Order):
    def __init__(self, order_id, total_amount, delivery_fee):
        super().__init__(order_id, total_amount)
        self.delivery_fee = delivery_fee

    def calculate_total(self):
        # Logic to calculate total amount for online orders
        pass

class PhysicalOrder(Order):
    def __init__(self, order_id, total_amount, shipping_cost):
        super().__init__(order_id, total_amount)
        self.shipping_cost = shipping_cost

    def calculate_total(self):
        # Logic to calculate total amount for physical orders
        pass

def process_order(order: Order):
    print(f"Processing order {order.order_id}. Total amount: {order.calculate_total()}")

order1 = OnlineOrder(order_id=1, total_amount=100.0, delivery_fee=10.0)
order2 = PhysicalOrder(order_id=2, total_amount=200.0, shipping_cost=20.0)

process_order(order1)
process_order(order2)
```

This valid example shows that both `OnlineOrder` and `PhysicalOrder` classes implement the `calculate_total()` method in a way that is consistent with the `Order` class. This means that we can use an object of either class in place of an `Order` object without affecting the correctness of the program.

**Why it matters**: LSP is really important in scenarios where you have multiple options to choose from where each option has its own specific implementation. It allows us to write code that is more flexible and reusable. In this example, we can use the `process_order()` function to handle both online and physical orders without needing to know their specific classes. This makes our code more modular and easier to maintain, as we can add new order types without modifying the `process_order()` function.

**System Design Impact**: LSP ensures backward compatibility when replacing services.

## I - Interface Segregation Principle (ISP)

**Definition**: ISP simply means that each class should not be forced to implement methods that are not required by it. Each class in python or interface in other languages should be broken down into smaller, more specific interfaces such that only required classes/ interfaces are implemented by the class.

**Invalid ISP Example**:

```python
class OrderService:
    def create_order(self, order):
        # Logic to create an order
        pass

    def send_confirmation_email(self, order):
        # Logic to send confirmation email
        pass
```

This example violates the ISP because the `OrderService` class has methods that are not relevant to all classes that might implement it. For example, if we have a class that only needs to create orders, it would still be forced to implement methods for updating and deleting orders, which it does not need.

**Valid ISP Example**:

```python
class OrderService:
    def create_order(self, order):
        # Logic to create an order
        pass

class EmailService:
    def send_confirmation_email(self, order):
        # Logic to send confirmation email
        pass
```

In this valid example, we have separated the `OrderService` and `EmailService` classes. Each class has its own specific responsibility, and they do not force each other to implement methods that are not relevant to them. This adheres to the ISP, making the code cleaner and easier to maintain.

**Why it matters**: ISP is important because it helps to reduce the impact of changes in the codebase. By breaking down interfaces into smaller, more specific ones, we can ensure that classes only depend on the methods they actually use. This makes the code more flexible and easier to maintain.

**System Design Impact**: ISP leads to smaller, more focused APIs, improving maintainability.

## D - Dependency Inversion Principle (DIP)

**Definition**: DIP means that a class should not depend on a concrete implementation but rather an abstraction. This allows us to change the implementation of a class without affecting the classes that depend on it.

**Invalid DIP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount):
        self.order_id = order_id
        self.total_amount = total_amount

    def process_order(self):
        paymentService = PaypalPayment()
        paymentService.process_payment(self.total_amount)
```

This example violates the DIP because the `Order` class is directly dependent on a concrete implementation of the `PaypalPayment` class. If we want to change the payment service to something else, we would have to modify the `Order` class, which is not ideal.

**Valid DIP Example**:

```python
class Order:
    def __init__(self, order_id, total_amount, payment_service):
        self.order_id = order_id
        self.total_amount = total_amount
        self.payment_service = payment_service

    def process_order(self):
        self.payment_service.process_payment(self.total_amount)

order1 = Order(order_id=1, total_amount=100.0, payment_service=PaypalPayment())
order2 = Order(order_id=2, total_amount=200.0, payment_service=StripePayment())
```

This example shows that the class `Order` does not depend on a concrete implementation of the payment service. Instead, it depends on an abstraction (the `payment_service` parameter). This allows us to change the payment service without modifying the `Order` class.

**Why it matters**: DIP is important because it allows us to write code that is more flexible and reusable. By depending on abstractions rather than concrete implementations, we can easily swap out different implementations without affecting the classes that depend on them. This makes our code more modular and easier to maintain, as we can add new payment services without modifying the `Order` class.

**System Design Impact**: DIP allows easy swapping of components, enabling better testing and flexibility in system design.

## Conclusion:

The SOLID principles are not complicated, but they are often misunderstood or not applied correctly. By following these principles, we can write code that is easier to maintain, extend, and understand. The example of the Order management system illustrates how these principles can be applied in practice to create a robust, scalable, and maintainable system.

**Next:** Explore various [Design Patterns](../03_Design_Patterns/README.md) to further enhance your software design skills.
