import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";
import Hero from '../components/Hero';
import Features from '../components/Features'
const HomePage: NextPage = () => {
  return (
    <>
    
      <Hero />
      <Features />
      
    </>
  )
};

export default HomePage;
