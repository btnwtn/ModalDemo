import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 80%;
  padding: 1rem;
  overflow: auto;
  background-color: #fff;
  border-bottom-right-radius: 3px;
`;

const TabPanels = props => {
  const children = React.Children.map(props.children, (child, i) => {
    if (props.activeTab === i) {
      return child;
    }
  });

  return <Container>{children}</Container>;
};

export default TabPanels;
