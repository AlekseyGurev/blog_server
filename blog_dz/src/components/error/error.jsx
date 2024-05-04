import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H2 } from '../h2/h2';

const ErrorContainer = ({ className, error }) => {
	return (
		<div className={className}>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</div>
	);
};

export const Error = styled(ErrorContainer)`
	text-align: center;
`;

Error.propTypes = {
	error: PropTypes.string,
};
