import './App.scss';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNewProfile } from "./pages/createNewProfile/CreateNewProfile";
import Navbar from './components/Navbar/Navbar';
import { Home } from "./pages/Home/Home";
import ItemDetailPage from './pages/ItemDetailPage/ItemDetailPage';
import Test from './pages/Test/Test';
import Cart from './pages/Cart/Cart';
import SearchPage from './pages/SearchPage/SearchPage';
import ProfileList from './pages/ProfileList/ProfileList';
import { useState } from 'react';
import CategorizedItems from './pages/CategorizedItems/CategorizedItems';

function App() {

  const [userData, setUserData] = useState({})

  const [currentForm, setCurrentForm] = useState('home');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">

      {/* {
        currentForm === "home" ? <Home onFormSwitch={toggleForm} /> : <CreateNewProfile onFormSwitch={toggleForm} />
      } */}



      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/item/:id' element={<ItemDetailPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path='/search'
              element={<SearchPage setUserData={setUserData} />}

            />
            <Route
              path='/profile-list'
              element={<ProfileList userData={userData} />}
            <Route path="/category/:category" element={<CategorizedItems />} />
            />
          </Routes>
        </main>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
