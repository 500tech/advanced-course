import React from 'react';
import styled from 'styled-components';
import { values, isEmpty } from 'lodash/fp';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Post from './Post';
import NewPost from './NewPost';
import PostModal from './PostModal';

class Feed extends React.Component {
  state = {
    selectedPost: null
  };

  componentDidMount() {
    this.setPost(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setPost(nextProps);
  }

  setPost(props) {
    const { id } = props.match.params;

    this.setState({
      selectedPost: id
    });
  }

  render() {
    const { selectedPost } = this.state;
    const { posts } = this.props;

    return (
      <Container>
        <PostModal isOpen={!isEmpty(selectedPost)} />

        <NewPost />
        {posts.map(post => <Post key={post.id} {...post} />)}
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

export default withRouter(connect(mapStateToProps)(Feed));
