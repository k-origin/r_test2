import React from 'react';
import Child01 from './Child01';

function Bts01() {
  const bts = ['김남준', '김석진', '박지민', '민윤기', '전정국', '김태형', '정호석' ]

  return (
    <>
      <h3>방탄소년단 데이터 자료</h3>
      {/* <Child01 name={bts[0]} />
      <Child01 name={bts[1]} />
      <Child01 name={bts[2]} />
      <Child01 name={bts[3]} />
      <Child01 name={bts[4]} />
      <Child01 name={bts[5]} />
      <Child01 name={bts[6]} /> */}

      {/* map 함수 사용하기 */}
      
      {bts.map((bt, index)=><Child01 key={index} name={bt} num={index} />)}
      {/* 
        1. bts: 배열이름
        2. map: 배열 함수 bts 배열을 가지고 새로운 배열 생성하기 위함
        3. bt => : 함수명으로 화살표 함수를 작성함
        4. <Child01 name = {bt} /> : 배열의 개수만큼 출력하고자 하는 내용
      */}

    </>
  );
}

export default Bts01;