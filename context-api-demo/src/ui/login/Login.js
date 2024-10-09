import { useContext } from "react";
import {  MyAppContext2 } from "../../AppContext";

function Login() {

    const {firstname, setFirstname} = useContext(MyAppContext2);
    const {lastName, setLastname} = useContext(MyAppContext2);
    function onUsernameChange(event) {
        setFirstname(event.target.value)
    }

    function onLastNameChange(event) {
        setLastname(event.target.value)
    }

    return(

        <div>
            <h2>Login Screen</h2>
            <input placeholder="First name" value={firstname} onChange={onUsernameChange}></input>

            <input placeholder="Last name" value={lastName} onChange={onLastNameChange}></input>
        </div>
    );
};

export default Login;