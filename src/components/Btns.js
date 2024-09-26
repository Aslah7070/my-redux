import React from 'react'
import {useSelector,useDispatch}from "react-redux"
import randomColor from 'randomcolor';
import { change_color } from '../Redux/color/colorSlice'
import { decrement_count, increment_count } from '../Redux/count/countSlice';

const Btns = () => {
  const dispatch=useDispatch()
       const color= useSelector(state=>state.color.value)
       const count=useSelector(state=>state.count.value)
    const changeColor=()=>{
      const newColor= randomColor()
        dispatch(change_color({
            color:newColor
        }))
    }
    const increment=()=>{
        dispatch(increment_count())
    }
    const decrement=()=>{
        dispatch(decrement_count())
    }
  return (
    <div>
        <h1 style={{color}}>ASLLAH</h1>
        <p>{count}</p>
      <button onClick={changeColor}  >changeColor</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Btns
