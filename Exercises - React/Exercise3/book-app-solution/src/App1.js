import './App.css';
import BookShow from './components/BookShow';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
function App() {
  
  return (
    <div className="App">
      <div className='row'>
        <div className='col-md-12'><Header /></div>
      </div>
      <div className='row'>
        <div className='col-md-8'> <BookShow /></div>
        <div className='col-md-4'><LoginForm /></div>
      </div>
      <div>
         <Footer />
      </div>
       
    </div>
  );
}

export default App;
