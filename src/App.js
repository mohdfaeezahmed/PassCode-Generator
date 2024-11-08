import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, UC, NC, SC } from './data/passChar';

function App() {

  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [numCase, setNumCase] = useState(false)
  let [symCase, setSymCase] = useState(false) 

  let [passwordLen, setPasswordLen] = useState(8)
  let [finalPass, setFinalPass] = useState('')

  let generatePassword = () => {
    let finalPassword = ''
    let charSet = ''
    if(uppercase || lowercase || numCase || symCase) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numCase) charSet += NC;
      if (symCase) charSet += SC

      for (let i = 0; i < passwordLen; i++) {
        finalPassword += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFinalPass(finalPassword)

    } else {
      alert('Please select atleast one option!')
    }
  }
  let copyPassword = () => {
    navigator.clipboard.writeText(finalPass)
  }

  return (
    <>
         {/* Header */}
      <header>
        <h1>Smart Pass Generator</h1>
      </header>


          <div className='passwordBox'>
            <h2 className='passcdgen'>Passcode Generator</h2>

            <div className='passwordBoxInner'>
              <input type = 'text' value={finalPass} readOnly/> <button onClick={copyPassword}>Copy</button>
            </div>

            <div className='passwordLength'>
              <label> Password length</label>
              <input type = 'number' max={20} min={8} value={passwordLen} onChange={(event) => setPasswordLen(event.target.value)}></input>
            </div>

            <div className='passwordLength'>
              <label>Include uppercase letters</label>
              <input type = 'checkbox' checked = {uppercase} onChange={()=>setUppercase(!uppercase)}></input>
            </div>

            <div className='passwordLength'>
              <label> Include lowercase letters</label>
              <input type = 'checkbox' checked = {lowercase} onChange={()=>setLowercase(!lowercase)}></input>
            </div>

            <div className='passwordLength'>
              <label> Include numbers</label>
              <input type = 'checkbox' checked = {numCase} onChange={()=>setNumCase(!numCase)}></input>
            </div>

            <div className='passwordLength'>
              <label> Include symbols</label>
              <input type = 'checkbox' checked = {symCase} onChange={()=> setSymCase(!symCase)}></input>
            </div>

            <button className='btn' onClick={generatePassword}>Generate Password</button>

          </div>
    </>
  );
}

export default App;
