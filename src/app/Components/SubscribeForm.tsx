import * as React from "react";
import * as styles from "./style";

export const SubscribeForm: React.StatelessComponent<{}> = ({}) => (
  <React.Fragment>
    <form
      action="https://online.us18.list-manage.com/subscribe/post?u=cff73d572350c30e7c497c973&amp;id=3adcea78e1"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
    >
      <input
        type="email"
        
        name="EMAIL"
        className="email"
        id="mce-EMAIL"
        placeholder="Email Address"
        required
      />
      <button
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className={styles.Button}
      >JOIN BETA LIST</button>
    </form>
  </React.Fragment>
);
