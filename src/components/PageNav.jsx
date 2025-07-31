import styles from './PageNav.module.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
function PageNav() {
    return (
        <div>
            <nav className={styles.nav}>
                <Logo/>
                <ul>  
                    <li>
                        <NavLink to='/pricing'>PRICING</NavLink>
                    </li>
                    <li>
                        <NavLink to='/product' >PRODUCT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' >Login</NavLink>
                    </li>                                         
                </ul>
            </nav>
        </div>
    );
}            <link to="/" className="nav-link">
                
            </link>
export default PageNav;