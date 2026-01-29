import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Legal.css";

const TermsOfService = () => {
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
        <h1>Terms of Service</h1>
        <p>Last Updated: January 27, 2026</p>
      </section>

      {/* Content */}
      <div className="legal-wrapper">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using HR Mini Tool (the "Service"), you accept
              and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on HR Mini Tool for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display (commercial or non-commercial)
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on HR Mini Tool
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
              <li>
                Violate any applicable laws or regulations related to access to
                or use of HR Mini Tool
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on HR Mini Tool are provided on an 'as is' basis. HR
              Mini Tool makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Limitations</h2>
            <p>
              In no event shall HR Mini Tool or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on HR Mini Tool.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on HR Mini Tool could include technical,
              typographical, or photographic errors. HR Mini Tool does not
              warrant that any of the materials on our website are accurate,
              complete, or current. HR Mini Tool may make changes to the
              materials contained on our website at any time without notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Materials on Website</h2>
            <p>
              HR Mini Tool has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by HR
              Mini Tool of the site. Use of any such linked website is at the
              user's own risk.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Modifications</h2>
            <p>
              HR Mini Tool may revise these terms of service for our website at
              any time without notice. By using this website, you are agreeing
              to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which HR Mini Tool
              operates, and you irrevocably submit to the exclusive jurisdiction
              of the courts located in that jurisdiction.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. User Accounts</h2>
            <h3>9.1 Registration</h3>
            <p>
              To use certain services on HR Mini Tool, you may need to create an
              account. You agree to provide accurate, current, and complete
              information during registration and to update such information as
              needed.
            </p>

            <h3>9.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              password and account information. You agree to accept
              responsibility for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your
              account.
            </p>

            <h3>9.3 Account Termination</h3>
            <p>
              We reserve the right to terminate or suspend your account at any
              time, for any reason, without notice or liability.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. User Conduct</h2>
            <p>
              You agree not to use HR Mini Tool for any unlawful purposes or in
              any way that violates these Terms. Specifically, you agree not to:
            </p>
            <ul>
              <li>
                Engage in any conduct that restricts or inhibits anyone's use or
                enjoyment of HR Mini Tool
              </li>
              <li>
                Post or transmit hateful, threatening, abusive, or defamatory
                material
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or networks
              </li>
              <li>
                Engage in spamming, phishing, or other deceptive practices
              </li>
              <li>Infringe upon any intellectual property rights</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Intellectual Property Rights</h2>
            <p>
              All content included in HR Mini Tool, including text, graphics,
              logos, images, audio clips, and software, is the property of HR
              Mini Tool or its content suppliers and protected by international
              copyright laws. The compilation of all content on HR Mini Tool is
              the exclusive property of HR Mini Tool and protected by
              international copyright laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Payment Terms</h2>
            <h3>12.1 Pricing</h3>
            <p>
              All prices are subject to change without notice. We reserve the
              right to refuse service to anyone for any reason at any time.
            </p>

            <h3>12.2 Billing</h3>
            <p>
              Billing is calculated on a monthly or annual basis depending on
              your chosen plan. Your subscription will automatically renew
              unless cancelled before the renewal date.
            </p>

            <h3>12.3 Refunds</h3>
            <p>
              We offer a 30-day money-back guarantee. If you are not satisfied
              with our service, you may request a full refund within 30 days of
              purchase.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, in no event
              shall HR Mini Tool, its directors, employees, or agents be liable
              for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless HR Mini Tool, its
              officers, directors, employees, and agents from any claims,
              damages, losses, liabilities, and expenses (including legal fees)
              arising from your use of HR Mini Tool or violation of these Terms
              of Service.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Termination</h2>
            <p>
              Either party may terminate your account and use of HR Mini Tool at
              any time, for any reason, without notice or liability. Upon
              termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <ul>
              <li>Email: support@hrmini.com</li>
              <li>Mailing Address: 123 Business Ave, Tech City, TC 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>17. Entire Agreement</h2>
            <p>
              These Terms of Service, along with our Privacy Policy, constitute
              the entire agreement between you and HR Mini Tool regarding the
              use of our services and supersede all prior negotiations,
              representations, and agreements.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="legal-sidebar">
          <div className="sidebar-box">
            <h3>Quick Navigation</h3>
            <ul>
              <li>
                <a href="#section-1">Agreement to Terms</a>
              </li>
              <li>
                <a href="#section-2">Use License</a>
              </li>
              <li>
                <a href="#section-3">Disclaimer</a>
              </li>
              <li>
                <a href="#section-4">Limitations</a>
              </li>
              <li>
                <a href="#section-5">User Conduct</a>
              </li>
              <li>
                <a href="#section-6">Payment Terms</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-box">
            <h3>Related Documents</h3>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
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

export default TermsOfService;
