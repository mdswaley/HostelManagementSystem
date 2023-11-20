import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './authentication/Registration';
import Login from './authentication/login';
import Navbar from './screens/Navbar';
import Attendance from './screens/Attendance';
import 'bootstrap/dist/css/bootstrap.min.css';

import Addstudent from './screens/Addstudent';
import StudentList from './authentication/StudentList';
import Home from './screens/Home';
import GetAttendance from './screens/GetAttendance';
import UpdateStudent from './screens/UpdateStudent';
import Routine from './screens/Routine';

function App() {
  return (
    // <Registration/>

    <Router>
          {/* <Navbar/>  */}
        
       <Routes>
        
      {/* <Route path="/navbar" element={<Navbar/>} />  */}
         <Route path="/" element={<Login/>} />
         <Route path="/routine" element={<Routine/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/update" element={<UpdateStudent/>}/>
         <Route path="/getatt" element={<GetAttendance/>} />
        <Route path="/studentlist" element={<StudentList/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/addstudent" element={<Addstudent/>}/> 
        </Routes>
       </Router>
     
  );
}

export default App;
