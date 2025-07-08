# Chain of Responsibility Design Patterns

### Definition

The Chain of Responsibility design pattern states that when a client sends a request, a chain of handlers or receivers or processors are responsible for sending the response. Each handler in the chain can either fulfill the request completely or partially, or it can pass the request to the next handler in the chain until the request is fully passed or we reach the end of chain.

This pattern is particularly useful when we have multiple handlers that can process a request, and we want to decouple the sender of the request from the receivers.

Let's say we have a customer support system with `billingAgent`, `technicalSupport`, `generalInquiries` handlers. Each handler can process the request based on its type. The client can send a request to the first handler in the chain, and if that handler cannot process the request, it can pass it to the next handler in the chain until the request is fully processed or we reach the end of the chain.

```python
class Agent:
    def __init__(self, name, next_agent=None):
        self.name = name
        self.next_agent = next_agent
    def handle_request(self, request):
        pass

class BillingAgent(Agent):
    def handle_request(self, request):
        if request.type == "billing":
            return f"{self.name} handled billing request: {request.details}"
        elif self.next_agent:
            return self.next_agent.handle_request(request)
        else:
            return "No agent available to handle this request."
class TechnicalSupport(Agent):
    def handle_request(self, request):
        if request.type == "technical":
            return f"{self.name} handled technical request: {request.details}"
        elif self.next_agent:
            return self.next_agent.handle_request(request)
        else:
            return "No agent available to handle this request."
class GeneralInquiries(Agent):
    def handle_request(self, request):
        if request.type == "general":
            return f"{self.name} handled general inquiry: {request.details}"
        elif self.next_agent:
            return self.next_agent.handle_request(request)
        else:
            return "No agent available to handle this request."

agent = GeneralInquiries("General Inquiries Agent",
                 TechnicalSupport("Technical Support Agent",
                 BillingAgent("Billing Agent")))
```

### Real-World Scenario

Imagine we are building an order management system. We have a backend service that processes the orders. Before the system processes the request we need to validate the request, check if the user is authenticated, and finally process the order. We can start by implementing a single method `processOrder` in the `OrderService` class that performs all these checks sequentially.

We are good to go, right? Not really. What if we want to add more checks in the future such as checking if the user has sufficient balance or if the order is valid? We would have to modify the `OrderService` class to add new checks for each time we introduce a new validation step. Not only does it increase the complexity of the `OrderService` class, but even a simple bug fix or a slight update could affect the whole class, increasing the chance of creating an error in already-working code.

To solve this problem, we can use the Chain of Responsibility pattern. We define an abstract class `OrderHandler` with a method `handleOrder` that takes the order as a parameter. Then, we implement different handlers for each validation step, such as `AuthenticationHandler`, `ValidationHandler`, and `ProcessingHandler`. Each handler can either process the order or pass it to the next handler in the chain.

Please find the code implementation of the Chain of Responsibility pattern in the [`chain_of_responsibility.js`](./chain_of_responsibility.js) file.

### Why it matters

The Chain of Responsibility pattern allows us to separate the request sender from the request processors, which makes the code more modular and easier to maintain. Using the chain of responsibility, we can easily extend the processing pipeline by adding new handlers without modifying existing code, thus adhering to the Open/Closed Principle. “It also enhances testability by allowing us to mock or inject different handlers during unit testing.

### System Design Impact

Chain of Responsibility pattern allows systems to support feature expansion with minimal changes, enabling plug-and-play architectures, e.g. adding new handlers or validators without impacting existing flows.

### References

- [Wikipedia - Chain of Responsibility Pattern](https://en.wikipedia.org/wiki/Chain_of_Responsibility_pattern)
- [Refactoring Guru - Chain of Responsibility Pattern](https://refactoring.guru/design-patterns/chain-of-responsibility)
