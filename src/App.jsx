import { useState,useCallback,useEffect,useRef} from 'react'
// ..passwordGenerator ko call krrna ka liya ek method hai button lgaa do 
function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,SetNumberAllowed]=useState(false)
  const [charAllowed,SetcharAllowed]=useState(false)
  const [password,Setpassword]=useState("" )
  const passwordref=useRef(null)



  const passwordGenerator= useCallback(()=>{//usecallback is  a hoook it automaticlly  use some portion of previous call of function
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuywxyz"  //ya data hai jis se passwaord banaa ga 
    if(numberAllowed)str+="1234567890"
    if(charAllowed)str+="!@#$%^&*()_+{}|:<>?\?"
  // hm loop cha;a kr pass word nikla layngay but kitni bar loop chalaa ga 
  // ys decide hota hai legth se 
    for (let i = 0; i<=length; i++) {
       let char=Math.floor(Math.random() * str.length+1)// give random index of 
      pass+=str.charAt(char)
    }
  Setpassword(pass)


  
  },[length,numberAllowed,charAllowed,Setpassword] )//[length,numberAllowed,charAllowed,Setpassword] this isdependency 
const copypasswordtoclipboard=useCallback(()=>{// ya copy krna ka liya
//           ar baar sabzi banate ho, toh naya belan, chakla, kadai kharidte ho kya?
// Nahi!
// 🟢 Aap wahi same tools dobara use karte ho jab tak kharab na ho jaaye.

// Waise hi React mein:

// useCallback wahi purana function dobara use karne deta hai

// Naya function sirf tab banata hai jab zarurat ho (dependency change ho jaaye) 
          passwordref.current ?.select()// ya only user of feel deyna ka liya ki copy huaa hai wo 
          // passwordref diya hu  only multiple user of effect dekhna ka liya 
          window.navigator.clipboard.writeText(password)
          },[password])

    useEffect(()=>{// it is hooks  agr may kisko bhi change krta hu to ya automatic call kraa gaa jo dependency hai  
      passwordGenerator()// 
    },
    [length,numberAllowed,charAllowed,Setpassword,passwordGenerator])


  return(
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"
     ><h1 className="text-white text-center my-3">Password Generater</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 text-gray-700'
        placeholder='passwaord'
        readOnly //only for read
        ref={passwordref}
        />
        <button onClick={copypasswordtoclipboard}     // yaha hm ess function ko ess liya call nhi krr r
// This will immediately call the function when the component renders, not when the button is clicked — which is wrong.




         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         > Copy</button>
      </div>
      <div  className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)}//The e is a parameter in the arrow function. It stands for the event object that React automatically passes to the onChange handler when the input changes.

          />
           <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
                <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              SetNumberAllowed((prev) => !prev);
          }}
       />  <label htmlFor="numberInput">Numbers</label>

        </div>
        <div className="flex items-center gap-x-1">
                <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              SetcharAllowed((prev) => !prev);//  React itself passes prev (you can name it anything, it's just a parameter):
              //jo   hai opposite kr do 
          }}
       />  <label htmlFor="characterInput">Character</label>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
