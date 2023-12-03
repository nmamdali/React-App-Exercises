import React from 'react'
import { useState } from 'react'

function StudentForm() {
    const [id, setId] = useState('')
    const [mark, setMark] = useState(0)
    const [result, setResult] = useState('')
    const [grade, setGrade] = useState('')
    const resultHandler = () => {
        let r
        if (mark >= 67)
            r = 'Passed'
        else
            r = 'Failed'
        setResult(r)
        let g
        if (mark >= 85)
            g = 'A'
        else if (mark >= 70)
            g = 'B'
        else
            g = 'C'
        setGrade(g)
    }

  return (
      <div style={{width:400}}>
          <table className='table'>
              <tbody>
                  <tr>
                      <td>Student Id</td>
                      <td><input
                          type="text"
                          onChange={(event) => setId(event.target.value)}
                      /></td>
                  </tr>
                  <tr>
                      <td>Student Mark</td>
                      <td>
                          <input
                              type="number"
                              onChange={(event) => setMark(event.target.value)}
                          />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <input
                              type="button"
                              value='Show Result'
                              onClick ={resultHandler}
                          />
                      </td>
                  </tr>
            </tbody>
          </table>
          <h4>Student Id is{id}</h4> 
          <h4>Student Mark is{mark}</h4>
          <h4>Student Result{result}</h4>
          <h4>Student Grade{grade}</h4>
    </div>
  )
}

export default StudentForm
