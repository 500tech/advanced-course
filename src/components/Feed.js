import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import NewPost from './NewPost';

export default class Feed extends React.Component {
  render() {
    return (
      <Container>
        <NewPost />
        <Post />
        <Post />
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 40vw;
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
