import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import About from '../components/About/about';


const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} /> 
        </Routes>
    );
};

export default RoutesIndex