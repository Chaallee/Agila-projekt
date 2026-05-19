import { Guid } from "guid-typescript";
import type { Plant } from "../types/plant";

export const AddPlant = (
  name: string,
  type: string,
  interval: number,
  imageURL: string,
) => {
  const NewPlant: Plant = {
    id: Guid.create(),
    name,
    type,
    interval,
    imageURL,
    isWatered: false,
    nextInterval: new Date(new Date().setDate(new Date().getDate() + interval)),
  };

  return NewPlant;
};

export const DeletePlant = () => {};

export const EditPlant = () => {};

export const GetAllPlants = () => {
  let plants;

  function Load() {
    plants = JSON.parse(localStorage.getItem("plants") || "[]");
  }

  if (localStorage.getItem("plants") !== null) {
    return Load();
  } 
  
};
