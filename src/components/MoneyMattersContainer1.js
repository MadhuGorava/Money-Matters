import { useMemo } from "react";
import "./MoneyMattersContainer1.css";
const MoneyMattersContainer1 = ({
  dimensions,
  frameDivBackgroundColor,
  frameDivBackground,
}) => {
  const navbarStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      background: frameDivBackground,
    };
  }, [frameDivBackgroundColor, frameDivBackground]);

  return (
    <div className="navbar5" style={navbarStyle}>
      <div className="navbar-child3" />
      <div className="group-parent95">
        <img className="group-icon10" alt="" src={dimensions} />
        <div className="money-matters5">
          <span>Money</span>
          <span className="span5">{` `}</span>
          <span className="matters5">Matters</span>
        </div>
      </div>
    </div>
  );
};

export default MoneyMattersContainer1;
