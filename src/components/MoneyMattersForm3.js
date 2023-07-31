import TransactionContainer from "./TransactionContainer";
import Footer from "./Footer";
import "./MoneyMattersForm3.css";
const MoneyMattersForm3 = () => {
  return (
    <div className="navbar6">
      <div className="navbar-child4" />
      <TransactionContainer
        transactionId="/transfer-18.svg"
        componentName="All Transactions"
        dimensionCode="/user-3-11.svg"
        dimensionTextCode="/home-21.svg"
        componentImageUrls="Dashboard"
        propTop="114px"
        propTop1="80px"
        propTop2="143px"
        propTop3="0px"
        propWidth="189px"
        propWidth1="145px"
      />
      <Footer navigation1={false} navFeaturedCard={false} />
      <div className="group-parent96">
        <img className="group-icon11" alt="" src="/group5.svg" />
        <div className="money-matters6">
          <span>Money</span>
          <span className="span6">{` `}</span>
          <span className="matters6">Matters</span>
        </div>
      </div>
    </div>
  );
};

export default MoneyMattersForm3;
