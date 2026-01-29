import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load saved email if remember me was checked
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      toast.success("Login successful!", {
        description: `Welcome back, ${res.data.user.name || "User"}!`,
        duration: 3000,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      if (res.data.user.role === "admin") {
        toast.info("Redirecting to Admin Dashboard...", { duration: 2000 });
        navigate("/admin");
      } else {
        toast.info("Redirecting to Employee Dashboard...", { duration: 2000 });
        navigate("/employee");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Please try again.";
      toast.error("Login failed", {
        description: message,
        duration: 5000,
      });
      setErrorMsg(message);
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
      <div className="auth-wrapper">
        {/* Left Side - Branding */}
        <div className="auth-left">
          <div className="auth-left-content">
            <div className="auth-logo">
              <span className="logo-icon-large">🏢</span>
              <h1 className="auth-brand-name">HR Mini Tool</h1>
            </div>

            <div className="auth-features">
              <div className="auth-feature-item">
                <span className="feature-icon">✨</span>
                <div className="feature-text">
                  <h3>Secure Access</h3>
                  <p>Enterprise-grade security</p>
                </div>
              </div>
              <div className="auth-feature-item">
                <span className="feature-icon">⚡</span>
                <div className="feature-text">
                  <h3>Fast Login</h3>
                  <p>Instant access to your dashboard</p>
                </div>
              </div>
              <div className="auth-feature-item">
                <span className="feature-icon">🔐</span>
                <div className="feature-text">
                  <h3>Data Protection</h3>
                  <p>Your data is fully encrypted</p>
                </div>
              </div>
            </div>

            <div className="auth-testimonial">
              <p className="testimonial-text">
                "The best HR management solution we've used. Highly
                recommended!"
              </p>
              <p className="testimonial-author">— John Doe, HR Manager</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="auth-right">
          <div className="auth-card">
            {/* Header */}
            <div className="auth-card-header">
              <h2 className="auth-title">Welcome Back</h2>
              <p className="auth-subtitle">
                Sign in to your account to continue
              </p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="auth-error-message">
                <span className="error-icon">⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="auth-form">
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

              {/* Password Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span>Remember me</span>
                </label>
                <a href="/" className="forgot-link">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading || !email || !password}
                className={`auth-btn-submit ${loading ? "loading" : ""}`}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="form-divider">
              <span>OR</span>
            </div>

            {/* Social Login */}
            <div className="social-login">
              <button className="social-btn" title="Sign in with Google">
                <span>🔵</span>
              </button>
              <button className="social-btn" title="Sign in with Microsoft">
                <span>📘</span>
              </button>
              <button className="social-btn" title="Sign in with Apple">
                <span>🍎</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="auth-footer-text">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="auth-link"
              >
                Create one now
              </button>
            </p>
          </div>

          {/* Security Info */}
          <div className="auth-security-info">
            <p>🔒 This is a secure connection. Your data is encrypted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
