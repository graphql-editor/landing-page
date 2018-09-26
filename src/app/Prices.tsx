import * as React from "react";
import * as styles from "./style";
import { monthPlans } from "./text_data";
import { Row, Col, Container } from "reactstrap";
// import { RecommendsSlider } from "./Components";
import { TrustedBoxSlider, PriceBox } from "./Components";
import { withRouter, RouteComponentProps } from "react-router";
import CreateAccount from "./Components/CreateAccount";

class Prices extends React.Component<RouteComponentProps<any>, any> {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <React.Fragment>
        <div
          className={
            pathname == "/prices" ? styles.ChoicePlanPrices : styles.ChoicePlan
          }
        >
          <div className="container">
            <h2 className="text-center">Pricing</h2>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="monthly">
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
          </div>
          <div className={styles.InfoPlan}>
            <div className="container">
              <Row>
                <Col xs={12} md={6}>
                  <img src={require("../assets/images/improving.png")} alt="improving" />
                  <h5>TOOL FOR BUSINESS MANAGERS</h5>
                  <p>
                    GraphQL is cool for business managers too. Create your
                    business processes in minutes and transform them into a
                    working system
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <img src={require("../assets/images/secured.png")} alt="improving" />
                  <h5>COMPLEX GRAPHQL CODE</h5>
                  <p>
                    Complex backend systems are impossible to understand in
                    short period of time without visual representation. Editor
                    gives you that.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Container className={`container-fluid ${styles.BlockFeatures} animatedParent`}>
        <Row>
            <Col md={5} className="col-5 text">
              <h3 className="animated bounceInUp delay-250">
                MERGE ALL QUERY AND MUTATION
              </h3>
              <p className="animated bounceInUp delay-250">
                Schema stiching is a small problem in graphql. GraphQLEditor
                will do that for you, so you can forget about that problem right
                now
              </p>
            </Col>
            <Col md={6} className="text-left animated bounceInRight">
              <img src={require("../assets/images/server-block.svg")} alt="server-block" />
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

        <div className={`container ${styles.PricesSlider}`}>
          <div className={styles.PartnersSection}>
            <h5>THESE COMAPNIES ARE USING GRAPHQL. YOU SHOULD CONSDIER IT TOO.</h5>
            <TrustedBoxSlider />
          </div>
        </div>

        <CreateAccount />
      </React.Fragment>
    );
  }
}

export default withRouter(Prices);
