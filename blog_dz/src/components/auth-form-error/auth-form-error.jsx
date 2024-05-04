import styled from 'styled-components';

const AuthFormErrorContainer = ({ children, className }) => {
	return <span className={className}>{children}</span>;
};

export const AuthFormError = styled(AuthFormErrorContainer)`
	color: red;
	text-align: center;
	font-size: 18px;
`;
