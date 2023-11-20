import React,{ useEffect, useState } from 'react'
import axios from 'axios'

function GetAttendance() {
    const [studentData, setStudentData] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState({});
    // const [selectedStudentData, setSelectedStudentData] = useState([]);
    // const [selectedStudentIds, setSelectedStudentIds] = useState([]);
      
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:8080/api/addstu/getatt'); 
            setStudentData(response.data); 
            setSelectedStudents(Object.fromEntries(response.data.map(student => [student.id, false])));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);
    //   const fetchSelectedStudents = async () => {
    //     const selectedIds = Object.entries(selectedStudents)
    //       .filter(([id, isSelected]) => isSelected)
    //       .map(([id]) => id);
          
    //       try {
    //         const response = await axios.get(`http://localhost:8080/api/addstu/findStudent/${selectedIds.join(',')}`);
            
    //         setSelectedStudentData(response.data);
    //       } catch (error) {
    //         console.error('Error fetching selected students:', error);
    //       }
         
    //   };
    
  return (
    <div className='container'>
      <h1>Attendance Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Registration No</th>
            <th>Attendance Date</th>
            {/* Add other table headers here */}
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id}>
              
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.registrationNumber}</td>
              <td>{student.attendanceDate}</td>
              
              {/* <td>
                <input
                  type="checkbox"
                  checked={selectedStudents[student.stuId]}
                  onChange={() => handleCheckboxChange(student.stuId)}
                />
              </td> */}
             
              {/* Add other table data here based on the fields in your student object */}
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default GetAttendance
