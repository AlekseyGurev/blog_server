import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostsItemContainer = ({ className, post }) => {
  return (
    <li className={className}>
      <Link to={`/post/${post._id}`}>
        <div className="container__image">
          <img src={post.imageUrl} />
        </div>
        <h3 className="title">{post.title}</h3>
        <div className="description">
          <span className="description__container">
            <Icon id="fa-calendar-o" size="20px" margin="0 0 0 0" />
            {new Date(post.publishedAt)
              .toISOString()
              .substring(0, 16)
              .replace('T', ' ')}
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
  min-width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 4px;
  .title {
    width: 200px;
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

  .container__image {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

PostsItem.propTypes = {
  post: PropTypes.object,
};
