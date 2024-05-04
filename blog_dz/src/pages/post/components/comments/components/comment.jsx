import styled from 'styled-components';
import { Icon } from '../../../../../components';
import { selectUserRole } from '../../../../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { ROLE } from '../../../../../bff/constants';
import {
  openModal,
  CLOSE_MODAL,
  removeCommentAsync,
} from '../../../../../actions';
import PropTypes from 'prop-types';

const CommentContainer = ({ className, comment, postId }) => {
  const { id, content, author, publishedAt } = comment;
  const useRole = useSelector(selectUserRole);
  const dispatch = useDispatch();

  const onDeleteComment = (id, postId) => {
    dispatch(
      openModal({
        title: 'Удалить комментарий?',
        onConfirm: () => {
          dispatch(CLOSE_MODAL);
          dispatch(removeCommentAsync(id, postId));
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <li className={className}>
      <div className="container-content">
        <div className="description">
          <span className="author">
            <Icon id="fa-user-circle-o" size="22px" margin="0 0 0 0" />
            {author}
          </span>
          <span className="add-at">
            <Icon id="fa-calendar-o" size="22px" margin="0 0 0 0" />
            {publishedAt}
          </span>
        </div>
        <p>{content}</p>
      </div>

      <div className="container-icon">
        {useRole === ROLE.ADMIN ? (
          <a
            onClick={() => {
              onDeleteComment(id, postId);
            }}
          >
            <Icon id="fa-trash-o" size="24px" margin="0 0 0 0" />
          </a>
        ) : null}
      </div>
    </li>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  & p {
    font-size: 18px;
  }

  .container-content {
    padding: 10px 10px;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 100%;
  }

  .container-icon {
    width: 24px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .add-at {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

Comment.propTypes = {
  comment: PropTypes.object,
};
