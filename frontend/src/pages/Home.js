import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      id: 1,
      icon: "👥",
      title: "User Management",
      description:
        "Efficiently manage employee profiles, personal information, and organizational hierarchy with an intuitive interface.",
      details: [
        "Create and manage employee accounts",
        "Update employee information",
        "Organize staff by departments",
        "Track employee status",
      ],
    },
    {
      id: 2,
      icon: "📅",
      title: "Attendance Tracking",
      description:
        "Monitor and track employee attendance with real-time updates and comprehensive reporting features.",
      details: [
        "Daily attendance marking",
        "Real-time tracking",
        "Attendance reports",
        "Holiday management",
      ],
    },
    {
      id: 3,
      icon: "🏖️",
      title: "Leave Management",
      description:
        "Streamline leave requests, approvals, and tracking with automated workflows and transparent processes.",
      details: [
        "Submit leave requests",
        "Approve/reject leaves",
        "Track leave balance",
        "Generate leave reports",
      ],
    },
    {
      id: 4,
      icon: "📊",
      title: "Analytics & Reports",
      description:
        "Generate detailed reports and analytics to gain insights into HR metrics and organizational performance.",
      details: [
        "Custom report generation",
        "Data visualization",
        "Performance metrics",
        "Export capabilities",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Active Users", icon: "👨‍💼" },
    { number: "50K+", label: "Attendance Records", icon: "📋" },
    { number: "10K+", label: "Leave Requests Processed", icon: "✅" },
    { number: "99.9%", label: "System Uptime", icon: "🚀" },
  ];

  return (
    <div className="home-container">
      {/* Navigation Header */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🏢</span>
            <span className="logo-text">HR Mini Tool</span>
          </div>
          <nav className="nav-links">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#stats" className="nav-link">
              Statistics
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
          </nav>
          <div className="nav-buttons">
            <button className="btn-login" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn-signup" onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Revolutionize Your</span>
              <span className="gradient-text gradient-text-2">
                HR Management
              </span>
            </h1>
            <p className="hero-subtitle">
              A comprehensive HR solution designed to streamline employee
              management, attendance tracking, and leave administration. Boost
              productivity and efficiency across your organization with our
              modern, user-friendly platform.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/signup")}
              >
                <span>Start Your Free Trial</span>
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-header">📊 Dashboard</div>
              <div className="card-stat">120 Employees</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-header">📅 Today</div>
              <div className="card-stat">Present: 98%</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-header">🏖️ Leave</div>
              <div className="card-stat">5 Pending</div>
            </div>
            <div className="blob"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to manage HR operations efficiently
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-details">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="detail-item">
                    <span className="detail-check">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="statistics">
        <div className="stats-background">
          <div className="stats-blur"></div>
        </div>
        <div className="section-header">
          <h2 className="section-title light">By The Numbers</h2>
          <p className="section-subtitle light">
            Trusted by organizations worldwide
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="section-header">
          <h2 className="section-title">Why Choose HR Mini Tool?</h2>
          <p className="section-subtitle">
            Discover the advantages that make us the best choice for your
            organization
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card benefit-card-1">
            <div className="benefit-number">01</div>
            <h3>Ease of Use</h3>
            <p>
              Intuitive interface designed for all skill levels. No complex
              training required. Start managing HR tasks immediately.
            </p>
            <div className="benefit-icon">💡</div>
          </div>
          <div className="benefit-card benefit-card-2">
            <div className="benefit-number">02</div>
            <h3>Secure & Reliable</h3>
            <p>
              Enterprise-grade security with data encryption. Automatic backups
              and 99.9% uptime guarantee for peace of mind.
            </p>
            <div className="benefit-icon">🔒</div>
          </div>
          <div className="benefit-card benefit-card-3">
            <div className="benefit-number">03</div>
            <h3>Time Saving</h3>
            <p>
              Automate repetitive tasks and free up valuable time. Reduce manual
              work by up to 70% with intelligent workflows.
            </p>
            <div className="benefit-icon">⏱️</div>
          </div>
          <div className="benefit-card benefit-card-4">
            <div className="benefit-number">04</div>
            <h3>24/7 Support</h3>
            <p>
              Dedicated support team available round the clock. Live chat,
              email, and phone support for all your queries.
            </p>
            <div className="benefit-icon">🤝</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section id="about" className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your HR Operations?</h2>
          <p className="cta-subtitle">
            Join thousands of companies already using HR Mini Tool to streamline
            their HR management. Start your journey today!
          </p>
          <div className="cta-buttons">
            <button
              className="btn-primary-large"
              onClick={() => navigate("/signup")}
            >
              Create Free Account
            </button>
            <button className="btn-secondary-large">Contact Sales</button>
          </div>
          <p className="cta-note">
            No credit card required. Free for 30 days. Full access to all
            features.
          </p>
        </div>
        <div className="cta-visual">
          <div className="cta-circle"></div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>HR Mini Tool</h4>
            <p>Transforming HR management for modern businesses.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#stats">Statistics</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/documentation">Documentation</a>
              </li>
              <li>
                <a href="/api-reference">API Reference</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 HR Mini Tool. All rights reserved. | Designed with ❤️
            for modern HR teams
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
