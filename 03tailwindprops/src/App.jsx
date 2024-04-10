import { useState } from 'react'

import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username:'divyanshu',
    age:21
  }
  let arr = [1,2,3];

  return (
    <>
      <h1 className=' text-black text-base p-2 bg-sky-300  border rounded-xl'>chai and tailwind</h1>
      <Card username='chaiandcode' btntext='click me ->'/>
      <Card username='divyanshu' btntext='visit me -> '/>
    </>
  )
}

export default App
