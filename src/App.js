// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NoticesForm from "./components/NoticesForm";
import NoticesBoard from "./components/NoticesBoard";

function StudentSheetPage() {
  return (
    <>
      <h1>📄 Student Database Sheet</h1>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMfXpZoVB_QUvmWJZjRhuElrcy5zpfjhR-Ij_Sq58JsitVK0MhXsXid9L-Nxc4nRZalKLZMN2lanIP/pubhtml?widget=true&amp;headers=false"
        width="100%"
        height="600"
        frameBorder="0"
        title="Google Sheet"
      ></iframe>
    </>
  );
}

function NoticesPage() {
  return (
    <>
      <NoticesForm />
      <hr style={{ margin: "2rem 0" }} />
      <NoticesBoard />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <h2>📚 Techno Admin</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">📊 Student Sheet</Link>
              </li>
              <li>
                <span>📝 Classwork (coming soon)</span>
              </li>
              <li>
                <Link to="/notices">📢 Notices</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentSheetPage />} />
            <Route path="/notices" element={<NoticesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
