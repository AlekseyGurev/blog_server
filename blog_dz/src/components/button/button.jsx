import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = ({ className, children, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	padding: 10px 0px;
	border: 1px solid #000000;
	border-radius: 4px;

	&: hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

ButtonContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
