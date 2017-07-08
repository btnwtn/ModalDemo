import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const Container = styled.div`
  background-color: #2F3136;
  color: #D9DADB;
  cursor: default;
  user-select: none;
  padding: .6rem;
  font-size: .9rem;
  border-radius: 3px;
  margin-bottom: .125rem;
  word-wrap: break-word;

  &:hover,
  &:active {
    background-color: #36393F;
  }

  &.active {
    background-color: #42464D;
    color: #fff;
  }
`;

const Tab = props => {
  const className = classNames("tab", {
    active: props.isActive
  });

  return (
    <Container className={className} onClick={props.handleTabClick}>
      {props.children}
    </Container>
  );
};

export default Tab;
