import './App.css';
import StudentsList from './components/StudentsList';
import Home from './components/Home';
import Contacts from './components/Contacts';
import { Route, Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav bg-warning justify-content-center">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/stdlist">Students</Link>
        <Link className="nav-item nav-link" to="/contacts">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stdlist" element={<StudentsList />} />
        <Route path="/contacts" element={<Contacts/> } />
     </Routes>

    </div>
  );
}

export default App;
