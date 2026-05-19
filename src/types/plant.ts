export interface Plant {
  id: number;
  name: string;
  type: string;
  isWatered: boolean;
  interval: number;
  nextInterval: Date;
  imageURL: string;
}
