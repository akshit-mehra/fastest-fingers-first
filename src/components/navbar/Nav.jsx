import React , {useEffect} from 'react'
import "./Nav.css";
import title from "./title.png";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Nav = () => {


  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  const handleLogout= async() => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="Nav">
      <div className="left">

      <Link  to="/" role="button"> <img src={title} alt="Uncooked" /></Link>
      
      </div>
      <div className="right">

        <Link className="navitem chat" to="/info" role="button">Info</Link>

        {!localStorage.getItem("token")?
        <Link className="navitem login" to='/login'>Login</Link>
        :
        <button className="navitem login"  onClick={handleLogout} role="button" >Logout</button>

        }
      </div>
    </div>
  );
};

export default Nav;
