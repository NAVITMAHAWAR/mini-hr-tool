import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../styles/Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.warning("Please fill all fields", {
        description: "All fields are required",
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate API call - replace with actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        duration: 4000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
      console.log(formData);
    } catch (err) {
      toast.error("Failed to send message", {
        description: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Navigation */}
      <header className="contact-navbar">
        <div className="contact-nav-content">
          <button onClick={() => navigate("/")} className="contact-logo">
            <span>🏢</span>
            HR Mini Tool
          </button>
          <nav className="contact-nav-links">
            <a href="/">Home</a>
            <a href="#contact-form">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch With Us</h1>
          <p className="contact-hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-wrapper">
        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>mahawarn870@gmail.com</p>
              <a href="mailto:mahawarn870@gmail.com" className="info-link">
                Send Email →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 9664419721</p>
              <a href="tel:+15551234567" className="info-link">
                Make a Call →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Business Ave, Tech City, TC 12345</p>
              <a href="#" className="info-link">
                Get Directions →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p style={{ fontSize: "12px", marginTop: "5px" }}>
                Sat - Sun: Closed
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="contact-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your message in detail..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`contact-submit-btn ${loading ? "loading" : ""}`}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How quickly will you respond?</h4>
                <p>
                  We aim to respond to all inquiries within 24 hours during
                  business days.
                </p>
              </div>

              <div className="faq-item">
                <h4>What's your refund policy?</h4>
                <p>
                  We offer a 30-day money-back guarantee if you're not satisfied
                  with our service.
                </p>
              </div>

              <div className="faq-item">
                <h4>Do you offer custom integration?</h4>
                <p>
                  Yes! Contact our sales team to discuss custom integration
                  options for your organization.
                </p>
              </div>

              <div className="faq-item">
                <h4>Is there a trial period?</h4>
                <p>
                  Absolutely! You can try our platform free for 30 days with
                  full access to all features.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>HR Mini Tool</h4>
            <p>Transforming HR management for modern businesses.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li>
                <button>Twitter</button>
              </li>
              <li>
                <button>LinkedIn</button>
              </li>
              <li>
                <button>Facebook</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 HR Mini Tool. All rights reserved. | Designed with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
