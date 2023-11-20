import React,{ useState , useEffect} from 'react'
import axios from 'axios'



function StudentList() {
  const [studentData, setStudentData] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState({});
  const [selectedStudentData, setSelectedStudentData] = useState([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  
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
  const fetchSelectedStudents = async () => {
    const selectedIds = Object.entries(selectedStudents)
      .filter(([id, isSelected]) => isSelected)
      .map(([id]) => id);
      
      try {
        const response = await axios.get(`http://localhost:8080/api/addstu/findStudent/${selectedIds.join(',')}`);
        
        setSelectedStudentData(response.data);
      } catch (error) {
        console.error('Error fetching selected students:', error);
      }
     
  };

  const handleSaveButtonClick = () => {
   
    const selectedIds = Object.entries(selectedStudents)
    .filter(([id, isSelected]) => isSelected)
    .map(([id]) => id);

console.log('Selected Student IDs:', selectedIds);

setSelectedStudentIds(selectedIds);
      fetchSelectedStudents();
  };

  const deleteSelectedStudents = async () => {
    const selectedIds = Object.entries(selectedStudents)
      .filter(([id, isSelected]) => isSelected)
      .map(([id]) => id);
  
    console.log('Selected IDs:', selectedIds);
  
    try {
      await axios.delete(`http://localhost:8080/api/addstu/deleteStu/${selectedIds.join(',')}`);
      alert('Selected students deleted successfully!');
    } catch (error) {
      alert('Error deleting selected students. Check the console for details.');
    }
  };
  

  const updateSelectedStudents = async () => {
    const selectedIds = Object.entries(selectedStudents)
      .filter(([id, isSelected]) => isSelected)
      .map(([id]) => id);
      const updatedData = {
        userName: prompt('Enter new value for Name'),
        stuReg: prompt('Enter new value for Registration No.'),
        stuStatus: prompt('Enter new value for status'),
        stuContact: prompt('Enter new value for Contact No.'),
        stuAddress: prompt('Enter new value for Address'),
        stuCity: prompt('Enter new value for City'),
        stuFatherCon: prompt('Enter new value for Fathercont'),
        stuHostNo: prompt('Enter new value for Hostel No.'),
        stuRoomNo: prompt('Enter new value for Room No.'),
        stuCatg: prompt('Enter new value for Category'),
        // Add other fields as needed
      };

    // Assuming you have an 'updateStudent' endpoint on your server
    try {
      await axios.put(`http://localhost:8080/api/addstu/updateStu/${selectedIds.join(',')}`,updatedData); 
        // You need to provide the updated data for the selected students here
        // For example:
        // updatedField1: 'new value 1',
        // updatedField2: 'new value 2',
        alert('Selected students updated successfully!');
        // ...
      

      
    } catch (error) {
      console.error('Error updating selected students:', error);
      alert('Error updating selected students. Check the console for details.');
    }
  };
  // const updateSelectedStudents = async () => {
  //   const selectedIds = Object.entries(selectedStudents)
  //     .filter(([id, isSelected]) => isSelected)
  //     .map(([id]) => id);
  
  //   const updatedData = {};
  
  //   // Function to prompt and update data
  //   const promptAndUpdate = (fieldName, promptMessage) => {
  //     const newValue = prompt(promptMessage);
  
  //     // Check if the user clicked Cancel
  //     if (newValue === null) {
  //       throw new Error('User canceled the update.'); // Use an error to break out of the function
  //     }
  
  //     updatedData[fieldName] = newValue;
  //   };
  
  //   try {
  //     promptAndUpdate('userName', 'Enter new value for Name');
  //     promptAndUpdate('stuReg', 'Enter new value for Registration No.');
  //     promptAndUpdate('stuStatus', 'Enter new value for status');
  //     promptAndUpdate('stuContact', 'Enter new value for Contact No.');
  //     promptAndUpdate('stuAddress', 'Enter new value for Address');
  //     promptAndUpdate('stuCity', 'Enter new value for City');
  //     promptAndUpdate('stuFatherCon', 'Enter new value for Fathercont');
  //     promptAndUpdate('stuHostNo', 'Enter new value for Hostel No.');
  //     promptAndUpdate('stuRoomNo', 'Enter new value for Room No.');
  //     promptAndUpdate('stuCatg', 'Enter new value for Category');
  
  //     // Rest of your update logic using updatedData
  //     console.log('Updated Data:', updatedData);
  //   } catch (error) {
  //     // Handle the cancellation
  //     console.log('User canceled the update.');
  //   }
  // };
  

  
  
  

  return (
   
      <div className='container'>
      <h1 align="center" style={{ color: 'green' }}>Student Data</h1>
      <table className="table">
        <thead>
          <tr>
          
            <th>Student ID</th>
            <th>Name</th>
            <th>Registration No</th>
            <th>Student_Status</th>
            <th>Contact</th>
            <th>Address</th>
            <th>City</th>
            <th>Father_Cont</th>
            <th>Hostel_No</th>
            <th>Room_No</th>
            <th>Category</th>
            <th>Check</th>
            {/* Add other table headers here */}
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.stuId}>
              
              <td>{student.stuId}</td>
              <td>{student.userName}</td>
              <td>{student.stuReg}</td>
              <td>{student.stuStatus}</td>
              <td>{student.stuContact}</td>
              <td>{student.stuAddress}</td>
              <td>{student.stuCity}</td>
              <td>{student.stuFatherCon}</td>
              <td>{student.stuHostNo}</td>
              <td>{student.stuRoomNo}</td>
              <td>{student.stuCatg}</td>
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
      <button type="button" className="btn btn-success" onClick={handleSaveButtonClick}>
        Save
      </button>
      <button type="button" className="btn btn-danger m-2" onClick={deleteSelectedStudents} >
        Delete
      </button>
      <button type="button" className="btn btn-info m-1" onClick={updateSelectedStudents}>
        Update
      </button>
      
      </div>
   

  )
}

export default StudentList