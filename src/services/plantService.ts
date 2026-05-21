import { Guid } from "guid-typescript";
import type { Plant } from "../types/plant";
import { useState } from "react";

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
  const PlantList 
  return NewPlant;
};

export const DeletePlant = () => {};

export const EditPlant = () => {};


export const GetAllPlants = () => {
  let plants : Array<Plant>


  function Load() {
    plants = JSON.parse(localStorage.getItem("plants") || "[]");
    return plants;
}

  if (localStorage.getItem("plants") !== null) {
    return Load();
  } 
  
};
