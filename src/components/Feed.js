import React from 'react';
import styled from 'styled-components';
import { values } from 'lodash/fp';

import { connect } from 'react-redux';

import Post from './Post';
import NewPost from './NewPost';
import PostModal from './PostModal';

class Feed extends React.Component {
  state = {
    modalOpen: false
  };

  render() {
    const { modalOpen } = this.state;
    const { posts } = this.props;

    return (
      <Container>
        <PostModal isOpen={modalOpen} />

        <NewPost />
        {posts.reverse().map(post => <Post key={post.id} {...post} />)}
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

const mapStateToProps = (state) => ({
  posts: values(state.posts)
});

export default connect(mapStateToProps)(Feed);
