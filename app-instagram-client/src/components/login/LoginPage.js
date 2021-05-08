import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import "./LoginPage.css";
import inst_image from "../../images/images/9364675fb26a.svg";
import inst_logo from "../../images/images/logoinsta.png";
import fb from "../../images/images/fb.png";
import playstore from "../../images/images/play.png";
import appstore from "../../images/images/app.png";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: true
        }
    }

    changeLogin = () => {
        if (this.state.isLogin) {
            this.setState({isLogin: false});
        } else {
            this.setState({isLogin: true});
        }
    }

    render() {
        return (
            <>

                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} width="454px" alt=""/>
                            </div>
                            <div>
                                <div className="loginpage__rightcomponent">
                                    <img className="loginpage__logo" src={inst_logo} alt=""/>
                                    <div className="loginpage__signin">
                                        {
                                            this.state.isLogin ?
                                                <SignIn/>
                                                :
                                                <SignUp/>
                                        }
                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">OR</div>
                                            <div className="login__dividor"></div>
                                        </div>
                                        <div className="login__fb">
                                            <img src={fb} width="15px" style={{"marginRight": "5px"}}/>Log in with
                                            Facebook
                                        </div>
                                        <div className="login__forgt">Forgot password?</div>
                                    </div>
                                </div>

                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="loginpage__signin">
                                            Don't have an account?
                                            <span onClick={this.changeLogin}
                                                  style={{"fontWeight": "bold", "color": "#0395F6"}}
                                            >
                                                Sign up
                                            </span>
                                        </div>
                                        :
                                        <div className="loginpage__signup">
                                            Have an account?
                                            <span
                                                onClick={this.changeLogin}
                                                style={{"fontWeight": "bold", "color": "#0395F6"}}
                                            >
                                                Sign in
                                            </span>
                                        </div>
                                    }
                                </div>
                                <div className="loginpage__dowloadsection">
                                    <div>
                                        Get the App.
                                    </div>
                                    <div className="loginpage__option">
                                        <img className="loginpage__dwimg" src={appstore} alt="appstore" width="136px"/>
                                        <img className="loginpage__dwimg" src={playstore} alt="playstore"
                                             width="136px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>

            </>
        );
    }
}

export default LoginPage;