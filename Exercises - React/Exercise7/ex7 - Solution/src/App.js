import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ManageStudent from "./Components/ManageStudent";
import SearchStudent from "./Components/SearchStudent";


function App() {
  return (
    <div className="App">
      <div>
          <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage" element={<ManageStudent />} />
          <Route path="/search" element={<SearchStudent />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>

      
    </div>
  );
}

export default App;