import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./MoneyMattersForm1.css";
const MoneyMattersForm1 = () => {
  return (
    <div className="navbar3">
      <div className="navbar-child1" />
      <div className="footer2">
        <div className="navigation2" />
        <div className="nav-featured-card2">
          <div className="progress-circle2">
            <div className="ring2">
              <div className="background2" />
              <div className="line2" />
              <div className="text10">80%</div>
            </div>
          </div>
          <div className="button-close-x2">
            <img className="x-close-icon2" alt="" src="/xclose.svg" />
          </div>
          <div className="text-and-supporting-text4">
            <div className="text11">Used space</div>
            <div className="supporting-text4">
              Your team has used 80% of your available space. Need more?
            </div>
          </div>
          <div className="actions2">
            <div className="nav-featured-card-button4">
              <div className="text12">Dismiss</div>
            </div>
            <div className="nav-featured-card-button5">
              <div className="text12">Upgrade plan</div>
            </div>
          </div>
        </div>
        <Button className="account2" variant="primary">
          Rhye
        </Button>
      </div>
      <div className="group-parent88">
        <img className="group-icon8" alt="" src="/group4.svg" />
        <div className="money-matters3">
          <span>Money</span>
          <span className="span3">{` `}</span>
          <span className="matters3">Matters</span>
        </div>
      </div>
    </div>
  );
};

export default MoneyMattersForm1;
