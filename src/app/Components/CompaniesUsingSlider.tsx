import * as React from "react";
import * as styles from "./style";
import { trustedList } from "../text_data";
import { withRouter, RouteComponentProps } from "react-router";

class CompaniesUsingSlider extends React.Component<
  RouteComponentProps<any>,
  {
    list: Array<any>;
    interval: any;
  }
> {
  state = {
    list: trustedList,
    interval: ""
  };

  componentDidMount() {
    // const { list } = this.state;
    let arr: any = trustedList;
    setInterval(() => {
      arr = [arr.splice(arr.length - 1, arr.length)[0], ...arr];
      //console.log(arr)
      this.setState({
        list: arr
      });
    }, 3000);
  }

  render() {
    const { list } = this.state;

    return (
      <div className={styles.PartnersSection}>
        <h5>
          THESE COMAPNIES ARE USING GRAPHQL. YOU SHOULD START DOING IT TOO.
        </h5>
        <div
          className={styles.PartnersSlider}
          // responsive={{
          //   0: {
          //     items: 1
          //   },
          //   400: {
          //     items: 2
          //   },
          //   550: {
          //     items: 3
          //   },
          //   800: {
          //     items: 4
          //   },
          //   1000: {
          //     items: 5
          //   }
          // }}
        >
          <div className="content">
            {list.map((el, i) => (
              <div className="item" key={i}>
                <a href={el.address}>
                  <img src={el.imgSrc} alt={el.altImg} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompaniesUsingSlider);
