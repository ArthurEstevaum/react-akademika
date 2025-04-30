import React from "react";
import { createContext } from "react";

export const UserData = createContext({})

export const UserDataProvider = ({children}:any) =>{

    const [userName, setUserName] = React.useState<string>("Ray")
    const idade ={ value: 18};

    return <UserData.Provider value={{userName, idade}}>
        {children}
    </UserData.Provider>
}