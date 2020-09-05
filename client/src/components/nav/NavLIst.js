import React from 'react';
import NavListItem from './NavListItem';
import { dummySubject } from '../../dummy';

const NavLIst = () => {
  return (
    <>
      <nav>
        <ul>
          {dummySubject.map((sortInfo) => {
            return <NavListItem sortInfo={sortInfo} key={sortInfo.id} />;
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavLIst;
