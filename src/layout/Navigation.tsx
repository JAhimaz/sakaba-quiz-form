import { useState } from 'react';
import styled from '@emotion/styled'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  position: relative;
  z-index: 10;
  background: ${({ theme }) => theme.background};
  user-select: none; /* Standard syntax */
`;

const NavbarLeftItem = styled.div`
  margin-right: auto;
`;

const NavbarRightItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavbarPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  background: ${({ theme }) => theme.background};
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  cursor: pointer;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text.plain};
  text-decoration: none;
  transition: color 0.1s ease-in-out;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.text.highlight};
  }
`

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandBtnPress = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <NavbarContainer>
      <NavbarLeftItem>
        <NavItem href='/' css={{ fontWeight: 700 }} className='secret'>Header</NavItem>
      </NavbarLeftItem>
      <NavbarRightItem>
        <NavItem href='/about'>Item 1</NavItem>
      </NavbarRightItem>
      <NavbarButton onClick={handleExpandBtnPress}>
        <NavItem>Menu</NavItem>
      </NavbarButton>
      {isExpanded && (
        <NavbarPanel onClick={handleExpandBtnPress}>
          <NavItem href='/about'>Item 1</NavItem>
        </NavbarPanel>  
      )}
    </NavbarContainer>
  )
}


export default Navbar;

