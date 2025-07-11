# CAP Theorem

CAP is an acronym for Consistency, Availability, and Partition Tolerance. They are the key properties a distributed data store desires to achieve.

The C.A.P. theorem (also known as Brewer's theorem) is a fundamental principle in distributed systems that states that it is impossible for a distributed data store to simultaneously provide all three of the following guarantees:

1. **Consistency**: Every read receives the most recent write or throws an error.
2. **Availability**: Every request (read or write) receives a response whether it contains the most recent write or not.
3. **Partition Tolerance**: The system continues to operate despite network partitions between the distributed nodes of the system.

In simple terms, the CAP theorem states that all three properties cannot be achieved simultaneously in a distributed system. You can only achieve two of the three properties at any given time.

## Trade-offs

When designing a distributed system, you must make trade-offs between these three properties based on the specific requirements of your application. Here are the possible combinations:

### Consistency + Partition Tolerance (CP)

In this scenario, the system prioritizes consistency and can tolerate network partitions, but it may not be able to respond to all requests during those partitions. If a network partition occurs, the system may reject some requests that would violate consistency like **writes**, ensuring that all nodes see the same data at the same time.

For example, banking systems typically prioritize consistency over availability since data accuracy is more critical than availability during network issues.

### Availability + Partition Tolerance (AP)

In this scenario, the system prioritizes availability and can tolerate network partitions, but it may not provide the most recent data. If the network partition occurs, the system may continue to respond to requests with stale data, ensuring that the system remains operational even in the face of network issues.

For example, social media platforms often prioritize availability over consistency, allowing users to post and read content even during network partitions, but the data may not be the most up-to-date.

### Consistency + Availability (CA)

In this scenario, the system prioritizes consistency and availability, but it cannot tolerate network partitions. If a network partition occurs, the system may become unavailable until the partition is resolved, ensuring that all nodes see the same data at the same time.

This scenario is not practical in a distributed system, as network partitions are inevitable, and the system would become unusable during those partitions.

## Practical Strategies to Achieve CAP

### 1. Eventual Consistency

In this approach, the system allows temporary inconsistencies but guarantees that all nodes will eventually be updated to the same state. This is often used in systems that prioritize availability and partition tolerance.

For example, in social media platforms, when a user posts an update, it may not be immediately visible to all users due to network partitions, but eventually, all nodes will converge to the same state once the network issues are resolved.

### 2. Strong Consistency

In this approach, once the system makes an update, all the subsequent requests are ensured to have the most recently updated data. This is often used in systems that prioritize consistency over availability.

For example, in bankings and other financial systems, this is achieved to ensure that the data across all the nodes in the system are updated with the most recent write ensuring consistency.

### 3. Tunable Consistency

In this approach, a balance between consistency and availability is achieved by allowing the system to adjust the level of consistency based on the specific requirements of each operation. This can be done by configuring the number of nodes that must acknowledge a write before it is considered successful.

For example, in a distributed database, you can configure the system to require acknowledgments from a majority of nodes for critical writes (strong consistency) while allowing reads from any node (eventual consistency) to ensure availability.

### 4. Quorum-Based Approaches

In this approach, the system uses a quorum (a majority as in voting) of nodes to achieve consistency and availability. A write is considered successful only when a majority of nodes acknowledge it, and a read is successful if it can be satisfied by a quorum of nodes.

For example, in distributed databases like Cassandra, a write is successful when it is acknowledged by a majority of nodes, ensuring that the data is consistent across the system while still allowing for high availability.

## PACELC Theorem

This is an extension of the CAP theorem that considers the trade-offs between latency and consistency in distributed systems during normal operation and in the event of a partition. The PACELC theorem states:

- If there is a partition, a system can choose between availability and strong consistency (CAP).
- Else, it can choose between latency and consistency (ELC).

It is important to understand that even when the system is functioning normally (no partition), there are still trade-offs between latency and consistency. This means that even in the absence of network issues, you may need to choose between fast responses (low latency) and ensuring that all nodes have the most up-to-date data (strong consistency).

## Conclusion

Trade-offs are at the heart of all the system design decisions. Before designing a distributed system, it is crucial to understand the specific requirements of your application and choose the appropriate combination of consistency, availability, partition tolerance and latency based on those requirements.
