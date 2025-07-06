import { Level } from "./Level";
import ParkingTicket from "./ParkingTicket";
import { AbstractVehicle } from "./AbstractVehicle";

export class AbstractParkingStrategy {
  parkVehicle(vehicle: AbstractVehicle, levels: Level[]): ParkingTicket | null {
    throw new Error("Method parkVehicle() needs to be implemented");
  }
  removeVehicle(parkingTicket: ParkingTicket, levels: Level[]) {
    throw new Error("Method removeVehicle() needs to be implemented");
  }
}

export class NearestToEntryStrategy extends AbstractParkingStrategy {
  parkVehicle(vehicle: AbstractVehicle, levels: Level[]): ParkingTicket | null {
    for (let level of levels) {
      for (let spot of level.parkingSpots) {
        if (spot.isAvailable() && spot.type === vehicle.type) {
          level.markSpotAsOccupied(spot, vehicle);
          return new ParkingTicket(spot, vehicle);
        }
      }
    }
    return null;
  }

  removeVehicle(parkingTicket: ParkingTicket, levels: Level[]) {
    levels[parkingTicket.spot.levelNumber].markSpotAsAvailable(
      parkingTicket.spot
    );
  }
}
