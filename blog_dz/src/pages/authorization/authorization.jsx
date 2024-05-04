import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, ButtonLink, H2, AuthFormError } from '../../components';
import styled from 'styled-components';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../bff/constants';
import { Navigate } from 'react-router-dom';
import { useResetForm } from '../../hooks';
import { request } from '../../bff/utilities';

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверно заполнен логин. Допускаются буквы и цифры')
    .min(3, 'Минимум 3 символа')
    .max(15, 'Максимум 15 символов'),
  password: yup
    .string()
    .required('Введите пароль')
    .matches(
      /^[\w#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %'
    )
    .min(7, 'Минимум 7 символов')
    .max(20, 'Максимум 15 символов'),
});

const AuthorizationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  });

  const [errorServer, setErrorServer] = useState(null);
  const dispatch = useDispatch();

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    request('/login', 'POST', { login, password }).then(({ error, user }) => {
      if (error) {
        setErrorServer(`Ошибка запроса 	${error}`);
        return;
      }

      dispatch(setUser(user));
      sessionStorage.setItem('userData', JSON.stringify(user));
    });
  };
  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || errorServer;

  const roleId = useSelector(selectUserRole);

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="login"
          placeholder="Логин..."
          {...register('login', { onChange: () => setErrorServer(null) })}
        ></Input>
        <Input
          type="password"
          id="password"
          placeholder="Пароль..."
          {...register('password', { onChange: () => setErrorServer(null) })}
        ></Input>
        <Button type="submit" disabled={!!formError}>
          Войти
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
        <ButtonLink to="/register"> Зарегистрироваться</ButtonLink>
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 300px;
  }
`;
