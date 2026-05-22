import type { Plant } from "../types/plant";
import "./PlantCard.css";

interface PlantCardProps {
  plant: Plant;
  onDelete: (plant: Plant) => void;
  onWatered: (plant: Plant) => void;
  onEdit: (plant: Plant) => void;
}

const PlantCard = ({ plant, onDelete, onWatered, onEdit }: PlantCardProps) => {

  const now = new Date();
  const diffMs =  new Date(plant.nextInterval).getTime() - now.getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;

  let nextIntervalTextColor = "grey"
  
  if (diffMs < oneDayMs) {
    nextIntervalTextColor = "red"
  }
  
  return (
    <div className="card">
      {plant.imageURL && (
        <img src={plant.imageURL} className="plantImage" alt={plant.name} />
      )}
      <h3>{plant.name}</h3>
      <p>{plant.type}</p>
      <p>Vattningsintervall: {plant.interval} dagar</p>

      <p style={{color : nextIntervalTextColor}}>Nästa vattning: {new Date(plant.nextInterval).toLocaleDateString("sv-SE")}</p>

      <div className="card-actions">
        <button onClick={() => onEdit(plant)}>Redigera</button>
        <button onClick={() => onWatered(plant)}>Vattnad</button>
        <button onClick={() => onDelete(plant)}>Ta bort</button>
      </div>
    </div>
  );
};

export default PlantCard;
