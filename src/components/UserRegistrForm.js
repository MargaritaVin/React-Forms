import { useState } from "react";
import isEmailValid from "../addition/isEmailValid";

const UserRegistrForm = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassValue, setConfirmPassValue] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const handleEmailChange = ({target: {value}}) => {
        if (errMessage) {
            setErrMessage('');
        }
        setEmailValue(value);
    }
    const handlePasswordChange = ({target: {value}}) => {
        if (errMessage) {
            setErrMessage('');
        }
        setPasswordValue(value);
    }
    const handleConfirmPassChange = ({target: {value}}) => {
        if (errMessage) {
            setErrMessage('');
        }
        setConfirmPassValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailValue === "" || passwordValue === "" || confirmPassValue === "") {
            setErrMessage("All fields are required!");
            return
        } 
        if (!isEmailValid(emailValue)) {
            setErrMessage("Please, enter valid email!");
            return
        }
        if (passwordValue !== confirmPassValue) {
            setErrMessage("Password not confirmed! Please enter the correct password!");
            return
        }
        console.log({email: emailValue, password: passwordValue, confirm: confirmPassValue});
    }

    const handleResetClick = () => {
        setEmailValue("");
        setPasswordValue("");
        setConfirmPassValue("");
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h1>Registration form:</h1>
            <label>
                Email:{" "}
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email..." 
                    value={emailValue} 
                    onChange={handleEmailChange}
                />
            </label>
            <label>
                Password:{" "}
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password..." 
                    value={passwordValue} 
                    onChange={handlePasswordChange}
                />
            </label>
            <label>
                Confirm password:{" "}
                <input 
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password..." 
                    value={confirmPassValue} 
                    onChange={handleConfirmPassChange}
                />
            </label>
            {errMessage && <p className="error">{errMessage}</p>}
            <div>
                 <button type="submit">Sign up</button>
                 <button type="reset" onClick={handleResetClick}>Reset</button>
            </div>
        </form>
    )
};

export default UserRegistrForm;