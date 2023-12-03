import React from 'react'


function SearchStudent() {
 //Set required state variables.
  return (
    <div>
      <div>
        <input type="text" placeholder='Enter Student Id'  />
      </div>
      <div>
        {/* Invoke the component to DisplayItem to 
            display the search results. pass the student id as
            the parameter to the component.
        */}
      </div>
    </div>
  )
}

export default SearchStudent

