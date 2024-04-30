import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setlength] = useState(5)
  const [num ,setNum] = useState(false)
  const [char,setChar] =useState(false)
  const [pass,setPass]=useState("")
  const passwordRef=useRef(null)
  const passwordGen=useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num){
      str+="0123456789"
    }
    if(char){
      str+="!@#$%^&*()~`_+-"
    }
 

  for(let i=1;i<=length;i++){
    let gen=Math.floor(Math.random()*str.length+1)
  console.log(gen)
  password+=str.charAt(gen)

  }
  setPass(password)

  },[length,num,char,setPass])

  const copyText=useCallback(()=>{
 passwordRef.current?.select()
 passwordRef.current?.setSelectionrange(0,50)

 window.navigator.clipboard.writeText(pass)//select the valuw present on window and copy to clipbord and sotre in pass
  },[pass])
  
useEffect(()=>{passwordGen()},[length,num,char,setPass,passwordGen])

  return (
    <>
    <div className='w-full max-w-md items-center mx-auto shadow-md rounded-lg px-4 my-8 text-yellow-500 '> PASSWORD GENERATOR
     <h1 className='text-3xl text-center text-white'>PASSWORD</h1>
     <div className='flex shadow rounded-lg overflow-hidden'>
      <input 
      type='text'
      value={pass}

      className='outline-none w-full py-1 px-3'
      placeholder='PASSWORD'
      ref={passwordRef}
      readOnly/>
      <button  onClick={copyText} className='outline-none bg-green-500 text-white px-2 py-1 shrink-0'>Copy</button></div>
     <div className='flex text-sm gap-x-2'>
       <div className='flex'>
        <input
        type="range" 
        min={5}
        max={100}
        value={length }
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        id='range'
        />
        <label htmlFor='range'>Number:{length}</label>
        <div><input 
        type="checkbox"
        defaultChecked={num}
        id='numberInput'
        onChange={()=>{
          setNum((prev)=>!prev)
        }}/>
        <label htmlFor='numberInput'>Number</label></div>
         <div><input 
        type="checkbox"
        defaultChecked={char}
        id='charInput'
        onChange={()=>{
          setChar((prev)=>!prev)
        }}/>
        <label htmlFor='characterInput'>Character</label>
        </div>
      </div>
     </div>
     </div>
    </>
  );
  }

export default App
