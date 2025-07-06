import { ParkingSpot } from "./ParkingSpot";
import { AbstractVehicle } from "./AbstractVehicle";

export default class ParkingTicket {
  vehicle: AbstractVehicle;
  ticketId: string;
  spot: ParkingSpot;
  entryTime: number;
  exitTime: number | null = null;

  constructor(spot: ParkingSpot, vehicle: AbstractVehicle) {
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = Date.now();
    this.ticketId = `${vehicle.number}_${this.entryTime}`;
  }

  markTicketAsPaid() {
    this.exitTime = Date.now();
  }
}
