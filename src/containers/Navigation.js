import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        return (
        <>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                <h1>NEXTagram</h1>
                <h6>How on earth did you end up here?</h6>
            </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <Link className='navitem nav-link' to="/">Home</Link>
                    <Link className='navitem nav-link' to="/users/:id">Users</Link>
                    <Link className='navitem nav-link' to="/profile">My Profile</Link>
                    <NavLink onClick={this.toggleModal}>Log In</NavLink>
                    <LoginModal modal={this.state.modal} toggleModal={this.toggleModal}/>
                </Nav>
            </Collapse>
        </Navbar>
        </>
        );
    }
}