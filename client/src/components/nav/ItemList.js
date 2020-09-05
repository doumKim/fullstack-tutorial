import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import ItemListItem from './ItemListitem';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ItemListBlock = styled.ul`
  display: ${(props) => props.show};
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease-in-out;
  width: 80%;
  margin-top: 20px;
  padding: 5px;
  overflow: hidden;
  background: #e9ecef;
  border-radius: 3px;
`;

const ItemList = ({ show, sortInfo }) => {
  return (
    <>
      <ItemListBlock show={show}>
        {sortInfo.memo.map((memo) => (
          <ItemListItem memo={memo} key={memo.postId} />
        ))}
      </ItemListBlock>
    </>
  );
};

export default ItemList;
