import React from 'react'


function ManageStudent() {
  //Set the required state variables
  //Write the required  functoins to handle the student data
  return (
    <div className='container'>
      <div>
          <input type="text" placeholder='Student Name' />
          <input type="button" value='Add Student'  className='mt-5 mb-5'/>
      </div>
      
      <table className='table table-success'>
        <tbody>
        {/*
          Write the code to display array elements
        */}
      </tbody>
      </table>
      
    </div>
  )
}

export default ManageStudent
