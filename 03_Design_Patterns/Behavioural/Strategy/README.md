# Strategy Design Patterns

### Definition

The Strategy design pattern states that a class should have interchangeable methods that can be selected at runtime.This allows us to define a family of interchangeable algorithms or strategies that solve the same problem in different ways. The Strategy pattern is particularly useful when we have multiple behaviors or _strategies_ that can be applied to a specific context.

Let's say we have a class that needs to perform different operations based on the user's choice, such as sorting a list in different ways (e.g. ascending, descending, or by length). Instead of hardcoding the sorting logic, we can define a strategy interface and implement different sorting strategies into different classes.

### Example

```python
class SortStrategy:
    def sort(self, data):
        pass

class AscendingSort(SortStrategy):
    def sort(self, data):
        return sorted(data)

class DescendingSort(SortStrategy):
    def sort(self, data):
        return sorted(data, reverse=True)

class LengthSort(SortStrategy):
    def sort(self, data):
        return sorted(data, key=len)

```

### Real-World Scenario

Imagine we are building an order management system. We allow the users to pay for their orders using two payment methods: cash on delivery and credit card. Each payment method has its own processing logic and requirements. We can start by implementing two methods `processCashOnDelivery` and `processCreditCard` in the `OrderService` class.

We are good to go, right? Not really. What if we want to add more payment methods in the future such as UPI or bank transfer? We would have to modify the `OrderService` class to add new methods for each time we introduce a new payment method. Not only does it increase the complexity of the `OrderService` class, but even a simple bug fix or a slight update could affect the whole class, increasing the chance of creating an error in already-working code.

This solution would impact the testing process and the deployment process, since we would need to retest the entire `OrderService` class for every small change. This can also lead to raising conflicts in a team environment where multiple developers are working on the same class.

To solve this problem, we can use the Strategy pattern. We define an abstract class `PaymentStrategy` in design intent, even though JS does not enforce it with a method `processPayment` that takes the order and payment details as parameters. Then, we implement different payment methods as separate classes that implement the `PaymentStrategy` interface.

This way, we can easily add new payment methods without modifying the `OrderService` class. Each payment method can have its own implementation of the `processPayment` method, and we can switch between them at runtime based on the user's choice.

Please find the code implementation of the Strategy pattern in the [`strategy.js`](./strategy.js) file.

### Why it matters

The strategy pattern allows us to encapsulate different algorithms or behaviors in separate classes, making our code more modular and easier to maintain. It promotes the Open/Closed Principle, which states that classes should be open for extension but closed for modification. This pattern also enhances testability by allowing mocking or injecting different strategies during testing.

### System Design Impact

Strategy pattern allows systems to support feature expansion with minimal changes, enabling plug-and-play architectures, e.g. adding new payment gateways without impacting existing flows.

### References

-   [Wikipedia - Strategy Pattern](https://en.wikipedia.org/wiki/Strategy_pattern)
-   [Refactoring Guru - Strategy Pattern](https://refactoring.guru/design-patterns/strategy)
