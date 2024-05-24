import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const IssueForm = () => {
  const [issue, setIssue] = useState('');
  const [category, setCategory] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [complainantEmail, setComplainantEmail] = useState('');
  const [complainantPhone, setComplainantPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (complainantPhone.length > 20) {
      alert('Phone number too long. Please ensure it is less than 20 characters.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://taskmanager254-5453e6565697.herokuapp.com/api/issues/create', {
        issue,
        category,
        assigned_to: assignedTo,
        complainant_email: complainantEmail,
        complainant_phone: complainantPhone,
      });

      emailjs.send('service_05yigkp', 'template_dtxy227', {
        to: complainantEmail,
        tracking_number: response.data.tracking_number,
        from_name: 'Task Management System',
        message: `Your issue has been logged. Your tracking number is ${response.data.tracking_number}`,
      }, 'w9qTOqmVrugi8SSwF')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Email Sent',
          text: `The email has been sent to ${complainantEmail}`,
        }).then((confirm) => {
          if (confirm.isConfirmed) {
            navigate('/issues');
          }
        });
      }, (error) => {
        console.log(error.text);
      });
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded">
            <h2 className="mb-4">Report an Issue</h2>
            <div className="mb-3">
              <label htmlFor="issue" className="form-label">Issue:</label>
              <input type="text" id="issue" className="form-control" value={issue} onChange={(e) => setIssue(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category:</label>
              <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="assignedTo" className="form-label">Assign To:</label>
              <select id="assignedTo" className="form-select" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required>
                <option value="">Select Assignee</option>
                <option value="Assignee 1">Assignee 1</option>
                <option value="Assignee 2">Assignee 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="complainantEmail" className="form-label">Complainant Email:</label>
              <input type="email" id="complainantEmail" className="form-control" value={complainantEmail} onChange={(e) => setComplainantEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="complainantPhone" className="form-label">Complainant Phone:</label>
              <input type="number" id="complainantPhone" className="form-control" value={complainantPhone} onChange={(e) => setComplainantPhone(e.target.value)} required />
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-danger" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueForm;
