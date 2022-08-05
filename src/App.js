import './App.css'

// components
import HomePage from "./pages/HomePage";
import Navbar from "./components/shared/Navbar";

// react router
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="" /> */}
      </Routes>
    </div>
  );
}

export default App;
