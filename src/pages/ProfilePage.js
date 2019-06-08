import React from 'react';
import {} from 'reactstrap';
import axios from 'axios';
import UserImages from '../containers/UserImages.js';
import Loading from '../components/Loading.js';


export default class ProfilePage extends React.Component {

    state = {

    }

    componentDidMount() {
        const jwt = sessionStorage.getItem('JWT');

        axios({
            method: 'get',
            url: 'https://insta.nextacademy.com/api/v1/images/me',
            'headers': {
                Authorization: `Bearer ${jwt}`
            }
        })
        .then(results => {
            console.log(results)
        })
        .catch(error => {
            console.log(`${error} occured. Try not to panic.`)
        })
    }

    render() {
        const { isLoading } = this.state
        if (isLoading) {
            return (
                <Loading width="100px" />
            )
        }

        return (
            <div>
                testing?
            </div>
        )
    }
}