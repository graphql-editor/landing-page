import * as React from "react";
import * as styles from "./style";
import { Row, Col, Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "../UserInteface";
import { Subscribe } from "unstated";
// import { Form } from "@slothking-online/form";

class SubscribeToList extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {(userOps: UserContainer) => {
          return (
            <React.Fragment>
              <div className={styles.PrefooterCreateAccount}>
                <Container>
                  <Row style={{margin: "0 auto"}}>
                    <Col lg="4" md="12">
                      <h3>Join NOW!</h3>
                    </Col>
                    <Col lg="8" md="12">
                      <form
                        action="https://api.producthunt.com/widgets/upcoming/v1/upcoming/graphql-visual-designer/forms"
                        method="post"
                        id="ph-email-form"
                        name="ph-email-form"
                        target="_blank"
                      >
                        <input
                          type="email"
                          name="email"
                          id="ph-email"
                          placeholder="Email Address"
                          required
                        />
                        <button
                          type="submit"
                          className={styles.Button}
                          name="subscribe"
                          id="ph-subscribe-button"
                        >
                          JOIN BETA LIST
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
export default withRouter(SubscribeToList);
