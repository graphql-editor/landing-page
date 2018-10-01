import * as React from "react";
import * as styles from "./style";
// import { 
//   //RecommendsSlider,
//    GifSection 
// } from "./Components";
import { Row, Col, Container } from "reactstrap";
// import { ourTeam } from "./text_data";
import CreateAccount from "./Components/CreateAccount";


class About extends React.Component {
  render() {
    /* from [e,e,e,e,e] to [[e,e,e,e],[e]] */
    // const foldm = (r, j) =>
    //   r.reduce(
    //     (a, b, i, g) => (!(i % j) ? a.concat([g.slice(i, i + j)]) : a),
    //     []
    //   );
    // let team = foldm(ourTeam, 4);
    return (
      <React.Fragment>
        <div className={styles.InfoBlock}>
          <Container>
            <p>
              GraphQL Editors makes it easier to understand graphql schema.
              Create schema by joining visual blocks. GraphQLEditor will
              transform them into code.
            </p>
          </Container>
        </div>
        <div className={styles.TeamBlock}>
          <Row>
            <Col xs={12} md={6}>
              <h3>From diagram creation</h3>
              <p>
                GraphQL Editor is a visual drag and drop tool and innovative devops
                framework.Have you hear about L-System? It’s our inspiration for
                the project. Chose nodes, connect them and start using your app.
                Database design and system construction have never been so easy.
              </p>
            </Col>
            <Col xs={12} md={6} className="images-right">
              <img src={require("../assets/images/about_example1.png")} alt="image" />
            </Col>
          </Row>
        </div>
        <div className={`${styles.TeamBlock} reverse`}>
          <Row>
            <Col xs={12} md={6} className="images-left">
              <img src={require("../assets/images/about_example2.png")} alt="image" />
            </Col>
            <Col xs={12} md={6} className="bounceInLeft">
              <h3>To code generation</h3>
              <p>
                GraphQL Editor supports middleware as software abstraction layer that
                guarantees the existence, and correct implementation, of a set
                of services on top a set of platforms. Software engineering is
                moving in new direction.
              </p>
            </Col>
          </Row>
        </div>
        <div className={`${styles.ImagesBg}`}>
          <img
            src={require("../assets/images/logo_big.png")}
            alt="image2"
          />
        </div>

        {/* use later */}

        {/* <section className={styles.AboutBlock}>
          <div className={`${styles.Container} container small`}>
            <div className={styles.OurTeam}>
              <h2 className={`${styles.TitleHead} title-head`}>Our Team</h2>
              {team.map((el, i) => (
                <ul key={i}>
                  {el.map((e, ind) => (
                    <li key={ind}>
                      <img src={e.imgSrc} alt="team-img" />
                      <div className="inside">
                        <a href="#" className="name">
                          {e.name}
                        </a>
                        <span>{e.position}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section> */}
        {/* <div className="user-slider">
          <RecommendsSlider />
        </div> */}
        <CreateAccount />
      </React.Fragment>
    );
  }
}
export default About;
