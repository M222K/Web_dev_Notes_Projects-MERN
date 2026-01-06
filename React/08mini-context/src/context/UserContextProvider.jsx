import React, { useState } from "react";
import UserContext from "./UserContext";

//provider is a simple method
//need to provide it will have children inside it

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);
    //now this data should be accesible to all children


    //we pass on the data to give to children as object in value 

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}
//now we wrap our app.jsx in usercontext rather than empty fragment so all children inside it knows the data
export default UserContextProvider;