import VehicleTypeEnum from "./VehicleType";

export class AbstractVehicle {
  number: string;
  type: VehicleTypeEnum;
  constructor(number: string, type: VehicleTypeEnum) {
    this.number = number;
    this.type = type;
  }
}

export class Car extends AbstractVehicle {
  constructor(number: string) {
    super(number, VehicleTypeEnum.CAR);
  }
}

export class Bike extends AbstractVehicle {
  constructor(number: string) {
    super(number, VehicleTypeEnum.BIKE);
  }
}

export class Bus extends AbstractVehicle {
  constructor(number: string) {
    super(number, VehicleTypeEnum.BUS);
  }
}
