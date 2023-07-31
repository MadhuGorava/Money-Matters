import "./TransactionFormContainer.css";
const TransactionFormContainer = ({
  dimensionCode,
  rectangleDiv,
  rectangleDiv1,
}) => {
  return (
    <div className="frame-parent21">
      <div className="transactions-container">
        <div className="transactions5">Transactions</div>
        <div className="plus-container">
          <img className="plus-icon2" alt="" src={dimensionCode} />
          <div className="add-transaction2">Add Transaction</div>
        </div>
      </div>
      <div className="frame-parent22">
        <div className="all-transactions-container">
          <div className="add-transaction2">All Transactions</div>
          <div className="frame-child212" />
        </div>
        <div className="debit-container">
          <div className="debit6">Debit</div>
          {!rectangleDiv && <div className="frame-child213" />}
        </div>
        <div className="credit-container">
          <div className="credit6">Credit</div>
          {!rectangleDiv1 && <div className="frame-child214" />}
        </div>
      </div>
    </div>
  );
};

export default TransactionFormContainer;
