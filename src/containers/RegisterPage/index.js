import React, { useState } from "react";
import './style.css'

import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import RegIcon from "../../images/register.svg"
import BgReg from '../../images/reg-bg-mlik.png'
import BgRegIllus from '../../images/register-bg.svg'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avatarUrl: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    }
    // TODO: handle Register
    dispatch(authActions.register(name, email, password, avatarUrl));
  };
  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="tien-register-style" >
      <div className="register-bg">
        <img src={BgReg} alt="reg background" className="img-fluid" />

      </div>
      <div className="tien-resgister-form">
        <Form onSubmit={handleSubmit} className="tien-resgister-form-detail">
          <Form.Group>
            <Form.Control
              autocomplete="off"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small className="form-text text-danger">{errors.name}</small>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Control
              autocomplete="off"
              type="email"
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
              autocomplete="off"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="form-text text-danger">
                {errors.password}
              </small>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Control
              autocomplete="off"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
            />
          </Form.Group>

          {loading ? (
            <Button
              className="btn-block"
              variant="primary"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
                Loading...
            </Button>
          ) : (
              <div className="tien-reg-row">
                <p>
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
                <label className="tien-bnt-reg" style={{ cursor: "pointer" }}>
                  <img src={RegIcon} alt="reg ison" style={{ height: "20vh" }} />
                  <input type="submit" style={{ display: "none" }}></input>
                </label>
              </div>
            )}

        </Form>
      </div>
    </div>
  )
}

export default RegisterPage
