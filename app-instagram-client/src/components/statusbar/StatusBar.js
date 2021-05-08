import React, {Component} from 'react';
import "./StatusBar.css";
import Avatar from "@material-ui/core/Avatar";
import statusimg from "../../images/images/pp1.png"
import uploadImage from "../../images/images/statusadd.png";

class StatusBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            statusList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "anindya_bunny",
                "imageURL": "https://darresne.com/img/female-avatar.png"
            },
            {
                "username": "abcs",
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU"
            },
            {
                "username": "qwe",
                "imageURL": "https://www.w3schools.com/w3css/img_avatar3.png"
            },
            {
                "username": "jyjj",
                "imageURL": "https://darresne.com/img/female-avatar.png"
            },
            {
                "username": "jyjj",
                "imageURL": "https://www.w3schools.com/w3css/img_avatar3.png"
            },
            {
                "username": "jyjj",
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGonDgYzVXUcaKSWbvyH_ICVD23aI4zlRMJQ&usqp=CAU"
            },
            {
                "username": "jyjj",
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU"
            },
            {
                "username": "jyjj",
                "imageURL": "../../images/images/pp1.png"
            }
        ]
        this.setState({statusList: data});
    }

    render() {
        return (
            <>

                <div className="statusbar__container">
                    <img src={uploadImage} className="statusbar__upload" alt="uploadImage" height="55px" width="55px"/>
                    {
                        this.state.statusList.map((item, index) => (
                            <div className="status">
                                <Avatar className="statusbar__status" src={item.imageURL}/>
                                <div className="statusbar__text">{item.username}</div>
                            </div>
                        ))
                    }

                </div>

            </>
        );
    }
}

export default StatusBar;