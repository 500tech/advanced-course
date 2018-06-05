import React from 'react';
import styled, { css } from 'styled-components';

const PostModal = ({ isOpen }) => (
  <Overlay isOpen={isOpen}>
    <Content isOpen={isOpen}>

    </Content>
  </Overlay>
);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  
  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  `}
`;

const Content = styled.div`
  min-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: all 300ms;
  transform: scale(${({ isOpen }) => isOpen ? 1 : 0.8});
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
`;

export default PostModal;
