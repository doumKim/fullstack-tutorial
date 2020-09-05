import React from 'react';
import styled from 'styled-components';

const UserInfoText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e3ecff;
  color: #e3ecff;
  font-size: 1.5rem;
`;

const NavHeader = () => {
  return (
    <>
      <UserInfoText>OOO님 안녕하세요.</UserInfoText>
    </>
  );
};

export default NavHeader;
