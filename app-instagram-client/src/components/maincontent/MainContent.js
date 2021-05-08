import React, {Component} from 'react';
import "./MainContent.css";
import Grid from "@material-ui/core/Grid";
import StatusBar from "../statusbar/StatusBar";
import MainPage from "../main/MainPage";
import InfoSection from "../infosection/InfoSection";
import Suggestion from "../suggestions/Suggestion";

class MainContent extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <>

                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection/>
                        <Suggestion/>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>

            </>
        );
    }
}

export default MainContent;