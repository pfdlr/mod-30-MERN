import { connect } from 'react-redux';
import { loadSinglePostRequest, getSinglePost, getRequest, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  posts: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPost: () => dispatch(loadSinglePostRequest(ownProps.postId)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);