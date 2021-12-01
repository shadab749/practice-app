import React, {useState} from "react";
import Logo from './images/logo.png';
import Logo1 from './images/logo1.jpg';
import Popup from "./popup";



const Navigation = () => {
    // pop up
    const [isOpen,setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }


    const [navState, setNavState] = useState(false);

    const [windowWidth , setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function(){
        setWidth(this.innerWidth);
    });

    return(
        <header className={navState ? 'navopen' : 'navclosed'}>

            
            <ul className="left-menu">
                {
                // conditional rendering
                (windowWidth > 992) ?
                    <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </>
                    :
                    ""
                }
            </ul>

            <a href="#" className="logo">
                <img src={Logo} alt="" />
            </a>

            <ul className="right-menu">
                {
                // conditional rendering
                (windowWidth < 992) ?
                    <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </>
                    :
                    ""
                }
                <li><a href="#">Press</a></li>
                <li><a href="#">What we Do</a></li>
                <li><a href="#" onClick={togglePopup} >LogIn / Singup</a>

                    { isOpen && < Popup 

                           content = { <>
                                <img src={Logo} style={{marginTop:"30px",display:"block",margin:"0 auto",boxShadow:" 0px 1px 20px rgba(0, 0, 0, 27%)"}} alt="" />
                                <h2>Login Account</h2>
                                <input type="email" placeholder="Email" className="form-control" />
                                <input type="password" placeholder="Password" className="form-control" />
                                <div>
                                    <button className="btn">Sign In</button>
                                </div>
                                <a href="#" className="text">Sign Up / Forgot</a>
                            </>
                           }
                           handleClosed={togglePopup} 
                    />}
                    
                
                
                </li>
            </ul>

            <div className="phone-menu" onClick={()=> setNavState(!navState)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}








export default Navigation;