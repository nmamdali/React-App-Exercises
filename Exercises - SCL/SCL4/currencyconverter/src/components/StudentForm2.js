import React from 'react'
import { useState } from 'react';


function StudentForm() {
    const [id, setId] = useState('0');
    const [mark, setMark] = useState(0);
    const [grade, setGrade] = useState("");
    const idHandler = (event) => {
        setId(event.target.value);
    }
    const markHandler = (event) => {
           setMark(event.target.value);
     }
    const gradeHandler = () => {   
        let g;
        if (mark > 90)
            g = 'A'
        else if (mark > 80)
            g = 'B'
        else if (mark > 70)
            g = 'C'
        else
            g = 'D'
        setGrade(g);
    }
  return (
    <div>
          <form>
              <label htmlFor="stdid">Student Id</label>
              <input
                  type='text'
                  id='stdid'
                  onChange={idHandler}
              /> <br />
              
            <label htmlFor="stdmark">Student Mark</label>
              <input
                  type='text'
                  id='stdmark'
                  onChange={markHandler}
              /><br />
              <input
                  type='button'
                  value='Show Grade'
                  onClick ={gradeHandler}
              />
         </form>      
          <h4>{id}</h4>
          <h4>{mark}</h4>
           <h4>{grade}</h4>
    </div>
  )
}

export default StudentForm
