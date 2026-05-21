import { useEffect, useRef, useState } from "react";
import { AddPlant, GetAllPlants } from "./services/plantService";
import type { Plant } from "./types/plant";
import PlantCardList from "./components/PlantCardList";
function App() {
  const [imageBase64, setImageBase64] = useState("");
  const [plants, setPlants] = useState<Plant[]>(GetAllPlants());

  const plantNameText = useRef<HTMLInputElement>(null);
  const plantTypeText = useRef<HTMLInputElement>(null);
  const intervalText = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const HandleImageChange = () => {
    const file = imageInputRef.current?.files?.[0];

    if (!file)
        return;

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
      const imageUrl = imageInputRef.current.value;

      const plant = AddPlant(plantName, plantType, interval, imageUrl);
      const updatedPlants = [...plants,plant]
      setPlants(updatedPlants)
      localStorage.setItem("plants", JSON.stringify(updatedPlants))
      plantNameText.current.value = "";

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
          <input type="file" accept="image/*" ref={imageInputRef} onChange={HandleImageChange} />
          
          {imageBase64 && <img width={50} height={50} src={imageBase64} />}
        </div>

        <button onClick={handleAddPlant}>Add plant</button>
      </div>
      <PlantCardList plants={plants}></PlantCardList>
    </>
  );
}

export default App;
