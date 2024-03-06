import { StickyNavbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/account" element={<Home />} /> */}
        {/* <Route path="/block" element={<Home />} /> */}
        {/* <Route path="/docs" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
