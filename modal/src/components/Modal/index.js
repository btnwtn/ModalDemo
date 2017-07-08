import React, { Component } from "react";
import { Backdrop, Container, Header, Title, CloseButton } from "./styled";

class Modal extends Component {
  handleKeyUp = event => {
    if (event.key === "Escape") {
      this.props.handleClose();
    }
  };

  componentDidMount() {
    this._escListener = window.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    const { title, handleClose, children } = this.props;

    return (
      <Backdrop>
        <Container>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
          </Header>
          {children}
        </Container>
      </Backdrop>
    );
  }
}

export default Modal;
