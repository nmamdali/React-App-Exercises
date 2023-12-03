import React from 'react'

function StudentsList() {
    const StudentData = [
         { id: "123",name: "Ahmed" },
         { id: "124",name: "Ali" },
         { id: "125",name: "Anas" }
     ];
  return (
      <div>
          <h2>Students Names</h2>
          <select>
              {
                  StudentData.map((std) => {
                      return (
                          <option key={std.id}>{std.name}</option>
                      )
                      
                  }
                  )
              }
          </select>
     
    </div>
  )
}
export default StudentsList
