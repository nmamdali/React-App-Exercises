import './App.css';
import bookpic from './components/bookpic.jpg';
import BookShow from './components/BookShow';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import BooksData from './components/BooksData';

function App() {
  const name = 'Mohamed Ali'
  const city = "Nizwa"
  const noofbooks = BooksData.length;
  return (
   <div className="App">
      <div className='row'>
        <div className='col-md-12'>
          <Header />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          <BookShow />
        </div>
        <div className='col-md-4'>
          <LoginForm />
          <img src={bookpic} alt='bookpic.jpg' />
        </div>
      </div>
      <div>
        <Footer noofbooks={noofbooks } />
      </div>
       
    </div>
  );
}

export default App;
