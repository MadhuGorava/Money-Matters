import "./MoneyMattersContainer.css";
const MoneyMattersContainer = ({
  userRole,
  emailAddress,
  imageDimensions,
  navigation1,
  navFeaturedCard,
}) => {
  return (
    <div className="navbar4">
      <div className="navbar-child2" />
      <div className="footer3">
        {!navigation1 && <div className="navigation3" />}
        {!navFeaturedCard && (
          <div className="nav-featured-card3">
            <div className="progress-circle3">
              <div className="ring3">
                <div className="background3" />
                <div className="line3" />
                <div className="text14">80%</div>
              </div>
            </div>
            <div className="button-close-x3">
              <img className="x-close-icon3" alt="" src="/xclose.svg" />
            </div>
            <div className="text-and-supporting-text5">
              <div className="text15">Used space</div>
              <div className="supporting-text5">
                Your team has used 80% of your available space. Need more?
              </div>
            </div>
            <div className="actions3">
              <div className="nav-featured-card-button6">
                <div className="text16">Dismiss</div>
              </div>
              <div className="nav-featured-card-button7">
                <div className="text16">Upgrade plan</div>
              </div>
            </div>
          </div>
        )}
        <div className="account3">
          <div className="avatar-label-group2">
            <img className="avatar-icon2" alt="" src="/avatar@2x.png" />
            <div className="text-and-supporting-text6">
              <div className="text16">{userRole}</div>
              <div className="supporting-text6">{emailAddress}</div>
            </div>
          </div>
          <img className="log-out-01-icon2" alt="" src="/logout01.svg" />
        </div>
      </div>
      <div className="group-parent94">
        <img className="group-icon9" alt="" src={imageDimensions} />
        <div className="money-matters4">
          <span>Money</span>
          <span className="span4">{` `}</span>
          <span className="matters4">Matters</span>
        </div>
      </div>
    </div>
  );
};

export default MoneyMattersContainer;
