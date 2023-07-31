import { useMemo } from "react";
import "./DebitCreditOverviewContainer.css";
const DebitCreditOverviewContainer = ({
  rectangleDivTop,
  rectangleDivLeft,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [rectangleDivTop, rectangleDivLeft]);

  return (
    <div className="debit-credit-overview-parent" style={frameDiv2Style}>
      <div className="debit-credit">{`Debit & Credit Overview`}</div>
      <div className="rectangle-container">
        <div className="frame-child176" />
        <div className="frame-child177" />
        <div className="frame-child178" />
        <div className="frame-child179" />
        <div className="frame-child180" />
        <div className="frame-child181" />
        <div className="debited-5420-credited-in-t-parent">
          <div className="debited-5420-container">
            <span>$7,560</span>
            <span className="debited">{` Debited & `}</span>
            <span>$5,420</span>
            <span className="debited"> Credited in this Week</span>
          </div>
          <div className="frame-parent14">
            <div className="rectangle-parent1">
              <div className="frame-child182" />
              <div className="frame-child183" />
            </div>
            <div className="rectangle-parent2">
              <div className="frame-child184" />
              <div className="frame-child185" />
            </div>
            <div className="rectangle-parent3">
              <div className="frame-child186" />
              <div className="frame-child187" />
            </div>
            <div className="rectangle-parent4">
              <div className="frame-child188" />
              <div className="frame-child189" />
            </div>
            <div className="rectangle-parent5">
              <div className="frame-child190" />
              <div className="frame-child191" />
            </div>
            <div className="rectangle-parent6">
              <div className="frame-child192" />
              <div className="frame-child193" />
            </div>
            <div className="rectangle-parent7">
              <div className="frame-child194" />
              <div className="frame-child195" />
            </div>
            <div className="sat">Sat</div>
            <div className="sun">Sun</div>
            <div className="mon">Mon</div>
            <div className="tue">Tue</div>
            <div className="thu">Thu</div>
            <div className="fri">Fri</div>
            <div className="wed">Wed</div>
          </div>
          <div className="frame-parent15">
            <div className="rectangle-parent8">
              <div className="frame-child196" />
              <div className="debit4">Debit</div>
            </div>
            <div className="rectangle-parent9">
              <div className="frame-child197" />
              <div className="debit4">Credit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="parent2">
        <div className="div92">500</div>
        <div className="div93">400</div>
        <div className="div94">300</div>
        <div className="div95">200</div>
        <div className="div96">100</div>
        <div className="div97">0</div>
      </div>
    </div>
  );
};

export default DebitCreditOverviewContainer;
