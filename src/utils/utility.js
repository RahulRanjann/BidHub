import { VEHICLE_TYPE_MAP } from "./constants"

export const getUniqueVehicleType=(listOfVehicle)=>{
    const uniqueTypes = new Set(listOfVehicle.map(vehicle =>(vehicle.typeOfVehicle)))
    const mappedType = Array.from(uniqueTypes).map(type => VEHICLE_TYPE_MAP[type]).filter(mappedType =>mappedType)
    return mappedType.join("/")
}


// const getUniqueVehicleType=(listOfVehicle)=>
// {   const arr=[]
//     for (let index = 0; index < listOfVehicle.length; index++) {
//         if(!arr.includes(listOfVehicle[index].typeOfVehicle))
//         {
//             arr.push(listOfVehicle[index].typeOfVehicle);
//         }
        
//     }
// }