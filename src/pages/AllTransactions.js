import DashboardContainer from "../components/DashboardContainer";
import TransactionFormContainer from "../components/TransactionFormContainer";
import "./AllTransactions.css";
const AllTransactions = () => {
  return (
    <div className="all-transactions1">
      <div className="all-transactions-child" />
      <div className="navbar">
        <div className="navbar-child" />
        <div className="footer">
          <div className="navigation" />
          <div className="nav-featured-card">
            <div className="progress-circle">
              <div className="ring">
                <div className="background" />
                <div className="line" />
                <div className="text">80%</div>
              </div>
            </div>
            <div className="button-close-x">
              <img className="x-close-icon" alt="" src="/xclose.svg" />
            </div>
            <div className="text-and-supporting-text">
              <div className="text1">Used space</div>
              <div className="supporting-text">
                Your team has used 80% of your available space. Need more?
              </div>
            </div>
            <div className="actions">
              <div className="nav-featured-card-button">
                <div className="text2">Dismiss</div>
              </div>
              <div className="nav-featured-card-button1">
                <div className="text2">Upgrade plan</div>
              </div>
            </div>
          </div>
          <div className="account">
            <div className="avatar-label-group">
              <img className="avatar-icon" alt="" src="/avatar@2x.png" />
              <div className="text-and-supporting-text1">
                <div className="text2">Rhye</div>
                <div className="supporting-text1">olivia@untitledui.com</div>
              </div>
            </div>
            <img className="log-out-01-icon" alt="" src="/logout01.svg" />
          </div>
        </div>
        <div className="group-group">
          <img className="group-icon3" alt="" src="/group3.svg" />
          <div className="money-matters">
            <span>Money</span>
            <span className="span">{` `}</span>
            <span className="matters">Matters</span>
          </div>
        </div>
      </div>
      <DashboardContainer
        transactionCode="/transfer-17.svg"
        transactionDescription="Transactions"
        propWidth="207px"
        propHeight="171px"
      />
      <TransactionFormContainer
        dimensionCode="/plus1.svg"
        rectangleDiv={false}
        rectangleDiv1={false}
      />
      <div className="group-parent69">
        <div className="transaction-name-parent">
          <div className="transaction-name1">Transaction Name</div>
          <div className="date5">Date</div>
          <div className="category1">Category</div>
          <div className="amount5">Amount</div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-732.svg" />
          <div className="spotify-subscription6">Spotify Subscription</div>
          <div className="shopping6">Shopping</div>
          <div className="jan-1230-am6">28 Jan, 12.30 AM</div>
          <div className="div73">-$2,500</div>
          <img className="pencil-02-icon59" alt="" src="/pencil028.svg" />
          <img className="trash-01-icon59" alt="" src="/trash015.svg" />
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-734.svg" />
          <div className="spotify-subscription6">Freepik Sales</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">25 Jan, 10.40 PM</div>
          <div className="div74">+$750</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-732.svg" />
          <div className="spotify-subscription6">Mobile Service</div>
          <div className="shopping6">Service</div>
          <div className="jan-1230-am6">20 Jan, 10.40 PM</div>
          <div className="div75">-$150</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-732.svg" />
          <div className="spotify-subscription6">Wilson</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">15 Jan, 03.29 PM</div>
          <div className="div76">-$1050</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Figma</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">14 Jan, 10.40 PM</div>
          <div className="div77">+$840</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-732.svg" />
          <div className="spotify-subscription6">Netflix Subscription</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">13 Jan, 10.40 PM</div>
          <div className="div78">+$840</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Prasanth</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">12 Jan, 10.40 PM</div>
          <div className="div77">+$900</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Prem</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">12 Jan, 10.40 PM</div>
          <div className="div77">+$640</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-732.svg" />
          <div className="spotify-subscription6">Manasa</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">09 Jan, 10.40 PM</div>
          <div className="div78">+$840</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil02.svg" />
            <img className="x-close-icon" alt="" src="/trash01.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Preethi</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">09 Jan, 10.40 PM</div>
          <div className="div77">+$240</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil029.svg" />
            <img className="x-close-icon" alt="" src="/trash013.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Ishan</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">09 Jan, 10.40 PM</div>
          <div className="div77">+$240</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil029.svg" />
            <img className="x-close-icon" alt="" src="/trash013.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Ishan</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">09 Jan, 10.40 PM</div>
          <div className="div77">+$240</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil029.svg" />
            <img className="x-close-icon" alt="" src="/trash013.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-div">
          <img className="group-child" alt="" src="/group-731.svg" />
          <div className="spotify-subscription6">Ishan</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">09 Jan, 10.40 PM</div>
          <div className="div77">+$240</div>
          <div className="pencil-02-parent50">
            <img className="x-close-icon" alt="" src="/pencil029.svg" />
            <img className="x-close-icon" alt="" src="/trash013.svg" />
          </div>
        </div>
        <div className="frame-child152" />
        <div className="group-parent82">
          <img className="group-child11" alt="" src="/group-732.svg" />
          <div className="spotify-subscription6">Ishan</div>
          <div className="shopping6">Transfer</div>
          <div className="jan-1230-am6">09 Jan, 10.40 PM</div>
          <div className="div77">+$240</div>
          <div className="pencil-02-parent62">
            <img className="x-close-icon" alt="" src="/pencil0210.svg" />
            <img className="x-close-icon" alt="" src="/trash014.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
