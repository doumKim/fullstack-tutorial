import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  /* width: 100%; */
  padding: 8px;
  border-bottom: 1px solid #ced4da;
  &:hover {
    & h3 {
      color: #212529;
    }
  }
  & h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    cursor: pointer;
    color: #495057;
    transition: color 0.3s;
  }
`;

const ItemListitem = ({ memo }) => {
  return (
    <StyledItem>
      <h3>{memo.title}</h3>
    </StyledItem>
  );
};

export default ItemListitem;
