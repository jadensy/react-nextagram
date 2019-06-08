import React, { Component } from 'react';

import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';

import UserImages from '../containers/UserImages.js';
import Loading from '../components/Loading.js';

// ----------------------------------------------------------------------

export default class Homepage extends Component {

    state = {
        users: [],
        isLoading: true,
    }

    componentDidMount() {
        // performing a GET request to '/api-end-point'
        axios.get('https://insta.nextacademy.com/api/v1/users')
            // .then(result => this.setState({ users: result.data, isLoading: false }))
            .then(result => console.log(result))
            .catch(error => {
                console.log('Oh no, something went wrong D: - ', error)
            })
    }

    render() {
        // LOADING GIF
        const { isLoading } = this.state
        if (isLoading) {
            return (
               <Loading width="100px" />
            )
        }

        return (
            <div>
                {/* LIST OF USERS */}
                <ul>
                    { this.state.users.map(user =>
                        <li key={user.id} className="user-wrapper">
                            <div className="profile-pic">
                            <img src={user.profileImage} alt={user.username}/> <br />
                            {user.username}
                            </div>
                            <UserImages userId={user.id} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


