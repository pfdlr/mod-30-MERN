import React from 'react';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';

import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/common/HtmlBox/HtmlBox';
import { BASE_URL } from '../../../config.js'


class SinglePost extends React.Component {

  componentDidMount() {
    const { loadPost, resetRequest } = this.props;
    loadPost();
    resetRequest();
  }

  render() {
    const { posts, request, location } = this.props;

    if (request.pending === false && request.success === true && posts.length > 0)
      return (
        <div>
          <PageTitle>{posts[0].title}</PageTitle>
          <p>Author: {posts[0].author}</p>
          <HtmlBox>{posts[0].content}</HtmlBox>
          <FacebookProvider appId="757076174720337">
            <Comments href={`${BASE_URL}/${location.pathname}`} />
            <ShareButton href="http://www.facebook.com">
              Share
            </ShareButton>
          </FacebookProvider>
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
  loadPost: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props} />);