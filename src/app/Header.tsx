import * as React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style";
import { Nav, NavItem, Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "./UserInteface";
import { Subscribe } from "unstated";
// import GitHubButton from 'react-github-button';

class Header extends React.Component<RouteComponentProps<any>, any> {
  state = {
    isListOpen: false
  };
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          return (
            <header
              className={`transparent ${
                pathname == "/login" ||
                pathname == "/sign-up" ||
                pathname == "/prices" ||
                pathname == "/user"
                  ? styles.BlueHeader
                  : styles.Header
              }`}
            >
              <Container>
                <Nav className={styles.NavContent} navbar>
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
                  <li className={styles.HeaderButton}>
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
                        LOG OUT
                      </button>
                    ) : (
                      <Link to="/sign-up" className="custom-btn">
                        SIGN UP FREE
                      </Link>
                    )}
                  </li>
                </Nav>
              </Container>
            </header>
          );
        }}
      </Subscribe>
    );
  }
}
export default withRouter(Header);
