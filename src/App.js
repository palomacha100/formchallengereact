import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from './pages/Home/styleHome'
import { Home } from './pages/Home/Home';
import { Success } from './pages/Success/Success';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </>
    
  )
}
