import Image from "next/image";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Info from "./components/Info";
import AppKitProvider from "@/context";

export default function Home() {
  
  return (
    <AppKitProvider>
    <Layout>
      
        <HeroSection/>
        <FeatureSection/>
        <Info/>
        
      </Layout>
      </AppKitProvider>
  );
}
