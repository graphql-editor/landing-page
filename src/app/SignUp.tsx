import * as React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-up animatedParent">
      <form>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input type="text" placeholder="First Name *"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name *"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Email Address *"/>
        </div>
        <div className="form-group">
          <select name="Country">
            <option value="Select Country">Country</option>
            <option value="Select Country2">Ukraine</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" placeholder="City *"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="ZIP Code *"/>
        </div>
  
        <div className="form-group">
          <input type="text" placeholder="Address *"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Password *"/>
        </div>
        <button>create my account</button>
      </form>
    </div>
    );
  }
}
export default SignUp;
