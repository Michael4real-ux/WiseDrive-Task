import path from "path"
import {readcsv} from "./readFilePath"

 export const getVehicles =  (inputType: string, inputDate: string) => { 
   
    let matchingBMW: string
    const vehiclesData =  readcsv(path.resolve("./files/vehicles_bmw.csv"))
    inputType = inputType.toLowerCase().replace(/[ ]/g, "")
    const check = vehiclesData.find((vehicle:{[key: string]: string}) => {
        const model = vehicle.model.toLowerCase().replace(/[ ]/g, "")
        const date = vehicle.regDate.toLocaleLowerCase().split(' ')[0]
        if(inputType === model && date === inputDate){
            matchingBMW = vehicle.id
            return true
        }
    })

    if(check){
        const vehicleTypes =  readcsv(path.resolve("./files/vehicle_types.csv"))
        const searchDate = inputDate.split('-').slice(0,2).join('')
        const filter = vehicleTypes.filter((vehicle:{[key: string]: string}) => {
            const typeName = vehicle["typeName"].toLowerCase().replace(/[ ]/g, "")
            if(typeName.includes(inputType) && searchDate >= vehicle.monthOfConstrFrom && searchDate <= vehicle.monthOfConstrTo){
                return true
            }
        })
        const output = filter.map((vehicle:{[key: string]: string}) => {
            const typeName = vehicle["typeName"].toLowerCase().replace(/[ ]/g, "")

            if(typeName.includes(inputType) && searchDate >= vehicle.monthOfConstrFrom && searchDate <= vehicle.monthOfConstrTo){
                return {
                    carID: vehicle.carId,
                    model: inputType,
                    typeName,
                    matchingBMWId: matchingBMW
                }
            }
        })

        return output
    }

    return "No car found"
}




