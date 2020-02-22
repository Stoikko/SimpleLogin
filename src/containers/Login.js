import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ReactDOM from 'react-dom';
import "./Login.css";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function shouldEnableSubmit() {
        return email.length > 0
            && password.length > 0
            && password === confirmPassword
            && username.length > 0
            && validateEmail(email);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function checkFields(event){
        if(username.length <= 0){
            const element = <small id="userNameError" className="form-text text-muted" style={{color:'red'}}>Please Enter a Username</small>;
            ReactDOM.render(element, document.getElementById('userNameError'));
        } else {
            const element = <small id="userNameError"> </small>;
            ReactDOM.render(element, document.getElementById('userNameError'));
        }

        if(!validateEmail(email)){
            const element = <small id="emailError" className="form-text text-muted" style={{color:'red'}}>Invalid Email</small>;
            ReactDOM.render(element, document.getElementById('emailError'));
        } else {
            const element = <small id="emailError"> </small>;
            ReactDOM.render(element, document.getElementById('emailError'));
        }

        if(password !== confirmPassword){
            const element = <small id="passwordError" className="form-text text-muted" style={{color:'red'}}>Passwords Do Not Match</small>;
            ReactDOM.render(element, document.getElementById('passwordError'));
        } else {
            const element = <small id="passwordError"> </small>;
            ReactDOM.render(element, document.getElementById('passwordError'));
        }
    }

    function validateEmail(address) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(address);
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={username}
                        maxLength={15}
                        onChange={function(event){ setUsername(event.target.value); checkFields()}}
                        onBlur={e => checkFields(e)}
                    />
                    <small id="emailHelp" className="form-text text-muted">Username must be 15 characters or less</small>
                    <br />
                    <small id="userNameError"> </small>
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        value={email}
                        onChange={function(event){ setEmail(event.target.value); checkFields()}}
                        onBlur={e => checkFields(e)}
                    />
                    <small id="emailError"> </small>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={password}
                        onChange={function(event){ setPassword(event.target.value); checkFields()}}
                        onBlur={e => checkFields(e)}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={confirmPassword}
                        onChange={function(event){ setConfirmPassword(event.target.value); checkFields()}}
                        onBlur={e => checkFields(e)}
                        type="password"
                    />
                    <small id="passwordError"> </small>
                </FormGroup>
                <Button block bsSize="large" disabled={!shouldEnableSubmit()} type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
}