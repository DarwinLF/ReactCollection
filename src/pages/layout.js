import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
    return (
        <>
            <div className='navbar'>
               <Link to="/">Home</Link>
               <div className='dropdown'>
                 <button className='dropbtn'>Applications <FontAwesomeIcon icon={faCaretDown}/></button>
                 <div className='dropdown-content'>
                    <Link to="/todo">Todo</Link>
                 </div>
               </div>
             </div>

            <Outlet />
        </>
    )
}

export default Layout;