import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            autoFocus: true,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {

        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="login-head" toggle={this.toggle} close={closeBtn}>SIGN UP</ModalHeader>
                    <ModalBody>
                        <input type="email" id="signupUsername" className="form-control validate" placeholder="New Username"></input><br />
                        <input type="email" id="signupEmail" className="form-control validate" placeholder="Email"></input><br />
                        <input type="password" id="signupPassword" className="form-control validate" placeholder="Password"></input><br />
                        <Button className="btn" id="signupBtn" style={{ backgroundColor: "#70AB87", color: "#ffffff", float: "right" }}>Sign Up</Button>
                    </ModalBody>
                    <ModalFooter>
                        <p className="font-small font-weight-light">Already signed up? <Link to="/login">Log in</Link> instead.</p>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SignUpModal;
