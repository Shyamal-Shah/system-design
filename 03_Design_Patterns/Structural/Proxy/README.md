# Proxy Design Patterns

### Definition

In the simplest terms, the Proxy design pattern means creating a class that acts as a placeholder or intermediary for the main class. Both the proxy and main class implement the same interface or abstract class, allowing the proxy to take the place of the main class.

Let's say we have a class `Image` that loads and displays images. Instead of loading the image directly, we can create a `ProxyImage` class that implements the same interface as `Image`. The `ProxyImage` class handles loading the image only when needed, thus acting as a placeholder for the actual image.

### Example

```python
class Image:
    def display(self):
        print("Displaying image")

class ProxyImage:
    def __init__(self, image):
        self._image = image
    def display(self):
        print("Loading image...")
        self._image.display()
```

### Real-World Scenario

Imagine we are building an order management system. We have a class `OrderService` that handles order processing. We have two methods in the `OrderService` class: `processOrder` and `cancelOrder`. We want to add logging functionality to these methods. We can directly go into these methods and add logging code.

We are good to go, right? Not really. What if we want to add more logging functionality in the future such as logging the order ID, customer details, and order status? We would have to modify the code in multiple places where we call the `processOrder` and `cancelOrder` methods, potentially leading to code duplication and increased maintenance effort as the number of functions increases.

To solve this problem, we use the proxy pattern. We create a `OrderServiceProxy` class that implements the same interface as `OrderService` and adds logging functionality to the `processOrder` and `cancelOrder` methods. Now we can use the `OrderServiceProxy` class instead of the `OrderService` class and the logging functionality will be automatically added to the methods without modifying the main class.

Please find the code implementation of the Proxy pattern in the [`proxy.js`](./proxy.js) file.

### Why it matters

The proxy pattern is important because it provides a way to add additional functionality to an existing class without modifying its code. This is particularly useful in situations where the original class is part of a third-party library or when we want to adhere to the Open/Closed Principle, which states that classes should be open for extension but closed for modification. It can be useful in the following scenarios to name a few:

- **Logging:** Adding logs when processing orders.
- **Access Control:** Restricting order cancellations to admin users.
- **Lazy Loading:** Loading large order details only when accessed.
- **Caching:** Caching recent order lookups for performance.
- **Remote Access:** Acting as a proxy for external payment gateways.
- **Monitoring**: Tracking performance metrics for order processing.

### System Design Impact

The Proxy pattern allows the system to control access to the main class, enabling features like lazy loading, access control, and logging without modifying the original class. This can lead to improved performance and security in large systems, e.g. using a proxy to control access to a remote service or to cache results for performance optimization.

### References

- [Wikipedia - Proxy Pattern](https://en.wikipedia.org/wiki/Proxy_pattern)
- [Refactoring Guru - Proxy Pattern](https://refactoring.guru/design-patterns/proxy)
