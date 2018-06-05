import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addComment } from '../redux/actions/post-actions';

class Comments extends React.Component {
  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleKeyUp = (e) => {
    if (e.which === 13) {
      this.props.addComment(this.props.postId, {
        id: this.uuid(),
        comment: this.input.value
      });

      this.input.value = '';
    }
  };

  render() {
    const { data } = this.props;

    return (
      <Container>
        <Messages>
          {
            data.map(({ comment, id }) => (
              <Message key={id}>
                <Avatar />
                <Content>{comment}</Content>
              </Message>
            ))
          }
        </Messages>

        <NewMessage>
          <Avatar />
          <Input
            placeholder="add new comment"
            innerRef={el => this.input = el}
            onKeyUp={this.handleKeyUp} />
        </NewMessage>
      </Container>
    );
  }
}

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
  margin-top: 10px;
`;

const NewMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

export default connect(undefined, { addComment })(Comments);
