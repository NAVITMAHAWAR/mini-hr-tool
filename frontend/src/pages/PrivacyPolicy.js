import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Legal.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-container">
      {/* Navigation */}
      <header className="legal-navbar">
        <div className="legal-nav-content">
          <button onClick={() => navigate("/")} className="legal-logo">
            <span>🏢</span>
            HR Mini Tool
          </button>
          <nav className="legal-nav-links">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>Last Updated: January 27, 2026</p>
      </section>

      {/* Content */}
      <div className="legal-wrapper">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to HR Mini Tool ("Company," "we," "us," or "our"). We are
              committed to protecting your privacy and ensuring you have a
              positive experience on our website and services. This Privacy
              Policy explains our information practices, what types of
              information we collect, how we use it, and the choices you have
              concerning our collection and use of your information.
            </p>
            <p>
              If you have any questions about our privacy practices, please
              contact us at privacy@hrmini.com.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide Directly</h3>
            <p>
              We collect information you voluntarily provide to us, including
              but not limited to:
            </p>
            <ul>
              <li>Account registration information (name, email, password)</li>
              <li>Profile information (job title, department, phone number)</li>
              <li>Attendance and leave records</li>
              <li>Communication preferences</li>
              <li>Support tickets and customer service inquiries</li>
              <li>Payment information for billing purposes</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>When you use our services, we automatically collect:</p>
            <ul>
              <li>Log data (IP address, browser type, pages visited)</li>
              <li>Device information (operating system, device ID)</li>
              <li>Usage patterns and behavioral data</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location data (with your consent)</li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from third-party sources such
              as:
            </p>
            <ul>
              <li>Social media platforms (if you connect via OAuth)</li>
              <li>Business partners and service providers</li>
              <li>Publicly available sources</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our services</li>
              <li>To authenticate your identity and prevent fraud</li>
              <li>To process transactions and send billing information</li>
              <li>To send administrative and promotional communications</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To ensure security and prevent malicious activity</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. How We Share Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information in the following
              circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With vendors who assist us
                in operating our website and providing services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our legal rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or asset sale
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly
                authorize us to share your information
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement comprehensive security measures to protect your
              personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data in transit</li>
              <li>AES-256 encryption for data at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication options</li>
              <li>Restricted access to personal information</li>
              <li>Regular backup and disaster recovery procedures</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is 100%
              secure. While we strive to protect your information, we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights and Choices</h2>
            <h3>6.1 Access and Portability</h3>
            <p>
              You have the right to request a copy of the personal information
              we hold about you and to request that we port this information to
              another service provider.
            </p>

            <h3>6.2 Correction and Deletion</h3>
            <p>
              You may request that we correct inaccurate information or delete
              your personal information, subject to certain legal exceptions.
            </p>

            <h3>6.3 Opt-Out</h3>
            <p>
              You can opt out of receiving promotional communications at any
              time by clicking the unsubscribe link in our emails or adjusting
              your preferences in your account settings.
            </p>

            <h3>6.4 Cookies</h3>
            <p>
              Most web browsers allow you to control cookies through browser
              settings. You can set your browser to refuse cookies or alert you
              when cookies are being sent.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Retention of Information</h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our services, comply with legal obligations, and resolve
              disputes. The retention period may vary depending on the context
              of the processing and our legal obligations.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected such
              information, we will delete it immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to, stored in, and processed
              in countries other than your country of residence. These countries
              may have data protection laws that differ from your home country.
              By using our services, you consent to such transfers.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@hrmini.com</li>
              <li>Mailing Address: 123 Business Ave, Tech City, TC 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated Privacy Policy on our website and updating the
              "Last Updated" date.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="legal-sidebar">
          <div className="sidebar-box">
            <h3>Quick Navigation</h3>
            <ul>
              <li>
                <a href="#section-1">Introduction</a>
              </li>
              <li>
                <a href="#section-2">Information We Collect</a>
              </li>
              <li>
                <a href="#section-3">How We Use Data</a>
              </li>
              <li>
                <a href="#section-4">Data Sharing</a>
              </li>
              <li>
                <a href="#section-5">Data Security</a>
              </li>
              <li>
                <a href="#section-6">Your Rights</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-box">
            <h3>Related Documents</h3>
            <ul>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="legal-footer">
        <div className="footer-content">
          <p>
            &copy; 2026 HR Mini Tool. All rights reserved. | Last Updated:
            January 27, 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
