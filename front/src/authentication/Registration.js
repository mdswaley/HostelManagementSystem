import React, { useState } from 'react'
import axios from 'axios'

function Registration() {
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [status, setStatus] = useState("Student");

    const handleStatusChange = (event) => {
      const selectedStatus = event.target.value;
      setStatus(selectedStatus);
      if (selectedStatus !== "Warden") {
        // Clear the ID field if the status is not "Warden"
        setId("");
      }
    };
  

    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/userReg/save",
        {
        userName: name,
        userEmail: email,
        userPass: pass,
        userSta: status,
        warId: status === "Warden" ? id : "",
        
        
        });
          alert("User Registation Successfully");
          setId("");
          setEmail("");
          setName("");
          setPass("");
          
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    


  return (
  
    <div className='container'>
       <p className="h1 mt-3">Registration Form</p> 
       <form >
       <div className='mt-4'>

      <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text" className="form-control"  value={name}
            onChange={(event) =>
              {
                setName(event.target.value);      
              }} />
      </div>
      <div className="mb-3">
    <label for="inputState" className="form-label">Status</label>
    <select  id="inputState"
              className="form-select"
              value={status}
              onChange={handleStatusChange}>
              
      <option selected value="Student">Student</option>
      <option value="Warden">Warden</option>
    </select>
    </div>

    {status === "Warden" && (
            <div className="mb-3">
              <label className="form-label">Enter ID</label>
              <input
                type="text"
                className="form-control"
                value={id}
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </div>
          )}


      <div className="mb-3">
        <label  className="form-label">Email</label>
        <input type="email" className="form-control"   value={email}
             onChange={(event) =>
               {
                setEmail(event.target.value);      
               }}  />
      </div>
      

      {/* <div className="mb-3">
        <label  className="form-label">Mobile Number</label>
        <input type="text" className="form-control"   value={mobile}
            onChange={(event) =>
              {
                setMobile(event.target.value);      
              }} />
      </div> */}

      <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" className="form-control"   value={pass}
            onChange={(event) =>
              {
                setPass(event.target.value);      
              }} />
      </div>

{/* <div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Conform Password</label>
  <input type="text" className="form-control" id="formGroupExampleInput2"/>
</div> */}
    <div className="mb-3">
        <button type='submit' className="btn btn-success" onClick={save}>Sign up</button>
    </div> 
 
  </div> 
  </form>
  </div>

  )
}

export default Registration
