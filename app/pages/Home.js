import React from "react";
import Hero from "../component/Hero";
import { About } from "../component/About";
import { Live } from "../component/Live";
import { VybexCoin } from "../component/VybexCoin";
import { SocialPost } from "../component/SocialPost";
import Download from "../component/Download";
import Faq from "../component/Faq";
import { Contact } from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="bg-[#040818]">
      <section id="home">
        <Hero />
      </section>
      <section id="aboutus">
        <About />
      </section>
      <section id="howitswork">
        <Live />
      </section>
      <section id="feature">
        <VybexCoin />
      </section>
      <section id="socialpost">
        <SocialPost />
      </section>
      <section id="download">
        <Download />
      </section>
      <section id="FAQs">
        <Faq />
      </section>
      <section id="contactus">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
