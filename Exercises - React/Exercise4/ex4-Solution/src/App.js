import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div>
         <Header />
      </div>
       <div>
         <StudentList />
      </div>
       <div>
         <Footer />
      </div>
    </div>
  );
}

export default App;
