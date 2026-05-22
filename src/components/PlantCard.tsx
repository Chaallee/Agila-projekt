import type { Plant } from "../types/plant";
import "./PlantCard.css";

interface PlantCardProps {
  plant: Plant;
  onDelete: (plant: Plant) => void;
  onWatered: (plant: Plant) => void;
  onEdit: (plant: Plant) => void;
}

const PlantCard = ({ plant, onDelete, onWatered, onEdit }: PlantCardProps) => {
  return (
    <div className="card">
      <p>{plant.name}</p>
      <p>{plant.type}</p>
      <p>Vattningsintervall: {plant.interval} Dagar</p>
      <p>Nästa vattning: {new Date(plant.nextInterval).toLocaleDateString()}</p>
      {plant.imageURL && (
        <img src={plant.imageURL} className="plantImage"></img>
      )}
      <button onClick={() => onEdit(plant)}>Redigera</button>
      <button onClick={() => onWatered(plant)}>Vattnad</button>
      <button onClick={() => onDelete(plant)}>Ta bort</button>
    </div>
  );
};

export default PlantCard;
