import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlants } from '../REDUX/plants/Plant.actions'

const Plants = () => {
    const dispatch = useDispatch()
    const {data,loading} = useSelector(store=>store.plantApp)
    console.log(data,"nayan")
    useEffect(()=>{
        dispatch(getPlants())    
    },[dispatch])
    
    if(loading){
        return <h1>...loading</h1>
    }
  return (
    <div>
      <h1>Plants</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
    {
        data?.map((item)=>{
            return (
                <div key={item.id}>
                <div>
                    <Link to={`/plants/${item.id}`}>
                    <img src={item.image} alt={item.id} width="35%"/>
                    <h4>{item.Plantary}</h4>
                    </Link>
                </div>
            </div>
            )
        })
    }
    </div>
    </div>
  )
}

export default Plants
