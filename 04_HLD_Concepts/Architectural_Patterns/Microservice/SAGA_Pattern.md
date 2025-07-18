# SAGA Pattern

When dealing with Database per service model, there can be scenarios where one transaction requires updating multiple tables/collections across services. It becomes very difficult to adhere to ACID properties and have data consistency if any of the individual update fails.

The SAGA pattern helps mitigate this issue. It says that break the transaction into a series of smaller, independent steps that can be executed in sequence over the services. After completing the operation by first service, the next service is invoked to perform its operation. If one of the steps fails, the previous services are notified to rollback or undo all the changes to maintain data consistency.

There are two main approaches to implementing the SAGA pattern:

1. **Choreography**: Each service publishes events when it completes its work. Other services listen for these events and take action accordingly. If any step fails, the corresponding service publishes an event. Other services who completed their operation must do compensating transactions to undo their changes.

2. **Orchestration**: A central coordinator service is introduced and it is responsible for managing the execution of all the steps in a transaction. It tells each service what to do and when to do it. In case of failure, this services informs the respective services to undo the operation to previous state.

## Example

Consider a scenario where a user places an order in an e-commerce application. The order placement involves multiple steps:

1. **Create Order**: The Order service creates a new order.
2. **Reserve Inventory**: The Inventory service reserves the items for the order.
3. **Process Payment**: The Payment service processes the payment for the order.
4. **Notify User**: The Notification service sends a confirmation to the user.

If any of these steps fail, the SAGA pattern ensures that the previous steps are rolled back to maintain data consistency. For example, if the payment fails after the order is created and inventory is reserved, the Order service can cancel the order and the Inventory service can release the reserved items.

## Advantages

- **Data Consistency**: Ensures data consistency across services by managing distributed transactions.
- **Resilience**: Can recover from failures by using compensating transactions.
- **Flexibility**: Supports both choreography and orchestration approaches.

## Challenges

- **Complexity**: Implementing the SAGA pattern can add complexity to the system.
- **Monitoring**: Requires robust monitoring and logging to track the progress of sagas and identify failures.
- **Performance**: The overhead of managing multiple transactions can impact performance.

## Trade-off

| Approach      | Best for              | Drawback                 |
| ------------- | --------------------- | ------------------------ |
| Choreography  | Decentralized systems | Hard to manage and debug |
| Orchestration | Centralized control   | Single point of failure  |
