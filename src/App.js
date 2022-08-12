// components
import HomePage from "./pages/HomePage";
import Navbar from "./components/shared/Navbar";
import CoinPage from './pages/CoinPage';
import AboutPage from "./pages/AboutPage";

// react router
import {Routes, Route, Navigate} from "react-router-dom";

// style
import styled from "styled-components";

const Container = styled.div `
  text-align: center;
  background-color: #14161a;
  min-height: 100vh;
`

function App() {
  return (
    <Container>
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        <Route path='/coins/:id' element={<CoinPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />  
      </Routes>
    </Container>
  );
}

export default App;
