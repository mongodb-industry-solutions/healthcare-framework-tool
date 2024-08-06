
"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import UserProfile from "../userProfile/UserProfile";
import Login from "../login/Login";
import {
  H1,
  H2,
  H3,
  Body,
  Subtitle,
  Description
} from "@leafygreen-ui/typography";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          {/*<Image
            src="/leafybank.png"
            alt="MongoDB logo"
            width={180}
            height={47}
  ></Image>*/}

          <H3>Healthcare Framework</H3>
        </Link>
      </div>

     
      <div className={styles.links}>
        <Link href="/">Overview</Link>
        <Link href="/tool">Tool</Link>
      </div>

     

      <UserProfile></UserProfile>

    </nav>
  );
};

export default Navbar;