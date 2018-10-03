import * as React from "react";
import * as styles from "./style";
import {Container} from 'reactstrap'

export const NotFound: React.StatelessComponent<{}> = () => (
  <div className={`wrapper ${styles.ErrorPage}`}>
    <Container className={`inside`}>
      <h2>404</h2>
      <h4>
        Something Going Wrong
      </h4>
      <p>
        page you are looking for is not found
      </p>
    </Container>
  </div>
);
