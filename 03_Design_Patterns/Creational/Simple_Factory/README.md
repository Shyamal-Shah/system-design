# Simple Factory Design Pattern

### Definition

The simple factory design pattern states that we there should be a factory class that creates different objects(essentially based on same base class/interface) based on some condition and inputs.

This way we can create objects of different types without writing the condition logic each time we need to create an object making the code cleaner and more maintainable.

Let's say we have a three different types of vehicles: `Car`, `Bike`, and `Truck`. Instead of creating each vehicle type directly, we can create a `VehicleFactory` that takes the type of vehicle as input and returns the appropriate vehicle object.

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
    def create_vehicle(vehicle_type):
        if vehicle_type == "car":
            return Car()
        elif vehicle_type == "bike":
            return Bike()
        elif vehicle_type == "truck":
            return Truck()
        else:
            raise ValueError("Unknown vehicle type")
```

### Real-World Scenario

Imagine we are building a order management system. We have a base class `Order` and we accept different types of orders such as `OnlineOrder`, `PhysicalOrder`, and `SubscriptionOrder`. In our code, we would have to write a condition to check the type of order and create `OnlineOrder`, `PhysicalOrder`, or `SubscriptionOrder` object directly each time we need to create an order.

We are good to go, right? Not really. There are two problems, First, The condition to check the type of order is redundant. Secondly what if we want to add more order types in the future such as `GiftOrder` or `BulkOrder`? We would have to modify the code in multiple places where we create order objects, leading to code duplication and making the code harder to maintain.

To solve this problem, we can use the simple factory pattern. We define a base class `Order` and a factory class called `OrderFactory` which takes the type of order as input and returns the appropriate order object. Now we can create orders without worrying about the specific type of order.

Please find the code implementation of the Simple Factory pattern in the [`simple_factory.js`](./simple_factory.js) file.

### Why it matters

### System Design Impact
