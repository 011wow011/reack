/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강동의 호랑이'; 


  let [글제목, b] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [좋아요, c] = useState(0);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '26px'} }>블로그 테스트</h4>
      </div>

      <button onClick={()=>{
        let copy=[...글제목];
        copy[0] = '강남 우동맛집'
        copy[1] = '남자 코트 추천'
        copy[2] = '파이썬독학'
        b(copy);
      }}>가나다순정렬</button>
      <button onClick={()=>{

        let arr = [1, 2, 3];

        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        b(copy);
      }}>글수정</button>

      <h4>{ post }</h4>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ c(좋아요+1) }}>👍</span> {좋아요} </h4>
        <p>5월 14일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } <span onClick={()=>{ c(좋아요+1) }}>👍</span> {좋아요}</h4>
        <p>5월 14일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] } <span onClick={()=>{ c(좋아요+1) }}>👍</span> {좋아요}</h4>
        <p>5월 14일 발행</p>
      </div>
      
      <Modal/>
      

    </div>
  );
}

function Modal(){
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
)}

export default App;
