import React,{useState} from 'react'


function UpdateStudents() {
  const STUDENTS = ['Ali', 'John', 'Asma']
  const [studentList, setStudentList] = useState(STUDENTS)
  const [newStudent, setNewStudent] = useState('')
  const updateStudentList = () => {
    setStudentList((studentList) => [...studentList,newStudent])
  }
  return (
    <div>
      <div>
          <input type="text" onChange={(e) => setNewStudent(e.target.value)} />
          <input type="button" value='Add Student' onClick={updateStudentList} />
      </div>
      <ul>
        {
          studentList.map((name, key) => {
            return (
              <li key={key} >{name}
                <input type="button" value='Delete' />
              </li>
              
              
          )
          }
          )    
      }
      </ul>
      
    </div>
  )
}

export default UpdateStudents
