/** @format */

import "./globals.css";
import Image from "next/image";
import Styled from "styled-components";
import Link from "next/link";
import Background from "./animation-background";
import { Env } from "./env";

export default function Section2() {
  const Section = Styled.section`
  background: ${Env.SECONDARY_COLOR};
  padding: 120px 0px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  `;

  const H2 = Styled.h2`
  color: white;
  font-size: 4.6rem;
  margin-bottom: 24px;
  `;
  const Para = Styled.p`
    width: 100%;
    max-width: 600px;
    color: white;
    font-size: 2.0rem;
    line-height: 3.0rem;
    @media (max-width: 700px) {
      max-width: 380px;
    }
  `;

  const BgAnimation = Styled.div`
  background-position: center left;
  animation: mymove 20s infinite;
  background: url(/section3-pattern.png) top center repeat-x;
  background-size: 375px 160px;
  width: 100vw;
  height: 160px;
  @keyframes mymove {
    0% {background-position: center left;}
    50% {background-position: center right;}
    100% {background-position: center left;}
  }
  `;

  const Img = Styled.div`
    width: 800px;
    height: 400px;
    margin-bottom: 40px;
    padding: 0px;
  `;

  return (
    <>
      <Section id="about">
        <Img
          style={{
            backgroundSize: "100% 100%",
            background: `url(/${Env.SECONDARY_IMAGE}) center center no-repeat`,
          }}
        />
        <H2 style={{}}>About</H2>
        <Para style={{}}>{Env.DESC}</Para>
      </Section>
    </>
  );
}
