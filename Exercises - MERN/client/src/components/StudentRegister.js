import React, { useState } from 'react'
import Axios from 'axios'

function StudentRegister() {
    const [studId, setStudId] = useState(""); 
    const [studName, setStudName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dept, setDept] = useState("IT"); 
    const [responseMsg, setResponseMsg] = useState("");
    const addStudent = () => {
        Axios.post("http://localhost:3001/addStudent", {
            studId: studId,
            studName:studName ,
            email: email,
            password:password ,
            dept: dept,
        })
            .then((res) => { setResponseMsg(res.data) })
            .catch((err)=>{console.log(err)});
    }
  return (
    <div className="container text-center col-md-5">
          <div><h4>Students Mark</h4></div>
          <div>
            <form>
                <table className="table table-bordered">
                    <tbody>
              
                    <tr>
                        <td>Student ID</td>
                        <td><input type="text" onChange={(e) => setStudId(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Student Name</td>
                        <td><input type="text" onChange={(e) => setStudName(e.target.value)} /></td>
                    </tr>  
                    <tr>
                        <td>Email</td>
                        <td><input type="email" onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>  
                    <tr>
                        <td>Password</td>
                        <td><input type="password" onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>  
                    <tr>
                        <td>Department</td>
                        <td>
                            <select onChange={(event)=>setDept(event.target.value)}>
                                <option value="IT">IT</option>
                                <option value="Engineering">Engineering</option>
                                <option value="English">English</option>
                                <option value="Business">Business</option>
                            </select>
                                 
                        </td>
                    </tr>  
                    <tr>
                        <td colSpan="2"><input type="button" onClick={addStudent} value="Add Student" /></td>
                    </tr>  
                    </tbody>
              </table>
                </form>  
              
          </div>  
          <div>
              <h5>{responseMsg }</h5> 
             
          </div>
          
    </div>
  )
}

export default StudentRegister

