export interface Site {
  id: number;
  name: string;
  coords: Coords;
  availableDates: Seat[]
}

export interface Seat {
  date: string; // "12/1/2020",
  availableTimes: Time[];
}
export type Coords = [number, number];
export type Time = [string, string];
