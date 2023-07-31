import Footer from "./Footer";
import "./MoneyMattersForm2.css";
const MoneyMattersForm2 = () => {
  return (
    <div className="navbar1">
      <div className="navbar-item" />
      <div className="frame-parent13">
        <div className="home-2-parent">
          <img className="home-2-icon" alt="" src="/home-2.svg" />
          <div className="dashboard1">Dashboard</div>
        </div>
        <div className="transfer-1-parent">
          <img className="home-2-icon" alt="" src="/transfer-1.svg" />
          <div className="dashboard1">Transactions</div>
        </div>
        <div className="frame-wrapper8">
          <div className="rectangle-group">
            <div className="frame-child175" />
            <div className="user-3-1-parent">
              <img className="user-3-1" alt="" src="/user-3-1.svg" />
              <div className="profile2">Profile</div>
            </div>
          </div>
        </div>
      </div>
      <Footer navigation1={false} navFeaturedCard={false} />
      <div className="group-parent86">
        <img className="group-icon6" alt="" src="/group.svg" />
        <div className="money-matters1">
          <span>Money</span>
          <span className="span1">{` `}</span>
          <span className="matters1">Matters</span>
        </div>
      </div>
    </div>
  );
};

export default MoneyMattersForm2;
