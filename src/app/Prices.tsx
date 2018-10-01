import * as React from "react";
import * as styles from "./style";
import { monthPlans } from "./text_data";
import { Row, Col, Container } from "reactstrap";
// import { RecommendsSlider } from "./Components";
import { PriceBox } from "./Components";
import { withRouter, RouteComponentProps } from "react-router";
import CreateAccount from "./Components/CreateAccount";
import CompaniesUsingSlider from "./Components/CompaniesUsingSlider";

class Prices extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <React.Fragment>
        <div className={styles.ChoicePlan}>
          <Container>
            <h2 className="text-center">Pricing</h2>
            <div className="tab-content">
              <div className="tab-pane active">
                <ul className={styles.ServicePricingList}>
                  {monthPlans.map((el, i) => (
                    <PriceBox
                      key={i}
                      imgSrc={el.imgSrc}
                      title={el.title}
                      list={el.list}
                      price={el.price}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </Container>
          <div className={styles.InfoPlan}>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <img
                    src={require("../assets/images/improving.png")}
                    alt="improving"
                  />
                  <h5>TOOL FOR BUSINESS MANAGERS</h5>
                  <p>
                    GraphQL is cool for business managers too. Create your
                    business processes in minutes and transform them into a
                    working system
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <img
                    src={require("../assets/images/secured.png")}
                    alt="improving"
                  />
                  <h5>COMPLEX GRAPHQL CODE</h5>
                  <p>
                    Complex backend systems are impossible to understand in
                    short period of time without visual representation. Editor
                    gives you that.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container fluid={true} className={styles.BlockFeatures}>
          <Row>
            <Col md={5} className="text">
              <h3>MERGE ALL QUERY AND MUTATION</h3>
              <p>
                Schema stiching is a small problem in graphql. GraphQLEditor
                will do that for you, so you can forget about that problem right
                now
              </p>
            </Col>
            <Col md={6} className="text-left">
              <img
                src={require("../assets/images/server-block.svg")}
                alt="server-block"
              />
            </Col>
          </Row>
        </Container>
        {/* <div className={`${styles.BottomInfoPlans} animatedParent`}>
          <div className="container">
            <h2 className={`title-head ${styles.TitleHead}`}>
              Ready to Get Started?
            </h2>
            <p>High Performance cPanel WHM Reseller Hosting in Europe</p>
            <div className="text-center">
              <a
                href="#"
                className={`custom-btn green ${styles.CustomBtnGreen}`}
              >
                Choose your plan
              </a>
            </div>
            <TrustedBoxSlider />
          </div>
        </div> */}
        {/* <RecommendsSlider /> */}

        <Container className={styles.PricesSlider}>
          <CompaniesUsingSlider />
        </Container>
        <CreateAccount />
      </React.Fragment>
    );
  }
}

export default withRouter(Prices);
