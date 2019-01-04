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
                    <li>
                      <NavbarBrand>
                        <img
                          className="logo"
                          src={require("../assets/images/logo_medium.png")}
                          alt=""
                          onClick={() => this.props.history.push("/")}
                        />
                      </NavbarBrand>
                    </li>
                    <li className="list">
                      <ul>
                        <li>
                          <a
                            className="github-button"
                            href="https://github.com/slothking-online/graphql-editor"
                            data-icon="octicon-star"
                            data-size="large"
                            data-show-count={true}
                            aria-label="Star slothking-online/graphql-editor on GitHub"
                          >
                            Star
                          </a>
                        </li>
                        <NavItem>
                          <Link to="/services">Services</Link>
                        </NavItem>
                        <NavItem>
                          <a
                            href={
                              this.props.location.pathname === "/"
                                ? undefined
                                : "/#roadmap"
                            }
                            onClick={() => {
                              if (this.props.location.pathname === "/") {
                                window.scrollTo({
                                  behavior: "smooth",
                                  top: document.getElementById("roadmap")
                                    .offsetTop
                                });
                              }
                            }}
                            style={{
                              cursor: "pointer"
                            }}
                          >
                            Roadmap
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="https://blog.graphqleditor.com">Blog</a>
                        </NavItem>
                        <NavItem>
                          <a href="https://docs.graphqleditor.com/">Docs</a>
                        </NavItem>
                        <NavItem>
                          <a href="https://app.graphqleditor.com/">Editor</a>
                        </NavItem>
                      </ul>
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
