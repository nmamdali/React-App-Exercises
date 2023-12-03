import React,{useState,useEffect} from 'react'


function ManageStudent() {
  const [studentList, setStudentList] = useState(['Ali', 'John', 'Asma'])
  const [newStudent, setNewStudent] = useState('')
  const addItem = () => {
    if (newStudent.trim() === "") 
      return
    setStudentList([...studentList,newStudent])
  }
  const deleteItem = (index) => {
    let updateList = [...studentList]
    updateList.splice(index, 1)
    setStudentList(updateList)
  
  }
  useEffect(() => {
    console.log('Rendering the component...')
  },[])
  return (
    <div className='container'>
      <div>
          <input type="text" onChange={(e) => setNewStudent(e.target.value)} />
          <input type="button" value='Add Student' onClick={addItem} className='mt-5 mb-5'/>
      </div>
      
      <table className='table table-success'>
        <tbody>
        {
          studentList.map((item, index) => {
            return(
              <tr key={index} >
                <td>{item}</td>
                <td><input type="button" value="Delete" onClick={() => deleteItem(index)} /></td>
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

export default ManageStudent
