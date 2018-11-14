import * as React from "react";
import * as bstyles from "./style/Button";
import * as styles from "./style/SubscribeFormUp";

export const SubscribeFormUp: React.StatelessComponent<{}> = ({}) => (
  <form
    action="https://online.us18.list-manage.com/subscribe/post?u=cff73d572350c30e7c497c973&amp;id=3adcea78e1"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    className={styles.Form}
  >
    <input
      type="email"
      name="EMAIL"
      className={styles.Input}
      id="mce-EMAIL"
      placeholder="your-email@address.com"
      required
    />
    <button
      type="submit"
      name="subscribe"
      id="mc-embedded-subscribe"
      className={bstyles.Button}
    >
      JOIN BETA LIST
    </button>
  </form>
);
