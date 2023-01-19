import {
  HeaderWrapper,
  Nav,
  HeaderButton,
  HeaderButtonWrapper,
} from "./Header.styled";
import Logo from '../../assets/Logo.svg';

export const Header = () => {
    return (
      <HeaderWrapper>
        <header>
          <Nav>
            <div>
              <img src={Logo} alt= "logo" />
            </div>

            <HeaderButtonWrapper>
              <HeaderButton>Users</HeaderButton>
              <HeaderButton>SignUp</HeaderButton>
            </HeaderButtonWrapper>
          </Nav>
        </header>
      </HeaderWrapper>
    );
}