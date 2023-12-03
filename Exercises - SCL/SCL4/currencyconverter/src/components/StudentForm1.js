import React from 'react'



function StudentForm() {

    const gradeHandler = (event) => {
        console.log(event.target.value);
       
    }
  return (
    <div>
          <form>
             
              <input
                  type='button'
                  value='Show Grade'
                  onClick ={gradeHandler}
              />
         </form>      
 
    </div>
  )
}

export default StudentForm
