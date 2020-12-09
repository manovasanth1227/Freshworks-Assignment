step 1  :  
Import the Options file in your test_file.js
code ----- var test = require("./Options.js")

Options has 3 methods ====>  create, read, remove

step 2  :
To create a entry in JSON file, Use Command Line,
code ------ test.create(key,value,ttl,path)
key => It should be a String and it is unique between the entries
value => It should be a Object(JS) / JSON 
ttl => TIME TO LIVE - time in secs
path => path for the JSON file to be created/ if not specified, the program creates a FileStroage.JSON file is created

Execute the test file in Command line 
---------Node test_file.js----------------


To add entry to the existing file, 
again follow step 2


step 3 :
Import the Options file in your test_file.js
code ----- var test = require("./Options.js")

To read a entry in JSON file, use Command Line
code------- test.read(key,path)
key => The program will identify the respective data with key 
path => path for the JSON file to be created/ if not specified, the program creates a FileStroage.JSON file is created 

Execute the test file in Command line 
---------Node test_file.js----------------
It returns a (Object)

To read another entry, 
again follow step 3


step 4 : 
To delete a entry in JSON file, 
Import the Options file in your test_file.js
code ----- var test = require("./Options.js")
code------- test.remove(key,path)
key => The program will identify the respective data with key and delete that record 
path => path for the JSON file to be created/ if not specified, the program creates a FileStroage.JSON file is created 

use Command Line
Execute the test file in Command line 
---------Node test_file.js----------------
It returns a (Object)

To delete another entry, 
again follow step 4



==============RESPECTIVE OUTPUT AND ERRORS CAN BE SEEN IN COMMAND LINE INTERFACE=============













