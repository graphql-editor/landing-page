import * as React from "react";
import * as styles from "./style";
import { whyYouShouldData, roadmapData } from "./text_data";
import { FeatureBox, WhyChooseUs, Button, FeatureType } from "./Components";
import { Container, Row } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";
import CompaniesUsingSlider from "./Components/CompaniesUsingSlider";
import { auth } from "../auth";

export const slackLink = `https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI`;

class Home extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <div className="wrapper">
        <div className={styles.Hero}>
          <Container>
            <div className={styles.HeroHolder}>
              <div className={styles.HeroCell}>
                <h1 className={styles.H1}>Visual graphql editor</h1>
                <p className={styles.Description}>
                  <b>GraphQL Editor</b> makes understanding <b>GraphQL</b>{" "}
                  schema a lot easier. Plan it out by linking visual blocks and
                  our editor will transform them into a code!
                </p>
                <Button onClick={() => auth.authorize()}>Start now!</Button>
              </div>
              <div className={styles.HeroCell}>
                <video
                  style={{ borderRadius: 8, maxWidth: "100%" }}
                  autoPlay
                  loop
                  src={require("../assets/videos/graphql-editor.mp4")}
                />
              </div>
            </div>
          </Container>
        </div>
        <section className={styles.WhyUsSection}>
          <Container>
            <CompaniesUsingSlider />
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
        <div className={styles.RoadMap}>
          <Container>
            <h2 className={styles.TitleHead} id="roadmap">
              ROADMAP <i className="fa fa-floppy-o" aria-hidden="true" />{" "}
            </h2>
            <ul className={styles.FeatureList}>
              {roadmapData.map((el: FeatureType, i) => (
                <FeatureBox key={i} {...el} />
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
            <div className={styles.RoadMapBox}>
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
                  <Button
                    onClick={() =>
                      (location.href = "https://app.graphqleditor.com/")
                    }
                    done
                  >
                    TRY APP
                  </Button>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        {/* <RecommendsSlider /> */}
      </div>
    );
  }
}
export default withRouter(Home);
