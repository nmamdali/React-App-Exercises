import React from 'react'
import StudentsData from './StudentsData'


const DisplayItems = (props) => {
  let filteredStudent = StudentsData.filter((std) => std.id === props.stdid)
    if (filteredStudent.length === 0) {
        return (
            <div><h4>No record found</h4></div>
        )
    }
    else {
        return (
            filteredStudent.map((s) => {
                return (
                    <div>
                        <div>Id: {s.id}</div>
                        <div>Name: {s.name}</div>
                        <div>Level: {s.level}</div>
                        <div>Email: {s.email}</div>
                    </div>
                )
            })
                      
        )
    }
};

export default DisplayItems;