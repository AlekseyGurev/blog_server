import styled from 'styled-components';
import { Logo, Description, ControlPanel } from './components';

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description />
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  height: 120px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0px -2px 17px #000000;
  z-index: 10;
`;
