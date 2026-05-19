import { useRef, useState } from "react";
import { AddPlant } from "./services/plantService";
import type { Plant } from "./types/plant";

function App() {
  const plants: Array<Plant> = [];

  const plantNameText = useRef<HTMLInputElement>(null);
  const plantTypeText = useRef<HTMLInputElement>(null);
  const intervalText = useRef<HTMLInputElement>(null);
  const imageUrlText = useRef<HTMLInputElement>(null);

  const handleAddPlant = () => {
    let plant;

    if (
      plantNameText.current &&
      plantTypeText.current &&
      intervalText.current &&
      imageUrlText.current
    ) {
      const plantName = plantNameText.current.value;
      const plantType = plantTypeText.current.value;
      const interval = Number.parseInt(intervalText.current.value);
      const imageUrl = imageUrlText.current.value;

      plant = AddPlant(plantName, plantType, interval, imageUrl);
      plants.push(plant);
      localStorage.setItem("plants", JSON.stringify(plants))
    }
  };

  return (
    <>
      <h1>Blommor</h1>
      <div>
        <h1>Add plant</h1>

        <div className="field">
          <p>Plant name</p>
          <input type="text" ref={plantNameText}></input>
        </div>

        <div className="field">
          <p>Plant type</p>
          <input type="text" ref={plantTypeText}></input>
        </div>

        <div className="field">
          <p>Watering interval</p>
          <input type="number" ref={intervalText}></input>
        </div>

        <div className="field">
          <p>Image URL</p>
          <input type="text" ref={imageUrlText}></input>
        </div>

        <button onClick={handleAddPlant}>Add plant</button>
      </div>
    </>
  );
}

export default App;
