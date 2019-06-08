import React from 'react';
import axios from 'axios';
import UserImages from '../containers/UserImages.js';

class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        userInfo: [],
        userImages: [],
        isLoading: true
        }
    }

    componentDidMount() {
        Promise.all([
            axios.get('https://insta.nextacademy.com/api/v1/users'),
            axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.match.params.id}`)
        ])
        .then(results =>{
            this.setState({
                userInfo: results[0].data.find(u => u.id === parseInt(this.props.match.params.id)),
                userImages: results[1].data,
                isLoading: false
            })
        })
        .catch(error => {
            console.log(`${error} occured. Try not to panic.`)
        })
    }

    render() {
        return (
            <div className="container text-center">
            <div className="row">
                <img className="rounded float-left"
                    style={{ width: "250px", height: "250px" }}
                    src={this.state.userInfo.profileImage}
                    alt={this.state.userInfo.username} />
            </div>
            <div className="row">
                <p>
                    {(!this.state.isLoading)
                        ? `You have reached @${this.state.userInfo.username}'s profile!`
                        : "" }
                </p>
            </div>
            <div className="row">
                <UserImages userId={this.props.match.params.id} />
            </div>
            </div>
        )
    }
}

export default UserProfilePage;












// const getUserInfo = () => {
//     return axios.get('https://insta.nextacademy.com/api/v1/users');
// }

// const getUserImgs = () => {
//     return axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.match.params.id}`);
// }

// const searchId = this.props.match.params.id;

// const that = this;

// axios.all([getUserInfo(), getUserImgs()])
//     .then(axios.spread(function (info,images) {
//         console.log(info);
//         console.log(images);
//         console.log(searchId);
//         const user = info.data.find(u => u.id === parseInt(searchId));
//         console.log(user);
//         that.setState({
//             user: user
//         })
//     }))
