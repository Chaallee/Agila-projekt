import { useEffect, useRef, useState } from "react";
import "./App.css";
import { AddPlant, GetAllPlants } from "./services/plantService";
import type { Plant } from "./types/plant";
import PlantCardList from "./components/PlantCardList";
function App() {
  const [imageBase64, setImageBase64] = useState("");
  const [plants, setPlants] = useState<Plant[]>(GetAllPlants());
  const [plantToEdit, setPlantToEdit] = useState<Plant>();

  const plantNameText = useRef<HTMLInputElement>(null);
  const plantTypeText = useRef<HTMLInputElement>(null);
  const intervalText = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const HandleImageChange = () => {
    const file = imageInputRef.current?.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleAddPlant = () => {
    if (
      plantNameText.current &&
      plantTypeText.current &&
      intervalText.current &&
      imageInputRef.current
    ) {
      const plantName = plantNameText.current.value;
      const plantType = plantTypeText.current.value;
      const interval = Number.parseInt(intervalText.current.value);

      const plant = AddPlant(plantName, plantType, interval, imageBase64);
      const updatedPlants = [...plants, plant];
      setPlants(updatedPlants);
      localStorage.setItem("plants", JSON.stringify(updatedPlants));
      plantNameText.current.value = "";
    }
  };
  const DeletePlant = (plant: Plant) => {
    const updatedPlants = plants.filter((p) => p.id !== plant.id);
    setPlants(updatedPlants);
    localStorage.setItem("plants", JSON.stringify(updatedPlants));
  };

  const handleWaterPlant = (plant: Plant) => {
    const updatedPlants = plants.map((p) =>
      p.id === plant.id
        ? {
            ...p,
            isWatered: true,
            nextInterval: new Date(
              new Date().setDate(new Date().getDate() + p.interval),
            ),
          }
        : p,
    );
    setPlants(updatedPlants);
    localStorage.setItem("plants", JSON.stringify(updatedPlants));
  };

  const handleEditPlant = (plant: Plant) => {
    if (plantNameText.current) {
      plantNameText.current.value = plant.name;
      setPlantToEdit(plant);
    }
  };

  const acceptEditPlant = () => {
    if (
      plantNameText.current &&
      plantTypeText.current &&
      intervalText.current &&
      imageInputRef.current
    ) {
      const interval = Number.parseInt(intervalText.current.value);
      const plantName = plantNameText.current.value;
      const plantType = plantTypeText.current.value;
      const updatedPlants = plants.map((p) =>
        p.id === plantToEdit?.id
          ? {
              ...p,
              name: plantName,
              type: plantType,
              interval: interval,
              imageUrl: imageBase64,
            }
          : p,
      );
      setPlants(updatedPlants);
      localStorage.setItem("plants", JSON.stringify(updatedPlants));
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
          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={HandleImageChange}
          />

          {imageBase64 && <img width={50} height={50} src={imageBase64} />}
        </div>

        <div className="form-actions">
          <button onClick={handleAddPlant}>Add plant</button>
          <button onClick={acceptEditPlant}>Edit plant</button>
        </div>
      </div>
      <PlantCardList
        plants={plants}
        onDelete={DeletePlant}
        onWatered={handleWaterPlant}
        onEdit={handleEditPlant}
      />
    </>
  );
}

export default App;
