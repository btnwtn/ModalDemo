import React, { Component } from "react";
import styled from "styled-components";
import localforage from "localforage";

import TabBar from "../../components/TabBar";
import TabPanels from "../../components/TabPanels";

const Container = styled.div`
  display: flex;
  flex: 1;
`;

class Tabs extends Component {
  state = {
    activeTab: 0
  };

  componentDidMount() {
    localforage
      .getItem("activeTab")
      .then(activeTab => activeTab && this.setState({ activeTab }))
      .catch(console.warn);
  }

  handleTabClick = activeTab => {
    localforage.setItem("activeTab", activeTab);
    this.setState({ activeTab });
  };

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      switch (child.type) {
        case TabBar:
          return React.cloneElement(child, {
            activeTab: this.state.activeTab,
            handleTabClick: this.handleTabClick
          });
        case TabPanels:
          return React.cloneElement(child, {
            activeTab: this.state.activeTab
          });
        default:
          return child;
      }
    });

    return <Container>{children}</Container>;
  }
}

export default Tabs;
