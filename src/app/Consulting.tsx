import * as React from "react";
import { Container } from "reactstrap";
import { RouteComponentProps } from "react-router";
import { consultingTiles } from "./text_data";
import { ConsultingTile } from "./Components/ConsultingTile";
import * as styles from "./style/ConsultingTile";
import {  SubPageDescription, Motto } from "./style/SubPageTitle";
export class Consulting extends React.Component<RouteComponentProps<any>, any> {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className={Motto}>
            <p className={SubPageDescription}>
              Whether you’re just getting started or rolling out our tool across
              your organization, we're there with you. Get expert help with
              GraphQL Visual Editor, straight from our team.
            </p>
          </div>
          <div className={styles.Tiles}>
            {consultingTiles.map(c => <ConsultingTile key={c.name} {...c} />)}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
