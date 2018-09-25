import * as React from "react";
// import { Link } from "react-router-dom";
import * as styles from "./style";
import { Container, Nav, NavItem } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { Subscribe } from "unstated";
import { SlothContainer } from "@slothking-online/state";
import { SelectedPlan, PaymentsInfo } from "./Components";
import PersonalInfo from "./Components/UserInterface/PersonalInfo";
import { userNav } from "./text_data";

export class UserContainer extends SlothContainer<{
  valid: boolean;
}> {
  state = {
    valid: false
  };

  logIn = () => {
    this.setState({ valid: true });
  };

  logOut = () => {
    this.setState({ valid: false });
  };
}

class UserInterface extends React.Component<
  RouteComponentProps<any>,
  {
    selected: string;
  }
> {
  state = {
    selected: "PersonalInfo"
  };

  render() {
    const { selected } = this.state;
    let content: React.ReactNode;

    if (selected) {
      switch (selected) {
        case "SelectedPlan":
          content = <SelectedPlan />;
          break;
        case "PersonalInfo":
          content = <PersonalInfo />;
          break;
        case "PaymentsInfo":
          content = <PaymentsInfo />;
          break;
        default:
          content = selected;
      }
    }

    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          if (!userOps.state.valid) {
            this.props.history.push("/login");
          }
          return (
            <React.Fragment>
              <div className={styles.TopPanel}>
                <Container>
                  <Nav className="nav nav-tabs" role="tablist">
                    {userNav.map(
                      (el, i) =>
                        el.logout ? (
                          <NavItem
                            key={i}
                            className={
                              el.componentTitle === selected ? "active" : ""
                            }
                          >
                            <span onClick={() => userOps.logOut()}>
                              <i className={el.icon} />
                              {el.title}
                            </span>
                          </NavItem>
                        ) : (
                          <NavItem
                            key={i}
                            className={
                              el.componentTitle === selected ? "active" : ""
                            }
                          >
                            <span
                              onClick={() =>
                                this.setState({ selected: el.componentTitle })
                              }
                            >
                              <i className={el.icon} />
                              {el.title}
                            </span>
                          </NavItem>
                        )
                    )}
                  </Nav>
                </Container>
              </div>
              <Container>
                <div className={styles.TabContent}>{content}</div>
              </Container>
            </React.Fragment>
          );
        }}
      </Subscribe>
    );
  }
}

export default withRouter(UserInterface);
