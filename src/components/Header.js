import { useMemo } from "react";
import "./Header.css";
const Header = ({ componentLabel, itemCode, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="profile-group" style={frameDivStyle}>
      <div className="profile1">{componentLabel}</div>
      <div className="plus-group">
        <img className="plus-icon1" alt="" src={itemCode} />
        <div className="add-transaction1">Add Transaction</div>
      </div>
    </div>
  );
};

export default Header;
