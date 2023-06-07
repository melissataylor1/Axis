import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Axis Contracting & Locating LTD</title>
        <meta
          name="title"
          content="Axis Contracting & Locating LTD. Serving Ontario"
        />
        <meta
          name="og:title"
          content="Axis Contracting & Locating LTD. Serving Ontario"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="axiscontracting.co" />
        <meta
          property="og:site_name"
          content="Axis Contracting & Locating LTD"
        />
        <meta
          name="description"
          content="Licensed contractors for bunkies, small cabins, cottage bunkie, renovations, decks, locating, and more in Ontario."
          key="desc"
        />
      </Head>
      <Hero />
      <Features />
    </>
  );
};

export default HomePage;
