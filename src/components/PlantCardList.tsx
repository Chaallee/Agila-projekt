import type { Plant } from "../types/plant"
import PlantCard from "./PlantCard"

interface PlantCardListProps{
    plants: Plant[]
}

const PlantCardList = ({plants}: PlantCardListProps) =>{
    const List = plants.map(plant =>{
        return(<PlantCard plant={plant}/>)

    })  
    
    return(<> {List} </>)
}



export default PlantCardList