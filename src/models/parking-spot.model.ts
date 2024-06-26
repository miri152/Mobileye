export interface ParkingSpot {
    pk: string;
    timestamp: Date,
    license_plate: string,
    vehicle_type: VehicleType,
    spot_type: SpotType
}

enum VehicleType {
    electric = "electric",
    gas = "gas"
}

enum SpotType {
    vip = "vip",
    regular = "regular"
}