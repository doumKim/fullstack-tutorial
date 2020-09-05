import React from 'react';
import styled from 'styled-components';
import NavHeader from './NavHeader';
import NavLIst from './NavLIst';

const StyledHeader = styled.header`
  width: 300px;
`;

const NavBlock = styled.div`
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
  background: #7e99eb;
`;

const Nav = () => {
  return (
    <StyledHeader>
      <NavBlock>
        <NavHeader />
        <NavLIst />
      </NavBlock>
    </StyledHeader>
  );
};

export default Nav;
