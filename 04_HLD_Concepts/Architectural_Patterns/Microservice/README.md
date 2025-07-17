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

## Microservices Lifecycle

It refers to the phases through which the microservices undergo from start to finish. The lifecycle begins with the design of various microservices needed in the system to handle the different modules and functionality till the service is no longer needed and is torn down.

Below are the main phases in the microservice lifecycle:

### 1. Design

Identify and define each each microservice’s purpose and the various functionalities it supports. Along with it, how the microservices communicate with other services.

Create architectural diagrams, determine data models, API specifications, and system integration plans.

### 2. Develop

Implement actual microservices based on the design specifications and architectural plans. Each microservice might be build by cross functional teams using different technologies.

Write code, perform unit testing, and integrate with other services or components.

### 3. Build & Deploy

Once developed and tested, build the microservices using built tools and package it into deployable formats.

Compile code, create container images (e.g., Docker), and generate deployable artifacts.

Deploy the packaged services into individual environments based on architectural plans. Use CI/CD pipelines, deployment automation tools, configure environments, and manage rollout processes.

### 4. Operate & Monitor

Manage and maintain the microservice during its operational phase. Handle user requests, perform routine maintenance, and manage service scaling.

Track the microservice’s performance and health to ensure it meets operational standards. Collect logs, monitor metrics, set up alerts, and analyze performance data.

### 5. Update

Improve or fix the microservice based on feedback and monitoring results. Implement changes, test updates, and redeploy new versions.

### 6. Decommission

Bring down the microservices when it is no longer needed or has been replaced. Shut down the service, clean up resources, and archive data ensuring API consumers are informed and traffic is routed away before shutdown.

## Microservice Design Patterns

To address the drawbacks and disadvantages associated with microservices, various design patterns are introduced. Using these patterns, one can overcome common problems encountered during designing and building applications. The patterns help dealing with challenges that may arise due to handling many independent services and reduce complexity, improve system's reliability and maintainability.

I will cover the following patterns widely used while designing microservice architecture:

- [Decomposition Pattern](./Decomposition_Pattern.md)
- [Strangler Pattern](./Strangler_Pattern.md)
