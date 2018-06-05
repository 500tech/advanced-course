import React from 'react';
import styled from 'styled-components';
import Comments from './Comments';

import { withRouter } from 'react-router';
import withSpinner from './common/withSpinner';

const Post = (props) => (
  <Container>
    <Header>
      <Avatar />
      <Name>{props.author}</Name>
    </Header>
    {props.contentRenderer(props, () => props.history.push(`/feed/${props.id}`))}
    <Comments data={props.comments} postId={props.id} />
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

export default withSpinner(withRouter(Post));
