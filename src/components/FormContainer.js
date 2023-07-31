import { useMemo } from "react";
import "./FormContainer.css";
const FormContainer = ({ userInfo, userDisplayName, propTop, propLeft }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="your-name-parent" style={frameDiv1Style}>
      <div className="your-name">{userInfo}</div>
      <div className="charlene-reed-wrapper">
        <div className="charlene-reed">{userDisplayName}</div>
      </div>
    </div>
  );
};

export default FormContainer;
