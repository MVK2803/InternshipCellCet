import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push ,set} from 'firebase/database';
import "../assets/Forms.css"
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQE_eCptAb6_xt7mxS1oYmT0E5afuzdCc",
  authDomain: "internship-cell-e26ae.firebaseapp.com",
  databaseURL: "https://internship-cell-e26ae-default-rtdb.firebaseio.com",
  projectId: "internship-cell-e26ae",
  storageBucket: "internship-cell-e26ae.appspot.com",
  messagingSenderId: "233407532983",
  appId: "1:233407532983:web:8dd875289d7c4ec8142232",
  measurementId: "G-2VVFYPDRC9"
};

const db = initializeApp(firebaseConfig);

function App() {
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: '',
    lastName: '',
    year:'',
    branch:'',
    gitHub:'',
    description:'',
    resumeLink:''


  });
 

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload CV to Firebase Storage
      
      // Save only first name and last name to Firebase Realtime Database
      const database = getDatabase(db);
      const databaseRef = ref(database, 'employeeDetails');
      const newEmployeeRef = push(databaseRef);
      await set(newEmployeeRef, {
        firstName: employeeDetails.firstName,
        lastName: employeeDetails.lastName,
        year:employeeDetails.year,
        branch:employeeDetails.branch,
        gitHub:employeeDetails.gitHub,
        description:employeeDetails.description,
        resumeLink:employeeDetails.resumeLink
      });

      alert('Details uploaded successfully!');
    } catch (error) {
      console.error('Error uploading CV or saving employee details:', error);
    }
  };

  return (
    <div className="App">
      <h1 className='formTitle'>Student Details</h1>
      <form onSubmit={handleSubmit}>
        <input
         required
          type="text"
          name="firstName"
          placeholder="First Name"
          value={employeeDetails.firstName}
          onChange={(e) => setEmployeeDetails({ ...employeeDetails, firstName: e.target.value })}
        />
        <input
         required 
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={employeeDetails.lastName}
          onChange={(e) => setEmployeeDetails({ ...employeeDetails, lastName: e.target.value })}
        />
      
        <select
          required
          name="year"
          value={employeeDetails.year}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, year: e.target.value })
          }
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
       
        <select
        required
          name="branch"
          value={employeeDetails.branch}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, branch: e.target.value })
          }
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="EEE">EEE</option>
          <option value="AE">AE</option>
          <option value="EC">EC</option>
          <option value="CIVIL">CIVIL</option>
          <option value="MECH">MECH</option>
          <option value="IE">IE</option>
        </select>
        <input
          type="text"
          name="github"
          placeholder="Github Profile"
          value={employeeDetails.gitHub}
          onChange={(e) => setEmployeeDetails({ ...employeeDetails, gitHub: e.target.value })}
        />
        <textarea
        required
            name="description"
            placeholder="About Yourself"
            value={employeeDetails.description}
            onChange={(e) => setEmployeeDetails({ ...employeeDetails, description: e.target.value })}
             // Specify the number of visible rows
          ></textarea>
        <input
        required
          type="text"
          name="resumeLink"
          placeholder="URL To Resume"
          value={employeeDetails.resumeLink}
          onChange={(e) => setEmployeeDetails({ ...employeeDetails, resumeLink: e.target.value })}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
