import './App.css';
import React, {useState} from 'react'
function App() {

  const [showVerificationButton, setVerificationButton] = useState(true)

  return (
    <div className="App">
      <form className="form">
           <p class="heading">OTP Verification</p>
            <div className="box">

            <i class="fas fa-check-circle" className='check'></i>

                <input className="input" type="password" maxlength="1"/>
                <input className="input" type="password" maxlength="1"/> 
                <input className="input" type="password" maxlength="1"/>
                <input className="input" type="password" maxlength="1"/>
            </div>

        {showVerificationButton &&  <button onClick={() => setVerificationButton(false)} className="btn2">Get Verification code </button>
}
        {!showVerificationButton &&  <button className="btn">Submit</button>}
      </form>
    </div>
  );
}

export default App;
