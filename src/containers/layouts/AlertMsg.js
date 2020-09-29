import React from "react";
import { useSelector } from "react-redux";
import { Fade, Alert } from "react-bootstrap";

const AlertMsg = () => {
  const alerts = useSelector((state) => state.alert);
  return (<div>


    { alerts !== null &&
      alerts.length > 0 &&
      alerts.map((alert) => <div className="alert-div">
        <Alert transition={Fade} key={alert.id}>
          <h4 style={{ color: "red" }}>{alert.msg}</h4>
        </Alert></div>)
    }
  </div>
  )

};

export default AlertMsg;
