import React from 'react'
import './EmployeePayroll.css'
import { useState } from 'react'

function EmployeePayroll() {
    const [name, setName] = useState('Null')
    const [salary, setSalary] = useState(0)
    const [bonus, setBonus] = useState(0)
    const calculateBonus = () => {
        let b;
        if (salary <= 1000)
            b =5 / 100 * salary
        else
            b = 10 / 100 * salary

        setBonus(b)
    }
  return (
    <div>
        <form action="" className="form-style">
              
                              <input
                                  type="text"
                                  className="field-style"
                                  onChange={(event)=> setName(event.target.value)}
                              />
                          
                              <input
                                  type="number"
                                  className="field-style"
                                  onChange={(event)=> setSalary(event.target.value)}
                              />
                        
                         
                                  <input
                                      type='button'
                                      value='Calculate'
                                      onClick={calculateBonus}
                                  />                               
                             

        </form>
          <div>
              <table className="style-table">
                  <tbody>
                        <tr className="style-row"><td>Name: {name}</td></tr>    
                        <tr className="style-row"><td>Salary:{salary}</td></tr>   
                        <tr className="style-row"><td>Bonus:{bonus}</td></tr>   
                        <tr className="style-row"><td>NetSalary:{parseFloat(salary) + parseFloat(bonus) }</td></tr>
                  </tbody>
              </table>
        
              
      </div>
    </div>
  )
}

export default EmployeePayroll
