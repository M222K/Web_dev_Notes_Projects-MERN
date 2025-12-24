const fs=require('fs'); //file system module to read and write files
const { type } = require('os');
const filePath='./tasks.json';


//to grab the command from shell we use process.argv
const command=process.argv[2]; //generally the command will be at index 2 before that we have node and file name
const argument=process.argv[3]; //argument will be at index 3

// we need to load task from the file first 
const loadTask=()=>{
    // similar to making webrequest we use try catch block to handle error
    try{
        //read the file
        const dataBuffer=fs.readFileSync(filePath); //this dont directly return string ,it return a buffer object that contain the data need to convert it to string
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch(e){
        return [];//if file not found return empty array
    }
}
const addTask=(task)=>{
    const tasks=loadTask(); //load existing tasks as array of objects
    tasks.push({task});
    saveTasks(tasks);//save the updated tasks array back to file
    console.log('Task added successfully');
}

const ListTask=()=>{
    const tasks=loadTask();
    tasks.forEach((task, index)=>{
        console.log(`${index+1}-${task.task}`);
    })
}

const saveTasks=(tasks)=>{
    const dataJSON=JSON.stringify(tasks); //convert array of objects to json string to dave back to file
    fs.writeFileSync(filePath,dataJSON);
}

const removeTask=(taskIndex)=>{
console.log(typeof taskIndex,taskIndex);
const tasks=loadTask();
if(taskIndex>0 && taskIndex<=tasks.length){
    tasks.splice(taskIndex-1,1);
    saveTasks(tasks);
    console.log("Task removed succesfully");
}else{
    console.log("invalid task index");
}
}



if(command==='add'){
    addTask(argument);
}else if(command==='List'){
    ListTask();
}else if(command==='remove'){
    removeTask(parseInt(argument));
}else{
    console.log('invalid command');
}
