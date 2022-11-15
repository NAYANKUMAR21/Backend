import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItems } from '../REDUX/cart/Cart.actions'

const Cart = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(store=>store.cartApp)
  console.log(data)
  
  useEffect(()=>{
    dispatch(getItems())
  },[dispatch])
  const handleDelete =(item)=>{
    dispatch(deleteItem(item.id)).then(()=>{
      dispatch(getItems())
    }).catch((er)=>console.log(er.message))
    
    
  }
  return (
    <div>
      <h1>CART</h1>
      <div key="1" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px"}}>
      {
        data?.map((item)=>{
          return (
            <>
            <div key={item.id}>
              <img src={item.image} alt={item.id} />
              <h1>{item.Plantary || item.product}</h1>
              <button onClick={()=>handleDelete(item)}>DELETE</button>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart
