import React from "react";
import styles from "../styles/Section.module.scss";

export default function Section({ color }: { color: string }) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore libero
        id reprehenderit eaque vitae accusantium aperiam commodi mollitia?
        Quisquam natus quo recusandae accusamus, doloribus perferendis. Voluptas
        id tempore odio atque!
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}
