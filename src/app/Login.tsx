import * as React from "react";
import { Link } from "react-router-dom";
import * as styles from './style'

class Login extends React.Component {
  render() {
    return (
      <div className={`${styles.LoginBg} login-bg animatedParent`}>
      <form className={styles.LoginContactForm}>
        <h2>Login</h2>
        <div className="form-group">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Password" />
        </div>
        <div className="form-group">
        <Link to="/forgot-password">Forgot Password?</Link>
          <button>Login</button>
        </div>
      </form>
      <h3 className="text-center create">
        Dont have account? <Link to="/sign-up">Create Account</Link>
      </h3>
    </div>
    );
  }
}
export default Login;