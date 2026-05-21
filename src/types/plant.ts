import type { Guid } from "guid-typescript";

export interface Plant {
  id: Guid;
  name: string;
  type: string;
  isWatered: boolean;
  interval: number;
  nextInterval: Date;
  imageURL: string;
}
