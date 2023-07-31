import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./DashboardForm.css";
const DashboardForm = () => {
  return (
    <div className="frame-parent17">
      <div className="home-2-container">
        <img className="home-2-icon2" alt="" src="/home-22.svg" />
        <div className="dashboard3">Dashboard</div>
      </div>
      <div className="user-3-1-container">
        <img className="home-2-icon2" alt="" src="/user-3-11.svg" />
        <div className="dashboard3">Profile</div>
      </div>
      <div className="rectangle-parent11">
        <Form.Group className="wrapper">
          <Form.Control type="text" placeholder="Input placeholder" />
        </Form.Group>
        <div className="transfer-1-container">
          <img className="transfer-1-icon2" alt="" src="/transfer-12.svg" />
          <div className="transactions3">Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardForm;
