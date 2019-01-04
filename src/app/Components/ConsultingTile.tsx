import * as React from "react";
import * as styles from "../style/ConsultingTile";
import { ConsultingTile as CT } from "../text_data";
import { Button } from "./Button";
export const ConsultingTile = ({ name, description, points, image }: CT) => (
  <div className={styles.Tile}>
    <div className={styles.NameHolder}>
      <div className={styles.Name}>{name}</div>
    </div>
    <div className={styles.Description}>{description}</div>
    <div className={styles.Points}>
      {points.map((p, i) => (
        <div key={i} className={styles.Point}>
          {`- `}
          {p}
        </div>
      ))}
    </div>
    <div className={styles.Actions}>
      <Button href="mailto:hello@slothking.online" done>
        Order
      </Button>
    </div>
  </div>
);
