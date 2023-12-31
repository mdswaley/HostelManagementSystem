import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <div className='container'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
     <a class="navbar-brand" href="#">Navbar w/ text</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarText">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">         
       <li class="nav-item">
           <Link class="nav-link active" to="/home">Home</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/addstudent">Features</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/studentlist">Student List</Link>
         </li>
         <li class="nav-item">
           {/* <a class="nav-link" href="#">Pricing</a> */}
           <Link className='nav-link' to="/attendance">Attendance</Link>
         </li>
       </ul>
       <span class="navbar-text">
      
         {/* <button type="button" class="btn btn-primary" onClick={<login/>}>Sign In</button> */}
        <Link className="btn btn-primary" to="/">Sign In</Link>
       </span>
     </div>
   </div>
 </nav>

     </div>
      

  );
}
