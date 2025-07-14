# Monolithic Architecture

## What does it mean?

Monolithic architecture in the most basic terms means that the entire system is developed, built and deployed as a single unit. All the components of the system: the UI, business logic, and data access layer and sometimes even the database are packaged and deployed together.

The whole system is tightly coupled, meaning that any change in one module of the system requires the entire system to be rebuilt and redeployed.

## Use cases

- Small to medium-sized applications
- Internal tools
- PoCs (Proof of Concepts) and MVPs (Minimum Viable Products)
- Applications with low complexity and low traffic
- Small teams with limited resources

## Advantages

- **Simplicity**: Easy to develop, test, and deploy as they are built as a single unit.
- **Performance**: All the components are in the same process, which can lead to better performance due to reduced network latency.
- **Ease of Deployment**: Everything is packaged together, making deployment straightforward.
- **Less Overhead**: No need for inter-service communication, which can reduce complexity and overhead.
- **Easier to Test and Debug**: Since everything is in one place, it can be easier to test the whole application and debug the application as the flow and logs are in one place.

## Disadvantages

- **Scalability**: Whole system needs to be scaled together which can lead to resource wastage.
- **Tight Coupling**: Changes in one part can affect the entire system.
- **Single Point of Failure**: Single bug or failure can bring down the entire application.
- **Slow Development**: Larger codebase makes onboarding and development slower and raises the risk of merge conflicts in larger teams.
- **Limited Technology Stack**: Whole system is built using a single technology stack.
