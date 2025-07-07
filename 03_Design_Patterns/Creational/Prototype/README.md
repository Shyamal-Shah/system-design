# Prototype Design Pattern

### Definition

The Prototype design pattern simply states that when we need to make clones or copies of an existing object, we create an interface that has a method for clone and all the classes that need cloning, implement this interface and provide their own method to clone the object. This design pattern has the following three main advantages:

1. The ability to create new objects by copying an existing object including the private members which would not be possible without class method.
2. The ability to choose which members need to be cloned, so the client does not have to manage cloning details.
3. It also allows multiple subclasses or variations to be created efficiently from the same prototype without relying on inheritance.

Let's say we have a class `Car` that implements the `Prototype` interface with a method `clone`. The `Car` class can have various attributes like `company`, `model`, and `year`. When we want to create a new car object, we can simply call the `clone` method on an existing car object, which will return a new car object with the same attributes.

### Example

```python
class Prototype:
    def clone(self):
        raise NotImplementedError("Subclasses must implement this method")

class Car(Prototype):
    def __init__(self, company, model, year):
        self.company = company
        self.model = model
        self.year = year
    def clone(self):
        return Car(self.company, self.model, self.year)
```

### Real-World Scenario

Imagine we are building an order management system. We have a class `Order`. Suppose a customer places an order for 100 products. We create an `Order` object and process it. Later, the customer asks us to repeat the same order. We would have to manually recreate the same order with all its details.

We are good to go, right? Not really. What if the user becomes regular and asks us to dispatch the same order on a weekly basis? This will lead to creating the same complex `Order` again and again leading to in efficiency and code redundancy. This approach is manageable for a single customer, but becomes inefficient if we have thousands of customers requesting repeated orders.

To solve this problem, we use the Prototype pattern. We create an prototype interface with the `clone()` method and the `Order` class implements this method, to create a clone of the object with a new orderId each time, ensuring consistency and reliability. This way, we can easily create new orders by cloning the existing order object without having to manually recreate it each time.

Please find the code implementation of the Prototype pattern in the [`prototype.js`](./prototype.js) file.

### Why it matters

The Prototype design pattern is essential when object creation is costly or complex, enabling efficient duplication of existing objects. It boosts performance, promotes code reuse, and enhances flexibility by allowing new object instances with varied configurations without altering the original class, making systems easier to maintain and extend.

### System Design Impact

The Prototype design pattern enables object cloning to improve performance and avoid costly instantiation. For example, in a gaming or e-commerce system, it can quickly duplicate complex product or character templates without rebuilding them from scratch.

### References

- [Refactoring Guru - Prototype Pattern](https://refactoring.guru/design-patterns/prototype)
