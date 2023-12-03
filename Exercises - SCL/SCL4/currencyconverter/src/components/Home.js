import React, { useState } from 'react'

function Home() {
    const [amount, setAmount] = useState(0);
    const [targetCurrency, setTargetCurrency] = useState('');
    const [result, setResult] = useState('');

    const currencyHandler = () => {
        let conversionRate
        if (targetCurrency ==="OMR")
            conversionRate = 0.38
        else if (targetCurrency ==="USD")
            conversionRate = 2.6
        setResult((amount * conversionRate).toFixed(2));

    }
    return (
        <div class="container text-center col-md-5">
            <h4>Currency Converter</h4>
            <form>
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <td>Enter the Amount</td>
                        <td><input type="number" name="amount" onChange={(event)=>setAmount(event.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Select the Option</td>
                        <td>
                            <input type="radio" name='cur' onClick={(event)=>setTargetCurrency(event.target.value)} value='USD' /> From OMR to Dollar
                            <input type="radio" name='cur' onClick={(event)=>setTargetCurrency(event.target.value)} value='OMR' /> From Dollar to OMR
                         </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="button" value='Click Me' onClick={currencyHandler}/>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>    
            <h3>Amount: {amount}</h3> 
            <h3>Target Currency: {result}</h3>  
    </div>
  )
}

export default Home
