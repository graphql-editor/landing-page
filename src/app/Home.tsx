import * as React from "react";
import * as styles from "./style";
import {
  whyYouShouldData,
  pricingListData
  //monthPlans
} from "./text_data";
import {
  FeatureBox,
  WhyChooseUs,
  CompaniesUsingSlider,
  GifSection
  //PriceBox
} from "./Components";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import CreateAccount from "./Components/CreateAccount";
// import { Form } from "@slothking-online/form";

class Home extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <div className="wrapper">
        <GifSection>
          <Container>
            <Row>
              <Col md={6} className="text-content">
                <h2>GRAPHQL VISUAL EDITOR</h2>
                {/* <img src={"assets/images/logo_medium.png"} /> */}
                <p>
                  <b>GraphQL Editor</b> makes understanding <b>GraphQL</b>{" "}
                  schema a lot easier. Plan it out by linking visual blocks and
                  our editor will transform them into a code!
                </p>
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
                    className={styles.CustomBtnGreen}
                    name="subscribe"
                    id="ph-subscribe-button"
                  >
                    JOIN BETA LIST
                  </button>
                </form>
              </Col>
              <Col md={6}>
                <img src={require("../assets/images/1.png")} alt="" />
              </Col>
            </Row>
          </Container>
        </GifSection>
        <section className={styles.WhyUsSection}>
          <Container>
            <CompaniesUsingSlider/>
            <div className={styles.HowItWorks}>
              <h2>How it works</h2>
              <img src={require("../assets/images/diagram.gif")} alt="" />
            </div>
            <div className={styles.WhyChoose}>
              <h2 className={styles.TitleHead}>Why you should choose us</h2>
              <Row>
                {whyYouShouldData.map((el, i) => (
                  <WhyChooseUs
                    key={i}
                    imgSrc={el.imgSrc}
                    imgAlt={el.imgAlt}
                    title={el.title}
                    description={el.description}
                  />
                ))}
              </Row>
            </div>
          </Container>
        </section>
        <div className={styles.PricingTable}>
          <Container>
            <h2 className={styles.TitleHead}>ROADMAP</h2>
            <ul className={styles.FeatureList}>
              {pricingListData.map((el, i) => (
                <FeatureBox
                  key={i}
                  imgSrc={el.imgSrc}
                  imgAlt={el.imgAlt}
                  title={el.title}
                  description={el.description}
                />
              ))}
            </ul>
          </Container>
          {/* 
          <Container className={styles.ChoicePlan}>
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
          </Container> */}
          <Container>
            <div className={styles.InfoPricing}>
              {/* <h4>Why you need a GraphQL Visual Editor?</h4> */}
              <ul>
                <li>
                  <h6>TOOL FOR BUSINESS MANAGERS</h6>
                  <p>
                    GraphQL is cool for business managers too. Create your
                    business processes in minutes and transform them into a
                    working system
                  </p>
                </li>
                <li className="right">
                  <h6>COMPLEX GRAPHQL CODE</h6>
                  <p>
                    Complex backend systems are impossible to understand in
                    short period of time without visual representation. Editor
                    gives you that.
                  </p>
                </li>
              </ul>
              <ul className="right">
                <li>
                  <h6>MERGE ALL QUERY AND MUTATION</h6>
                  <p>
                    Schema stiching is a small problem in graphql. GraphQLEditor
                    will do that for you, so you can forget about that problem
                    right now
                  </p>
                </li>
                <li className="button right">
                  <a
                    href="https://demo.graphqleditor.com/"
                    className="custom-btn"
                  >
                    TRY DEMO
                  </a>
                  {/* <Link to="/login" className="custom-btn">
                    
                  </Link> */}
                </li>
              </ul>
            </div>
          </Container>
          {/* <Container>
            <div className={styles.InfoPlan}>
              <div className="container">
                <Row>
                  <Col md={6}>
                    <img src="assets/images/improving.png" alt="improving" />
                    <h5>TOOL FOR BUSINESS MANAGERS</h5>
                    <p>
                      GraphQL is cool for business managers too. Create your
                      business processes in minutes and transform them into a
                      working system
                    </p>
                  </Col>
                  <Col md={6}>
                    <img src="assets/images/secured.png" alt="improving" />
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
          </Container> */}
        </div>
        {/* <RecommendsSlider /> */}
        <CreateAccount />
      </div>
    );
  }
}
export default withRouter(Home);
