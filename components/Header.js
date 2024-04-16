import { useState } from "react";
import { Link }  from "react-router-dom"

import Logo from "../assets/img/logo1.png"

const Title = () => {
    return (
      <a href="/">
      <img className="h-28 p-2"
        // src="https://foodvilla.no/src/img/logo.png"
        src={Logo}
        alt="logo"
      />
      </a>
    )
  }
const Header = () => {
   
   const [isLoggedIn,setIsLoggedIn]  = useState(false)

  
    return (
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <Title />
       
        <div className='nav-items'>
          <ul className="flex py-10">
           <Link to ="/">
              <li className="px-2">Home</li>
           </Link>

            <Link to="/about">
              <li className="px-2">About</li>
            </Link>

            <Link to="/contact">
              <li className="px-2">Contact</li>
            </Link>

          
            <li className="px-2">Cart</li>
            <Link to ="/instamart">
             <li className="px-2">Instamart</li>
            </Link>
          </ul>
        </div>
        {isLoggedIn ? (<button  onClick={()=>setIsLoggedIn(false)}>Logout</button> 
        ):  (<button onClick={()=>setIsLoggedIn(true)}>Login</button>
        )}
       
        
      </div>
    );
  };
  export default Header;