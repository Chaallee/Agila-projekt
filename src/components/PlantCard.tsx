import type { Plant } from "../types/plant"
import "./PlantCard.css"

interface PlantCardProps{
    plant: Plant
}

const PlantCard = ({plant}: PlantCardProps) => {
    return <div className="card">
        <p>{plant.name}</p>
        <p>{plant.type}</p>
        <p>{plant.interval}</p>
        {plant.imageURL && <img src="{plant.imageURL}" className="plantImage"></img>}
    </div>
}


export default PlantCard;