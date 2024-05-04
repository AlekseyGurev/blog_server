import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components/';
import { selectUserRole } from '../../../../selectors';
import styled from 'styled-components';
import { addCommentAsync } from '../../../../actions';
import { ROLE } from '../../../../bff/constants';

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const userRole = useSelector(selectUserRole);
  const onInputText = ({ target }) => {
    setNewComment(target.value);
  };

  const onNewCommentAdd = (postId, content) => {
    dispatch(addCommentAsync(postId, content)).then(() => {
      setNewComment('');
    });
  };

  const isGuest = userRole === ROLE.GUEST;

  return (
    <div className={className}>
      {!isGuest && (
        <div className="container-new-comment">
          <textarea
            value={newComment}
            name="newComment"
            id="newComment"
            rows="7"
            onChange={onInputText}
            placeholder="Комментарий..."
          ></textarea>
          <a
            onClick={() => {
              onNewCommentAdd(postId, newComment);
            }}
          >
            <Icon id="fa-paper-plane-o" size="22px" margin="0 0 0 0" />
          </a>
        </div>
      )}
      <ul className="comments-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} postId={postId} />
        ))}
      </ul>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 580px;
  margin: 0 auto;

  .container-new-comment {
    display: flex;
    gap: 10px;

    & textarea {
      padding: 10px 10px;
      font-size: 16px;
      width: 100%;
      resize: none;
      border-radius: 4px;
    }
  }

  .comments-list {
    list-style: none;
    padding: 20px 0;
    margin: 0;
  }
`;

Comments.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.string,
};
