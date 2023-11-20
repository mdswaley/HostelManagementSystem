import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warid, setWarid] = useState("");
  const navigate = useNavigate();
  async function login(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8080/api/userReg/login", {
          userEmail: email,
          userPass: password,
          warId: warid,
          }).then((res) => 
          {
           console.log(res.data);
           
           if (res.data.message == "Email not exits") 
           {
             alert("Email not exits");
           } 
           else if(res.data.message == "Login Success")
           { 
              
              navigate('/Home');
           } 
            else 
           { 
              alert("Incorrect Email and Password not match");
           }
        }, fail => {
         console.error(fail); // Error!
});
      }

       catch (err) {
        alert(err);
      }
    
    }
  return (
    <div className='container mt-3'>
      <p class="h1 mt-3">Login Form</p> 
           <form>
       <div className="mb-3 mt-4">
         <label for="exampleInputEmail1" className="form-label">Email address</label>
         <input type="email" className="form-control" 
         value={email}
         onChange={(event) => {
           setEmail(event.target.value);
         }}/>
       </div>

       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control" 
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}/>
       </div>

       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Warden ID</label>
         <input type="text" className="form-control" 
        value={warid}
        onChange={(event) => {
          setWarid(event.target.value);
        }}/>
       </div>
      
       <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
       <p>New Customber <Link to="/registration">Register Now.</Link></p>
     </form>
         </div>
  );
}

