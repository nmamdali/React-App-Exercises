//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import StudentsList from './components/StudentsList';
import Contacts from './components/Contacts';
import {Routes,Route, Link} from  'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav className="nav justify-content-center">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/stdlist">Students</Link>
          <Link className="nav-item nav-link" to="/contacts">Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stdlist" element={<StudentsList />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

    </div>
  );
}

export default App;
