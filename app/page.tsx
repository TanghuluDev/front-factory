/** @format */

"use client";

import Image from "next/image";
import Header from "./header";
import { useEffect, useState } from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Link from "next/link";
import Styled from "styled-components";
import { Env } from "./env";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div></div>;
  }

  const Row = Styled.div`
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  `;

  return (
    <>
      <main>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <div
          style={{
            background: `url(/${Env.BACKGROUND_IMAGE_2}) center center no-repeat`,
            backgroundSize: "100vw auto",
            width: "100vw",
            height: 800,
          }}
        ></div>
        <footer
          style={{
            background: Env.PRIMARY_COLOR,
            color: "#fff",
            textAlign: "center",
            fontSize: "1.0rem",
            padding: "30px 30px",
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
                fontSize: "1.4rem",
              }}
            >
              <Link
                href={`https://etherscan.io/address/${Env.CA}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  Etherscan
                </div>
              </Link>
              <Link
                href={`https://app.uniswap.org/tokens/ethereum/${Env.CA}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  Uniswap
                </div>
              </Link>
              <Link
                href={Env.TWITTER_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  Twitter
                </div>
              </Link>
              <Link
                href={Env.TELEGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  Telegram
                </div>
              </Link>
            </div>
            <div>Copyright © 2023 {Env.TITLE}</div>
          </Row>
        </footer>
      </main>
      <div className="bg"></div>
    </>
  );
}
