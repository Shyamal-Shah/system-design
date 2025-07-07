# Singleton Design Pattern

### Definition

The Singleton design pattern basically states that there should be only one instance of the class in the system. This is generally useful when we need centralized access to a resource or a service.

If we try to create multiple instances, we should either get the same instance or throw an error. We can achieve Singleton design in our applications in below mentioned ways:

### 1. Eager

The class has a private static field `instance` that is initialized with a new `Singleton` object. The constructor is marked as private, which prevents external code from creating new instances using the new keyword. The only way to access the Singleton instance is through the public static method `getInstance()`, which always returns the same pre-created instance.

```java
class Singleton {
  private static Singleton instance = new Singleton();

  private Singleton() {}

  public static Singleton getInstance() {
    return instance;
  }
}
```

Advantages:

- Thread-safe
- Always Available

Disadvantages:

- High resource consumption

### 2. Lazy

The class has a private static field `instance` that is not initialized. The constructor is marked as private, which prevents external code from creating new instances using the new keyword. The only way to access the Singleton instance is through the public static method `getInstance()`, which creates a new object only when it is needed for the first time and subsequently always returns the same pre-created instance.

```java
class Singleton {
  private static Singleton instance;

  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}
```

Advantages:

- Resources are allocated only when needed

Disadvantages:

- Not Thread-safe

### 3. Synchronized

The class has a private static field `instance` that is not initialized. The constructor is marked as private, which prevents external code from creating new instances using the new keyword. The only way to access the Singleton instance is through a **_synchronized public static_** method `getInstance()`, which creates a new object only when it is needed for the first time and subsequently always returns the same pre-created instance.

```java
class Singleton {
  private static Singleton instance;

  private Singleton() {}

  public static synchronized Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}
```

Advantages:

- Simple
- Thread-safe

Disadvantages:

- Large Overhead for acquiring locks

### 4. Double checked Locking

The class has a private static field `instance` that is not initialized. The constructor is marked as private, which prevents external code from creating new instances using the new keyword. The only way to access the Singleton instance is through a public static method `getInstance()`, which has a **_synchronized_** block that creates a new object only when it is needed for the first time and subsequently always returns the same pre-created instance.

```java
class Singleton {
  private static Singleton instance;

  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
        synchronized (Singleton.class) {
            if (instance == null) {
                instance = new Singleton();
            }
        }
    }
    return instance;
  }
}
```

Advantages:

- Very low Overhead
- Thread-safe

Disadvantages:

- A bit complex

### 5. Static Block

The class has a private static field `instance` that is not initialized. The constructor is marked as private, which prevents external code from creating new instances using the new keyword. The instance is initialized in a static block. The only way to access the Singleton instance is through a public static method `getInstance()`, which always returns the same pre-created instance.

```java
class Singleton {
  private static Singleton instance;

  private Singleton() {}

  static {
    instance = new Singleton();
  }

  public static Singleton getInstance() {
    return instance;
  }
}
```

Advantages:

- Thread-safe
- Always Available

Disadvantages:

- Cannot be lazy-loaded

### 6. Bill Pugh \*

The class has a private static inner class called `SingletonHelper` that holds the initialized static final `instance`. The constructor is marked as private, which prevents external code from creating new instances using the new keyword. The only way to access the Singleton instance is through a public static method `getInstance()`, which when called first time triggers the loading of the SingletonHelper class and then always returns the same pre-created instance from the inner class.

```java
class Singleton {
  private Singleton() {}

  private static class SingletonHelper {
    private static final Singleton instance = new Singleton();
  }

  public static Singleton getInstance() {
    return SingletonHelper.instance;
  }
}
```

Advantages:

- Thread-safe
- Performant
- Lazy-loaded

Disadvantages:

- A bit complex

### 7. Enum or dictionary based

The singleton is declared as an enum or a dictionary(in some programming languages) rather than a class.

```java
enum Singleton {
  INSTANCE;
}
```

Advantages:

- Thread-safe
- Performant

Disadvantages:

- Cannot be extended as it is an enum constant
- Cannot be lazy-loaded

### Real-World Scenario

Imagine we are building an order management system. We have a base class `Order` that represents an order in the system. We have an `OrderManager` that manages the queue of orders. We could create a normal `OrderManager` class with different methods to add orders, process orders, etc.

We are good to go, right? Not really. What if we expose this as a library and the client creates multiple instances of `OrderManager` to handle its orders? This is a major issue because it causes inconsistencies in the system. Here, it is crucial to have a single, centralized component responsible for managing the queue of orders to ensure consistency and avoid conflicts.

To solve this, we can use the Singleton Design Pattern by defining our `OrderManager` class as a singleton and exposing the single instance through `getInstance()` method.

Please find the code implementation of the Singleton pattern in the [`singleton.js`](./singleton.js) file.

### Why it matters

The Singleton design pattern is crucial in scenarios where the system needs a single source of truth and centralized control over a resource or service. This is particularly important in cases where shared resources or global states are involved, as it helps to prevent issues related to concurrency, data inconsistency, and resource contention.

### System Design Impact

The Singleton pattern centralizes control over shared resources, enabling consistency, reliability, and restricted access to resources such as database connections, thread pools, or file systems.

### References

- [Refactoring Guru - Singleton Pattern](https://refactoring.guru/design-patterns/singleton)
- [Algomaster.io - Singleton Design Pattern](https://algomaster.io/learn/design-patterns/java/singleton)
