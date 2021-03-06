import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/common/HtmlBox/HtmlBox';
import './PostSummary.scss';
import cutText from '../../../utils/cutText'

const PostSummary = ({ id, title, content, author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <p>Author: {author}</p>
    <HtmlBox>{cutText(content, 50)}</HtmlBox>
    <Button variant="primary">
        <Link to={`/posts/${id}`}>Read more</Link>
     </Button>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default PostSummary;