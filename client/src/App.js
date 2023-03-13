import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form">
           <p class="heading">Verify</p>
            <div className="box">
                <input className="input" type="password" maxlength="1"/>
                <input className="input" type="password" maxlength="1"/> 
                <input className="input" type="password" maxlength="1"/>
                <input className="input" type="password" maxlength="1"/>
            </div>
        <button className="btn1">Submit</button>
        <button className="btn2">Back</button>
      </form>
    </div>
  );
}

export default App;
