import React, {Component} from 'react';
import Navbar from "../navbar/Navbar";
import MainContent from "../maincontent/MainContent";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <>

                <Navbar/>
                <MainContent/>

            </>
        );
    }
}

export default Home;