import styled from "styled-components";

export default styled.button`
  border: 0;
  border-radius: 3px;
  background-color: #fff;
  color: #7289da;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
  font-weight: bold;
  height: 45px;
  width: 250px;
  transition: all .2s cubic-bezier(.25,.25,.315,1.35),top .1s linear;

  &:hover {
    box-shadow: none;
    transform: translateY(1px)
  }
`;
