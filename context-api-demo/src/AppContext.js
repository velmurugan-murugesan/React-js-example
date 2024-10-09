import { createContext, useState } from "react";

export const MyAppContext2 = createContext()




export const MyProvider = ({ children }) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    function getFullName() {
        return firstname+" "+lastname;
    }

    return (
        <MyAppContext2.Provider value={{firstname, setFirstname, lastname,setLastname, getFullName}}>
        {children}
    </MyAppContext2.Provider>
    );
};