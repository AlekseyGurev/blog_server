import styled from 'styled-components';
import { forwardRef } from 'react';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	font-size: 20px;
	padding: 10px;
`;
