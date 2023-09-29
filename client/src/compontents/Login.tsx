import {useRef} from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';


function Login() {
  const passwordString = useRef();
  const navigate = useNavigate();

  return (
    <div className='mainPage'>
      <div className='LoginField'>
        <div className='passwordText'>
          Passwort:
        </div>
      <input type="text" className='passwordField' id="fname" name="password" ref={passwordString.current}/>
      <div className='buttonDiv'>
        <button className='passwordButton' onClick={() => {navigate("/");}}>Login</button>
      </div>
      </div>
    </div>
  )
}


export default Login

