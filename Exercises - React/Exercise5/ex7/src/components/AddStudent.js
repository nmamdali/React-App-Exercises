import React from 'react'
import { useState } from 'react'

const AddStudent = () => {
    const STUDENTS = ['Ali', 'Anas', 'Abbas']
    const[StudentsList , setStudentsList] = useState(STUDENTS)
    const [newStudent, setNewStudent] = useState('')
    const studentHandler = () => {
        setStudentsList((old)=>[...old, newStudent])
    }
  return (
      <div className="container text-center w-25">
          <h3>Add Student</h3>
          <input
              type="text"
              placeholder='Enter Student Name'
              onChange ={(e)=>{setNewStudent(e.target.value)}}
           />
           <input type='button' onClick={studentHandler} value='Add' />
          <ul className='list-group'>
          {
              StudentsList.map((student,key) => {
                  return (
                      <li className='list-group-item' key={key}>{student }</li>
                  )
              })
              }
          </ul>
         
    </div>
  )
}

export default AddStudent
