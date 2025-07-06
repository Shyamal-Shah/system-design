import VehicleTypeEnum from "./VehicleType";
import { AbstractVehicle } from "./AbstractVehicle";

export class ParkingSpot {
  type: VehicleTypeEnum;
  spotId: number;
  levelNumber: number;
  parkedVehicle: AbstractVehicle | null = null;
  isOccupied: boolean = false;

  constructor(spotId: number, levelNumber: number, type: VehicleTypeEnum) {
    this.spotId = spotId;
    this.levelNumber = levelNumber;
    this.type = type;
  }

  fillParkingSpot(vehicle: AbstractVehicle) {
    if (this.type !== vehicle.type) {
      throw new Error("The Vehicle and Parking Spot type should be same.");
    }
    if (this.isOccupied) {
      throw new Error("This spot already has a parked Vehicle.");
    }
    this.isOccupied = true;
    this.parkedVehicle = vehicle;
  }

  isAvailable() {
    return !this.isOccupied;
  }

  removeVehicle() {
    if (!this.isOccupied) {
      throw new Error("This spot does not have a parked Vehicle.");
    }
    this.isOccupied = false;
    this.parkedVehicle = null;
  }
}
