import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakthi</h1>
        <p className={styles.description}>
          Innovative Full-Stack Developer eager to create exceptional user
          experiences and efficient backend solutions. Reach out if you'd like
          to learn more!
        </p>
        <div className={styles.resume}>
          <a
            href="mailto:sakthivel.g0308@email.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1g_xhCSLI-704l7l621nwKAL30jdRFDWM/view?usp=drive_link"
            className={styles.contactBtn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
