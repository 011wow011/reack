/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강동의 호랑이'; 
  let [글제목, b] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let num = [1, 2];

  let [a, c] = [1, 2];

  // let a = num[0];
  // let c = num[1];


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '26px'} }>블로그 테스트</h4>
      </div>
      <h4>{ post }</h4>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>5월 14일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 14일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>5월 14일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
