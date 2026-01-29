import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Documentation.css";

const Documentation = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("getting-started");
  const [expandedItem, setExpandedItem] = useState(null);

  const sections = {
    "getting-started": {
      title: "Getting Started",
      icon: "🚀",
      content: [
        {
          id: "intro",
          title: "Introduction",
          body: "Welcome to HR Mini Tool! This comprehensive guide will help you get up and running in no time. Our platform is designed to be intuitive and user-friendly, making HR management effortless.",
        },
        {
          id: "signup",
          title: "Creating Your Account",
          body: "To get started, click the 'Sign Up' button and fill in your details. You can sign up as an Employee or Admin. Admins have access to all features including user management and reporting.",
        },
        {
          id: "first-steps",
          title: "First Steps",
          body: "After signing up, complete your profile, add your team members, and configure your HR settings. Our setup wizard will guide you through each step.",
        },
      ],
    },
    features: {
      title: "Features",
      icon: "✨",
      content: [
        {
          id: "user-management",
          title: "User Management",
          body: "Manage employee profiles, organize them by departments, track employment status, and maintain organizational hierarchy. Add, update, or remove employees with just a few clicks.",
        },
        {
          id: "attendance",
          title: "Attendance Tracking",
          body: "Track daily attendance, monitor real-time updates, generate comprehensive reports, and manage holiday schedules. Automated notifications keep everyone informed.",
        },
        {
          id: "leave",
          title: "Leave Management",
          body: "Process leave requests, manage leave balances, create custom leave policies, and maintain leave records. Seamless workflow from request to approval.",
        },
      ],
    },
    guide: {
      title: "User Guide",
      icon: "📖",
      content: [
        {
          id: "dashboard",
          title: "Dashboard Overview",
          body: "Your dashboard provides at-a-glance information about your organization. Track active employees, pending requests, and important metrics. Customize your dashboard to show what matters most.",
        },
        {
          id: "reports",
          title: "Generating Reports",
          body: "Access detailed reports on attendance, leave, employee performance, and more. Export reports in multiple formats (PDF, Excel) for further analysis and sharing.",
        },
        {
          id: "settings",
          title: "Configuration & Settings",
          body: "Customize your workspace settings, configure leave policies, set notification preferences, and manage user roles and permissions. Everything is configurable to your needs.",
        },
      ],
    },
  };

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="documentation-container">
      {/* Hero Section */}
      <section className="doc-hero">
        <div className="doc-hero-content">
          <h1>Documentation</h1>
          <p>Everything you need to know about HR Mini Tool</p>
          <div className="doc-search">
            <input type="text" placeholder="Search documentation..." />
            <button>🔍</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="documentation-content">
        {/* Sidebar */}
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                className={`nav-item ${activeSection === key ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(key);
                  setExpandedItem(null);
                }}
              >
                <span className="nav-icon">{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="doc-main">
          <div className="section-header">
            <h2>
              <span className="section-icon">
                {sections[activeSection].icon}
              </span>
              {sections[activeSection].title}
            </h2>
          </div>

          <div className="doc-items">
            {sections[activeSection].content.map((item) => (
              <div key={item.id} className="doc-item">
                <button
                  className="doc-item-header"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="expand-icon">
                    {expandedItem === item.id ? "▼" : "▶"}
                  </span>
                  <h3>{item.title}</h3>
                </button>
                {expandedItem === item.id && (
                  <div className="doc-item-body">
                    <p>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Help Section */}
      <section className="doc-help">
        <h2>Need More Help?</h2>
        <div className="help-cards">
          <div className="help-card">
            <div className="help-icon">❓</div>
            <h3>FAQ</h3>
            <p>Check our frequently asked questions for quick answers</p>
            <button onClick={() => navigate("/support")}>View FAQ →</button>
          </div>
          <div className="help-card">
            <div className="help-icon">💬</div>
            <h3>Support</h3>
            <p>Get in touch with our support team for assistance</p>
            <button onClick={() => navigate("/support")}>
              Contact Support →
            </button>
          </div>
          <div className="help-card">
            <div className="help-icon">🔌</div>
            <h3>API Docs</h3>
            <p>Explore our API reference for developers</p>
            <button onClick={() => navigate("/api-reference")}>
              View API →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
