
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState(null)
  const [error, setError] = useState(null)
  const [adviceNum, setAdviceNum] = useState(null)

  const fetchAdvice = async () => {
   
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      if (!res.ok) {
        throw new error("Could not get data")
      }
      const result = await res.json("")
      setAdvice(result.slip.advice)
      setAdviceNum(result.slip.id)

    } catch (error) {
      setError(error.message)
    }  

  }
  return (
    <>

      <div className='advice'>
        <p className='num'>Advice #{adviceNum}</p> 
        <hr />
        <div className='advicediv'> <p className='text'>{advice}</p></div>
       
        <i onClick={fetchAdvice} className="fa-solid fa-dice-five"></i>
      </div>


    </>
  )
}

export default App
