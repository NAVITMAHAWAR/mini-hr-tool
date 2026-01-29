import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../styles/Auth.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.warning("Please fill all required fields", {
        description: "Name, email and password are mandatory",
      });
      return false;
    }

    if (password.length < 6) {
      toast.warning("Password too short", {
        description: "Password must be at least 6 characters long",
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match", {
        description: "Please make sure both passwords are the same",
      });
      return false;
    }

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
        role,
      });

      toast.success("Registration successful!", {
        description: "Your account has been created. Please login now.",
        duration: 4000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      let errorMessage = "Registration failed. Please try again.";
      if (err.response) {
        if (err.response.status === 409) {
          errorMessage = "Email is already registered.";
        } else if (err.response.status === 400) {
          errorMessage =
            err.response.data.message || "Invalid input. Check your details.";
        } else {
          errorMessage = err.response.data?.message || "Server error occurred.";
        }
      } else if (err.request) {
        errorMessage =
          "No response from server. Check your internet connection.";
      }

      toast.error("Registration failed", {
        description: errorMessage,
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Animated Background */}
      <div className="auth-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Grid Background */}
      <div className="grid-background"></div>

      {/* Main Content */}
      <div className="auth-wrapper signup-wrapper">
        {/* Right Side - Signup Form */}
        <div className="auth-right">
          <div className="auth-card signup-card">
            {/* Header */}
            <div className="auth-card-header">
              <div className="signup-icon-wrapper">
                <span className="signup-icon">🚀</span>
              </div>
              <h2 className="auth-title">Create Account</h2>
              <p className="auth-subtitle">
                Join our HR management platform today
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignup} className="auth-form signup-form">
              {/* Full Name Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">👤</span>
                  Full Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    required
                  />
                  <span className="input-icon">✓</span>
                </div>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                  <span className="input-icon">@</span>
                </div>
              </div>

              {/* Role Selection */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">👨‍💼</span>
                  Select Role
                </label>
                <div className="role-selector">
                  <label className="role-option">
                    <input
                      type="radio"
                      value="employee"
                      checked={role === "employee"}
                      onChange={(e) => setRole(e.target.value)}
                      className="role-radio"
                    />
                    <span className="role-label">
                      <span className="role-icon">👨‍💻</span>
                      <span className="role-text">Employee</span>
                    </span>
                  </label>
                  <label className="role-option">
                    <input
                      type="radio"
                      value="admin"
                      checked={role === "admin"}
                      onChange={(e) => setRole(e.target.value)}
                      className="role-radio"
                    />
                    <span className="role-label">
                      <span className="role-icon">👨‍⚖️</span>
                      <span className="role-text">Admin</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="input-icon-btn"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                <p className="password-hint">
                  At least 6 characters with uppercase, lowercase & numbers
                </p>
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">🔐</span>
                  Confirm Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="input-icon-btn"
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <label className="terms-agreement">
                <input type="checkbox" className="checkbox-input" required />
                <span>
                  I agree to the{" "}
                  <button type="button" className="terms-link">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="terms-link">
                    Privacy Policy
                  </button>
                </span>
              </label>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={loading}
                className={`auth-btn-submit signup-btn ${loading ? "loading" : ""}`}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="form-divider">
              <span>Already have an account?</span>
            </div>

            {/* Login Link */}
            <p className="auth-footer-text">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="auth-link"
              >
                Sign In Here
              </button>
            </p>
          </div>

          {/* Security Info */}
          <div className="auth-security-info">
            <p>🔒 Your data is encrypted and secured. No spam, guaranteed.</p>
          </div>
        </div>

        {/* Left Side - Information */}
        <div className="auth-left signup-left">
          <div className="auth-left-content">
            <div className="signup-benefits">
              <h3 className="benefits-title">Why Join Us?</h3>

              <div className="auth-features">
                <div className="auth-feature-item">
                  <span className="feature-icon">⚡</span>
                  <div className="feature-text">
                    <h3>Get Started Instantly</h3>
                    <p>No complex setup. Start managing HR in minutes</p>
                  </div>
                </div>
                <div className="auth-feature-item">
                  <span className="feature-icon">📊</span>
                  <div className="feature-text">
                    <h3>Complete Control</h3>
                    <p>Manage attendance, leaves & employees easily</p>
                  </div>
                </div>
                <div className="auth-feature-item">
                  <span className="feature-icon">🔔</span>
                  <div className="feature-text">
                    <h3>Real-time Updates</h3>
                    <p>Get instant notifications and alerts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="signup-stats">
              <div className="stat-box">
                <div className="stat-value">5000+</div>
                <div className="stat-name">Active Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">99.9%</div>
                <div className="stat-name">Uptime</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">24/7</div>
                <div className="stat-name">Support</div>
              </div>
            </div>

            <div className="auth-testimonial signup-testimonial">
              <p className="testimonial-text">
                "Our HR operations are 70% more efficient since we switched to
                this platform!"
              </p>
              <p className="testimonial-author">— Sarah Johnson, HR Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
