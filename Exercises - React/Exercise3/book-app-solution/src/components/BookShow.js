import React from 'react';
import BooksData from './BooksData';
import './BookShow.css';

function BookShow(){
    return (
        <div className='grid'>
        {
          BooksData.map((book) =>
            <div>
               <h4>Book Id: {book.id}</h4>
               <h4>Book Name: {book.title}</h4>
               <h4>Author: {book.author}</h4>
               <img src={book.pic} alt={book.id} />
            </div>
        )  
         
        }
        </div>
    )

}


export default BookShow;