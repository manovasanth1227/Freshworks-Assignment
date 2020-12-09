var  fs= require('fs');
var path = __dirname;
const deleteFileStore =   (key,paths) =>{
    if(paths) {
        path = paths;
    }
    if(key === undefined){
        console.log("Error: Could not parse GET data")
        return
    }
    //
    fs.readFile(path + '/FileStorage.json', 'utf8', (err, data) => {
        if(err)
            console.log("Error: Could not read data")
        else{
            obj = JSON.parse(data)
            const currentTime = Date.now()

            if(key in obj && (currentTime - obj[key]["createdTime"] > obj[key]["ttl"] * 1000 )){
                //Deleting from object and then using JSON.stringify to store in file
                delete obj[key]
                json = JSON.stringify(obj)
                fs.writeFile(path + '/FileStorage.json', json, 'utf8', (err) => {
                    if(err)
                        console.log("Error: Could not delete from file")
                    else
                    console.log("Successfully deleted data")
                })
            }
            else  {
                if(key in obj){
                    console.log("key is not available for read / delete operation - Lime To Live property ")
                }
                else{
                    console.log("Error: No such key found")
                }
                
            }
        }
    })

}

module.exports = deleteFileStore;