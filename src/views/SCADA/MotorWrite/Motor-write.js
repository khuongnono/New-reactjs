import React from "react";
import ThumbMotor from "../../../assets/images/motor.png";
import "./MotorWrite.scss";

class MotorWrite extends React.Component {
  render() {
    return (
      <>
        <h1>Write</h1>
        <div className="Thumb-motor">
          <img src={ThumbMotor} style={{ width: "300px"}} />
        </div>
        <hr />
        <div className="buttons">
          <label htmlFor="fname">Setpoint: </label> <></>
          <br/>
          <input type="text" /> <></>
          <button className="">Enter</button>
          <br />
          <br />
          <button className="btn btn-success">Run Reverse</button>
          <br />
          <br />
          <button className="btn btn-success">Run Forward</button>
          <br />
          <br />
          <button className="btn btn-danger">STOP</button>
        </div>
      </>
    );
  }
}

export default MotorWrite;
