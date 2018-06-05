import React from 'react';
import styled from 'styled-components';
import Comments from './Comments';

const Post = ({ id, author, message, comments }) => (
  <Container>
    <Header>
      <Avatar />
      <Name>{author}</Name>
    </Header>
    <Content>{message}</Content>
    <Comments data={comments} postId={id} />
  </Container>
);

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  color: #888;
  font-size: 13px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e0e0;
  margin-right: 20px;
`;

const Name = styled.div`
  font-size: 14px;
  color: #000;
  text-transform: capitalize;
`;

export default Post;
