import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('https://zebex.me/api/issues/');
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col-6">
          <h2>Tasks List</h2>
        </div>
        <div class="col-6 text-end">
          <a href="/"><button class="btn btn-success">Add Task</button></a>
        </div>

      </div>
      
      <div calss="card bg-grey">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Category</th>
            <th>Assigned To</th>
            <th>Complainant Email</th>
            <th>Complainant Phone</th>
            <th>Tracking Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.issue}</td>
              <td>{issue.category}</td>
              <td>{issue.assigned_to}</td>
              <td>{issue.complainant_email}</td>
              <td>{issue.complainant_phone}</td>
              <td>{issue.tracking_number}</td>
              <td>{issue.status}</td>
              <td>
                <Link to={`/issue/${issue.tracking_number}`} className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      
    </div>
  );
};

export default IssuesList;
