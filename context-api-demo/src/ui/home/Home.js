import { useContext } from "react";
import {  MyAppContext2 } from "../../AppContext";


function Home() {
    const {firstName, lastName, getFullName} = useContext(MyAppContext2);
    return(
       <div>
         <h2> Home </h2>
         <p>{firstName}</p>
         <p>{lastName}</p>
         <p>{getFullName()}</p>
       </div>
    );
}
    
   

export default Home;