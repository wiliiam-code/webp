import './App.css';
import loginbutton from './compoment/logintitle';
import username from './compoment/username';
import password from './compoment/password';
import logintitle from './compoment/loginbutton';

function App() {
  var compoment =
    <div className="App">
      <div className='login'>{loginbutton()}</div>
      <div className='username'>{username()}<br/></div>
      <div className='password'>{password()}</div>
      <div className='button'>{logintitle()}</div>
    </div>
  return compoment;
}

export default App;