"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_components/navBar/NavBar";
import Login from "./_components/login/Login";
import Button from "@leafygreen-ui/button";
import Banner from "@leafygreen-ui/banner";

import {
  H1,
  H2,
  H3,
  Body,
  Subtitle,
  Description,
  Link
} from "@leafygreen-ui/typography";

export default function Home() {
  return (
    <main className={styles.main}>

      <H2>Welcome to the MongoDB Healthcare Framework!</H2>

      <Body>Explanation of the tool (what it is and what it isn't)</Body>

      <Banner variant="warning">
        This is a demo disclaimer

      </Banner>

      <Login></Login>

      <Body>Don't have an account?</Body> <Link>Sign up here</Link>

    </main>
  );
}
