import { Content, H2 } from '../../components';
import { UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { ROLE } from '../../bff/constants';
import styled from 'styled-components';
import { request } from '../../bff/utilities';

const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const requestServer = useServerRequest();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.all([request('/users'), request('/users/roles')]).then(
      ([usersRes, rolesRes]) => {
        setIsLoading(true);
        if (usersRes.error || rolesRes.error) {
          setErrorMessage(usersRes.error || rolesRes.error);
          return;
        }

        setUsers(usersRes.data);
        setRoles(rolesRes.data);
      }
    );
  }, [requestServer, isDeleteUser]);

  const onDeleteUser = (userId) => {
    request(`/users/${userId}`, 'DELETE').then(() => {
      setIsDeleteUser(!isDeleteUser);
    });
  };

  if (!isLoading) {
    return;
  }

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <H2>Пользователи</H2>
        <table className="table">
          <thead>
            <tr>
              <th className="table-item">Логин</th>
              <th>Дата регистрации</th>
              <th className="table-item">Роль</th>
              <th className="table-button"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onDeleteUser={onDeleteUser}
                roles={roles.filter((role) => {
                  return role.id !== ROLE.GUEST;
                })}
              />
            ))}
          </tbody>
        </table>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .table {
    border-collapse: collapse;
  }

  .table-item {
    width: 170px;
  }
  .table-button {
    width: 50px;
  }
`;
