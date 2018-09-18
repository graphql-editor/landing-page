import * as React from "react";
import * as styles from "./style";
import { Row, Col } from "reactstrap";

class SearchDomain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`${styles.PreFooter}`}>
          <img src="./assets/images/line-prefoter.svg" alt="bg-prefooter" />
        </div>
        <div className={styles.SearchDomain}>
          <div className={`${styles.Container} animated fadeInUpShort`}>
            <Row>
              <Col md={4} xs={12}>
                <h3>Search Your Domain</h3>
              </Col>
              <Col md={8} xs={12}>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Domain Name" />
                    <select className={`select`}>
                      {[".com", ".ua", ".nu", ".ru", ".pl"].map((e, i) => (
                        <option key={i} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="custom-btn green">Search</button>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchDomain;
