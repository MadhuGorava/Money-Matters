import { useMemo } from "react";
import "./TransactionContainer.css";
const TransactionContainer = ({
  transactionId,
  componentName,
  dimensionCode,
  dimensionTextCode,
  componentImageUrls,
  propTop,
  propTop1,
  propTop2,
  propTop3,
  propWidth,
  propWidth1,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const frameDiv5Style = useMemo(() => {
    return {
      top: propTop2,
    };
  }, [propTop2]);

  const frameDiv6Style = useMemo(() => {
    return {
      top: propTop3,
      width: propWidth,
    };
  }, [propTop3, propWidth]);

  const frameDiv7Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="frame-parent16" style={frameDiv3Style}>
      <div className="transfer-1-group" style={frameDiv4Style}>
        <img className="transfer-1-icon1" alt="" src={transactionId} />
        <div className="transactions2">{componentName}</div>
      </div>
      <div className="user-3-1-group" style={frameDiv5Style}>
        <img className="transfer-1-icon1" alt="" src={dimensionCode} />
        <div className="transactions2">Profile</div>
      </div>
      <div className="rectangle-parent10" style={frameDiv6Style}>
        <div className="frame-child198" />
        <div className="home-2-group" style={frameDiv7Style}>
          <img className="home-2-icon1" alt="" src={dimensionTextCode} />
          <div className="dashboard2">{componentImageUrls}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionContainer;
