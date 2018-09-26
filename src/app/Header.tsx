import * as React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "./UserInteface";
import { Subscribe } from "unstated";

class Header extends React.Component<RouteComponentProps<any>, any> {
  state = {
    isListOpen: false
  };
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          return (
            <header className={styles.Header}>
              <Container>
                <Navbar>
                  <Nav className={styles.NavContent} navbar>
                    <NavbarBrand>
                      <img
                        className="logo"
                        src={require("../assets/images/logo_medium.png")}
                        alt=""
                        onClick={() => this.props.history.push("/")}
                      />
                    </NavbarBrand>
                    <li className="list">
                      <ul>
                        <NavItem>
                          <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/about">About</Link>
                        </NavItem>
                        <NavItem>
                          <a href="https://demo.graphqleditor.com/">Demo</a>
                        </NavItem>
                        <NavItem>
                          <Link to="/prices">Pricing</Link>
                        </NavItem>
                        <NavItem>
                          <a href="https://github.com/slothking-online/grqphql-editor">
                            CLI
                          </a>
                        </NavItem>
                      </ul>
                    </li>
                    <li className={styles.HeaderButtons}>
                      <a
                        className="github-button"
                        href="https://github.com/slothking-online/graphql-editor"
                        //data-icon="octicon-star"
                        data-size="large"
                        data-show-count={true}
                        aria-label="Star slothking-online/graphql-editor on GitHub"
                      >
                        Star
                      </a>

                      {userOps.state.valid ? (
                        <Link to="/user" className="custom-btn login">
                          USER
                        </Link>
                      ) : (
                        <Link to="/login" className="custom-btn login">
                          LOGIN
                        </Link>
                      )}
                      {userOps.state.valid ? (
                        <button
                          onClick={() => userOps.logOut()}
                          className="custom-btn"
                        >
                          LOGOUT
                        </button>
                      ) : (
                        <Link to="/sign-up" className="custom-btn">
                          SIGNUP FREE
                        </Link>
                      )}
                    </li>
                  </Nav>
                </Navbar>
              </Container>
            </header>
          );
        }}
      </Subscribe>
    );
  }
}
export default withRouter(Header);
