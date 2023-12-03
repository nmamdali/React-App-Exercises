import React, { useState } from 'react'
import DisplayStudent from './DisplayStudent'

function SearchStudent() {
  const [id, setId] = useState('');
  const stdHandler = () => {
    <DisplayStudent id={id}/>
  }
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <input type='button' value='show' onClick={stdHandler}></input>
      </div>

    </div>
  )
}

export default SearchStudent

