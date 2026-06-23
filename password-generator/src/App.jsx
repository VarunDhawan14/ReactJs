import { useCallback, useEffect,useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passgenerator();}
    , [length, numbersAllowed, charAllowed, passgenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4 text-lg font-semibold'>
        <h1 className='text-blue-400 text-center my-3 font-bold text-2xl'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className='outline-4 text-shadow-black bg-blue-600 px-3 py-2 text-lg text-white font-semibold'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-lg'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 text-lg'>
            <input
              type='checkbox'
              Checked={numbersAllowed}
              id='numberInput'
              onChange={() => {
                setnumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 text-lg'>
            <input
              type='checkbox'
              Checked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
