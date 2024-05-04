import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostsItemContainer = ({ className, post }) => {
  return (
    <li className={className}>
      <Link to={`/post/${post._id}`}>
        <img src={post.imageUrl} />
        <h3 className="title">{post.title}</h3>
        <div className="description">
          <span className="description__container">
            <Icon id="fa-calendar-o" size="20px" margin="0 0 0 0" />
            {post.publishedAt}
          </span>
          <span className="description__container">
            <Icon id="fa-comment-o" size="20px" margin="0 0 0 0" />
            {post.comments.length}
          </span>
        </div>
      </Link>
    </li>
  );
};

export const PostsItem = styled(PostsItemContainer)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;

  .title {
    margin: 0;
    padding: 10px 10px 0 10px;
    font-size: 20px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px 10px;
  }

  .description__container {
    display: flex;
    gap: 5px;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;

PostsItem.propTypes = {
  post: PropTypes.object,
};
