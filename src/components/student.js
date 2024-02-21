import React, {useState, useEffect} from "react";
import axios from 'axios';
const Students=()=>{
    const [students, setStudents] = useState([]);
    
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/students');
        const data = response.data;
        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Logging specific error message
      }
    };

    const deleteDataStudents = async (rollNo) => { // Modify to accept subject ID
      try {
          await axios.delete(`http://localhost:8080/students/delete/${rollNo}`); // Use subject ID in the URL
          const updatedStudents = students.filter(student => student.rollNo !== rollNo); // Remove deleted subject from state
          setStudents(updatedStudents);
      } catch (error) {
          console.error("Error deleting data:", error);
      }
  };
    useEffect(() => {
    

        fetchData();
      }, []);
    return(
<>
<table>
        <thead>
          <tr>
            <th>rollNo</th>
            <th>name</th>
            <th>percentage</th>
            <th>branch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.percentage}</td>
              <td>{student.branch}</td>
              <td>
              <button onClick={() => deleteDataStudents(student.rollNo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</>
    )
}

export default Students;