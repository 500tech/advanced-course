import React from 'react';
import styled from 'styled-components';

export default class NewPost extends React.Component {
  render() {
    return (
      <Container>
        <Title>new post</Title>
        <Input />
        <Button>publish</Button>
      </Container>
    );
  }
}

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

const Title = styled.div`
  text-transform: capitalize;
  color: #888;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  min-height: 30px;
  background: #fff;
  border: 1px solid #dadada;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 20px;
  color: #444;
  font-size: 13px;
  transition: all 300ms;
  margin-bottom: 10px;
  
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

const Button = styled.div`
  padding: 5px 10px;
  max-width: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #0052da;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  align-self: flex-end;
`;
