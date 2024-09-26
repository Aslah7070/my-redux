import React from 'react'
import {useDispatch,useSelector}from "react-redux"

const Cart = () => {
    const dispatch=useDispatch()
   const cartResult=useSelector((state)=>state.fetchDatas.cart)
  return (
    <div>
      {
        cartResult&&cartResult.map((item)=>(
            <div>
                <li>{item.body}</li>
            </div>
        ))
      }
    </div>
  )
}

export default Cart
