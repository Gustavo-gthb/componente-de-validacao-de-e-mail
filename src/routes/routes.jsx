import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sucess from "../pages/Sucess/Sucess";

const RouterController = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sucess" element={<Sucess />} />
      </Routes>
    </Router>
  );
};

export default RouterController;
