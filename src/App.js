import { useState,useEffect } from 'react';
import './App.css';
import Square from './Component/Square';
import { patterns } from './Component/patter';

function App() {
  const [board,setBoard]=useState(['','','','','','','','','',])
  const [player,setPlayer]=useState('o')
  const [result,setResult]=useState({winner:'none',state:'none'})
 
 useEffect(()=>{
  patters()
  checkTie()
  if (player == 'X'){
  setPlayer('o')
  }else{
  setPlayer('X')
  }
  },[board])
  useEffect(()=>{
  if(result.state!='none'){
   alert(`game finished' ${result.winner} won the game`)
   restart()
  }
  },[result])
  const checkTie=()=>{
    let filled=true;
    board.forEach((square)=>{
      if (square==''){
        filled=false
      }
    })
    if(filled){
      setResult({winner:'No One',state:'Tie'})
    }
  }
  const restart=()=>{
    setBoard(['','','','','','','','','',])
    setPlayer('X')
  }
  const choosesquare=(square)=>{
  setBoard(board.map((val,idx)=>{
    if(idx==square && val==''){
      return player
    }return val
  }))
 
  }
  const patters=()=>{
  patterns.forEach((item)=>{
    const firstplayer =board[item[0]]
    if(firstplayer=='')return;
    let winningPattern=true
    item.forEach((idx)=>{
      if(board[idx] !== firstplayer){
          winningPattern=false
      }
    })
    if(winningPattern){
      setResult({winner:player,state:'won'})
  }
  
  })
}
  return (
   <div className='App'>
    <div className='board'>
        <div className='row'>
          <Square val={board[0]} select={()=>{choosesquare(0)}}/>
          <Square val={board[1]} select={() =>{choosesquare(1)}}/>
          <Square val={board[2]} select={()=>{choosesquare(2)}}/>
        </div>
        <div className='row'>
        <Square val={board[3]} select={()=>{choosesquare(3)}}/>
          <Square val={board[4]} select={() =>{choosesquare(4)}}/>
          <Square val={board[5]} select={()=>{choosesquare(5)}}/>
        </div>
        <div className='row'>
        <Square val={board[6]} select={()=>{choosesquare(6)}}/>
          <Square val={board[7]} select={() =>{choosesquare(7)}}/>
          <Square val={board[8]} select={()=>{choosesquare(8)}}/>
        </div>
    </div>
   </div>
  );
}

export default App;
