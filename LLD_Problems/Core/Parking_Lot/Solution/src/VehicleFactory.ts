import { AbstractVehicle, Bike, Bus, Car } from "./AbstractVehicle";

export class VehicleFactory {
  static createVehicle(number: string): AbstractVehicle {
    throw new Error("Method createVehicle() needs to be implemented.");
  }
}

export class CarFactory extends VehicleFactory {
  static createVehicle(number: string): AbstractVehicle {
    return new Car(number);
  }
}

export class BikeFactory extends VehicleFactory {
  static createVehicle(number: string): AbstractVehicle {
    return new Bike(number);
  }
}

export class BusFactory extends VehicleFactory {
  static createVehicle(number: string): AbstractVehicle {
    return new Bus(number);
  }
}
