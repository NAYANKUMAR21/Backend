import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../REDUX/products/Product.actions'

const Products = () => {
    const dispatch=useDispatch()
    const {data,loading}= useSelector(store=>store.productApp)
    console.log(data)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    if(loading){
        return <h1>...loading</h1>
    }

  return (
    <div>
      <h1>PRODUCTS</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
        {
            data?.map((item)=>{
                return (
                    <Link to={`/products/${item.id}`} key={item.id}>
                    <div key={item.id}>
                        <img src={item.image} alt={item.id} with="10%"/>
                        <div>{item.product}</div>
                    </div>
                    </Link>
                )
            })
        }
        </div>
    </div>

  )
}

export default Products
