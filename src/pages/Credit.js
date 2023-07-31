import MoneyMattersContainer from "../components/MoneyMattersContainer";
import TransactionContainer from "../components/TransactionContainer";
import TransactionForm from "../components/TransactionForm";
import "./Credit.css";
const Credit = () => {
  return (
    <div className="credit1">
      <div className="credit-child" />
      <MoneyMattersContainer
        userRole="Rhye"
        emailAddress="olivia@untitledui.com"
        imageDimensions="/group4.svg"
        navigation1={false}
        navFeaturedCard={false}
      />
      <TransactionContainer
        transactionId="/home-22.svg"
        componentName="Dashboard"
        dimensionCode="/user-3-11.svg"
        dimensionTextCode="/transfer-13.svg"
        componentImageUrls="Transactions"
        propTop="132px"
        propTop1="0px"
        propTop2="124px"
        propTop3="45px"
        propWidth="207px"
        propWidth1="163px"
      />
      <div className="frame-parent2">
        <div className="transactions-parent">
          <div className="transactions">Transactions</div>
          <div className="plus-parent">
            <img className="plus-icon" alt="" src="/plus2.svg" />
            <div className="add-transaction">Add Transaction</div>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="all-transactions-parent">
            <div className="all-transactions">All Transactions</div>
            <div className="frame-child2" />
          </div>
          <div className="all-transactions-parent">
            <div className="debit2">Debit</div>
            <div className="frame-child3" />
          </div>
          <div className="credit-parent">
            <div className="credit2">Credit</div>
            <div className="frame-child4" />
          </div>
        </div>
      </div>
      <TransactionForm
        dimensionCode="/group-732.svg"
        priceChange="-$2,500"
        dimensionLabel="/pencil023.svg"
        dimensionValue="/trash012.svg"
        imageDimensionCode="/group-732.svg"
        priceChangeLabel="-$150"
        dimensionCodeImageUrl="/pencil024.svg"
        dimensionCodeImageUrl2="/group-732.svg"
        priceChangeAmount="-$1050"
        dimensionCodeImageUrl3="/pencil024.svg"
        dimensionCodeImageUrl4="/group-732.svg"
        priceChangeText="-$840"
        dimensionCodeImageUrl5="/pencil024.svg"
        dimensionCodeImageUrl6="/group-732.svg"
        priceChangeValue="-$840"
        dimensionCodeImageUrl7="/pencil024.svg"
        propColor="#fe5c73"
        propColor1="#fe5c73"
        propColor2="#fe5c73"
        propColor3="#fe5c73"
        propColor4="#fe5c73"
      />
    </div>
  );
};

export default Credit;
