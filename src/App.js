import './App.scss';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNewProfile } from "./pages/createNewProfile/CreateNewProfile";
import Navbar from './components/Navbar/Navbar';
import { Home } from "./pages/Home/Home";
import Test from './pages/Test/Test';

function App() {

  const [currentForm, setCurrentForm] = useState('home');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 
  
  return (
    <div className="App"> 

{
      currentForm === "home" ? <Home onFormSwitch={toggleForm} /> : <CreateNewProfile onFormSwitch={toggleForm} />
    }
    


    <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
    <Navbar />    
      </BrowserRouter>
    </div>
  );
}

export default App;
