import React from 'react'

function BookDisplay(book) {
  return (
      <div>
          <ul>
              <li>{book.id}</li>
              <li>{book.title}</li>
              <li>{book.author}</li>
             
          </ul>
    </div>
  )
}

export default BookDisplay
