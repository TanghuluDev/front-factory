/** @format */

import "./globals.css";
import Image from "next/image";
import Styled from "styled-components";
import Link from "next/link";
import { Env } from "./env";

export default function Section1() {
  const Section = Styled.section`
    text-align: center;
    width: 100vw;
    padding-bottom: 60px;
  `;

  const Img = Styled.img`
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    padding: 0px;
    
  `;

  const H1 = Styled.h1`
    margin-top: 0px;
    font-size: 9.0rem;
    color: #fff;

    @media (max-width: 700px) {
      font-size: 8.0rem;

    }
  `;

  const H2 = Styled.h2`
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: 30px;
    color: #fff;
    @media (max-width: 700px) {
      font-size: 2.0rem;
    }
  `;

  const CA = Styled.div`
    color: white;
    padding: 16px 30px;
    width: fit-content;
    font-size: 2.4rem;
    margin: 0 auto;
    @media (max-width: 700px) {
      font-size: 1.7rem;
      padding: 12px 16px;
    }
  `;

  return (
    <>
      <Section
        id="top"
        style={{
          background: `url(/${Env.BACKGROUND_IMAGE}) center center no-repeat`,
          backgroundSize: "120% 120%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            paddingTop: 180,
          }}
        >
          <Img src="/primary-image.png" />
          <H1 className="">{Env.TITLE}</H1>
          <H2>{Env.SHORT_DESC}</H2>
          <div
            className="link"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <Link
              href={Env.TELEGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
              style={{
                background: "#fff",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <div
                className="telegram"
                style={{
                  background:
                    "url(/telegram-button.png) center center no-repeat",
                  backgroundSize: "60px 60px",
                  width: 60,
                  height: 60,
                }}
              ></div>
            </Link>
            <Link
              href={Env.TWITTER_URL}
              rel="noopener noreferrer"
              target="_blank"
              style={{
                background: "#fff",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <div
                className="twitter"
                style={{
                  background:
                    "url(/twitter-button.png) center center no-repeat",
                  backgroundSize: "60px 50px",
                  width: 60,
                  height: 60,
                }}
              ></div>
            </Link>
            <Link
              href={`https://etherscan.io/address/${Env.CA}`}
              rel="noopener noreferrer"
              target="_blank"
              style={{
                background: "#fff",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <div
                className="etherscan"
                style={{
                  background:
                    "url(/etherscan-button.png) center center no-repeat",
                  backgroundSize: "60px 60px",
                  width: 60,
                  height: 60,
                }}
              ></div>
            </Link>
          </div>
          <CA className="ca" style={{}}>
            <span
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
              }}
            >
              Contract Address (ETH)
            </span>
            <br />
            {Env.CA}
          </CA>
        </div>
      </Section>
    </>
  );
}
