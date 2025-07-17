# Strangler Pattern

Once we have decided to move from monolithic architecture to microservice architecture and all the microservices are defined, We can use **Strangler Pattern** to govern this transition. A large monolithic application is very complex and has many functionalities, it is not possible to migrate all the functionalities and modules to microservices in one phase and deploy it directly.

The microservices development begins in phases, as each microservice is developed, strangler pattern says that we introduce a _Controller_. The controller is generally an API Gateway or Reverse Proxy. API Gateways route specific endpoints to microservices or monolith based on migration state.

This controller handles the distribution of requests between the existing monolithic application and the new microservices.The controller slowly moves the entire traffic from monolithic application to its microservice alternative. In simple terms, it gradually replaces the monolithic application without downtime, reducing migration risks.

This pattern is named after the strangler fig tree that gradually grows around and replaces its host tree without killing it immediately.

## When to Use

- When migrating large monoliths incrementally with minimal risk.
- When legacy systems cannot be replaced in a single release cycle.

## Challenges

- Maintaining data consistency between monolith DB and new microservices during partial migrations.
- Operational complexity in routing and rollback planning.
