import type { Plant } from "../types/plant";
import PlantCard from "./PlantCard";

interface PlantCardListProps {
  plants: Plant[];
  onDelete: (plant: Plant) => void;
}

const PlantCardList = ({ plants, onDelete }: PlantCardListProps) => {
  const List = plants.map((plant) => {
    return <PlantCard plant={plant} onDelete={onDelete} />;
  });

  return <> {List} </>;
};

export default PlantCardList;
