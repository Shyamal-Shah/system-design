# Command Query Responsibility Segregation (CQRS) Pattern

When dealing with Database per service model, there can be scenarios where one transaction requires data from multiple tables/collections across services. It becomes very difficult perform the joins across microservices and maintain a consistent view of the data.

The CQRS pattern helps mitigate this issue. It says that separate the read and write operations into different models. The write model handles the commands (updates, inserts, deletes) while the read model handles the queries (data retrieval). This allows each model to be optimized for its specific purpose.

The command operations are handled by each service independently, while the read operations can be handled by a separate service that aggregates data from multiple services. This separation allows for better scalability and performance. The read model can be optimized for fast queries, while the write model can focus on handling the business logic of creating and updating orders.

The question comes down to how to keep the read model in sync with the write model. There are two main approaches to achieve CQRS:

1. **Event Sourcing**: The write model generates events for each change, which are then consumed by the read model to update its state. This allows the read model to be always in sync with the write model.

2. **Data Replication**: The write model directly updates the read model, either by pushing changes or by having the read model periodically pull updates from the write model using DB triggers or processing jobs. This approach can lead to eventual consistency, where the read model may not always reflect the latest state of the write model.

## Example

Consider a scenario where a user places an order in an e-commerce application. The order placement involves multiple steps:

1. **Create Order**: The Order service creates a new order.
2. **Reserve Inventory**: The Inventory service reserves the items for the order.
3. **Process Payment**: The Payment service processes the payment for the order.

If the user wants to view their order details, the read model can aggregate data from the Order, Inventory, and Payment services to provide a complete view of the order. While the order placement is handled by the write model.

## Advantages

- **Scalability**: Read and write operations can be scaled independently based on their specific requirements.
- **Performance**: The read model can be optimized for fast queries, improving overall system performance.
- **Flexibility**: Allows for different data models for reading and writing, enabling better optimization for each use case.
- **Decoupling**: Reduces coupling between services, allowing them to evolve independently.

## Challenges

- **Complexity**: Implementing CQRS can add complexity to the system, especially in managing the synchronization between read and write models.
- **Data Consistency**: Ensuring data consistency between the read and write models can be challenging.
- **Eventual Consistency**: The read model may not always reflect the latest state of the write model, leading to potential inconsistencies.

## Trade-off

| Approach         | Best for               | Drawback                 |
| ---------------- | ---------------------- | ------------------------ |
| Event Sourcing   | Complex business logic | Requires event handling  |
| Data Replication | Simple read operations | Potential for stale data |
