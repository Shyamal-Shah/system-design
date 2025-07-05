# Decorator Design Patterns

### Definition

In the simplest terms, the Decorator design pattern means that to extend features, we wrap our base class and create a new class that adds the desired functionality.This allows us to add new functionalities to an existing class without modifying its structure.

In more technical terms, we create a base class with the default features. Now to extend the features and functionalities instead of creating subclasses for each permutations and combinations of features, we create a decorator class that takes a base class object as a parameter and also extends the base class. Now we can create multiple decorator classes that add different features to the base class without modifying its structure.

Let's say we have a class that represents a coffee. We have a base class `Espresso` that represents a basic coffee. Now we want to add different features to the coffee such as milk, sugar, and whipped cream. Instead of creating subclasses for each combination of features (e.g., `EspressoWithMilk`, `EspressoWithSugar`, `EspressoWithMilkAndSugar` etc.), we can create decorator classes that extend the `Espresso` class and add the desired features.

### Example

```python
class Espresso:
    def cost(self):
        return 10

class CoffeeDecorator(Espresso):
    def __init__(self, coffee):
        self._coffee = coffee
    def cost(self):
        return self._coffee.cost()

class MilkDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 2

class SugarDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 1

espresso = Espresso()
espresso_with_milk = MilkDecorator(espresso)
espresso_with_milk_and_sugar = SugarDecorator(espresso_with_milk)
print(f"Cost of espresso with milk and sugar: {espresso_with_sugar.cost()}")
```

### Real-World Scenario

Imagine we are building an order management system. We have a base class `Order` that represents an order. Now we want to add different features to the order such as discounts, taxes, and shipping fees. We can start by creating subclasses for each combination of features (e.g., `OrderWithDiscount`, `OrderWithTax`, `OrderWithTaxAndDiscount` etc.).

We are good to go, right? Not really. What if we want to add more features in the future such as gift wrapping or priority shipping? We would have to create new subclasses for each new feature, leading to even more complexity and making the code harder to maintain. This approach leads to **2^n** classes where n is the number of features. With just 3 features, we need 8 classes! This is called **class explosion**.

To solve this problem, we use the decorator pattern. We define a base class `Order` and a decorator abstract class called `OrderDecorator` which extends the base class and takes an Order object as a parameter. Now for each feature we create individual classes that extend the `OrderDecorator` class and add the desired feature.

This way we can keep on extending the feature list and have an infinite number of combinations of features without increasing the number of classes from n to 2^n.

Please find the code implementation of the Decorator pattern in the [`decorator.js`](./decorator.js) file.

### Why it matters

The Decorator design pattern protects the code from expanding uncontrollably in cases where we have many features, while adhering to the Single Responsibility Principle and Open/Closed Principle. It also allows a mix and match of features in a controlled manner. It also helps reduce the if/else ladder for applying features and makes the code more maintainable and scalable.

### System Design Impact

Decorator pattern allows systems to scale(in terms of features), enabling plug-and-play architectures, and build resilience e.g. adding new discounts or region specific taxes can be done quite easily.

### References

- [Wikipedia - Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Refactoring Guru - Decorator Pattern](https://refactoring.guru/design-patterns/decorator)
