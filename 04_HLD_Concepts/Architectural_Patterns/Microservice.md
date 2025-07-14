# Microservice Architecture

## What does it mean?

A microservice architecture is a design pattern where the whole application is divided into small independent loosely coupled services. Each service is responsible for a specific functionality or a business module.

Each service in the application can be built and deployed independently and might be developed using different tech stack. In microservices, each service ideally owns its database (database per service principle). In some use cases, the database might be a treated as a separate service.

## Use cases

- Large and complex applications
- Large teams with dedicated DevOps practicing continuous delivery and deployment (CI/CD)
- Applications with a lot of modules and high traffic
- Frequent and independent updates are required

## Advantages

- **Scalability**: Scale individual services based on demand.
- **Flexibility**: Different teams can use different technologies.
- **Easy and Faster deployment**: Services can be updated independently.
- **Resilience**: Failure in one service doesn’t crash the whole system.
- **Better Maintainability**: Smaller codebases, easier to manage.
- **Fault Isolation**: Containment of failures

## Disadvantages

- **Complexity**: More modules; difficult to manage and monitor. Distributed transactions are complex, requiring eventual consistency patterns.
- **Latency**: Inter-service communication over the network is inherently slower than in-process calls
- **Deployment Overhead**: Need a dedicated team to handle the deployment.
- **Data Consistency**: Difficult to maintain data consistency during network partition.
- **Hard to Test**: As the number of microservices end to end testing is difficult.
-
