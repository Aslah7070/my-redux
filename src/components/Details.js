
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {addToCart}from "../Redux/fetchSlice"

import {fetchh} from "../Redux/fetchSlice"
const Details = () => {
    const dispatch=useDispatch()
   const result= useSelector((state)=>state.fetchDatas.datas)
   useEffect(()=>{
    dispatch(fetchh())
   },[dispatch])
  return (
    <div>
        <div>
            <button>cart </button>
        </div>
        {
            result.map((val,index)=>(
               <div key={val.id}>
                 <li>{val.title}<button onClick={()=>dispatch(addToCart(index))}>Add to cart</button></li>
               </div>
            ))
        }
      
    </div>
  )
}

export default Details