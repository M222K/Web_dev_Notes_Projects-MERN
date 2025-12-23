function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject({name:"mahak",age:22});
        },3000);
    })
}

async function getUserData(){
    try{
        const userData=await fetchUserData();
        console.log(`User Data fetch succesfully`);
        console.log(userData);
    }catch(error){
        console.log("Error fetching user data:", error);
    }
}

getUserData();