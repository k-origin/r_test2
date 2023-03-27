import React from 'react';
import Child02 from './Child02';

function Bts02() {
  const bts=[
    {
    id: 1,
    name: '김남준',
    age: 30,
    email: 'a@naver.com',
    profile: 'member-rm.jpg'
    },

    {
    id: 2,
    name: '김석진',
    age: 32,
    email: 'b@naver.com',
    profile: 'member-jin.jpg'
    },

    {
    id: 3,
    name: '박지민',
    age: 29,
    email: 'c@naver.com',
    profile: 'member-jimin.jpg'
    },

    {
    id: 4,
    name: '민윤기',
    age: 31,
    email: 'd@naver.com',
    profile: 'member-suga.jpg'
    },

    {
    id: 5,
    name: '전정국',
    age: 27,
    email: 'e@naver.com',
    profile: 'member-jk.jpg'
    },

    {
    id: 6,
    name: '김태형',
    age: 29,
    email: 'f@naver.com',
    profile: 'member-v.jpg'
    },

    {
    id: 7,
    name: '정호석',
    age: 30,
    email: 'g@naver.com',
    profile: 'member-jhope.jpg'
    }
  ]

  return (
    <>
    <h3>BTS 멤버 프로필</h3>
      
        {/* {bts.map(bt=>(<Child02 key={bt.id} id={bt.id} name={bt.name} age={bt.age} email={bt.email} image={bt.profile}/>))} */}
      <Child02 />
    </>
  );
}

export default Bts02;