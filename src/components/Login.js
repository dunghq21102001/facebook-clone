import React from 'react'
import './Login.css'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth, provider} from '../firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'
import Theme from './theme'
function Login() {
  const [state, dispatch] = useStateValue()
  function signIn() {
    provider.setCustomParameters({ prompt: 'select_account' })
    signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // redux action? --> dispatch({ type: SET_USER, user });
                dispatch({ 
                  type: actionTypes.SET_USER, user: result.user 
                })
            })
            .catch((error) => alert(error.message))
  }


  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='https://th.bing.com/th/id/OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa?pid=ImgDet&rs=1' alt=''/>
            <button onClick={signIn} className='loginBtn'>Login</button>
        </div>
      
    </div>
  )
}

export default Login