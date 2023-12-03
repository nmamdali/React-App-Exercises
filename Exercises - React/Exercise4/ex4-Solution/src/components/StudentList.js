import React from 'react'
import StudentsData from './StudentsData.js'
const StudentList = () => {
  return (
      <div>
          <table className='table table-success table-striped table-bordered'>
          {
                  StudentsData.map((s) => {
                  return(
                     <tr><td>{s.id}</td><td>{s.name}</td><td>{s.level}</td><td>{s.email }</td></tr>
                  )
              })
              }
        </table>
    </div>
  )
}

export default StudentList
