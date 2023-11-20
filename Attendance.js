import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Attendance() {
    const [mystyle]=useState({
        color:'black',
        width:'700px',
        backgroundColor:'white'
      });
      const [studentData, setStudentData] = useState([]);
      const [selectedStudents, setSelectedStudents] = useState({});
      const [selectedStudentData, setSelectedStudentData] = useState([]);
      const [selectedStudentIds, setSelectedStudentIds] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedDate, setSelectedDate] = useState(new Date());

  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:8080/api/addstu/allStudents'); 
          setStudentData(response.data); 
          setSelectedStudents(Object.fromEntries(response.data.map(student => [student.stuId, false])));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);
  
    const handleCheckboxChange = (studentId) => {
      setSelectedStudents((prevState) => ({
        ...prevState,
        [studentId]: !prevState[studentId],
      }));
    };
  
    const handleAddButtonClick = async () => {
      const selectedIds = Object.keys(selectedStudents).filter((stuId) => selectedStudents[stuId]);
    
      try {
        const response = await axios.post('http://localhost:8080/api/addstu/addSelectedStudents',
          selectedIds,selectedDate)
           // Convert the date to string
      alert("Take Attendance")
        console.log('Response from server:', response.data);
        // You can handle success or display a message to the user
      } catch (error) {
        console.error('Error adding selected students:', error);
        // You can handle errors or display an error message to the user
      }
    };
    const handleShowButtonClick = () => {
      // Navigate to the attendance data display page using React Router
      // You can pass the necessary data as props to the new component if needed
      // For simplicity, I'm passing selectedStudentIds as an example
      window.location.href = `/getatt?selectedStudentIds=${selectedStudentIds.join(',')}`;
    };
    

   
   
   

  return (
    <div className='container'>
      <h1>TAKE ATTENDANCE</h1>
      <input type='text' placeholder='Enter Reg No.' style={mystyle} /><br/><br/>
      {/* <label><h1>ENTER THE DAY</h1></label><br/>
      <input type='date' /> */}
      {/* <div class="form-floating mb-3">
  <input type="date" style={mystyle}  id="floatingInput"/>
  <label for="floatingInput">Email date </label>
</div> */}
      <table className="table">
        <thead>
          <tr>
          
            <th>Student ID</th>
            <th>Name</th>
            <th>Registration No</th>
            <th>Check</th>

          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.stuId}>
              
              <td>{student.stuId}</td>
              <td>{student.userName}</td>
              <td>{student.stuReg}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStudents[student.stuId]}
                  onChange={() => handleCheckboxChange(student.stuId)}
                />
              </td>
             
              {/* Add other table data here based on the fields in your student object */}
            </tr>
          ))}
          
        </tbody>
      </table>
      {/* <button type="button" className="btn btn-success" onClick={handleSaveButtonClick}>
        Save
      </button> */}






      <input type='submit' className='btn btn-success' value="ADD" onClick={handleAddButtonClick}/>
      <input type='submit' className='btn btn-primary m-2' value="SHOW" onClick={handleShowButtonClick} />
    </div>
  )}