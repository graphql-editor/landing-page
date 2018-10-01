import * as React from "react";
import * as styles from './style'

export const SubscribeForm: React.StatelessComponent<{}> = ({}) => (
  <form
    action="https://api.producthunt.com/widgets/upcoming/v1/upcoming/graphql-visual-designer/forms"
    method="post"
    id="ph-email-form"
    name="ph-email-form"
    target="_blank"
  >
    <input
      type="email"
      name="email"
      id="ph-email"
      placeholder="Email Address"
      required
    />
    <button
      type="submit"
      className={styles.Button}
      name="subscribe"
      id="ph-subscribe-button"
    >
      JOIN BETA LIST
    </button>
  </form>
);
