import React from 'react'
import StudentsData from './StudentsData'

function DisplayStudent(props) {
    const filterStudent = StudentsData.filter((s) => s.id === props.id)
    if (filterStudent.length === 0)
        return ("No students found")
    else {
         return (
      <div className='container'>
          <table className='table table-info'>
              <thead>
                  <tr ><th>Id</th><th>Name</th><th>Level</th><th>Email</th></tr>
              </thead>
              <tbody>
                  {
                      filterStudent.map((s,index) => {
                          return (
                              <tr>
                                  <td>{s.id}</td>
                                  <td>{s.name}</td>
                                  <td>{s.level}</td>
                                  <td>{s.email}</td>
                              </tr>
                        )
                      } 
                      )
                  }
              </tbody>
          </table>
          
    </div>
  )
    }

 
}

export default DisplayStudent
