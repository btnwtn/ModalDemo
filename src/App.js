import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContent } from "./store/actions";

import "./App.css";
import ModalTabs from "./components/ModalTabs";
import ToggleButton from "./components/ToggleButton";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      };
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.props.onChange({
      title: name,
      content: value
    });
  };

  render() {
    return (
      <div>
        <ToggleButton onClick={this.toggleModal} />
        {this.state.isOpen &&
          <Modal title="Game Notes" handleClose={this.toggleModal}>
            <ModalTabs onChange={this.handleChange} data={this.props.games} />
          </Modal>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: game => dispatch(updateContent(game))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
