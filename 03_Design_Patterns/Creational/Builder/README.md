# Builder Design Pattern

### Definition

In the Builder Design Pattern we break down the construction of a complex object into small steps. This pattern is particularly useful when an object has many optional parameters and so we have a large number of parameters in the constructor.

AAnother use case is to prevent **constructor explosion**, which occurs when a class has too many ways to be initialized, resulting in multiple constructors with different signatures. Also, when the signature of the two constructors is similar, it can lead to confusion and bugs.

Let's say we have a `Car` class with many parameters like `color`, `engineType`, `transmission`, etc. Instead of having a constructor with all these parameters, we can use a `CarBuilder` class to build the `Car` object step by step. Here, both the `Car` and `CarBuilder` classes have the same properties, but `CarBuilder` provides methods to set each property individually, followed by a `build()` method to create the `Car` object.

**Note:** The Builder pattern is not the same as the **Decorator pattern**. The Builder pattern is used to construct a complex object step by step, while the Decorator pattern is used to add new functionality to an existing object without modifying its structure.

### Example

```python

class Car:
    def __init__(self, color, engine_type, transmission):
        self.color = color
        self.engine_type = engine_type
        self.transmission = transmission

class CarBuilder:
    def __init__(self):
        self.color = None
        self.engine_type = None
        self.transmission = None
    def set_color(self, color) -> 'CarBuilder':
        self.color = color
        return self
    def set_engine_type(self, engine_type) -> 'CarBuilder':
        self.engine_type = engine_type
        return self
    def set_transmission(self, transmission) -> 'CarBuilder':
        self.transmission = transmission
        return self
    def build(self) -> 'Car':
        return Car(self.color, self.engine_type, self.transmission)
```

### Real-World Scenario

Imagine we are building an order management system. We have a base class `Order` with many properties such as items, quantities, and options like gift wrapping or priority shipping.c. We need to create different types of orders with various combinations of these properties. Sometimes we might want to create an order with just items and quantities, while other times we might want to include options as well. We can create an `Order` class with multiple constructors to handle different combinations of these properties.

We are good to go, right? Not really. What if we want to add more properties in the future? We would have to modify the code in multiple places where we create order objects, making the code harder to maintain.

To solve this problem, we use the Builder pattern. We define a base `Order` class and an `OrderBuilder` class, which allows us to set properties incrementally and finally call the `build()` method to create the `Order` object. Now we can create orders step by step without worrying about the specific properties. This way, we can easily initialize an order with just items and quantities, or include additional options like gift wrapping or priority shipping without modifying the `Order` class.

Please find the code implementation of the Builder pattern in the [`builder.js`](./builder.js) file.

### Why it matters

The Builder Design Pattern is important because it simplifies the construction of complex objects, improves code readability, and enhances maintainability. It adheres to the Single Responsibility Principle by separating the construction logic from the object itself, and to the Open/Closed Principle by enabling extension without modifying existing code. By encapsulating the object creation logic within builder classes, we can change the instantiation process without affecting the client code that uses the objects. This leads to more maintainable and flexible code.

### System Design Impact

The Builder Design pattern is widely used in the design of complex systems. It is commonly used to create immutable objects, fluent interfaces, and configurable builders, such as StringBuilder in Java or query builders in databases.

### References

- [Builder Pattern - Refactoring Guru](https://refactoring.guru/design-patterns/builder)
- [Builder Pattern - GeeksforGeeks](https://www.geeksforgeeks.org/builder-design-pattern/)
