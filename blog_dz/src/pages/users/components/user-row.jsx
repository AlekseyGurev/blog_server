import { useState } from 'react';
import { Icon } from '../../../components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { request } from '../../../bff/utilities';

const UserRowContainer = ({ className, user, roles, onDeleteUser }) => {
  const [selectedRoleId, setSelectedRoleId] = useState(user.roleId);
  const [initialRoleId, setInitialRoleId] = useState(user.roleId);
  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };
  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  const onRoleSave = (userId, newUserRoleId) => {
    request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };

  return (
    <tr className={className}>
      <td className="table-row">{user.login}</td>
      <td className="table-row">{user.registeredAt}</td>
      <td className="table-row">
        <select
          className="select"
          value={selectedRoleId}
          onChange={onRoleChange}
        >
          {roles.map((role) => (
            <option value={role.id} key={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </td>
      <td className="table-row">
        <a
          disabled={isSaveButtonDisabled}
          onClick={() => {
            onRoleSave(user.id, selectedRoleId);
          }}
        >
          <Icon
            id="fa-floppy-o"
            size="24px"
            margin="0 0 0 0"
            disabled={isSaveButtonDisabled}
          />
        </a>
      </td>
      <td className="table-row">
        <a
          onClick={() => {
            onDeleteUser(user.id);
          }}
        >
          <Icon id="fa-trash-o" size="24px" margin="0 0 0 0" />
        </a>
      </td>
    </tr>
  );
};

export const UserRow = styled(UserRowContainer)`
  font-size: 20px;
  border: 2px solid black;

  .table-row {
    padding: 10px 15px;
    text-align: center;
  }

  .select {
    font-size: 15px;
    padding: 5px 15px;
  }
`;

UserRow.propTypes = {
  user: PropTypes.string,
  roles: PropTypes.string,
  onDeleteUser: PropTypes.func,
};
