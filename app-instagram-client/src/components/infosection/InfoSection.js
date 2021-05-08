import React, {Component} from 'react';
import "./InfoSection.css";
import {Avatar} from "@material-ui/core";
import imageSrc from "../../images/images/pp1.png";

class InfoSection extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <>

                <div className="info__container">
                    <Avatar className="info__image" src={imageSrc}/>
                    <div className="info__content">
                        <div className="info__username">Aninidyya_Sevs</div>
                        <div className="info__description">Description</div>
                    </div>
                </div>

            </>
        );
    }
}

export default InfoSection;