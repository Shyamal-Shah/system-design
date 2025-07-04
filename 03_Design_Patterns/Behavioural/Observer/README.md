# Observer Design Patterns

### Definition

In the simplest terms, the observer design pattern means that we create a system where one or more objects have subscribed to another object to receive notifications when some thing happens in that object.

Let's say we have a object called `Publisher` and another object called `Subscriber`. The `Publisher` has a state X and the `Subscriber` is interested in knowing when the state of X changes. One way to implement this is to have the `Subscriber` come to the `Publisher` on a fixed interval and check the state of X. This is called polling. But this is not efficient, as the `Subscriber` has to keep checking the state of X even when it has not changed.

Instead, the `Publisher` can notify the `Subscriber` whenever the state of X actually changes. This is called the observer design pattern.

**Note:** In classic UML and Gang of Four terminology, the **Publisher** is often called the `Subject`, and the **Subscriber** is called the `Observer`.

### Example

```python
class Publisher:
    def __init__(self):
        self.subscribers = []
        self.state = 'Init'

    def register(self, subscriber):
        self.subscribers.append(subscriber)

    def deregister(self, subscriber):
        self.subscribers.remove(subscriber)

    def notify(self):
        for subscriber in self.subscribers:
            subscriber.update(self.state)

    def change_state(self, new_state):
        self.state = new_state
        self.notify()

class Subscriber:
    def __init__(self, name):
        self.name = name

    def update(self, state):
        print(f"{self.name} received update: {state}")
```

### Real-World Scenario

Imagine we are building an order management system and we have multiple microservices handling different tasks. We have three microservices: `OrderService`, `InventoryService`, and `EmailService`. The `OrderService` is responsible for handling order placement, the `InventoryService` is responsible for updating the stock, and the `EmailService` is responsible for sending order confirmation emails.

When the user places an order, the `OrderService` needs to notify the `InventoryService` to update the stock and start the shipping process, it also needs to notify the `EmailService` to send the order confirmation email. We can call the update method of the `InventoryService` and `EmailService` directly from the `OrderService` and we are done, right? Not really. What if we want to add more services in the future, such as a `Analytics` or a `NotificationService`? We would have to modify the `OrderService` class to add new methods for each time we introduce a new service. Not only does it increase the complexity of the `OrderService` class, but even a simple bug fix or a slight update could affect the whole class, increasing the chance of creating an error in already-working code.

To solve this problem, we can use the Observer design pattern. We define the `OrderService` as the `Publisher` and the `InventoryService` and `EmailService` as the `Subscribers`. The `OrderService` will notify the `Subscribers` whenever an order is placed, and the `Subscribers` will update their state accordingly. This way, we can add new services in the future without modifying the `OrderService` class, making the code more maintainable and scalable. We will use the above `Publisher` and `Subscriber` classes to implement this.

Please find the code implementation of the Observer pattern in the [`observer.js`](./observer.js) file.

### Why it matters

The observer pattern allows us to establish a one-to-many dependency between objects, enabling a more decoupled architecture. It promotes the Open/Closed Principle, which states that classes should be open for extension but closed for modification. This pattern also enhances testability by allowing mocking or injecting different observers during testing.

### System Design Impact

Observer pattern allows systems to support feature expansion with minimal changes, enabling plug-and-play architectures, e.g. adding new notification channels without impacting existing flows.

### References

- [Wikipedia - Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern)
- [Refactoring Guru - Observer Pattern](https://refactoring.guru/design-patterns/observer)
