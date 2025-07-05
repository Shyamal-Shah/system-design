# Factory Design Pattern

### Definition

The Factory design pattern states that an interface or base class should be created to define a common method for creating objects, while concrete factory classes implement this method to create specific objects. By extending this interface/base class, we can encapsulate the object creation logic for each specific type of object, allowing for more flexibility and scalability in the code.

Let's say we have three different types of vehicles: `Car`, `Bike`, and `Truck`. Instead of creating each vehicle type directly, we can create a `VehicleFactory` interface that defines a method to create vehicles. Then, we can implement this interface in concrete factory classes for each vehicle type.

### Example

```python
class Vehicle:
    def drive(self):
        pass

class Car(Vehicle):
    def drive(self):
        print("Driving a car")

class Bike(Vehicle):
    def drive(self):
        print("Riding a bike")

class Truck(Vehicle):
    def drive(self):
        print("Driving a truck")

class VehicleFactory:
    def create_vehicle(self):
        pass

class CarFactory(VehicleFactory):
    def create_vehicle(self):
        return Car()

class BikeFactory(VehicleFactory):
    def create_vehicle(self):
        return Bike()

class TruckFactory(VehicleFactory):
    def create_vehicle(self):
        return Truck()
```

### Real-World Scenario

Imagine we are building an order management system. We have a base class `Order` and we accept different types of orders such as `OnlineOrder`, `PhysicalOrder`, and `SubscriptionOrder`. We can create the individual orders directly each time we need to create an order.

We are good to go, right? Not really. What if we want to add more order types in the future such as `GiftOrder` or `BulkOrder`? We would have to modify the code in multiple places where we create order objects, leading to code duplication and making the code harder to maintain.

To solve this problem, we use the factory pattern. We define a base class `Order` and a factory class called `OrderFactory` which takes the type of order as input and returns the appropriate order object. Now we can create orders without worrying about the specific type of order. This is called a **Simple Factory pattern**. However, the main issue still remains that we have to modify the factory class each time we add a new order type.

To solve this, we use the Factory design pattern by defining a factory interface or base class for the factory and implement concrete factory classes for each order type. This way, we can easily add new order types without modifying the existing code.

Please find the code implementation of the Factory pattern in the [`factory.js`](./factory.js) file.

### Why it matters

The Factory design pattern is important because it promotes loose coupling and adheres to the Single Responsibility Principle and Open/Closed Principle. By encapsulating the object creation logic within factory classes, we can change the instantiation process without affecting the client code that uses the objects. This leads to more maintainable and flexible code.

### System Design Impact

Factory pattern centralizes object creation, enabling decoupled, scalable, and easily extensible architectures, e.g. creating different payment gateways via a PaymentFactory.

### References

- [Wikipedia - Factory Pattern](https://en.wikipedia.org/wiki/Factory_pattern)
- [Refactoring Guru - Factory Pattern](https://refactoring.guru/design-patterns/factory-method)
- [GeeksforGeeks - Factory Design Pattern](https://www.geeksforgeeks.org/system-design/factory-method-for-designing-pattern/)
