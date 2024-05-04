import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';
import { sanitizeContent } from './utils/';
import { savePostAsync } from '../../../../actions';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PostFormContainer = ({ className, post, onDeletePost, isCreating }) => {
  const { _id, title, imageUrl, content, publishedAt } = post;
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
  const [titleValue, setTitleValue] = useState(title);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (_id) => {
    const data = {
      imageUrl: imageUrlValue,
      title: titleValue,
      content: sanitizeContent(contentRef.current.innerHTML),
    };
    dispatch(savePostAsync(_id, data)).then((res) => {
      navigate(`/post/${res.data._id}`);
    });
  };

  return (
    <div className={className}>
      <Input
        onChange={({ target }) => {
          setImageUrlValue(target.value);
        }}
        value={imageUrlValue}
        placeholder="Ссылка на изображение..."
      />
      <Input
        onChange={({ target }) => {
          setTitleValue(target.value);
        }}
        value={titleValue}
        placeholder="Заголовок..."
      />
      <div className="controls-container">
        <div className="icon-container">
          {isCreating ? null : (
            <>
              <Icon id="fa-calendar-o" size="24px" margin="0 0 0 0" />
              {publishedAt}
            </>
          )}
        </div>
        <div className="icon-container">
          <a
            onClick={() => {
              onSave(_id);
            }}
          >
            <Icon id="fa-floppy-o" size="24px" margin="0 0 0 0" />
          </a>
          <a
            onClick={() => {
              onDeletePost(_id);
            }}
          >
            <Icon id="fa-trash-o" size="24px" margin="0 0 0 0" />
          </a>
        </div>
      </div>
      <div
        ref={contentRef}
        className="content"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  margin: 40px 0;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  white-space: pre-line;

  & Input {
    padding: 15px 15px;
  }

  .controls-container {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 0;
  }

  .icon-container {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .content {
    padding: 15px 15px;
    border: 1px solid #000000;
  }
`;

PostForm.propTypes = {
  post: PropTypes.object,
  onDeletePost: PropTypes.func,
  isCreating: PropTypes.bool,
};
