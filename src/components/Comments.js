import React from 'react';
import styled from 'styled-components';

const Comments = () => (
  <Container>
    <Messages>
      <Message>
        <Avatar />
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Content>
      </Message>
    </Messages>

    <NewMessage>
      <Avatar />
      <Input placeholder="add new comment"/>
    </NewMessage>
  </Container>
);

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #dadada;
`;

const Messages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const NewMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background: #e0e0e0;
  border-radius: 50%;
`;

const Input = styled.input`
 width: calc(100% - 40px);
 background: #fff;
 border: 1px solid #dadada;
 border-radius: 4px;
 box-sizing: border-box;
 padding: 0 20px;
 color: #444;
 font-size: 13px;
 transition: all 300ms;
 
 &:focus {
  outline: none;
  border-color: #888;
 }
`;

const Content = styled.div`
  width: calc(100% - 40px);
  font-size: 12px;
  color: #888;
  font-weight: 300;
  line-height: 20px;
`;

export default Comments;
