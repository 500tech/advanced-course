import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/post.actions';
import Toggle from './common/Toggle';

class NewPost extends React.Component {
  state = {
    postImage: false
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleClick = () => {
    const data = {
      id: this.uuid(),
      author: 'john smith',
      message: this.input.value,
      comments: []
    };

    if (this.state.postImage) {
      data.imageSrc = 'https://images.techhive.com/images/article/2017/02/oculus-rift-100708041-large.jpg';
    }

    this.props.addPost(data);
    this.input.value = '';
  };

  render() {
    return (
      <Container>
        <Title>new post</Title>
        <Input innerRef={el => this.input = el} placeholder="add new post" />
        <Button onClick={this.handleClick}>publish</Button>
        <PostType>
          <div>post with image</div>
          <Toggle onChange={(postImage) => this.setState({ postImage })} />
        </PostType>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  position: relative;
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
  cursor: pointer;
`;

const PostType = styled.div`
  width: 160px;
  position: absolute;
  top: 20px;
  right: 10px;
  display: flex;
  align-items: center;
  height: 30px;
  
  div {
    font-size: 12px;
    color: #444;
    text-transform: capitalize;
  }
`;

export default connect(undefined, { addPost })(NewPost);
