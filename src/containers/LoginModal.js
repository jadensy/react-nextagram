
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormFields from './FormFields';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoFocus: true,
            formType: "login",
        };
    }

    toggleFormType = (event) => {
        event.preventDefault();
        this.state.formType === "signup"
        ? this.setState({ formType: "login"})
        : this.setState({ formType: "signup"})
    }

    render() {

        const closeBtn = <button className="close" onClick={this.props.toggleModal}>
            &times;
            </button>;

        const toggleLogSign = <span className="span-link" onClick={this.toggleFormType}>
            {this.state.formType === "login"
            ? "Sign up"
            : "Log in"}
            </span>;

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
                    <ModalHeader className="modal-head" toggle={this.toggleModal} close={closeBtn}>
                    {this.state.formType === "login"
                    ? "LOG IN"
                    : "SIGN UP"}
                    </ModalHeader>
                    <ModalBody>
                        <FormFields formType={this.state.formType} toggleModal={this.props.toggleModal}/>
                    </ModalBody>
                    <ModalFooter>
                        <p className="font-small font-weight-light">
                        {this.state.formType === "login"
                        ? <span>New here? {toggleLogSign} instead.</span>
                        : <span>Already signed up? {toggleLogSign} instead.</span> }
                        </p>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;

