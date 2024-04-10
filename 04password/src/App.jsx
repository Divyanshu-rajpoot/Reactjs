import { useState, useCallback , useEffect , useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()~[]|?><"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setpassword(pass);
  }, [length, number, character,setpassword])

  const copypasswordtoClipboard = useCallback(()=>{
    passwordref.current?.select() //this will highlight the text that have been selected
    passwordref.current?.setSelectionRange(0,100) //this will help select the particular section of the password generated
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length , character , number , passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-xl text-center my-3'>Password Generator </h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordref}
          />
          <button onClick={copypasswordtoClipboard} className=' hover:bg-black  duration-200 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>


        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setlength(e.target.value)
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={number}
                id='numberinput'
                onChange={()=>{
                  setnumber((prev) => !prev)
                }}
              />
              <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={character}
                id='characterinput'
                onChange={()=>{
                  setcharacter((prev) => !prev)
                }}
              />
              <label>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
