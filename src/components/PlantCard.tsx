import type { Plant } from "../types/plant";
import "./PlantCard.css";

interface PlantCardProps {
  plant: Plant;
  onDelete: (plant: Plant) => void;
}

const PlantCard = ({ plant, onDelete }: PlantCardProps) => {
  return (
    <div className="card">
      <p>{plant.name}</p>
      <p>{plant.type}</p>
      <p>Vattningsintervall: {plant.interval}</p>
      {plant.imageURL && (
        <img src={plant.imageURL} className="plantImage"></img>
      )}
      <button onClick={() => onDelete(plant)}>Ta bort</button>
    </div>
  );
};

export default PlantCard;
