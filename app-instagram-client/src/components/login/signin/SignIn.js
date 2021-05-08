import React, {Component} from 'react';
import "../LoginPage.css";
import {storage, auth} from "../../firebase";

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emailId: null,
            password: null
        }
    }

    login = () => {
        // localStorage.setItem("users", "admin");
        // window.location.reload();
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                localStorage.setItem("users", JSON.stringify(user));
                window.location.reload();
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    render() {
        return (
            <>

                <input
                    className="loginpage__text" type="text"
                    onChange={(event) => {
                        this.state.emailId = event.currentTarget.value
                    }}
                    placeholder="Phone number, Username, or email"
                />
                <input
                    className="loginpage__text"
                    onChange={(event) => {
                        this.state.password = event.currentTarget.value
                    }}
                    type="password" placeholder="Password"
                />
                <button className="login__button" onClick={this.login}>Log in</button>

            </>
        );
    }
}

export default SignIn;