import { AbstractParkingStrategy } from "./AbstractParkingStrategy";
import { AbstractVehicle } from "./AbstractVehicle";
import { Level } from "./Level";
import { LevelTypeConfig } from "./LevelTypeConfig";
import ParkingTicket from "./ParkingTicket";

class ParkingLot {
  static #instance: ParkingLot | null;
  parkingStrategy: AbstractParkingStrategy;
  levels: Level[] = [];
  vehicles: { [key: string]: ParkingTicket } = {};

  private constructor(
    parkingStrategy: AbstractParkingStrategy,
    levelsConfig: LevelTypeConfig[]
  ) {
    if (levelsConfig.length === 0)
      throw new Error(
        "At least one level needs to be configured in the ParkingLot"
      );
    this.parkingStrategy = parkingStrategy;
    levelsConfig.forEach((levelConfig) => {
      const level = new Level(
        levelConfig.levelNumber,
        levelConfig.spotTypesConfig
      );
      this.levels.push(level);
    });
  }

  public static getInstance(
    parkingStrategy: AbstractParkingStrategy,
    levelsConfig: LevelTypeConfig[]
  ): ParkingLot {
    if (!ParkingLot.#instance) {
      ParkingLot.#instance = new ParkingLot(parkingStrategy, levelsConfig);
    }

    return ParkingLot.#instance;
  }

  public static resetInstance() {
    ParkingLot.#instance = null;
  }

  parkVehicle(vehicle: AbstractVehicle): ParkingTicket {
    if (this.vehicles[vehicle.number]) {
      throw new Error(
        `This ${vehicle.type} with number: ${vehicle.number} is already parked`
      );
    }
    console.log(
      `Parking Vehicle of Type: ${vehicle.type} with number: ${vehicle.number}`
    );
    const parkingTicket = this.parkingStrategy.parkVehicle(
      vehicle,
      this.levels
    );
    if (!parkingTicket)
      throw new Error(`The parking for Type: ${vehicle.type} is full`);
    else this.vehicles[vehicle.number] = parkingTicket;
    return parkingTicket;
  }

  removeVehicle(parkingTicket: ParkingTicket): void {
    if (this.vehicles[parkingTicket.vehicle.number])
      this.parkingStrategy.removeVehicle(parkingTicket, this.levels);
    else
      throw new Error(
        `This ${parkingTicket.vehicle.type} with number: ${parkingTicket.vehicle.number} is not parked yet.`
      );
    console.log(
      `Removing Vehicle of Type: ${parkingTicket.vehicle.type} with number: ${parkingTicket.vehicle.number} from parking.`
    );
  }
}

export default ParkingLot;
