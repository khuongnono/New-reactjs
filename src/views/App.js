import "./App.scss";
import SCADA from "./SCADA/SCADA.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Nav/Nav";

import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";

/**
 * 2 component: class component (focus loại này) / function component (function, arrow)
 * component của React sử dụng JSX
 *
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Header">
          <div className="container">
            <Nav />
          </div>
        </div>
        {/* ============================= END HEADER */}
        <div className="WP-Content container">
          <SCADA />
          
        </div>
        {/* ============================= END CONTENT*/}
        <div className="Footer">
            <div className="container">
            <Nav />
            </div>
        </div>
        {/* ============================= END FOOTER*/}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
