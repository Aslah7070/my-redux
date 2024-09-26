import React from 'react'
import {useSelector,useDispatch}from "react-redux"
import { change_color } from '../Redux/color/colorSlice';
import randomColor from 'randomcolor';

const Btn2 = () => {
   const dispatch= useDispatch()
   const handlBackground=()=>{
    dispatch(change_color({
        color:randomColor()
    }))
   }
    const color=useSelector(state=>state.color.value)
    
  return (
    <div>
        <div style={{width:"100px",height:"100px",backgroundColor:color}}>Div</div>
      <button onClick={handlBackground}>changeDivColor</button>
    </div>
  )
}

export default Btn2
