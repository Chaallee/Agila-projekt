import type { Plant } from "../types/plant"

const PlantCard = ({plant}: PlantCardProps) => {
    return <div>
        <p>{plant.name}</p>
    </div>
}

interface PlantCardProps{
    plant: Plant
}

export default PlantCard;