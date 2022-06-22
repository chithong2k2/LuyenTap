import React from 'react'
import { useState } from 'react'
import './todolist.css'
function ToDoList() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);
    const handleChange = (e) => {
        setJob(e.target.value);
    }
    const add = () => {
        setJobs(prev => [...prev, job])
        setJob('');
    }

    return (
        <div className="Todolist">
            <div className="addList">
                <input className="add" value={job} onChange={handleChange} />
                <button className="button" onClick={add}>Add</button>
            </div>
            <div className="job">
                <ul>
                    {jobs.map((job, index) => {
                        return (
                            <li key={index}>{job}</li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}
export default ToDoList;