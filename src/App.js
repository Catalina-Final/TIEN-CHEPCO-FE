import React, { useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/actions";


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);
  return (
    <div className="App">
      {isAuthenticated === undefined ? (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <div className="cliploader-wrap">
            <PropagateLoader color="#5E9194" size={15} loading={true} />
          </div>
        </div>
      ) : (
          <Router>
            <Routes />
          </Router>
        )}
    </div>
  );
}

export default App;
