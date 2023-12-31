import { useState } from 'react';
import styled from '@emotion/styled'
import SakabaLogo from '@assets/images/logo.webp'

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

      </NavbarLeftItem>
      <NavbarRightItem>
        <NavItem href='https://sakaba.xyz/' target='_blank' rel='noopener noreferrer'>
          <img src={SakabaLogo} alt='logo' css={{
            width: '12rem',
            transition: 'all 0.1s ease-in-out',
            ':hover': {
              transition: 'all 0.1s ease-in-out',
              filter: 'brightness(1.2)',
              transform: 'scale(1.1)'
            }
          }} />
        </NavItem>
      </NavbarRightItem>
      <NavbarButton onClick={handleExpandBtnPress}>
        <NavItem>Menu</NavItem>
      </NavbarButton>
      {isExpanded && (
        <NavbarPanel onClick={handleExpandBtnPress}>
          <NavItem href='https://sakaba.xyz/' target='_blank' rel='noopener noreferrer'>SAKABA MAIN SITE</NavItem>
        </NavbarPanel>  
      )}
    </NavbarContainer>
  )
}


export default Navbar;

