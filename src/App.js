import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import statement
import IssueForm from './components/IssueForm';
import IssuesList from './components/IssuesList';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<IssueForm />} />
        <Route path="/issues" element={<IssuesList />} />
      </Routes>
    </Router>
  );
}


// Import Bootstrap CSS from CDN
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
document.head.appendChild(link);

// Import Bootstrap JavaScript from CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
script.crossOrigin = 'anonymous';
document.body.appendChild(script);
export default App;
