import { AbstractVehicle } from "./AbstractVehicle";
import { ParkingSpot } from "./ParkingSpot";
import VehicleTypeEnum from "./VehicleType";
import { SpotTypeConfig } from "./SpotTypeConfig";

class ParkingSpotStats {
  totalSpots: number;
  freeSpots: number;
  constructor(totalSpots: number) {
    this.totalSpots = totalSpots;
    this.freeSpots = totalSpots;
  }
  addFreeSpot() {
    this.freeSpots++;
  }
  removeFreeSpot() {
    this.freeSpots--;
  }
}

export class Level {
  parkingSpots: ParkingSpot[] = [];
  levelNumber: number;

  totalParkingSpots: number = 0;
  parkingSpotTypeStats: {
    [key in VehicleTypeEnum | any]: ParkingSpotStats | any;
  } = {};

  constructor(levelNumber: number, spotConfigList: SpotTypeConfig[]) {
    if (spotConfigList.length === 0)
      throw new Error("Each level must have one spot type");
    this.levelNumber = levelNumber;
    let spotId = 0;

    spotConfigList.forEach((spotConfig) => {
      this.parkingSpotTypeStats[spotConfig.type] = new ParkingSpotStats(
        spotConfig.totalSpots
      );
      this.totalParkingSpots += spotConfig.totalSpots;
      for (let i = 0; i < spotConfig.totalSpots; i++) {
        this.parkingSpots.push(
          new ParkingSpot(spotId++, this.levelNumber, spotConfig.type)
        );
      }
    });
  }

  getAvailableSpotCount(type: VehicleTypeEnum) {
    if (!this.parkingSpotTypeStats[type])
      throw new Error(
        "This level doesn't have any parking spots of this type."
      );
    return this.parkingSpotTypeStats[type]?.freeSpots;
  }

  markSpotAsAvailable(spot: ParkingSpot) {
    spot.removeVehicle();
    this.parkingSpotTypeStats[spot.type].addFreeSpot();
  }

  markSpotAsOccupied(spot: ParkingSpot, vehicle: AbstractVehicle) {
    if (this.parkingSpotTypeStats[spot.type].freeSpots === 0)
      throw new Error("This level has no available parking spots");
    spot.fillParkingSpot(vehicle);
    this.parkingSpotTypeStats[spot.type].removeFreeSpot();
  }
}
