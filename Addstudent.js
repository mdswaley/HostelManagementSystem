import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Addstudent({ selectedStudentForUpdate }) {
  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [status,setStatus] = useState("Hostel");
  const [cont,setCont] = useState("");
  const [fathcon,setFathcon] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [hostno,setHostno] = useState("");
  const [roomno,setRoomno] = useState("");
  const [catg, setCatg] = useState("CSE");

  useEffect(() => {
  
    if (selectedStudentForUpdate) {
      setId(selectedStudentForUpdate.stuId);
      setName(selectedStudentForUpdate.userName);
      setReg(selectedStudentForUpdate.stuReg);
      setStatus(selectedStudentForUpdate.stuStatus);
      setCont(selectedStudentForUpdate.stuContact);
      setFathcon(selectedStudentForUpdate.stuFatherCon);
      setAddress(selectedStudentForUpdate.stuAddress);
      setCity(selectedStudentForUpdate.stuCity);
      setHostno(selectedStudentForUpdate.stuHostNo);
      setRoomno(selectedStudentForUpdate.stuRoomNo);
      setCatg(selectedStudentForUpdate.stuCatg);
      // ... (populate other form fields)
    }
  }, [selectedStudentForUpdate]);



  
async function save(event) {
  event.preventDefault();
  try {
    if (selectedStudentForUpdate) {
      // Perform update
      await axios.put(`http://localhost:8080/api/addstu/updateStu/${id}`, {
      
       userName : name,
      stuReg : reg,
      stuStatus : status,
      stuContact : cont,
      stuAddress : address,
      stuCity : city,
      stuFatherCon : fathcon,
      stuHostNo : hostno,
      stuRoomNo : roomno,
      stuCatg : catg
        // ... (other fields)
      });
      alert('Student updated successfully!');
    } else {
      // Perform new registration
      await axios.post('http://localhost:8080/api/addstu/addStudent', {
        stuId : id,
       userName : name,
      stuReg : reg,
      stuStatus : status,
      stuContact : cont,
      stuAddress : address,
      stuCity : city,
      stuFatherCon : fathcon,
      stuHostNo : hostno,
      stuRoomNo : roomno,
      stuCatg : catg
        // ... (other fields)
      });
      alert('Student registered successfully!');
    }

    // Clear form fields after saving
    setId('');
    setName('');
    // ... (clear other form fields)
  } catch (err) {
    alert('Error saving student. Check the console for details.');
    console.error('Error saving student:', err);
  }
}






  return (
    <div className='container mt-5'>
         
<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4" value={name}
            onChange={(event) =>
              {
                setName(event.target.value);      
              }}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Registration No</label>
    <input type="text" className="form-control" id="inputPassword4"
    value={reg}
    onChange={(event) =>
      {
        setReg(event.target.value);      
      }}/>
  </div>

  <div className="col-md-6">
    <label for="inputState" className="form-label">Status</label>
    <select id="inputState" className="form-select" value={status}
            onChange={(event) =>
              {
                setStatus(event.target.value);      
              }}>
      <option selected value="Hostel">Hostel</option>
      <option value="Home">Home</option>
      <option value="OutSide">OutSide</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Contact</label>
    <input type="text" className="form-control" id="inputPassword4" value={cont}
            onChange={(event) =>
              {
                setCont(event.target.value);      
              }}/>
  </div>

  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address}
            onChange={(event) =>
              {
                setAddress(event.target.value);      
              }}/>
  </div>

  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">City</label>
    <input type="text" className="form-control" id="inputPassword4" value={city}
            onChange={(event) =>
              {
                setCity(event.target.value);      
              }}/>
  </div>
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Father Contact</label>
    <input type="text" className="form-control" id="inputCity" value={fathcon}
            onChange={(event) =>
              {
                setFathcon(event.target.value);      
              }}/>
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Hostel Number</label>
    <input type="text" className="form-control" id="inputCity" value={hostno}
            onChange={(event) =>
              {
                setHostno(event.target.value);      
              }}/>
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Room Number</label>
    <input type="text" className="form-control" id="inputCity" value={roomno}
            onChange={(event) =>
              {
                setRoomno(event.target.value);      
              }}/>
  </div>

  <div className="col-md-6">
    <label for="inputState" className="form-label">Category</label>
    <select id="inputState" className="form-select" value={catg}
            onChange={(event) =>
              {
                setCatg(event.target.value);      
              }}>
      <option selected value="CSE">CSE</option>
      <option value="ECE">ECE</option>
      <option value="CIVIL">CIVIL</option>
      <option value="EEE">EEE</option>
      <option value="ME">ME</option>
    </select>
  </div>
  {/* <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div> */}
  {/* <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}

  <div className="col-md-6">
  {/* <div for="inputCity" className="form-label">Click On Sign In Button</div> */}
  <div></div>
    <button type="submit" className="btn btn-primary form-control" onClick={save}>Sign in</button>
  </div>
</form>
         
    </div>
  )
}
