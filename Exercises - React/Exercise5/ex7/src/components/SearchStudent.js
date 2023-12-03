import React from 'react'
import { useState } from 'react'
import DisplayItems from './DisplayItems';

export default function SearchStudent() {
    const [id, setID] = useState('');
         
  return (
    <div className="d-flex  justify-content-center">
      <table>
        <tr>
          <td>
             <input type="text" placeholder="Enter Student ID" onChange={(event)=>setID(event.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>
              <DisplayItems stdid={id} />
          </td>
        </tr>
      </table>
    </div>
  )
}
