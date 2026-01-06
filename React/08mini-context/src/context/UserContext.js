import React from "react";
import User from "../../../07reactrouter/src/components/User/User";
//create context for the user via react context api

const UserContext=React.createContext();

export default UserContext;

//now we will create a wrapper that wrap up the entire context and provide it to each component on demand