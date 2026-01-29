import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Support.css";

const Support = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  });
  const [submitted, setSubmitted] = useState(false);

  const faqs = {
    general: {
      title: "General Questions",
      icon: "❓",
      items: [
        {
          q: "What is HR Mini Tool?",
          a: "HR Mini Tool is a comprehensive HR management platform designed to help organizations streamline their HR processes including attendance tracking, leave management, and user management.",
        },
        {
          q: "Is HR Mini Tool suitable for small businesses?",
          a: "Yes! HR Mini Tool is designed for organizations of all sizes, from small startups to large enterprises. Our flexible pricing plans accommodate different organizational needs.",
        },
        {
          q: "Can I integrate HR Mini Tool with other systems?",
          a: "Yes, we provide comprehensive APIs and webhooks that allow you to integrate with other systems. Check our API documentation for details.",
        },
        {
          q: "What kind of support do you offer?",
          a: "We offer email support, live chat, and phone support depending on your plan. Premium users get priority support with dedicated account managers.",
        },
      ],
    },
    technical: {
      title: "Technical Support",
      icon: "🔧",
      items: [
        {
          q: "What browsers are supported?",
          a: "HR Mini Tool works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.",
        },
        {
          q: "Is my data secure?",
          a: "Yes, we use industry-standard encryption (SSL/TLS) and follow GDPR compliance. All data is backed up regularly and stored in secure data centers.",
        },
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page, enter your email, and follow the instructions sent to your email address. The reset link expires in 24 hours.",
        },
        {
          q: "Can I export my data?",
          a: "Yes, you can export data in CSV, Excel, or PDF formats. Go to Settings > Data Export to generate your export.",
        },
      ],
    },
    billing: {
      title: "Billing & Pricing",
      icon: "💳",
      items: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and digital payment methods like PayPal.",
        },
        {
          q: "Can I change my plan anytime?",
          a: "Yes, you can upgrade or downgrade your plan anytime. Changes take effect from your next billing cycle.",
        },
        {
          q: "Is there a free trial?",
          a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.",
        },
        {
          q: "What's your refund policy?",
          a: "We offer a 30-day money-back guarantee if you're not satisfied with our service. No questions asked.",
        },
      ],
    },
    account: {
      title: "Account Management",
      icon: "👤",
      items: [
        {
          q: "How do I add team members?",
          a: "Go to Settings > Users > Add User. Enter their email and details, and they'll receive an invitation to join your organization.",
        },
        {
          q: "Can I have multiple admins?",
          a: "Yes, you can assign admin roles to multiple team members. Each admin gets full access to organization settings and features.",
        },
        {
          q: "How do I delete an account?",
          a: "Contact our support team to request account deletion. We'll help you export your data first, then permanently delete your account.",
        },
        {
          q: "Can I transfer my account to someone else?",
          a: "Yes, you can transfer account ownership. Go to Settings > Account > Transfer Ownership and follow the prompts.",
        },
      ],
    },
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "support@hrminitool.com",
      availability: "24/7",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Available on our website",
      availability: "9 AM - 6 PM EST",
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9 AM - 5 PM EST",
    },
    {
      icon: "🤝",
      title: "Community Forum",
      description: "community.hrminitool.com",
      availability: "Community driven",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "medium",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="support-container">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="support-hero-content">
          <h1>Support & Help Center</h1>
          <p>We're here to help. Find answers or contact our support team.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="methods-grid">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="method-description">{method.description}</p>
                <p className="method-availability">📍 {method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          {/* Category Tabs */}
          <div className="faq-categories">
            {Object.entries(faqs).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? "active" : ""}`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="faq-items">
            {faqs[activeCategory].items.map((item, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">Q:</span>
                  <h3>{item.q}</h3>
                </div>
                <div className="faq-answer">
                  <span className="faq-icon">A:</span>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="support-form-section">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>
            Submit a support ticket and our team will get back to you shortly.
          </p>

          <form className="support-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your support ticket has been submitted. We'll be in
                touch soon!
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                  required
                />
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your issue or question..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Support Ticket →
            </button>
          </form>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="quick-resources">
        <div className="container">
          <h2>Quick Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3>Documentation</h3>
              <p>Comprehensive guides and tutorials</p>
              <button onClick={() => navigate("/documentation")}>
                Read Docs →
              </button>
            </div>
            <div className="resource-card">
              <div className="resource-icon">🔌</div>
              <h3>API Reference</h3>
              <p>Developer documentation and code examples</p>
              <button onClick={() => navigate("/api-reference")}>
                View API →
              </button>
            </div>
            <div className="resource-card">
              <div className="resource-icon">📹</div>
              <h3>Video Tutorials</h3>
              <p>Step-by-step video guides</p>
              <button onClick={() => navigate("/")}>Watch Videos →</button>
            </div>
            <div className="resource-card">
              <div className="resource-icon">👥</div>
              <h3>Community</h3>
              <p>Connect with other users</p>
              <button onClick={() => navigate("/")}>Join Community →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="support-cta">
        <h2>Still Need Help?</h2>
        <p>Our team is ready to assist you 24/7</p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>
          Contact Us Now →
        </button>
      </section>
    </div>
  );
};

export default Support;
