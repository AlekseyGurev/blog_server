import styled from 'styled-components';

const DescriptionContainer = ({ className }) => (
	<p className={className}>
		Веб-технологии
		<br />
		Написание кода
		<br />
		Разбор ошибок
	</p>
);

export const Description = styled(DescriptionContainer)`
	font-size: 20px;
	line-height: 27px;
	font-style: italic;
	color: #000000;
`;
