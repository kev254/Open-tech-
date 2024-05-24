import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/issues');
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Issues List</h2>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuesList;
