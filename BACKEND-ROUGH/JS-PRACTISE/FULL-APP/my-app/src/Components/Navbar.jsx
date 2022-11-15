import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../REDUX/auth/auth.actions'
const Navbar = () => {
  const dispatch = useDispatch()
  const state = useSelector(store=>store.cartApp)
  const handleLogout =()=>{
    dispatch(logout())
  }
  console.log(state.data.length)
  return (
    <div className='Navbar' style={{display:"flex",justifyContent:"space-between"}}>
   { <div className='Links' style={{display:"flex",justifyContent:"space-between",gap:"20px",color:"black"}}>
        
          
          <div>
          <NavLink to="/" style={{color:"black"}}>HOME</NavLink>
          </div>
          <div>
          <NavLink to="/products" style={{color:"black"}}>PRODUCT</NavLink>
          </div>
          <div>
          <NavLink to="/plants" style={{color:"black"}}>PLANTS</NavLink>
          </div>
          <div>
          <NavLink to="/cart" style={{color:"black"}}>CART</NavLink>
          </div>
          
          
        
    </div> }
    
    <div style={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
        <NavLink to="/cart" style={{color:"black",fontSize:"20px"}}>CART:{state.data.length}</NavLink>
        <button onClick={handleLogout}>LOGOUT</button>
    </div>
    </div>
  )
}

export default Navbar
