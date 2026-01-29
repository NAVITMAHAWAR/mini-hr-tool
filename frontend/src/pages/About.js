import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mission");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "10+ years in HR technology",
      icon: "👩‍💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in full-stack development",
      icon: "👨‍💻",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Head of Design",
      bio: "UI/UX design specialist",
      icon: "👩‍🎨",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Head of Operations",
      bio: "Business strategy expert",
      icon: "👨‍✈️",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize HR management",
    },
    {
      year: "2021",
      title: "First 1000 Users",
      description: "Reached significant milestone with growing user base",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Expanded services to 15 countries worldwide",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced AI-powered analytics and insights",
    },
    {
      year: "2024",
      title: "100K+ Active Users",
      description: "Became one of the leading HR platforms",
    },
    {
      year: "2025",
      title: "Enterprise Solutions",
      description: "Launched enterprise-grade features and support",
    },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We continuously innovate to stay ahead of market trends",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Teamwork and open communication drive our success",
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in everything we do",
    },
    {
      icon: "🌍",
      title: "Inclusivity",
      description: "We celebrate diversity and promote equal opportunities",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Your data security and privacy are our top priorities",
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "We support the growth and development of our users",
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="grid-background"></div>
        </div>

        <div className="about-hero-content">
          <h1 className="about-hero-title">About HR Mini Tool</h1>
          <p className="about-hero-subtitle">
            Transforming HR Management Through Innovation and Technology
          </p>
          <button
            className="about-hero-btn"
            onClick={() => navigate("/contact")}
          >
            Get in Touch ✨
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                HR Mini Tool was born out of a simple observation: traditional
                HR management systems were too complex, expensive, and difficult
                to use. We saw organizations struggling with basic HR tasks,
                from attendance tracking to leave management.
              </p>
              <p>
                In 2020, our team of passionate HR specialists and software
                engineers came together with a mission: to create a simple,
                powerful, and affordable HR management solution that any
                organization could use.
              </p>
              <p>
                Today, HR Mini Tool is trusted by over 100,000 organizations
                worldwide, helping them streamline their HR processes, save
                time, and focus on what really matters: their people.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <div className="stat-number">100K+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="image-icon">📊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="about-tabs">
        <div className="container">
          <h2 className="section-title">Our Purpose</h2>
          <div className="tabs-container">
            <div className="tabs-header">
              <button
                className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
              >
                <span className="tab-icon">🎯</span>
                Mission
              </button>
              <button
                className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                <span className="tab-icon">🔮</span>
                Vision
              </button>
              <button
                className={`tab-btn ${activeTab === "values" ? "active" : ""}`}
                onClick={() => setActiveTab("values")}
              >
                <span className="tab-icon">💎</span>
                Values
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === "mission" && (
                <div className="tab-pane active">
                  <h3>Our Mission</h3>
                  <p>
                    To empower organizations of all sizes with simple,
                    intuitive, and affordable HR management tools that enhance
                    productivity, improve employee experience, and drive
                    business growth.
                  </p>
                  <ul className="mission-points">
                    <li>✓ Simplify complex HR processes</li>
                    <li>✓ Make HR technology accessible to everyone</li>
                    <li>✓ Enhance employee and employer experience</li>
                    <li>✓ Support organizational growth and success</li>
                  </ul>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="tab-pane active">
                  <h3>Our Vision</h3>
                  <p>
                    To become the most trusted and loved HR management platform
                    globally, recognized for our innovation, reliability, and
                    commitment to helping organizations build stronger, more
                    engaged, and more productive teams.
                  </p>
                  <ul className="mission-points">
                    <li>✓ Be the platform of choice for HR professionals</li>
                    <li>
                      ✓ Transform how organizations manage human resources
                    </li>
                    <li>✓ Lead innovation in HR technology</li>
                    <li>✓ Create lasting positive impact on organizations</li>
                  </ul>
                </div>
              )}

              {activeTab === "values" && (
                <div className="tab-pane active">
                  <h3>Our Core Values</h3>
                  <div className="values-grid">
                    {values.map((value) => (
                      <div key={value.title} className="value-card">
                        <div className="value-icon">{value.icon}</div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Talented individuals passionate about transforming HR management
          </p>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">{member.icon}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-socials">
                  <a href="#" className="social-link">
                    in
                  </a>
                  <a href="#" className="social-link">
                    tw
                  </a>
                  <a href="#" className="social-link">
                    em
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon">🏢</div>
              <div className="stat-figure">50K+</div>
              <div className="stat-title">Organizations</div>
              <p>Trusted by organizations worldwide</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon">👥</div>
              <div className="stat-figure">100K+</div>
              <div className="stat-title">Active Users</div>
              <p>Daily active users managing their HR</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon">🌍</div>
              <div className="stat-figure">50+</div>
              <div className="stat-title">Countries</div>
              <p>Available in multiple countries</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon">⭐</div>
              <div className="stat-figure">4.9/5</div>
              <div className="stat-title">Rating</div>
              <p>Highly rated by our users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Ready to Transform Your HR?</h2>
          <p>Join thousands of organizations using HR Mini Tool</p>
          <div className="cta-buttons">
            <button
              className="cta-btn primary"
              onClick={() => navigate("/signup")}
            >
              Get Started Free ✨
            </button>
            <button
              className="cta-btn secondary"
              onClick={() => navigate("/contact")}
            >
              Schedule Demo 📅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
