import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sucess from "../pages/Sucess/Sucess";
import { ChangeEvent, ReactNode, useState } from "react";

export interface sendProps {
  sendEmailData: { email: ReactNode };  // Defina o tipo explícito para sendEmailData
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RouterController = () => {
  const [sendEmailData, setSendEmailData] = useState({
    email:'',
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSendEmailData((sendEmailData) => ({  
      ...sendEmailData,
      [e.target.name]: e.target.value, 
    }));  
  };

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home handleChange={handleChange} sendEmailData={sendEmailData} />} />
        <Route path="/Sucess" element={<Sucess sendEmailData={sendEmailData} />} />
      </Routes>
    </Router>
  );
};

export default RouterController;
