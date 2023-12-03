import React from 'react'
import { useState } from 'react'
import StudentsData from './StudentsData'
const AddStudent = () => {
  const [ID, setID] = useState('')
    const filteredStudent = StudentsData.filter((sid) => sid.id === ID)
    if (filteredStudent.length <= 0) {
   
        let element =    <h3> No Data Found</h3>
        
    }
    else {
         return (
      <div className="container text-center w-25">
          <h3>Search Student</h3>
           <input type="text" placeholder="Enter Student ID" onChange={(event)=>setID(event.target.value)}/>
       {
              filteredStudent.map((std,key) => {
                  return (<div key={key}>
                      <h5>{std.id}</h5>
                      <h5>{std.name}</h5>
             </div>)
         })
       }
      </div>
  )
   }
  
}

export default AddStudent
