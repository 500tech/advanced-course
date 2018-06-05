import * as React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash/fp';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/post.actions';

import { feedsSelector } from '../redux/selectors/posts.selectors';

import Post from './Post';
import NewPost from './NewPost';
import PostModal from './PostModal';

class Feed extends React.Component {
  state = {
    selectedPost: null
  };

  componentDidMount() {
    this.setPost(this.props);
    this.props.fetchPosts();
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

  postRenderer(post, onClick) {
    if (post.imageSrc) {
      return (
        <React.Fragment>
          <PostText onClick={onClick}>{post.message}</PostText>
          <PostImage src={post.imageSrc} />
        </React.Fragment>
      );
    }

    return (
      <PostText onClick={onClick}>{post.message}</PostText>
    );
  }

  render() {
    const { selectedPost } = this.state;
    const { posts } = this.props;

    return (
      <Container>
        <PostModal isOpen={!isEmpty(selectedPost)} />

        <NewPost />
        {posts.map(post => <Post key={post.id} {...post} contentRenderer={this.postRenderer} />)}
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

const PostText = styled.div`
  color: #888;
  font-size: 13px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 20px;
`;

const PostImage = styled.div`
  width: 100%;
  min-height: 300px;
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
`;

const mapStateToProps = (state) => ({
  posts: feedsSelector(state)
});

export default withRouter(connect(mapStateToProps, { fetchPosts })(Feed));
