import "./Footer.css";
const Footer = ({ navigation1, navFeaturedCard }) => {
  return (
    <div className="footer1">
      {!navigation1 && <div className="navigation1" />}
      {!navFeaturedCard && (
        <div className="nav-featured-card1">
          <div className="progress-circle1">
            <div className="ring1">
              <div className="background1" />
              <div className="line1" />
              <div className="text5">80%</div>
            </div>
          </div>
          <div className="button-close-x1">
            <img className="x-close-icon1" alt="" src="/xclose.svg" />
          </div>
          <div className="text-and-supporting-text2">
            <div className="text6">Used space</div>
            <div className="supporting-text2">
              Your team has used 80% of your available space. Need more?
            </div>
          </div>
          <div className="actions1">
            <div className="nav-featured-card-button2">
              <div className="text7">Dismiss</div>
            </div>
            <div className="nav-featured-card-button3">
              <div className="text7">Upgrade plan</div>
            </div>
          </div>
        </div>
      )}
      <div className="account1">
        <div className="avatar-label-group1">
          <img className="avatar-icon1" alt="" src="/avatar@2x.png" />
          <div className="text-and-supporting-text3">
            <div className="text7">Rhye</div>
            <div className="supporting-text3">olivia@untitledui.com</div>
          </div>
        </div>
        <img className="log-out-01-icon1" alt="" src="/logout01.svg" />
      </div>
    </div>
  );
};

export default Footer;
