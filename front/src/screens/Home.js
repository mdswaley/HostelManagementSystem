import React from 'react';
import img from './forms.png';
import './Home.css'; // Create a Home.css file for styling
import { Link } from 'react-router-dom';

function Home() {
  const myStyle = {
    width: '18rem',
  };

  return (
    <div className='container'>
      <div className='card-container'>
        <div className='card' style={myStyle}>
          <div className='card-body'>
            <h1 className='card-title'>New Student</h1>
            {/* <h6 className='card-subtitle mb-2 text-body-secondary'></h6> */}
            {/* <p className='card-text'>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p> */}
            <Link to="/addStudent" className='card-link'>
              Add New Student
            </Link>
            <Link to="/studentlist" className='card-link'>
              List Of Student
            </Link>
          </div>
        </div>
        {/* Repeat similar structure for other cards */}
        <div className='card' style={myStyle}>
          <div className='card-body'>
            <h1 className='card-title'>Student Attendance</h1>
            {/* <h6 className='card-subtitle mb-2 text-body-secondary'>Card subtitle</h6> */}
            {/* <p className='card-text'>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p> */}
            <Link to="/attendance" className='card-link'>
              Take Attendance
            </Link>
            <Link to="/getatt" className='card-link'>
              View Attendance
            </Link>
          </div>
        </div>
        <div className='card' style={myStyle}>
          <div className='card-body'>
            <h1 className='card-title'>Book Room</h1>
            {/* <h6 className='card-subtitle mb-2 text-body-secondary'>Card subtitle</h6>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p> */}
            <a href='#' className='card-link'>
             Select Room
            </a>
            <a href='#' className='card-link'>
              Available or Not
            </a>
          </div>
        </div>
        <div className='card' style={myStyle}>
          <div className='card-body'>
            <h1 className='card-title'>Food Routine </h1>
            {/* <h6 className='card-subtitle mb-2 text-body-secondary'>Card subtitle</h6>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p> */}
            <Link to="/routine" className='card-link'>
             View Routine
            </Link>
            <a href='#' className='card-link'>
              Update
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
