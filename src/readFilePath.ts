import {csvToJson} from "./convertCsvToJson"

// Read file path
export const readcsv =  (file_path:string) => {
    const json = csvToJson(file_path)
    return json
};