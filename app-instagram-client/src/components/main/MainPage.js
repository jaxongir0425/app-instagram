import React, {Component} from 'react';
import "./MainPage.css";
import Post from "../post/Post";
import uploadImage from "../../images/images/upload.png";
import {storage, auth} from "../firebase";

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postArray: [],
            progressBar: ""
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        // let data = [
        //     {
        //         "postId": "123456",
        //         "username": "Anindya",
        //         "postimageUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fz%2Fstock-photo-amazing-autumn-sunrise-scene-in-the-forest-golden-picturesque-morning-dawn-sunlight-imnage-river-1201199815.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Famazing-autumn-sunrise-scene-forest-golden-1201199815%3Fsrc%3DY8bG1GJLMPGTe9yoPkpUyw-2-83&tbnid=CcsIi6y8Rj3qwM&vet=12ahUKEwirwZbn57TwAhVWzCoKHeoLBuwQMygoegUIARD6AQ..i&docid=ZRu_7yZuKf_UZM&w=1500&h=1101&itg=1&q=imnage&ved=2ahUKEwirwZbn57TwAhVWzCoKHeoLBuwQMygoegUIARD6AQ",
        //         "timeStamp": "12345",
        //         "likes": "1245"
        //     },
        //     {
        //         "postId": "123456",
        //         "username": "Annamariya",
        //         "postimageUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages2.boardingschoolreview.com%2Fphoto%2F1122x864%2F1000%2F593%2Fimg-academy-Kiq7qm.jpg&imgrefurl=https%3A%2F%2Fwww.boardingschoolreview.com%2Fimg-academy-profile&tbnid=yJgEJeJEJrUJTM&vet=12ahUKEwixq_ex3bTwAhVMCHcKHcRgD0oQMygLegUIARC-AQ..i&docid=36eOzyquPEtGjM&w=1122&h=632&q=img&ved=2ahUKEwixq_ex3bTwAhVMCHcKHcRgD0oQMygLegUIARC-AQ",
        //         "timeStamp": "12345",
        //         "likes": "1245"
        //     },
        //     {
        //         "postId": "123456",
        //         "username": "Ronaldo",
        //         "postimageUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages2.boardingschoolreview.com%2Fphoto%2F1122x864%2F1000%2F593%2Fimg-academy-Kiq7qm.jpg&imgrefurl=https%3A%2F%2Fwww.boardingschoolreview.com%2Fimg-academy-profile&tbnid=yJgEJeJEJrUJTM&vet=12ahUKEwixq_ex3bTwAhVMCHcKHcRgD0oQMygLegUIARC-AQ..i&docid=36eOzyquPEtGjM&w=1122&h=632&q=img&ved=2ahUKEwixq_ex3bTwAhVMCHcKHcRgD0oQMygLegUIARC-AQ",
        //         "timeStamp": "12345",
        //         "likes": "1245"
        //     }
        // ];
        // this.setState({postArray: data})
        const thisContext = this;
        fetch("http://localhost:8084/post")
            .then(response => response.json())
            .then(data => {
                    thisContext.setState({postArray: data})
                }
            );
    }

    upload = (event) => {
        let image = event.target.files[0];
        const thisContent = this;

        if (image == null || image == undefined) {
            return;
        }
        var uploadTask = storage.ref("images").child(image.name).put(image);
        uploadTask.on(
            'state_changed',
            function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContent.setState({progressBar: progress})
            }, function (error) {

            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);

                    let payload = {
                        "postId": Math.floor(Math.random() * 100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "username": Math.floor(Math.random() * 100000).toString() + "salom",
                        "postPath": downloadURL,
                        "timeStamp": new Date().getTime(),
                        "likeCount": Math.floor(Math.random() * 1000)
                    }

                    const requestOptions = {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(payload),
                    }

                    // Oldi berilar
                    fetch("http://localhost:8084/post", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            thisContent.getPost();
                        })
                        .catch(error => {
                        })

                });
            }
        );
    }

    render() {
        return (
            <>

                <div className="mainpage__container">
                    <div className="mainpage__divider"></div>
                    <div className="fileupload">
                        <label htmlFor="file-upload">
                            <img className="mainpage__uploadicon" src={uploadImage} alt="uploadImage"/>
                        </label>
                        <input onChange={this.upload} id="file-upload" type="file"/>
                    </div>
                    <div className="mainpage__divider"></div>
                </div>
                <div className="upload_text">
                    {Math.floor(this.state.progressBar)}%
                </div>

                {
                    this.state.postArray.map((item, index) => (
                        <Post
                            id={item.postId}
                            username={item.username}
                            postImage={item.postPath}
                            likes={item.likeCount}
                        />
                    ))
                }

            </>
        );
    }

}

export default MainPage;