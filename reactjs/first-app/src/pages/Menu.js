import {Link} from "react-router-dom";
import { logout } from "./reduxExample/login/LoginSlicer";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Menu()
{
  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.loginReducer.auth)
  const signOut=useSelector((state)=>state.loginReducer.signOut)
  const navigate=useNavigate()
  useEffect(()=>
  {
    if(signOut){
      navigate("/login")
    }
  },[signOut])
    return(<>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
        

          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
        

          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      
      </ul>
      <form className="d-flex">
      <li className="nav-item">
       <Link className="nav-link" to="/login">Login</Link>
        </li>


        <li className="nav-item">
       <Link className="nav-link" to="/register">Register</Link>
        </li>

        <li className="nav-item">
       <Link className="nav-link" to="/product">Product</Link>
        </li>

        <li className="nav-item">
       <Link className="nav-link" to="/productcard">ProductCard</Link>
        </li>
        <li className="nav-item">
       <Link className="nav-link" to="/calc">Calculator</Link>
        </li>
        <li className="nav-item">
       <Link className="nav-link" to="/counter">Counter</Link>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reducers
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="reducercounter">counter</a></li>
            {/* <li><a class="dropdown-item" href="/evenOdd">Even Odd</a></li> */}
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Redux
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="redux">counter</a></li>
            {/* <li><a class="dropdown-item" href="reducereo">Even Odd</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
        
          
       <button className="btn btn-outline danger"onClick={()=>dispatchEvent(logout())} to="/counter">Logout</button>
        </li>
        :<>
        <li className="nav-item">
       <Link className="nav-link" to="/login">Login</Link>
        </li>


        <li className="nav-item">
       <Link className="nav-link" to="/register">Register</Link>
        </li>

        <li className="nav-item">
       <Link className="nav-link" to="/forget">Forget passWord</Link>
        </li>
        </>
       
      </form>
    </div>
  </div>
</nav>


    </>)
}