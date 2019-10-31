import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/common/HtmlBox/HtmlBox';


class SinglePost extends React.Component {

  componentDidMount() {
    const { loadPost } = this.props;
    loadPost();
  }

  render() {
    const { posts, request } = this.props;

    if (request.pending === false && request.success === true && posts.length > 0)
      return (
        <div>
          <PageTitle>{ posts[0].title }</PageTitle>
          <p>Author: { posts[0].author}</p>
          <HtmlBox>{ posts[0].content }</HtmlBox>
        </div>
      );
    else if (request.pending === true || request.success === null)
      return (
        <Spinner />
      )
    else if (request.pending === false && request.error !== null)
      return (
        <Alert variant='error'> {request.error} </Alert>
      )
    else if (request.pending === false && request.success === true && posts.length === 0)
      return (
        <Alert variant='info'> No posts </Alert>
      )

  }
};

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default SinglePost;