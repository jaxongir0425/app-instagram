import React, {Component} from 'react';
import "./Navbar.css";
import Grid from "@material-ui/core/Grid";
import inst_logo from "../../images/images/logoinsta.png";
import home from "../../images/images/home.svg";
import message from "../../images/images/message.svg";
import find from "../../images/images/find.svg";
import react from "../../images/images/love.svg";
import Avatar from "@material-ui/core/Avatar";
import pp from "../../images/images/pp1.png";

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <>

                <div className="navbar__barContent">
                    <Grid container>

                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                            <img className="navbar__logo" src={inst_logo} width="105px" alt="inst_logo"/>
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navbar__searchBar" placeholder="Search"/>
                        </Grid>
                        <Grid item xs={3} style={{"display": "flex"}}>
                            <img className="navbar__img" src={home} alt="Image" width="25px"/>
                            <img className="navbar__img" src={message} alt="Image" width="25px"/>
                            <img className="navbar__img" src={find} alt="Image" width="25px"/>
                            <img className="navbar__img" src={react} alt="Image" width="25px"/>
                            <Avatar src={pp} className="navbar__img" style={{"maxWidth" : "25px", "maxHeight" : "25px"}}/>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>

                    </Grid>
                </div>

            </>
        );
    }
}

export default Navbar;