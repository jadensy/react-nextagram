import React from 'react';
import '../App.css';
import axios from 'axios';

// import Image from 'react-graceful-image';

export default class UserImages extends React.Component {
    state = {
        userImgSrc: [],
        isLoading: true
    }

    componentDidMount() {

        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.userId}`)
            .then(result=> console.log(result))
            .then(result =>
                this.setState({
                    userImgSrc: result.data
                })
                )
            .catch(error => {
                console.log('Oh no, something went wrong D: - ', error)
            })
    }

    render() {
            return(
                // USER IMAGES
                <div className="user-images">
                    <ul>
                        {this.state.userImgSrc.map((imgSrc,index) =>
                        <li key={index}>
                            <img className="user-image" src={imgSrc} alt="meaningful_text"/>
                            {/* <Image
                                src={imgSrc}
                                className = "user-image"
                                alt="meaningful_text_placeholder"
                                placeholderColor= '#425963' // JSX doesn't allow for rbga and is lame.
                            /> */}
                        </li>
                        )}
                    </ul>
            </div>
        )
    }

}
