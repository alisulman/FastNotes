import { StickyNavbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { NoteProvider } from "./context/note_context";
import Notes from "./pages/notes";

function App() {
  return (
    <NoteProvider>
      <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allnotes" element={<Notes />} />
          {/* <Route path="/block" element={<Home />} /> */}
          {/* <Route path="/docs" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
}

export default App;
