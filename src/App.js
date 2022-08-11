import './App.css'

// components
import HomePage from "./pages/HomePage";
import Navbar from "./components/shared/Navbar";
import CoinPage from './pages/CoinPage';

// react router
import {Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        <Route path='/coins/:id' element={<CoinPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />  
      </Routes>
    </div>
  );
}

export default App;
