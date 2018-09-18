import * as React from "react";
import * as styles from "./style";

class SignUp extends React.Component {
  render() {
    return (
      <div className={`${styles.LoginBg} sign-up animatedParent`}>
        <form className={styles.LoginContactForm}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <input type="text" placeholder="First Name *" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name *" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email Address *" required />
          </div>
          <div className="form-group">
            <select className={`select`}>
              <option value="Select Country">Country</option>
              <option value="Select Country2">Ukraine</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" placeholder="City *" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="ZIP Code *" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address *" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Password *" required />
          </div>
          <button>create my account</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
