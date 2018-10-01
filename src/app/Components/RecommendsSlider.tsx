import * as React from "react";
import { recommendationsData } from "../text_data";
import * as styles from "../style";
import { Container } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router";

class RecommendsSlider extends React.Component<RouteComponentProps<any>, any> {

  
  render() {

    return (
      <Container>
        <div
          className={`slider owl-carousel owl-theme ${styles.UserSlider}`}
        >
          {recommendationsData.map((el, i) => (
            <div key={i} className="item">
              <div className="inside">
                <img
                  src="../assets/images/icon.svg"
                  className="icon"
                  alt="icon"
                />
                <img src={el.imgSrc} alt={el.imgAlt} />
                <p>{el.description}</p>
                <div className="user">
                  <a href={el.address}>
                    <img src={el.personImg} alt="" />
                    {el.person}
                    <span>{el.position}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default withRouter(RecommendsSlider);