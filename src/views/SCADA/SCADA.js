import React from "react";
import MotorWrite from "./MotorWrite/Motor-write";
import MonitorRead from "./MonitorRead/Monitor-read.js";
import "./SCADA.scss";

class SCADA extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <h1 className="title" >HỆ THỐNG GIÁM SÁT ĐIỀU KHIỂN VÀ QUẢN LÝ ĐỘNG CƠ TRÊN NỀN TẢNG OPCUA</h1>
          <div className="d-flex">
            <div className="motor">
              <MotorWrite />
            </div>
            {/* ================================================== */}
            <div className="monitor">
              <MonitorRead />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SCADA;
