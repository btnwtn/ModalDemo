import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  padding-top: .5rem;
  padding-left: .5rem;
  padding-right: .5rem;
  background-color: #2F3136;
  border-bottom-left-radius: 3px;
  overflow: auto;
`;

const TabBar = props => {
  const children = React.Children.map(props.children, (child, i) => {
    return React.cloneElement(child, {
      isActive: props.activeTab === i,
      handleTabClick: () => {
        props.handleTabClick(i);
      }
    });
  });

  return <Container>{children}</Container>;
};

export default TabBar;
