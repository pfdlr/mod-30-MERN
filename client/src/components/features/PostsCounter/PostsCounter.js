import React from 'react';

class PostsCounter extends React.Component {

  render() {
    const { counter } = this.props;

    return (
        <div>
            {counter > 0 ? 'Posts counter: ' + counter : 'No posts'}
        </div>
    );
  }

};

export default PostsCounter;