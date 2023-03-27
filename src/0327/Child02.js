import React from 'react';
import styles from './css/style.css';
import btsfile from './bts.json';

function Child02() {
  return (
    <>
      {/* <li>
        <p><img src={`${process.env.PUBLIC_URL}/images/${image}`}alt="" /></p>
        <p>멤버명{id}: {name}</p>
        <p>나이: {age}세</p>
        <p>이메일: {email}</p>
      </li> */}

      <ul className="btsul">
      {btsfile.bts.map(bts=>
        (
          <li key={bts.id} className="btsli">
            <p><img src={`${process.env.PUBLIC_URL}/images/${bts.profile}`} /></p>
            <p>{bts.name}</p>
            <p>{bts.age}세</p>
            <p>{bts.email}</p>
          </li>
        )
        )}
    </ul>
    </>
  );
}

export default Child02;