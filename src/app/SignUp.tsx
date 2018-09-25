import * as React from "react";
import * as styles from "./style";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "./UserInteface";
import { Subscribe } from "unstated";
import { Form } from "@slothking-online/form";

class SignUp extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          return (
            <div className={`${styles.LoginBg} sign-up animatedParent`}>
              <div className={styles.FormBackground}>
                <h2 className={styles.FormH2}>Sign Up</h2>
                <Form
                  className={styles.FormContent}
                  submitText="COMING SOON"
                  fields={[
                    {
                      name: "username",
                      fieldType: "string",
                      content: {
                        placeholder: "E-mail Address",
                        required: true
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
                    },
                    {
                      name: "rep_password",
                      fieldType: "string",
                      content: {
                        placeholder: "Repeat Password",
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
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
export default withRouter(SignUp);
