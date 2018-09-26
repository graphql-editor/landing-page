import * as React from "react";
import * as styles from "./style";
import { Row, Col, Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "../UserInteface";
import { Subscribe } from "unstated";

class CreateAccount extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          return (
            <React.Fragment>
              {/* <div className={`${styles.PreFooter}`}>
                <img src="./assets/images/line-prefoter.svg" alt="bg-prefooter" />
              </div> */}
              <div className={styles.PrefooterCreateAccount}>
              <Container>
                  <Row>
                    <Col lg="4" md="12">
                      <h3>Create Account</h3>
                    </Col>
                    <Col lg="8" md="12">
                      <form>
                        <div className="form-group">
                          <input type="text" placeholder="Email Address" />
                        </div>
                        <button className="custom-btn green">
                          SIGNUP FREE
                        </button>
                      </form>
                    </Col>
                  </Row>
                </Container>
              </div>
            </React.Fragment>
          );
        }}
      </Subscribe>
    );
  }
}
export default withRouter(CreateAccount);
