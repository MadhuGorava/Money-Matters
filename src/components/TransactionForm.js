import { useMemo } from "react";
import "./TransactionForm.css";
const TransactionForm = ({
  dimensionCode,
  priceChange,
  dimensionLabel,
  dimensionValue,
  imageDimensionCode,
  priceChangeLabel,
  dimensionCodeImageUrl,
  dimensionCodeImageUrl2,
  priceChangeAmount,
  dimensionCodeImageUrl3,
  dimensionCodeImageUrl4,
  priceChangeText,
  dimensionCodeImageUrl5,
  dimensionCodeImageUrl6,
  priceChangeValue,
  dimensionCodeImageUrl7,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const div1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const div2Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const div3Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const div4Style = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="frame-parent20">
      <div className="transaction-name-group">
        <div className="transaction-name2">Transaction Name</div>
        <div className="date6">Date</div>
        <div className="category2">Category</div>
        <div className="amount6">Amount</div>
      </div>
      <div className="frame-child202" />
      <div className="group-parent89">
        <img className="frame-child203" alt="" src={dimensionCode} />
        <div className="spotify-subscription10">Spotify Subscription</div>
        <div className="shopping10">Shopping</div>
        <div className="jan-1230-am10">28 Jan, 12.30 AM</div>
        <div className="div98" style={divStyle}>
          {priceChange}
        </div>
        <img className="pencil-02-icon73" alt="" src={dimensionLabel} />
        <img className="trash-01-icon73" alt="" src={dimensionValue} />
      </div>
      <div className="frame-child202" />
      <div className="group-parent90">
        <img className="frame-child203" alt="" src={imageDimensionCode} />
        <div className="spotify-subscription10">Mobile Service</div>
        <div className="shopping10">Service</div>
        <div className="jan-1230-am10">20 Jan, 10.40 PM</div>
        <div className="div99" style={div1Style}>
          {priceChangeLabel}
        </div>
        <div className="pencil-02-parent63">
          <img
            className="pencil-02-icon74"
            alt=""
            src={dimensionCodeImageUrl}
          />
          <img className="pencil-02-icon74" alt="" src="/trash01.svg" />
        </div>
      </div>
      <div className="frame-child202" />
      <div className="group-parent90">
        <img className="frame-child203" alt="" src={dimensionCodeImageUrl2} />
        <div className="spotify-subscription10">Wilson</div>
        <div className="shopping10">-</div>
        <div className="jan-1230-am10">15 Jan, 03.29 PM</div>
        <div className="div101" style={div2Style}>
          {priceChangeAmount}
        </div>
        <div className="pencil-02-parent63">
          <img
            className="pencil-02-icon74"
            alt=""
            src={dimensionCodeImageUrl3}
          />
          <img className="pencil-02-icon74" alt="" src="/trash01.svg" />
        </div>
      </div>
      <div className="frame-child202" />
      <div className="group-parent90">
        <img className="frame-child203" alt="" src={dimensionCodeImageUrl4} />
        <div className="spotify-subscription10">Netflix Subscription</div>
        <div className="shopping10">Transfer</div>
        <div className="jan-1230-am10">13 Jan, 10.40 PM</div>
        <div className="div102" style={div3Style}>
          {priceChangeText}
        </div>
        <div className="pencil-02-parent63">
          <img
            className="pencil-02-icon74"
            alt=""
            src={dimensionCodeImageUrl5}
          />
          <img className="pencil-02-icon74" alt="" src="/trash01.svg" />
        </div>
      </div>
      <div className="frame-child202" />
      <div className="group-parent90">
        <img className="frame-child203" alt="" src={dimensionCodeImageUrl6} />
        <div className="spotify-subscription10">Manasa</div>
        <div className="shopping10">Transfer</div>
        <div className="jan-1230-am10">09 Jan, 10.40 PM</div>
        <div className="div102" style={div4Style}>
          {priceChangeValue}
        </div>
        <div className="pencil-02-parent63">
          <img
            className="pencil-02-icon74"
            alt=""
            src={dimensionCodeImageUrl7}
          />
          <img className="pencil-02-icon74" alt="" src="/trash01.svg" />
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
