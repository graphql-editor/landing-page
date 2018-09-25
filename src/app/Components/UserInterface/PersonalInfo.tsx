import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as styles from "../../style";
import { UserContainer } from "../../UserInteface";
import { Subscribe } from "unstated";
import { Form } from "@slothking-online/form";
import { userAddress } from "../../text_data";

class PersonalInfo extends React.Component<
  RouteComponentProps<any>,
  {
    togglePassword: boolean;
    toggleData: boolean;
  }
> {
  state = {
    togglePassword: false,
    toggleData: false
  };
  render() {
    const list = Object.keys(userAddress).map((el, i) => (
      <p key={i}>
        <span>{el}</span> <span>{userAddress[el]}</span>
      </p>
    ));

    // const userDataFields = Object.keys(userAddress).map(el => {
    //   return {
    //     name: el,
    //     fieldType: "string",
    //     content: {
    //       placeholder: el,
    //       required: true
    //     }
    //   };
    // });

    // console.log(userDataFields);

    const { togglePassword, toggleData } = this.state;
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          return (
            <div className="tab-pane animated bounceInRight">
              <h5>Personal Information</h5>
              <div className={`content ${styles.UserDataList}`}>
                <div className="content-nav">
                  <h6>Address</h6>{" "}
                  <span
                    className="toggle"
                    onClick={() => this.setState({ toggleData: !toggleData })}
                  >
                    Change
                  </span>
                </div>
                {toggleData ? (
                  <Form
                    className={styles.FormContent}
                    submitText="CHANGE"
                    values={userAddress}
                    fields={[
                      {
                        name: "password",
                        fieldType: "string",
                        content: {
                          placeholder: "Current Password",
                          required: true,
                          type: "password"
                        }
                      },
                      {
                        name: "new_pas1sword",
                        fieldType: "string",
                        content: {
                          placeholder: "New Password",
                          required: true,
                          type: "password"
                        }
                      },
                      {
                        name: "passwo2rd",
                        fieldType: "string",
                        content: {
                          placeholder: "Current Password",
                          required: true,
                          type: "password"
                        }
                      },
                      {
                        name: "pa3ssword",
                        fieldType: "string",
                        content: {
                          placeholder: "Current Password",
                          required: true,
                          type: "password"
                        }
                      },
                      {
                        name: "passwo4rd",
                        fieldType: "string",
                        content: {
                          placeholder: "Current Password",
                          required: true,
                          type: "password"
                        }
                      },
                      {
                        name: "passw5ord",
                        fieldType: "string",
                        content: {
                          placeholder: "Current Password",
                          required: true,
                          type: "password"
                        }
                      }
                    ]}
                    validate={e => {
                      userOps.logIn();
                    }}
                  />
                ) : (
                  list
                )}
              </div>
              <div className={styles.ChangePassword}>
                <div>
                  <span>Password</span>
                  <span
                    className="toggle"
                    onClick={() =>
                      this.setState({ togglePassword: !togglePassword })
                    }
                  >
                    Change Password
                  </span>
                </div>
                {togglePassword && (
                  <Form
                    className={styles.FormContent}
                    submitText="CHANGE"
                    fields={[
                      {
                        name: "password",
                        fieldType: "string",
                        content: {
                          placeholder: "Current Password",
                          required: true,
                          type: "password"
                        }
                      },
                      {
                        name: "new_password",
                        fieldType: "string",
                        content: {
                          placeholder: "New Password",
                          required: true,
                          type: "password"
                        }
                      }
                    ]}
                    validate={e => {
                      userOps.logIn();
                    }}
                  />
                )}
              </div>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}

export default withRouter(PersonalInfo);
