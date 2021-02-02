import React from "react";
import Hero from "../components/Hero";
import Laboratory from "../components/Laboratory";
import Proof from "../components/Proof";
import Section from "../components/Section";
import Seo from "../components/Seo";
import Services from "../components/Services";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <h2 className={"title"}>Nuestros servicios</h2>
      <Section name="services">
        <Services />
      </Section>
      <Section name="elegir">
        <Team />
      </Section>

      <Section>
        <Laboratory />
      </Section>

      <Section>
        <Proof />
      </Section>
    </>
  );
}
