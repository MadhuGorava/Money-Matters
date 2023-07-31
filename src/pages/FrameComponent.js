import Header from "../components/Header";
import MoneyMattersForm2 from "../components/MoneyMattersForm2";
import FormContainer from "../components/FormContainer";
import "./FrameComponent.css";
const FrameComponent = () => {
  return (
    <div className="profile-parent">
      <div className="profile">
        <div className="profile-child" />
        <div className="profile-item" />
        <div className="profile-inner" />
        <Header componentLabel="Profile" itemCode="/plus.svg" />
        <div className="navbar-parent">
          <MoneyMattersForm2 />
          <div className="mask-group-parent">
            <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
            <FormContainer
              userInfo="Your Name"
              userDisplayName="Charlene Reed "
            />
            <FormContainer
              userInfo="Email"
              userDisplayName="charlenereed@gmail.com "
              propTop="150px"
              propLeft="215px"
            />
            <FormContainer
              userInfo="User Name"
              userDisplayName="Charlene Reed "
              propTop="48px"
              propLeft="662px"
            />
            <FormContainer
              userInfo="Password"
              userDisplayName="**********"
              propTop="150px"
              propLeft="662px"
            />
            <FormContainer
              userInfo="Present Address"
              userDisplayName="San Jose, California, USA"
              propTop="252px"
              propLeft="662px"
            />
            <FormContainer
              userInfo="City"
              userDisplayName="San Jose"
              propTop="354px"
              propLeft="662px"
            />
            <FormContainer
              userInfo="Country"
              userDisplayName="USA"
              propTop="456px"
              propLeft="662px"
            />
            <FormContainer
              userInfo="Permanent Address"
              userDisplayName="San Jose, California, USA"
              propTop="354px"
              propLeft="215px"
            />
            <FormContainer
              userInfo="Postal Code"
              userDisplayName="45962"
              propTop="456px"
              propLeft="215px"
            />
            <div className="date-of-birth-parent">
              <div className="date-of-birth">Date of Birth</div>
              <div className="frame-child" />
              <div className="january-1990">25 January 1990</div>
              <img className="frame-item" alt="" src="/vector-4.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
