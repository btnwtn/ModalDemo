import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.85);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 60vw;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #fbfbfb;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
`;

export const CloseButton = styled.button`
  color: red;
  margin-left: auto;
  background: none;
  border: 0;
  font-size: 2rem;
  line-height: 1rem;
  padding: 0;
`;
