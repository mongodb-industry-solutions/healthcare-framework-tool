
"use client";

import styles from "./footer.module.css";
import Image from "next/image";
import {
  H1,
  H2,
  H3,
  Body,
  Subtitle,
  Description
} from "@leafygreen-ui/typography";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        
          <Image
            src="/MongoDB_Default-Slate.svg"
            alt="MongoDB logo"
            width={100}
            height={47}
  ></Image>

          <Body>This is a demo tool developped by the Industry Solutions team at MongoDB</Body>
    
      </div>


    </div>
  );
};

export default Footer;