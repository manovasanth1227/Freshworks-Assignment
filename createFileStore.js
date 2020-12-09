var  fs= require('fs');
var path = __dirname;
var t=0;

const createFile = async(key,value,ttl,paths) =>{
    var time=-1;
    if(paths) path= paths; 
    if(ttl!=-1){
        time  = ttl;
    }
    if(time==undefined)time =-1;
    await fs.readFile(path + "/FileStorage.json",'utf8', async function(err,res) {
        const currentTime = Date.now();
        if (err) {
            if(time==undefined)time =-1;
            var obj = {[key]: {"value": value, "createdTime": currentTime, "ttl": time}}
            data = JSON.stringify(obj);
            await fs.writeFile(path + '/FileStorage.json',data , 'utf8' , (err) =>{
                if(err){
                    console.log("check the file path");
                }
                else{
                    flag=1;
                    console.log( 'Successfully created and added data with key == ' +key);
                }
            })
            
        }
        else{
           var obj = JSON.parse(res);
           //console.log( obj);
            if(!(key in obj) || ((currentTime - obj[key]["createdTime"] > obj[key]["ttl"] * 1000) && obj[key]["ttl"] != -1)){
                if(time==undefined)time =-1;

                obj[key] ={"value": value, "createdTime": currentTime, "ttl": time}

                data = JSON.stringify(obj)
               await fs.writeFile(path + '/FileStorage.json', data, 'utf8', (err) => {
                    if(err)
                        console.log("Error: Could not write into file");
                    else {
                        console.log("Successfully added data with key == " +key);
                    }
                        
                })
            }
            else if(t==0)
                console.log("Error: Key already exists");
        }
        
    })
}

const createFileStore = (key,value,ttl,paths,) =>{
    t++;
    createFile(key,value,ttl,paths)
}


module.exports = createFileStore;

 

