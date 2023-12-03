import React from 'react'

function Currencies() {
  const currency_list=['US Dollar', 'Yuan','Dirham','Rial','Rupees']
  return (
      <div class="container text-center col-md-4">
          <h3>List of Currencies</h3> 
          <ul className='list-group'>
          {
              currency_list.map((c) => {
                  return (<li className='list-group-item'>{c}</li>)
              }
            )
          }
          </ul>
      
    </div>
  )
}

export default Currencies
