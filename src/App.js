import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Curriculum from "./Components/Curriculum";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./Components/Career";
import Events from "./Components/Events";
import Singleevents from "./Components/Singleevent";


function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/classes" element={<Curriculum />}></Route>
        <Route path="/Curriculum" element={<Curriculum />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Career/Contact" element={<Contact />}></Route>
        <Route path="/event" element={<Events />}></Route>
        <Route path="/Singleevent/:id" element={<Singleevents />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
