import type { Plant } from "../types/plant";
import PlantCard from "./PlantCard";

interface PlantCardListProps {
  plants: Plant[];
  onDelete: (plant: Plant) => void;
  onWatered: (plant: Plant) => void;
  onEdit: (plant: Plant) => void;
}

const PlantCardList = ({ plants, onDelete, onWatered, onEdit }: PlantCardListProps) => {
  const List = plants.map((plant) => {
    return <PlantCard plant={plant} onDelete={onDelete} onWatered={onWatered} onEdit={onEdit} />;
  });

  return <> {List} </>;
};

export default PlantCardList;
