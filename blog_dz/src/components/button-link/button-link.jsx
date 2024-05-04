import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLinkContainer = ({ className, ...props }) => {
	return (
		<Link className={className} {...props}>
			{props.children}
		</Link>
	);
};

export const ButtonLink = styled(ButtonLinkContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	border: 1px solid #000000;
	color: #000000;
	text-decoration: none;
	background-color: #eeeeee;
	border-radius: 4px;
	width: 100%;
	padding: 10px 0px;
`;
