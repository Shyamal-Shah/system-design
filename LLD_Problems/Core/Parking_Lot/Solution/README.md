# Parking Lot Problem Solution

## Requirements Summary

1. The system should be able to park vehicles and remove vehicles.
2. It should keep track of available slots.
3. The parking lot has multiple levels.
4. There are different types of parking spots: Bike spots, Car spots, and Truck/Bus spots.
5. Each spot type can accommodate only its intended vehicle type. For example, trucks/buses need larger spots that cannot be used by cars.
6. The parking lot has a row-like structure within each level and multiple levels.
7. The requirement is to assign the nearest available spot to the entry gate. For now, assume there is one entry gate per level (near the lift/elevator area).
8. Each level has one entry and one exit. They are on opposite ends, with the ramp/stairs/lift connecting levels.
9. The solution should be scalable to handle up to 10,000 spots and approximately 10 parking levels in the future.

## Design Overview

### 1. Vehicles

We define an abstract class `AbstractVehicle`, and create the following concrete classes:

- Car
- Bike
- Bus

Each vehicle has:

- Number plate
- Vehicle type (`VehicleTypeEnum`)

A Factory Pattern (`CarFactory`, `BikeFactory`, `BusFactory`) is implemented to instantiate vehicles cleanly based on their type.

### 2. Parking Spot

Next we define a `ParkingSpot` class with the following properties:

- Spot ID
- Level number
- Spot type (`VehicleTypeEnum`)
- Occupancy status
- Reference to the parked vehicle

Methods include:

- isAvailable() – check if the spot is free
- fillParkingSpot(vehicle) – park a vehicle
- removeVehicle() – free the spot

### 3. Parking Spot Stats

We create a `ParkingSpotStats` class to keep the track of available and total spots, this will be used in a map with `VehicleTypeEnum` as key:

- Total spots
- Free spots
- Methods to increment and decrement free spot count

### 4. Level

We define a `Level` class, representing a parking level. It has:

- List of parking spots (`ParkingSpot[]`)
- Level number
- Total parking spots count
- A map of spot type to `ParkingSpotStats`, enabling quick availability lookup

Key methods:

- getAvailableSpotCount(type) – returns free spot count of a type
- markSpotAsOccupied(spot, vehicle) – marks spot filled and updates stats
- markSpotAsAvailable(spot) – marks spot free and updates stats

### 5. Parking Strategy

We define an abstract strategy class `AbstractParkingStrategy` with:

- parkVehicle(vehicle, levels) – finds a suitable spot using the strategy logic and returns a ParkingTicket

- removeVehicle(parkingTicket, levels) – frees the spot linked to a parking ticket

We also implement the following parking strategy extending this abstract class `AbstractParkingStrategy`:

- `NearestToEntryStrategy` – parks the vehicle in the first available nearest spot matching its type.

### 6. Parking Ticket

The `ParkingTicket` class tracks:

- Ticket ID
- Vehicle details
- Allocated parking spot
- Entry and exit timestamps

This enables integration with payment or billing modules in future.

### 7. Parking Lot

The `ParkingLot` class is implemented as a **Singleton** to ensure only one instance manages the entire parking facility. It has:

- A list of levels
- A parking strategy instance
- A record of currently parked vehicles (mapped by number plate)

Key methods:

- parkVehicle(vehicle) – uses the parking strategy to allocate a spot and returns a parking ticket
- removeVehicle(parkingTicket) – frees the allocated spot

## Project Structure

```css
src/
 ├── AbstractParkingStrategy.ts
 ├── AbstractVehicle.ts
 ├── index.ts
 ├── Level.ts
 ├── LevelTypeConfig.ts
 ├── ParkingLot.ts
 ├── ParkingSpot.ts
 ├── ParkingTicket.ts
 ├── SpotTypeConfig.ts
 ├── VehicleFactory.ts
 └── VehicleTypeEnum.ts
```

## Design Patterns Used

- **Strategy Pattern:** Different parking allocation algorithms (NearestToEntryStrategy)
- **Factory Pattern:** Vehicle creation using CarFactory, BikeFactory, BusFactory
- **Singleton Pattern:** Ensures only one ParkingLot instance exists

### How to Run

1. Clone the repository:

```bash
git clone https://github.com/Shyamal-Shah/system-design.git
cd LLD_Problems/Core/Parking_Lot/Solution
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npx ts-node src/index.ts
```
