import * as React from "react";
import * as styles from "./style";
import { monthPlans } from "./text_data";
import { Container } from "reactstrap";
import { PriceBox } from "./Components";
import { withRouter, RouteComponentProps } from "react-router";

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
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Prices);
