import styled from 'styled-components';
import { Error } from '../error/error';

const ContentContainer = ({ children, className, error }) => {
	return error ? (
		<div className={className}>
			<Error error={error} />
		</div>
	) : (
		children
	);
};

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
