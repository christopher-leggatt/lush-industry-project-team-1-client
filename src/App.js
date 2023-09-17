import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
    <Navbar />    
      </BrowserRouter>
    </div>
  );
}

export default App;
