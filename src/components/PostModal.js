import React from 'react';
import { withRouter } from 'react-router';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { get } from 'lodash/fp';

const PostModal = ({ isOpen, history, post }) => {
  if (!post) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onClick={() => history.push('/feed')}>
      <Content isOpen={isOpen}>
        {post.message}
      </Content>
    </Overlay>
  );
};

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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    post: state.posts[id]
  };
};

export default withRouter(connect(mapStateToProps)(PostModal));
