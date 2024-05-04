import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
`;

const LargeText = styled.p`
	margin: 0;
	padding: 0;
	font-size: 49px;
	font-weight: bold;
`;

const SmallText = styled.span`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-code" size="80px" />
		<ContainerText>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</ContainerText>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	gap: 10px;
	padding: 20px 40px;
	color: #000000;
	text-decoration: none;
`;
