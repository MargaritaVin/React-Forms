import { useState } from "react";
import {isEmailValid} from "../helpers/validations";

const UserRegistrationForm = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassValue, setConfirmPassValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = ({target: {value}}) => {
        if (errorMessage) {
            setErrorMessage('');
        }
        setEmailValue(value);
    }
    const handlePasswordChange = ({target: {value}}) => {
        if (errorMessage) {
            setErrorMessage('');
        }
        setPasswordValue(value);
    }
    const handleConfirmPassChange = ({target: {value}}) => {
        if (errorMessage) {
            setErrorMessage('');
        }
        setConfirmPassValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailValue === "" || passwordValue === "" || confirmPassValue === "") {
            setErrorMessage("All fields are required!");
            return;
        } 
        if (!isEmailValid(emailValue)) {
            setErrorMessage("Please, enter valid email!");
            return;
        }
        if (passwordValue !== confirmPassValue) {
            setErrorMessage("Passwords must be the same!");
            return;
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
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div>
                 <button type="submit">Sign up</button>
                 <button type="reset" onClick={handleResetClick}>Reset</button>
            </div>
        </form>
    )
};

export default UserRegistrationForm;