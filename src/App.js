import './App.scss';

function App() {
  return (
    <div className="App">
      <div className ="signInBox">
        
      <img src="https://green.cdn.energy/branding/logo-r.svg" alt="green logo"></img>
      <div className="form-header">
        <h1>Operations studio</h1>
        <p>Please enter your email below</p>
      </div>

      <form>
        
        <label htmlFor="email" className="email-label">Email Address</label>
        <br/>
        <div className="hi">
        <input type ="text" id="email"></input>
        </div>
        
        <div className="rememberMe">
        <input type ="checkbox" id="rememberMe" ></input>
        <label htmlFor="rememberMe" >Remember this device</label>
        </div>

      </form>
      <button>Sign In</button>
      </div>
    </div>

  );
}

export default App;
