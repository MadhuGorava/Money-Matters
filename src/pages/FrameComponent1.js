import DebitCreditOverviewContainer from "../components/DebitCreditOverviewContainer";
import Header from "../components/Header";
import MoneyMattersForm from "../components/MoneyMattersForm";
import "./FrameComponent1.css";
const FrameComponent1 = () => {
  return (
    <div className="frame-parent">
      <div className="dashboard-parent">
        <div className="dashboard">
          <div className="dashboard-child" />
          <div className="dashboard-item" />
          <div className="dashboard-inner" />
          <div className="last-transaction-parent">
            <div className="last-transaction">Last Transaction</div>
            <div className="frame-group">
              <div className="group-parent">
                <img className="frame-inner" alt="" src="/group-73.svg" />
                <div className="spotify-subscription">Spotify Subscription</div>
                <div className="shopping">Shopping</div>
                <div className="div">-$150</div>
                <div className="jan-1230-am">28 Jan, 12.30 AM</div>
                <img className="pencil-02-icon" alt="" src="/pencil02.svg" />
                <img className="trash-01-icon" alt="" src="/trash01.svg" />
              </div>
              <div className="group-container">
                <img className="frame-inner" alt="" src="/group-73.svg" />
                <div className="spotify-subscription">Mobile Service</div>
                <div className="shopping">Service</div>
                <div className="div">-$150</div>
                <div className="jan-1230-am">25 Jan, 10.40 PM</div>
                <img className="pencil-02-icon" alt="" src="/pencil02.svg" />
                <img className="trash-01-icon" alt="" src="/trash01.svg" />
              </div>
              <div className="frame-div">
                <img className="frame-inner" alt="" src="/group-414.svg" />
                <div className="spotify-subscription">Emilly Wilson</div>
                <div className="shopping">Transfer</div>
                <div className="div2">+$780</div>
                <div className="jan-1230-am">20 Jan, 10.40 PM</div>
                <img className="pencil-02-icon" alt="" src="/pencil02.svg" />
                <img className="trash-01-icon" alt="" src="/trash01.svg" />
              </div>
            </div>
          </div>
          <DebitCreditOverviewContainer />
          <Header
            componentLabel="Accounts"
            itemCode="/plus1.svg"
            propLeft="250px"
          />
          <div className="frame-container">
            <div className="parent">
              <div className="div3">$5,600</div>
              <div className="debit">Debit</div>
            </div>
            <img className="group-icon1" alt="" src="/group1.svg" />
          </div>
          <div className="frame-parent1">
            <div className="parent">
              <div className="div3">$12,750</div>
              <div className="debit">Credit</div>
            </div>
            <img className="group-icon2" alt="" src="/group2.svg" />
          </div>
        </div>
        <MoneyMattersForm />
      </div>
    </div>
  );
};

export default FrameComponent1;
