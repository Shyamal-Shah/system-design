# Abstract Factory Design Pattern

### Definition

The Abstract Factory pattern is an extension of the Factory design pattern. In the Abstract Factory pattern, the factory interface or base class defines multiple methods to create families of related or dependent objects, with each method returning an interface or base class type. This allows us to create families of related objects without specifying their concrete classes, promoting loose coupling and enhancing code maintainability.

It has a very niche use case where we need to create families of related objects that are designed to work together.

Let's say we have two types of engines - `AllWheelDriveEngine` and `FrontWheelDriveEngine`, and two types of Tyres - `AllTerrainTyre` and `CityTyre`. Instead of creating each type of engine and tyre directly, we can create an `EngineFactory` interface that defines methods to create engines and a `TyreFactory` interface that defines methods to create tyres. We can create an interface or base class `CarFactory` with two methods: one for creating engines and one for creating tyres. Then we can implement `OffRoadCarFactory` and `CityCarFactory`, each providing their respective implementations.

### Example

```python
class Engine:
    def create(self):
        pass
class AllWheelDriveEngine(Engine):
    def create(self):
        print("All Wheel Drive Engine created")
class FrontWheelDriveEngine(Engine):
    def create(self):
        print("Front Wheel Drive Engine created")

class Tyre:
    def create(self):
        pass

class AllTerrainTyre(Tyre):
    def create(self):
        print("All Terrain Tyre created")

class CityTyre(Tyre):
    def create(self):
        print("City Tyre created")

class CarFactory:
    def createEngine() -> Engine:
        pass
    def createTyre() -> Tyre:
        pass

class OffRoadCarFactory(CarFactory):
    def createEngine() -> Engine:
        return AllWheelDriveEngine()
    def createTyre() -> Tyre:
        return AllTerrainTyre()

class CityCarFactory(CarFactory):
    def createEngine() -> Engine:
        return FrontWheelDriveEngine()
    def createTyre() -> Tyre:
        return CityTyre()
```

### Real-World Scenario

Imagine we are building an order management system with two types of orders: `OnlineOrder` and `PhysicalOrder`. Each order type requires its own specific invoice and shipping details, which are tightly coupled to the order type. We can create individual orders directly each time with their specific invoice and shipping details.

We are good to go, right? Not really. What if we want to add more order types in the future such as `GiftOrder` or `BulkOrder` or a new payment method? We would have to modify the code in multiple places where we create order objects, leading to code duplication and making the code harder to maintain.

To solve this problem we use the Abstract Factory pattern. We define the `Invoice` and `Shipping` interface that defines methods to create invoice and shipping details respectively. We can create an interface or a base class `OrderFactory` which has two methods for creating invoice and shipping details and now we can create `OnlineOrderFactory` and `PhysicalOrderFactory` that implements the respective methods of `OrderFactory` interface.

Please find the code implementation of the Abstract Factory pattern in the [`abstract_factory.js`](./abstract_factory.js) file.

### Why it matters

The Abstract Factory design pattern is important because it promotes loose coupling and adheres to the Single Responsibility Principle and Open/Closed Principle similar to Factory pattern. This is particularly beneficial in large systems where different modules may rely on specific families of objects.

### System Design Impact

Abstract Factory pattern can significantly enhance the scalability and maintainability of the codebase. By using this pattern, we can easily introduce new families of products without altering existing code, e.g. adding new order types or invoice formats for a new Subscription order.

### References

- [Wikipedia - Abstract Factory Pattern](https://en.wikipedia.org/wiki/Abstract_factory_pattern)
- [Refactoring Guru - Abstract Factory Pattern](https://refactoring.guru/design-patterns/abstract-factory)
