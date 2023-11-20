import React,{ useState, useEffect} from 'react'
import axios from 'axios'

export default function UpdateStudent() {
  const [formData, setFormData] = useState({

    name: '',
    registrationNo: '',
    status: 'Hostel',
    contact: '',
    address: '',
    city: '',
    fatherContact: '',
    hostelNumber: '',
    roomNumber: '',
    category: 'CSE',
  });

  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    // Fetch the selected student's data based on the ID
    const fetchSelectedStudentData = async () => {
      if (selectedStudentId) {
        try {
          const response = await axios.get(`http://localhost:8080/api/addstu/findStudent/${selectedStudentId}`);
          const selectedStudentData = response.data[0]; // Assuming the response is an array with one student
          setFormData({
            name: selectedStudentData.userName,
            registrationNo: selectedStudentData.stuReg,
            status: selectedStudentData.stuStatus,
            contact: selectedStudentData.stuContact,
            address: selectedStudentData.stuAddress,
            city: selectedStudentData.stuCity,
            fatherContact: selectedStudentData.stuFatherCon,
            hostelNumber: selectedStudentData.stuHostNo,
            roomNumber: selectedStudentData.stuRoomNo,
            category: selectedStudentData.stuCatg,
          });
        } catch (error) {
          console.error('Error fetching selected student data:', error);
        }
      }
    };

    fetchSelectedStudentData();
  }, [selectedStudentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can make an API call to update the student data
  };
  
  return (
    <div className='container'>
      <form className="row g-3" onSubmit={handleFormSubmit}>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4" name="name"
            value={formData.userName}
            onChange={handleInputChange} />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Registration No</label>
    <input type="text" className="form-control" id="inputPassword4" name="registrationNo"
            value={formData.registrationNo}
            onChange={handleInputChange}
   />
  </div>

  <div className="col-md-6">
    <label for="inputState" className="form-label">Status</label>
    <select id="inputState" className="form-select" name="status"
            value={formData.status}
            onChange={handleInputChange} >  
      <option selected value="Hostel">Hostel</option>
      <option value="Home">Home</option>
      <option value="OutSide">OutSide</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Contact</label>
    <input type="number" className="form-control" id="inputPassword4" name="contact"
            value={formData.contact}
            onChange={handleInputChange}/>
  </div>

  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address"
            value={formData.address}
            onChange={handleInputChange} />
  </div>

  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">City</label>
    <input type="text" className="form-control" id="inputPassword4" name="city"
            value={formData.city}
            onChange={handleInputChange} />
  </div>
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Father Contact</label>
    <input type="text" className="form-control" id="inputCity" name="fatherContact"
            value={formData.fatherContact}
            onChange={handleInputChange} />
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Hostel Number</label>
    <input type="number" className="form-control" id="inputCity" name="hostelNumber"
            value={formData.hostelNumber}
            onChange={handleInputChange}/>
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Room Number</label>
    <input type="number" className="form-control" id="inputCity" name="roomNumber"
            value={formData.roomNumber}
            onChange={handleInputChange}/>
  </div>

  <div className="col-md-6">
    <label for="inputState" className="form-label">Category</label>
    <select id="inputState" className="form-select" name="category"
            value={formData.category}
            onChange={handleInputChange} >
      <option selected value="CSE">CSE</option>
      <option value="ECE">ECE</option>
      <option value="CIVIL">CIVIL</option>
      <option value="EEE">EEE</option>
      <option value="ME">ME</option>
    </select>
  </div>
  
  <div className="col-md-6">
  {/* <div for="inputCity" className="form-label">Click On Sign In Button</div> */}
  <div></div>
    <button type="submit" className="btn btn-primary form-control" >Sign in</button>
  </div>
</form>
    </div>
  )
}
