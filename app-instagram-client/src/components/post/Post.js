import React, {Component} from 'react';
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import love from "../../images/images/love.svg";
import comment from "../../images/images/comment.svg";
import share from "../../images/images/share.svg";

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        // let data = [
        //     {
        //         "username": "Asadbek",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 1"
        //     },
        //     {
        //         "username": "Jasadbek",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 2"
        //     },
        //     {
        //         "username": "Xasadbek",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 3"
        //     }
        // // ];
        // this.setState({commentList: data});
        fetch('http://localhost:8084/comment/' + this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({commentList: data});
            });
    }

    submitComments = (event) => {
        if (event.key == "Enter") {
            let comment = event.currentTarget.value;
            if (comment != null || comment != undefined) {

                //    ...
                let payload = {
                    "commentId": Math.floor(Math.random() * 100000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "timeStamp": new Date().getTime(),
                    "comment": comment,
                    "username": "User " + Math.floor(Math.random() * 10).toString()
                }

                const requestOptions = {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(payload),
                }

                fetch("http://localhost:8084/comment", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.getComments();
                    })
                    .catch(error => {
                    })
                //    ...

            }
        }
    }

    render() {
        return (
            <>
                <div className="post__container">

                    <div className="post__header">
                        <Avatar className="post__image" src=""/>
                        <div className="post__username">{this.props.username}</div>
                    </div>

                    <div>
                        <img src={this.props.postImage} width="615px" alt="postimage"/>
                    </div>

                    <div>
                        <div style={{"marginLeft": "10px"}}>
                            <img src={love} alt="" className="post_reactimage"/>
                            <img src={comment} alt="" className="post_reactimage"/>
                            <img src={share} alt="" className="post_reactimage"/>
                        </div>
                        <div style={{"fontWeight": "bold", "marginLeft": "20px"}}>
                            {this.props.likes} likes
                        </div>
                    </div>

                    {/*Comment sections*/}
                    <div>
                        {
                            this.state.commentList.map((item, index) => (
                                index < 4 ?
                                    <div className="post_comment">{item.username}: {item.comment}</div>
                                    :
                                    <span></span>
                            ))
                        }
                        <input type="text" onKeyPress={this.submitComments} className="post__commentbox"
                               placeholder="Add a comment..."/>
                    </div>
                    {/*Comment sections*/}

                </div>

            </>
        );
    }

}

export default Post;