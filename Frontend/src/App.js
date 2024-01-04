import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import Register from "./components/Register";
import Terms from "./components/Terms";
import Newsletter from "./components/Newsletter";
import Login from "./components/LogIn";
import { useState } from "react";
  

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (

    <>    
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        <Route
          path="/register" 
          element={<Register />} />
        <Route
          path="/home"
          element={authenticated ? <Home isAuthenticated={authenticated} /> : <Navigate to="/" />}
        />
        <Route 
        path="/coins" 
        element={authenticated ? <Coins isAuthenticated={authenticated} /> : <Navigate to="/" />}  
        />
        <Route 
        path="/coins/:coinId" 
        element={authenticated ? <CoinDetails isAuthenticated={authenticated} /> : <Navigate to="/" />}
        />
        <Route 
        path="/exchanges" 
        element={authenticated ? <Exchanges isAuthenticated={authenticated} /> : <Navigate to="/" />}
        />
        <Route 
        path="/newsletter" 
        element={authenticated ? <Newsletter isAuthenticated={authenticated} /> : <Navigate to="/" />}
        />
        <Route path="/terms" element={<Terms />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
