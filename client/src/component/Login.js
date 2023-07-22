import React, {useState} from 'react'
// import loginpic from '../image/login.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch('/log', {
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
      email,password

      }),
    });

    const res = response.json();
    console.log(res);

    if(response.status === 400 || !res){
      window.alert("Invalid credentials");
    }else{
      window.alert("Login successfull");
      navigate("/");
    }
  }


  return (
    <>
     <section className='sign-in'>
      <div className='container mt-5'>
        <div className='signin-content'>

        <div className='signin-image'>
            <figure>
              {/* <img src={loginpic} alt='registration pic'/> */}
            </figure>
            <NavLink className="signin-image-link" to="/rei">Create an account</NavLink>
          </div>

        <div className='signin-form'>
          <h2 className='form-title'>sign In</h2>
          <form className='register-form' id='register-form' method='POST'>

            <div className='form-group'>
              <label htmlFor='email'>
              <i class="zmdi zmdi-email"></i>
              </label>
              <input type='email' name='email' id='email' autoComplete='off'
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
               placeholder='Your email'/>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>
              <i class="zmdi zmdi-lock"></i>
              </label>
              <input type='password' name='password' id='password' autoComplete='off'
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
               placeholder='Your password'/>
            </div>

            <div className='form-group form-button'>
              <input type='submit' name='signin' id='signin' className='form-submit' value="log"
                onClick={loginUser}
              />
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>

      
    </>
  )
}

export default Login
