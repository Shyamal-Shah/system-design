# Decomposition Pattern

Decomposition patterns help in breaking a large monolithic application into smaller, more manageable services. This means that these patterns are at the foundation of how the services in the microservice Architecture are designed.

Using decomposition patterns, the applications are split into decoupled services aligned with business or domain boundaries. The three primary decomposition approaches are as follows:

## 1. Decompose by Business Capabilities

In simple words, it is a process of breaking the system into smaller independent microservices based the specific functions or processes that an organization performs i.e. Business Capabilities. Each service represents a major function or area in your company.

### When to Use

Use this pattern when business has clear departments or capabilities, and you want your software to reflect that structure.

### Example

In an online store, you might have:

- _Product Service_ (for managing items)
- _Order Service_ (for handling purchases)
- _Customer Service_ (for user info)

Each service deals with its own slice of the business.

### Advantages

- Makes it easy for teams to own and manage one part of the system.
- Keeps each service focused and relevant to one area of the business.
- Helps align tech with how your company is actually organized.

### Challenges

- Some services may need to talk to each other often (like orders needing product info).
- Figuring out the exact boundaries can be tricky at first.

## 2. Decompose by Subdomain

This is like the first pattern, but more focused. It’s based on Domain-Driven Design (DDD), where the application is broken down into subdomains. Each subdomain is a small part of the business that has its own rules, language, and logic.

### When to Use

Use this pattern when the system is large and complex, and different parts of it behave very differently or evolve at different speeds.

### Example

In a bank management system, consider following subdomains:

- _Loan Processing_ (for handling loans)
- _Customer Onboarding_ (for processing customers)
- _Fraud Detection_ (for tracking user spends and detecting fraud)

Each service has its own logic, rules, and data.

### Advantages

- Keeps complicated logic isolated.
- Encourages teams to really understand the problem they're solving.
- Easier to manage changes in one area without affecting others.

### Challenges

- Can result in the creation of a large number of microservices, which can make service discovery and integration challenging.
- Requires good domain knowledge of the overall business to determine the appropriate subdomains.

## 3. Decompose by Use Case or Transaction

In this pattern, the monolithic application is split into services based on specific use case or a series of operations occurring in the system but represent one unit of work(Transaction). The basic idea is to create services around how the system is actually used by the user.

### When to Use

Use this pattern when there are clear, repeatable processes or transactions that can be handled separately to complete a designated work.

### Example

In an online store:

- _Checkout Service_ (handles the entire process of placing an order)
- _Payment Service_ (handles payment processing)
- _Shipping Service_ (schedules deliveries)

Each service is focused on a specific task.

### Advantages

- Optimizes services for performance and speed in specific tasks.
- Great for systems that need to scale certain operations independently.
- Better alignment with business needs.

### Challenges

- Risk of overlapping logic between services.
- Can lead to tight coupling if workflows depend too much on each other.

## Trade-off

| Pattern               | Best for                    | Drawback                             |
| --------------------- | --------------------------- | ------------------------------------ |
| Business Capabilities | Organizational alignment    | Hard boundaries                      |
| Subdomain             | Complex domain modeling     | Requires deep business understanding |
| Use Case              | Workflow/task-based scaling | Risk of tight coupling               |
