import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FB_APP_ID, GOOGLE_CLIENT_ID } from "../../config/constants";
import './style.css'
import LoginBg from '../../images/login-bg.png'
import MailIcon from '../../images/mail-icon.svg'
import GgIcon from '../../images/google-icon.svg'
import FbIcon from '../../images/fb-icon.svg'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (password.length < 3) {
      setErrors({ ...errors, password: "Password must be longer than 3" });
      return;
    }
    dispatch(authActions.loginRequest(email, password));
  };

  const loginWithFacebook = (response) => {

    dispatch(authActions.loginFacebookRequest(response.accessToken));
  };

  const loginWithGoogle = (response) => {
    dispatch(authActions.loginGoogleRequest(response.accessToken));
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="tien-login-page-style">
      <div >
        <img src={LoginBg} alt="login bg" style={{ height: "100vh", position: "fixed", right: "0", top: "0" }} />
      </div>
      <Col md={{ span: 6, offset: 3 }} style={{ position: "relative", zIndex: "3" }}>
        <Form onSubmit={handleSubmit} className="tien-login-form">

          <Form.Group>
            <Form.Control
              type="email"
              required
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="form-text text-danger">{errors.email}</small>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="3"
            />
            {errors.password && (
              <small className="form-text text-danger">
                {errors.password}
              </small>
            )}
          </Form.Group>
          <div className="tien-arrange-icon">
            {loading ? (<></>
            ) : (

                <label style={{ cursor: "pointer" }}>
                  <img src={MailIcon} alt="mail icon" style={{ width: "6vw" }} />
                  <Button className="btn-block" type="submit" style={{ display: "none" }}>
                    Login
              </Button>
                </label>

              )}


            {/* <img src={FbIcon} alt="fb icon" style={{ width: "5vw" }} /> */}
            <FacebookLogin
              appId={FB_APP_ID}

              fields="name,email,picture"
              callback={loginWithFacebook}
              onFailure={(err) => {
                console.log("FB LOGIN ERROR:", err);
              }}

            />

            <label style={{ cursor: "pointer" }}>
              <img src={GgIcon} alt="google icon" style={{ width: "5vw" }} />
              <GoogleLogin
                className="fb-bnt-tien"
                clientId={GOOGLE_CLIENT_ID}
                onSuccess={loginWithGoogle}
                cookiePolicy="single_host_origin"
              />
            </label>

          </div>
          <p style={{ textAlign: "center" }}>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>

        </Form>
      </Col>

    </div>
  )
}

export default LoginPage
