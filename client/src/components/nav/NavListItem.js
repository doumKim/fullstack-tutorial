import React, { useState } from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 0;
  border-bottom: 1px solid rgba(30, 30, 30, 0.4);

  button {
    background: none;
    border: none;
    color: #3c3c3c;
    font-weight: bold;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 1.2rem;
    outline: none;
  }
  button:hover {
    color: #000;
  }
`;

const NavListItem = ({ sortInfo }) => {
  const { type } = sortInfo;
  const [display, setDisplay] = useState('none');
  const handleVisible = () => {
    setDisplay((prevState) => {
      if (prevState === 'none') return 'flex';
      return 'none';
    });
  };
  return (
    <>
      <StyledListItem>
        <button onClick={handleVisible}>{type}</button>
        <ItemList show={display} sortInfo={sortInfo} />
      </StyledListItem>
    </>
  );
};

export default NavListItem;
