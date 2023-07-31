import TransactionContainer from "./TransactionContainer";
import Footer from "./Footer";
import "./MoneyMattersForm.css";
const MoneyMattersForm = () => {
  return (
    <div className="navbar2">
      <div className="navbar-inner" />
      <div className="group-parent87">
        <img className="group-icon7" alt="" src="/group3.svg" />
        <div className="money-matters2">
          <span>Money</span>
          <span className="span2">{` `}</span>
          <span className="matters2">Matters</span>
        </div>
      </div>
      <TransactionContainer
        transactionId="/transfer-11.svg"
        componentName="Transactions"
        dimensionCode="/user-3-11.svg"
        dimensionTextCode="/home-21.svg"
        componentImageUrls="Dashboard"
      />
      <Footer navigation1={false} navFeaturedCard={false} />
    </div>
  );
};

export default MoneyMattersForm;
