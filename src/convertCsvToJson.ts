import fs from 'fs'

 export function csvToJson(filename:string){
    let content = fs.readFileSync(filename, "utf-8");
    //strip trailing whitespaces 
    content = content.trim();
    let lines = content.split("\n");
    let headers = lines[0].split(",").map( item=> item.trim());
    let rows = lines.slice(1).map( line=>{
        //handle incomplete rows
        if(line.replace(/[^,]/g, "").length !== headers.length - 1 ){
            //remove trailing commas
            let oddlineArr = line.split('"').map(item=>{
                item = item[0] ==="," ? item.slice(1) : item;
                item = item.slice(-1) == "," ? item.slice(0, item.length -1) : item
                if( item.includes(")")){
                    return item.trim()
                }
                return item.trim().split(",")
            }).flat();

            return oddlineArr
        }else{
            return line.trim().split(",")
        }
    })
    let jsonArray = rows.map( columns=>  columns.reduce( (acc, columnValue, index)=>({...acc, [headers[index]]:columnValue}) , {}) )
    return jsonArray;
}



