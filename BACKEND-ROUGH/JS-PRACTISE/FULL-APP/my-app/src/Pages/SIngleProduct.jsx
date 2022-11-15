import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from '../REDUX/cart/Cart.actions'
import { getSingle } from '../REDUX/products/Product.actions'

const SIngleProduct = () => {
    const dispatch=useDispatch()
    const {data,loading} = useSelector(store=>store.productApp)
    console.log(data,"single")
    let id = useParams()
    
    useEffect(()=>{
        dispatch(getSingle(+id.id))
    },[dispatch,id])
    const handlePushCart = (item)=>{
        dispatch(addItem(item))
    }
    if(loading){
        return <h1>...Loading</h1>
    }
  return (
    <div>
        {
            data?.map((item)=>{
                return (
                    <div key={item.id}>
                        <img src={item.image} alt={item.id} />
                        <h1>{item.product}</h1>
                        <h4>Price:${item.price}</h4>
                        <button onClick={()=>handlePushCart(item)}>ADD TO CART</button>
                    </div>
                )
            })
        }
        
    </div>
  )

}

export default SIngleProduct
