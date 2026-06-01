import Logo from "../Logo";
import Nav from "../Nav";
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
}
