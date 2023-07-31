import DebitCreditOverviewContainer from "../components/DebitCreditOverviewContainer";
import Header from "../components/Header";
import MoneyMattersForm3 from "../components/MoneyMattersForm3";
import "./AdminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-child" />
      <div className="admin-dashboard-item" />
      <div className="admin-dashboard-inner">
        <div className="rectangle-parent">
          <div className="frame-child166" />
          <div className="frame-parent9">
            <div className="frame-wrapper">
              <div className="last-transaction-group">
                <div className="last-transaction-group">
                  <div className="last-transaction-group">
                    <div className="last-transaction1">Last Transaction</div>
                    <div className="frame-parent10">
                      <div className="group-parent83">
                        <img
                          className="frame-child167"
                          alt=""
                          src="/group-735.svg"
                        />
                        <div className="spotify-subscription7">
                          Spotify Subscription
                        </div>
                        <div className="shopping7">Shopping</div>
                        <div className="jan-1230-am7">28 Jan, 12.30 AM</div>
                        <div className="div87">-$2,500</div>
                        <div className="ellipse-parent10">
                          <img
                            className="frame-child168"
                            alt=""
                            src="/ellipse-103@2x.png"
                          />
                          <div className="arlene-mccoy1">Arlene McCoy</div>
                        </div>
                      </div>
                      <div className="group-parent84">
                        <img
                          className="frame-child167"
                          alt=""
                          src="/group-736.svg"
                        />
                        <div className="spotify-subscription7">
                          Spotify Subscription
                        </div>
                        <div className="shopping7">Shopping</div>
                        <div className="jan-1230-am7">28 Jan, 12.30 AM</div>
                        <div className="div87">-$2,500</div>
                        <div className="ellipse-parent10">
                          <img
                            className="frame-child168"
                            alt=""
                            src="/ellipse-103@2x.png"
                          />
                          <div className="arlene-mccoy1">Arlene McCoy</div>
                        </div>
                      </div>
                      <div className="group-parent85">
                        <img
                          className="frame-child167"
                          alt=""
                          src="/group-414.svg"
                        />
                        <div className="spotify-subscription7">
                          Spotify Subscription
                        </div>
                        <div className="shopping7">Shopping</div>
                        <div className="jan-1230-am7">28 Jan, 12.30 AM</div>
                        <div className="div89">+$2,500</div>
                        <div className="ellipse-parent10">
                          <img
                            className="frame-child168"
                            alt=""
                            src="/ellipse-103@2x.png"
                          />
                          <div className="arlene-mccoy1">Arlene McCoy</div>
                        </div>
                      </div>
                      <div className="frame-child173" />
                      <div className="frame-child174" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper3">
              <div className="frame-wrapper4">
                <DebitCreditOverviewContainer
                  rectangleDivTop="0px"
                  rectangleDivLeft="0px"
                />
              </div>
            </div>
            <div className="frame-wrapper5">
              <Header
                componentLabel="Accounts"
                itemCode="/plus5.svg"
                propLeft="0px"
              />
            </div>
            <div className="frame-wrapper6">
              <div className="frame-parent11">
                <div className="container">
                  <div className="div90">$5,600</div>
                  <div className="debit3">Debit</div>
                </div>
                <img className="group-icon4" alt="" src="/group6.svg" />
              </div>
            </div>
          </div>
          <MoneyMattersForm3 />
        </div>
      </div>
      <div className="admin-dashboard-inner1">
        <div className="frame-wrapper7">
          <div className="frame-parent12">
            <div className="container">
              <div className="div90">$12,750</div>
              <div className="debit3">Credit</div>
            </div>
            <img className="group-icon5" alt="" src="/group7.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
