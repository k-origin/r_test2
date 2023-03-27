import React from 'react';

function Child01({num, name}) {
  return (
    <>
      <ul>
        <li>멤버 {num+1} 이름: {name}</li>
      </ul>
      
    </>
  );
}

export default Child01;