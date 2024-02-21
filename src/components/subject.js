import React, { useState, useEffect } from "react";
import axios from 'axios';

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);

    const fetchDataSubjects = async () => {
        try {
            const responseSubjects = await axios.get('http://localhost:8080/subjects');
            const dataSubjects = responseSubjects.data;
            setSubjects(dataSubjects);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteDataSubjects = async (id) => { // Modify to accept subject ID
        try {
            await axios.delete(`http://localhost:8080/subjects/delete/${id}`); // Use subject ID in the URL
            const updatedSubjects = subjects.filter(subject => subject.id !== id); // Remove deleted subject from state
            setSubjects(updatedSubjects);
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    useEffect(() => {
        fetchDataSubjects();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Topic</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject) => (
                        <tr key={subject.id}> {/* Set unique key for each row */}
                            <td>{subject.id}</td>
                            <td>{subject.name}</td>
                            <td>{subject.description}</td>
                            <td>{subject.topic}</td>
                            <td>
                                <button onClick={() => deleteDataSubjects(subject.id)}>Delete</button> {/* Pass subject ID to delete function */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Subjects;
