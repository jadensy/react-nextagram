import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

export default class FormFields extends React.Component {
    constructor() {
        super();
        this.state={
            email: '',
            username: '',
            password: '',
            confirmPass: '',
            buttonState: true,
        }
    }

    handleEmailField = (e) => {
        this.setState({ email: e.target.value});
    };
    handleUsernameField = (e) => {
        this.setState({ username: e.target.value });
    };
    handlePwdField = (e) => {
        this.setState({ password: e.target.value });
    };
    handleConfirmPwdField = (e) => {
        this.setState({ confirmPass: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.props.formType === "signup") {
            axios({
                method: 'POST',
                url: 'https://insta.nextacademy.com/api/v1/users/new',
                'headers': {
                    'Content-Type': 'application/json' },
                data: {
                    username: String(this.state.username),
                    email: String(this.state.email),
                    password: String(this.state.password)
                }
            })
            .then(response => {
                console.log(response) })
            .catch(error => {
                console.log(error) })
        } else {
            axios({
                method: 'POST',
                url: 'https://insta.nextacademy.com/api/v1/login',
                'headers': {
                    'Content-Type': 'application/json'
                },
                data: {
                    email: String(this.state.email),
                    password: String(this.state.password)
                }
            })
                .then(response => {
                    console.log(response.data.auth_token)
                    sessionStorage.setItem('JWT', response.data.auth_token)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        this.props.toggleModal();
    }

    // clearSignUp = () => {
    //     this.setState({ username: '',
    //         confirmPass: ''
    //     })
    //     console.log("hello?")
    // }

    // "Password must be between 8 and 50 characters"

    render() {
        const { email, username, password, confirmPass } = this.state

        const emailRegex = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(email);
        const passwordMatch = password === confirmPass;

        const loginEnabled = this.props.formType === "login" && emailRegex && password !== '';
        const signupEnabled = this.props.formType === "signup" && emailRegex && username !== '' &&
              password !== '' && confirmPass !== '' && passwordMatch;

            return(
            <Form className="bg-transparent">

            <FormGroup>
                {this.props.formType === "signup"
                ? <Input type="text" value={this.state.username}
                    onChange={this.handleUsernameField} placeholder="New Username" />
                : null }
            </FormGroup>

            <FormGroup>
                <Input type="email" value={this.state.email}
                    onChange={this.handleEmailField} placeholder="Email" />
            </FormGroup>

            <FormGroup>
                <Input type="password" value={this.state.password}
                    onChange={this.handlePwdField} placeholder="Password" />
            </FormGroup>

            <FormGroup>
                {this.props.formType === "signup"
                ? <Input type="password" value={this.state.confirmPass}
                    onChange={this.handleConfirmPwdField} placeholder="Confirm Password" />
                : null }
            </FormGroup>

            <Button
                disabled = { this.props.formType === "login"
                ? !loginEnabled
                : !signupEnabled}
                onClick={this.handleSubmit}
                style={{ backgroundColor: "#70AB87", color: "#ffffff", float: "right", border: "none" }}>
                {this.props.formType === "signup"
                ? "Sign up"
                : "Log in"
                }
            </Button>

            </Form>
        )
    }
}
