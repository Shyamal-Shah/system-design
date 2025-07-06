import ParkingLot from "./ParkingLot";
import { NearestToEntryStrategy } from "./AbstractParkingStrategy";
import { CarFactory, BikeFactory, BusFactory } from "./VehicleFactory";
import { LevelTypeConfig } from "./LevelTypeConfig";
import VehicleTypeEnum from "./VehicleType";

const levelsConfig: LevelTypeConfig[] = [
  {
    levelNumber: 0,
    totalSpots: 10,
    spotTypesConfig: [
      { type: VehicleTypeEnum.CAR, totalSpots: 5 },
      { type: VehicleTypeEnum.BIKE, totalSpots: 3 },
      { type: VehicleTypeEnum.BUS, totalSpots: 2 },
    ],
  },
];

const parkingLot = ParkingLot.getInstance(
  new NearestToEntryStrategy(),
  levelsConfig
);

const car = CarFactory.createVehicle("GJ06AB1234");
const ticket = parkingLot.parkVehicle(car);

parkingLot.removeVehicle(ticket);

// Output

// Parking Vehicle of Type: 0 with number: GJ06AB1234
// Removing Vehicle of Type: 0 with number: GJ06AB1234 from parking.
