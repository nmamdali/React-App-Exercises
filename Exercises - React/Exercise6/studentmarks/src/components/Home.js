import React from 'react'
import { useState } from 'react'
function Home() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [quizMark, setQuizMark] = useState(0)
    const [midMark, setMidMark] = useState(0)
    const [finalMark, setFinalMark] = useState(0)


  return (
      <div className="container text-center col-md-5">
          <div><h4>Students Mark</h4></div>
          <div>
            <form>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                          <td>First Name</td><td><input type="text" onChange={(e) => setFname(e.target.value)} /></td>
                    </tr>
                    <tr>
                          <td>Last Name</td><td><input type="text" onChange={(e) => setLname(e.target.value)} /></td>
                    </tr>  
                     <tr>
                          <td>Quiz Mark</td><td><input type="text" onChange={(e) => setQuizMark(e.target.value)} /></td>
                      </tr>  
                       <tr>
                          <td>Midexam Mark</td> <td><input type="text" onChange={(e) => setMidMark(e.target.value)} /></td>
                      </tr>  
                       <tr>
                          <td>Final Mark</td> <td><input type="text" onChange={(e) => setFinalMark(e.target.value)} /></td>
                          </tr>  
                    </tbody>
              </table>
                </form>  
              
          </div>  
          <div>
              <h5>Name: {fname} {lname }</h5> 
              <h5>Total Marks: {parseFloat(quizMark) + parseFloat(midMark) +parseFloat(finalMark)}</h5>  
          </div>
          
    </div>
  )
}

export default Home
