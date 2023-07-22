import React, {useState} from 'react'
// import signpic from '../image/sign.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Rei = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {name, email, phoneno, password, cpassword} = user;
    
    const response = await fetch("/register", {
      method:"POST",
      headers:{
        "Content-Type" :"application/json",
      },
      body:JSON.stringify({
        name, email, phoneno, password, cpassword


      }),

    });

    const res = await response.json();

    if(res.status === 422 || !res){
      window.alert("Invalid registration");
      console.log("Invalid registration");
    }else{
      window.alert("Registration Successfull");
      console.log("Successfull Registration");

      navigate("/login");

    } 

  };

  return (
    <>
    <section className='signup'>
      <div className='container mt-5'>
        <div className='signup-content'>
        <div className='signup-form'>
          <h2 className='form-title'>sign up</h2>
          <form className='register-form' id='register-form' method='POST'>

            <div className='form-group'>
              <label htmlFor='name'>
              <i class="zmdi zmdi-assignment-account"></i>
              </label>
              <input type='text' name='name' id='name' autoComplete='off'
              value={user.name}
              onChange={handleInputs}
               placeholder='Your name'/>
            </div>

            <div className='form-group'>
              <label htmlFor='email'>
              <i class="zmdi zmdi-email"></i>
              </label>
              <input type='email' name='email' id='email' autoComplete='off' 
              value={user.email}
              onChange={handleInputs}
              placeholder='Your email'/>
            </div>

            <div className='form-group'>
              <label htmlFor='phone'>
              <i class="zmdi zmdi-phone-in-talk"></i>
              </label>
              <input type='number' name='phoneno' id='phoneno' autoComplete='off'
              value={user.phoneno}
              onChange={handleInputs}
               placeholder='Your Phone'/>
            </div>

            {/* <div className='form-group'>
              <label htmlFor='work'>
              <i class="zmdi zmdi-slideshare"></i>
              </label>
              <input type='text' name='work' id='work' autoComplete='off'
              value={user.work}
              onChange={handleInputs}
               placeholder='Your profession'/>
            </div> */}

            <div className='form-group'>
              <label htmlFor='password'>
              <i class="zmdi zmdi-lock"></i>
              </label>
              <input type='password' name='password' id='password' autoComplete='off'
              value={user.password}
              onChange={handleInputs}
               placeholder='Your password'/>
            </div>

            <div className='form-group'>
              <label htmlFor='cpassword'>
              <i class="zmdi zmdi-lock"></i>
              </label>
              <input type='password' name='cpassword' id='cpassword' autoComplete='off' 
              value={user.cpassword}
              onChange={handleInputs}
              placeholder='confirm your password'/>
            </div>

            <div className='form-group form-button'>
              <input type='submit' name='signup' id='signup' className='form-submit' value="register" onClick={PostData}/>
            </div>

          </form>
          </div>

          <div className='signup-image'>
            <figure>
              {/* <img src={signpic} alt='registration pic'/> */}
            </figure>
            <NavLink className="signup-image-link" to="/login">I am already registred</NavLink>

          </div>
        

        </div>
      </div>
    </section>
      
    </>
  )
}

export default Rei
