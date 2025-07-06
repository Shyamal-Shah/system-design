# Parking Lot Problem

## Statement

Imagine you are tasked with designing the software system for a parking lot. The company plans to build large multi-level parking facilities in metro cities, and they want a software solution to manage these efficiently.

## Requirement Gathering

### Initial Requirements

- The system should be able to park vehicles and remove vehicles.
- It should keep track of available slots.
- The parking lot has multiple levels.

### Follow-up Questions

1. How many types of parking spots are there? Are they all the same, or do they depend on the vehicle type, like some take 1 spot and some take maybe 2?
2. Does the parking lot have a grid-like structure or a row-like structure?
3. Is handling payment in the scope of the problem?
4. Do we want any specific parking strategies, such as first-in-first-out, nearest to entry, or best-fit?
5. How many entries and exits are there in the lot?

### New Requirements

- There are different types of parking spots: Bike spots, Car spots, and Truck/Bus spots.
- Each spot type can accommodate only its intended vehicle type. For example, trucks/buses need larger spots that cannot be used by cars.
- The parking lot has a row-like structure within each level and multiple levels.
- The requirement is to assign the nearest available spot to the entry gate. For now, assume there is one entry gate per level (near the lift/elevator area).
- Each level has one entry and one exit. They are on opposite ends, with the ramp/stairs/lift connecting levels.

### Additional Constraints

- The system should efficiently find and allocate slots.
- It should be able to report availability by level and spot type.
- The solution should be scalable to handle up to 10,000 spots and approximately 10 parking levels in the future.

## Solution Design

Find the detailed design in the [Solution](./Solution/README.md) file and the TypeScript implementation in [Solution/src](./Solution/src/).
