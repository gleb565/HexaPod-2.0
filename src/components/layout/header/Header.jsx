import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss'

function Header () {

    const location = useLocation();

    return (
        <>
            <div>
                <Link to="/"><button className={location.pathname === '/'? styles.activeButton1 : styles.button1}>Control</button></Link>
                <Link to="/servo"><button className={location.pathname === '/servo'? styles.activeButton2 : styles.button2}>Servo</button></Link>
                <Link to="/specialControl"><button className={location.pathname === '/specialControl'? styles.activeButton3 : styles.button3}>Special Control</button></Link>
            </div>
            <div>
                <p className={styles.text}>HexaPod 2.0</p>
            </div>
        </>
    )
}
export default Header