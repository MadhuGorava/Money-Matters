import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./DashboardContainer.css";
const DashboardContainer = ({
  transactionCode,
  transactionDescription,
  propWidth,
  propHeight,
}) => {
  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="frame-parent23" style={frameDiv8Style}>
      <div className="home-2-parent1">
        <img className="home-2-icon3" alt="" src="/home-22.svg" />
        <Link className="dashboard4">Dashboard</Link>
      </div>
      <div className="user-3-1-parent1">
        <img className="home-2-icon3" alt="" src="/user-3-11.svg" />
        <div className="dashboard4">Profile</div>
      </div>
      <div className="rectangle-parent12">
        <div className="frame-child219" />
        <div className="transfer-1-parent1">
          <img className="transfer-1-icon3" alt="" src={transactionCode} />
          <div className="all-transactions4">{transactionDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
