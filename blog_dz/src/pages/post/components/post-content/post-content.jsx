import styled from 'styled-components';
import { H2, Icon } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { userRoleAccess } from '../../../../bff/utilities';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import PropTypes from 'prop-types';

const PostContentContainer = ({ className, post, onDeletePost }) => {
  const { _id, title, imageUrl, content, publishedAt } = post;
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);

  return (
    <div className={className}>
      <div className="image-container">
        <img
          className="image"
          src={imageUrl}
          alt="картинка"
          width={400}
          height={220}
        />
      </div>
      <div className="content-container">
        <H2>{title}</H2>
        <div className="controls-container">
          <div className="icon-container">
            <Icon id="fa-calendar-o" size="24px" margin="0 0 0 0" />
            {new Date(publishedAt)
              .toISOString()
              .substring(0, 16)
              .replace('T', ' ')}
          </div>

          {userRoleAccess(userRole) && (
            <div className="icon-container">
              <a
                onClick={() => {
                  navigate(`/post/${_id}/edit`);
                }}
              >
                <Icon id="fa-pencil-square-o" size="24px" margin="0 0 0 0" />
              </a>
              <a
                onClick={() => {
                  onDeletePost(_id);
                }}
              >
                <Icon id="fa-trash-o" size="22px" margin="0 0 0 0" />
              </a>
            </div>
          )}
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  margin: 40px 0;
  padding: 0 80px;
  white-space: pre-line;

  .image-container {
    float: left;
    margin-right: 30px;
  }

  .image {
    object-fit: cover;
    border-radius: 5px;
  }
  .controls-container {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-top: -20px;
  }
  .content-container {
    font-size: 18px;
    min-height: 250px;
  }

  .icon-container {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
