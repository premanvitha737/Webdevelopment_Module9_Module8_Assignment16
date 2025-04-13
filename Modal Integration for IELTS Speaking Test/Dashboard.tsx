import React, { useState } from "react";
import Modal from "../components/Modal";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="dashboard-container">
      <h1>IELTS Speaking Test</h1>
      <div className="button-group">
        <button onClick={() => setShowInstructions(true)}>View Instructions</button>
        <button onClick={() => setShowResults(true)}>View Results</button>
      </div>

      <Modal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        title="Test Instructions"
        size="large"
      >
        <ul>
          <p>Please read the instructions carefully before starting the test.</p>
        </ul>
      </Modal>

      <Modal
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        title="Test Results"
        size="medium"
      >
        <p>Your Test results will be displayed here after the test completion</p>
      </Modal>
    </div>
  );
};

export default Dashboard;
