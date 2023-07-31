import { useMemo } from "react";
import "./LogoutConfirmationContainer.css";
const LogoutConfirmationContainer = ({
  confirmationMessage,
  actionButtonText,
  buttonText,
  confirmationMessageText,
  messageText,
  propWidth,
}) => {
  const loremIpsumDolorStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="card-parent">
      <div className="card" />
      <img className="frame-child218" alt="" src={confirmationMessage} />
      <img className="iconoutlineclose1" alt="" src="/iconoutlineclose.svg" />
      <div className="button-parent">
        <div className="button1">
          <div className="yes-logout">{actionButtonText}</div>
        </div>
        <div className="button2">
          <div className="yes-logout">{buttonText}</div>
        </div>
      </div>
      <b className="are-you-sure">{confirmationMessageText}</b>
      <div className="lorem-ipsum-dolor" style={loremIpsumDolorStyle}>
        {messageText}
      </div>
    </div>
  );
};

export default LogoutConfirmationContainer;
