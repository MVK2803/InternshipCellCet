import { Link } from 'react-router-dom'
import { FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react';


const Navbar = () => {
  const[navStatus,setNavStatus] = useState(false);

  return (
    <div className='navbar'>
      <h1>Internship Cell Cet</h1>
      <div className={navStatus ? 'links responsive-navbar' : 'links'}>
        <Link to={"/"} onClick={()=>setNavStatus(false)}>Home</Link>
        <Link to={"/login"} onClick={()=>setNavStatus(false)}>Login</Link>
        <Link to={"/contact"} onClick={()=>setNavStatus(false)}>Contact</Link>
        <button className = 'nav-btn nav-close-btn' onClick={()=>setNavStatus(!navStatus)}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <button className='nav-btn' onClick={()=>setNavStatus(!navStatus)}>
        <FaBars></FaBars>
      </button>
    </div>
  )
}

export default Navbar