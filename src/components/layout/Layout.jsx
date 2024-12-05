import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './header/Header.jsx'
import MainPart from './mainpart/MainPart.jsx'
import Control from '../screens/control/Control.jsx'
import Servo from '../screens/servo/Servo.jsx'
import SpecialControl from '../screens/special control/SpecialControl.jsx';


const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Control />} />
            <Route path="/servo" element={<Servo />} />
            <Route path="/specialControl" element={<SpecialControl />} />
        </Routes>
      </Router>
        <MainPart />
    </>
  );
};

export default Layout;