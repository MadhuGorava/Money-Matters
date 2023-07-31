import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TransactionFormContainer1.css";
const TransactionFormContainer1 = () => {
  return (
    <div className="frame-parent18">
      <div className="transactions-group">
        <div className="transactions4">Transactions</div>
        <Button variant="primary">Add Transaction</Button>
      </div>
      <div className="frame-parent19">
        <div className="all-transactions-group">
          <div className="all-transactions2">All Transactions</div>
          <div className="frame-child199" />
        </div>
        <div className="all-transactions-group">
          <div className="debit5">Debit</div>
          <div className="frame-child200" />
        </div>
        <div className="credit-group">
          <div className="credit5">Credit</div>
          <div className="frame-child201" />
        </div>
      </div>
    </div>
  );
};

export default TransactionFormContainer1;
