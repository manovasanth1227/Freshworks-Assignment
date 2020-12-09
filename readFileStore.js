var  fs= require('fs');
var remove = require('./deleteFileStore');
var path = __dirname;
var res;


 const readFileStore =   (key,paths) =>{
    if(paths) path= paths;
    const currentTime = Date.now();
    res = JSON.parse(fs.readFileSync(path + "/FileStorage.json", function(err, data) {
        if(err) console.log("check the file path");
        else{
            res = (data);
            //console.log(res);         
        }
    }))
    if(key in res){
        if(((currentTime - res[key]["createdTime"] < res[key]["ttl"] * 1000)) ||  res[key]["ttl"] ==-1){

            return res[key].value;
        }
        else{
            console.log("Key is not available for read/delete operations");
        }
        

    }else{
        console.log("Error : Key Doesn't Exist");
    }

}

// const readFileStore = (paths)=>{
//     var data = readFile(paths);
//     return data;
// }


module.exports = readFileStore;