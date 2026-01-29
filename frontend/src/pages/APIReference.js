import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/APIReference.css";

const APIReference = () => {
  const navigate = useNavigate();
  const [activeEndpoint, setActiveEndpoint] = useState("users-list");
  const [copySuccess, setCopySuccess] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(id);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  const endpoints = {
    "users-list": {
      method: "GET",
      path: "/api/users",
      title: "Get All Users",
      description: "Retrieve a list of all users in the organization",
      params: [
        {
          name: "page",
          type: "integer",
          description: "Page number (default: 1)",
        },
        {
          name: "limit",
          type: "integer",
          description: "Items per page (default: 10)",
        },
      ],
      example: `GET /api/users?page=1&limit=10`,
      response: `{
  "success": true,
  "data": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "employee",
      "department": "Engineering"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "pages": 10
  }
}`,
    },
    "user-create": {
      method: "POST",
      path: "/api/users",
      title: "Create User",
      description: "Create a new user account",
      params: [
        { name: "name", type: "string", description: "User full name" },
        { name: "email", type: "string", description: "User email address" },
        { name: "password", type: "string", description: "User password" },
        { name: "role", type: "string", description: "admin or employee" },
      ],
      example: `POST /api/users
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "secure_password",
  "role": "employee"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "user_456",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "employee"
  }
}`,
    },
    "attendance-record": {
      method: "POST",
      path: "/api/attendance",
      title: "Record Attendance",
      description: "Record attendance for an employee",
      params: [
        { name: "userId", type: "string", description: "User ID" },
        { name: "date", type: "string", description: "Date (YYYY-MM-DD)" },
        {
          name: "status",
          type: "string",
          description: "present, absent, or leave",
        },
      ],
      example: `POST /api/attendance
{
  "userId": "user_123",
  "date": "2026-01-28",
  "status": "present"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "attendance_789",
    "userId": "user_123",
    "date": "2026-01-28",
    "status": "present"
  }
}`,
    },
    "leave-request": {
      method: "POST",
      path: "/api/leave",
      title: "Submit Leave Request",
      description: "Submit a leave request",
      params: [
        { name: "userId", type: "string", description: "User ID" },
        {
          name: "startDate",
          type: "string",
          description: "Start date (YYYY-MM-DD)",
        },
        {
          name: "endDate",
          type: "string",
          description: "End date (YYYY-MM-DD)",
        },
        { name: "reason", type: "string", description: "Reason for leave" },
      ],
      example: `POST /api/leave
{
  "userId": "user_123",
  "startDate": "2026-02-01",
  "endDate": "2026-02-05",
  "reason": "Vacation"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "leave_101",
    "userId": "user_123",
    "startDate": "2026-02-01",
    "endDate": "2026-02-05",
    "status": "pending"
  }
}`,
    },
  };

  const categories = [
    { id: "users-list", label: "Users", icon: "👥" },
    { id: "user-create", label: "Create User", icon: "➕" },
    { id: "attendance-record", label: "Attendance", icon: "📅" },
    { id: "leave-request", label: "Leave", icon: "🏖️" },
  ];

  const current = endpoints[activeEndpoint];

  return (
    <div className="api-container">
      {/* Hero Section */}
      <section className="api-hero">
        <div className="api-hero-content">
          <h1>API Reference</h1>
          <p>RESTful API documentation for HR Mini Tool</p>
          <div className="api-info">
            <span className="badge">
              Base URL: https://api.hrminitool.com/v1
            </span>
            <span className="badge">Authentication: Bearer Token</span>
          </div>
        </div>
      </section>

      {/* API Content */}
      <div className="api-content">
        {/* Sidebar */}
        <aside className="api-sidebar">
          <h3>Endpoints</h3>
          <nav className="endpoint-nav">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`endpoint-item ${activeEndpoint === cat.id ? "active" : ""}`}
                onClick={() => setActiveEndpoint(cat.id)}
              >
                <span className="endpoint-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="api-main">
          {/* Endpoint Header */}
          <div className="endpoint-header">
            <div className="method-badge" data-method={current.method}>
              {current.method}
            </div>
            <div className="endpoint-path">
              <h2>{current.title}</h2>
              <code>{current.path}</code>
              <p>{current.description}</p>
            </div>
          </div>

          {/* Request Section */}
          <section className="api-section">
            <h3>Parameters</h3>
            <table className="params-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {current.params.map((param, idx) => (
                  <tr key={idx}>
                    <td className="param-name">{param.name}</td>
                    <td className="param-type">{param.type}</td>
                    <td>{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Example Request */}
          <section className="api-section">
            <h3>Example Request</h3>
            <div className="code-block">
              <div className="code-header">
                <span>cURL</span>
                <button
                  onClick={() => copyToClipboard(current.example, "request")}
                  className="copy-btn"
                >
                  {copySuccess === "request" ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
              <pre>{current.example}</pre>
            </div>
          </section>

          {/* Response */}
          <section className="api-section">
            <h3>Example Response</h3>
            <div className="code-block">
              <div className="code-header">
                <span>JSON</span>
                <button
                  onClick={() => copyToClipboard(current.response, "response")}
                  className="copy-btn"
                >
                  {copySuccess === "response" ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
              <pre>{current.response}</pre>
            </div>
          </section>
        </main>
      </div>

      {/* Info Cards */}
      <section className="api-info-section">
        <h2>Getting Started with the API</h2>
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">🔐</div>
            <h3>Authentication</h3>
            <p>
              All API requests require a Bearer token. Include it in the
              Authorization header.
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>Rate Limiting</h3>
            <p>
              API requests are limited to 100 requests per minute per API key.
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">📝</div>
            <h3>Responses</h3>
            <p>
              All responses are in JSON format with standard HTTP status codes.
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>Support</h3>
            <p>
              Need help? Contact our support team at api-support@hrminitool.com
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="api-cta">
        <h2>Ready to Integrate?</h2>
        <p>Start building with our API today</p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Get API Key →
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/documentation")}
          >
            View Full Docs →
          </button>
        </div>
      </section>
    </div>
  );
};

export default APIReference;
