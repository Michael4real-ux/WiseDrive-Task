import { getVehicles } from "./wisedriveController";

//get arguments
const args = process.argv;
const choiceArgs = ["date", "typename"];
const filterArgs = args.filter(arg=> choiceArgs.includes(arg.split("=")[0].toLowerCase()))
const argsObject = Object.fromEntries(filterArgs.map(elem=> elem.split("=")))
if( Object.keys(argsObject).length !== 2){
    console.log( "Enter typename , date")
    process.exit()
}
const {typename, date} = argsObject
console.log(getVehicles(typename, date))