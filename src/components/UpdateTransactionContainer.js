import { useMemo } from "react";
import "./UpdateTransactionContainer.css";
const UpdateTransactionContainer = ({
  transactionButtonText,
  transactionUpdateMessage,
  transactionTypeOptions,
  transactionTitle,
  transactionAmountInput,
  transactionDateInput,
  transactionFormTitle,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const debitStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const spotifySubscriptionStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const div5Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const div6Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const shoppingStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="iconoutlineclose-parent">
      <img className="iconoutlineclose" alt="" src="/iconoutlineclose.svg" />
      <div className="button">
        <div className="add-transaction3">{`Add Transaction `}</div>
      </div>
      <b className="update-transaction">{transactionButtonText}</b>
      <div className="you-can-update">{transactionUpdateMessage}</div>
      <div className="transaction-type-parent">
        <div className="transaction-type">Transaction Type</div>
        <div className="frame-child215" />
        <div className="debit7" style={debitStyle}>
          {transactionTypeOptions}
        </div>
        <img className="vector-icon" alt="" src="/vector-4.svg" />
      </div>
      <div className="transaction-name-container">
        <div className="transaction-name3">Transaction Name</div>
        <div className="spotify-subscription-wrapper">
          <div
            className="spotify-subscription11"
            style={spotifySubscriptionStyle}
          >
            {transactionTitle}
          </div>
        </div>
      </div>
      <div className="amount-parent">
        <div className="transaction-name3">Amount</div>
        <div className="spotify-subscription-wrapper">
          <div className="spotify-subscription11" style={div5Style}>
            {transactionAmountInput}
          </div>
        </div>
      </div>
      <div className="date-parent">
        <div className="transaction-name3">Date</div>
        <div className="spotify-subscription-wrapper">
          <div className="spotify-subscription11" style={div6Style}>
            {transactionDateInput}
          </div>
        </div>
      </div>
      <div className="category-parent">
        <div className="transaction-type">Category</div>
        <div className="frame-child215" />
        <div className="debit7" style={shoppingStyle}>
          {transactionFormTitle}
        </div>
        <img className="vector-icon" alt="" src="/vector-4.svg" />
      </div>
    </div>
  );
};

export default UpdateTransactionContainer;
