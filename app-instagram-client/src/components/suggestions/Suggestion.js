import React, {Component} from 'react';
import "./Suggestion.css";
import Avatar from "@material-ui/core/Avatar";
import imageSrc from "../../images/images/pp1.png";

class Suggestion extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <>

                <div className="suggestions__container">
                    <div className="suggestions__header">
                        <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions__body">
                        <div className="suggestions__friends">
                            <Avatar className="suggestions__image" src={imageSrc}/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar className="suggestions__image" src={imageSrc}/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar className="suggestions__image" src={imageSrc}/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar className="suggestions__image" src={imageSrc}/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar className="suggestions__image" src={imageSrc}/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar className="suggestions__image" src={imageSrc}/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Suggestion;