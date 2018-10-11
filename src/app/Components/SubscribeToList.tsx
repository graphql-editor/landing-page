import * as React from "react";
import * as styles from "./style";
import { Row, Col, Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContainer } from "../UserInteface";
import { Subscribe } from "unstated";
import { SubscribeForm } from "./SubscribeForm";
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
                      <SubscribeForm/>
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
