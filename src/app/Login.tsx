import * as React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "./UserInteface";
import { Subscribe } from "unstated";
import { Form } from "@slothking-online/form";

class Login extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          if (userOps.state.valid) {
            this.props.history.push("/user");
          }
          return (
            <div className={`${styles.LoginBg} login-bg animatedParent`}>
              <div className={styles.FormBackground}>
                <h2 className={styles.FormH2}>Login</h2>
                <Form
                  className={styles.FormContent}
                  submitText="COMING SOON"
                  fields={[
                    {
                      name: "username",
                      fieldType: "string",
                      content: {
                        placeholder: "E-mail Address",
                        required: true,
                      }
                    },
                    {
                      name: "password",
                      fieldType: "string",
                      content: {
                        placeholder: "Password",
                        required: true,
                        type: "password"
                      }
                    }
                  ]}
                  validate={e => {
                    //userOps.logIn();
                  }}
                />
              </div>
              <h3 className="text-center create">
                Dont have account? <Link to="/sign-up">Create Account</Link>
              </h3>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
export default withRouter(Login);
