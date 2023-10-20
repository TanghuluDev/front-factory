/** @format */

import "./globals.css";
import Image from "next/image";
import Styled from "styled-components";
import Link from "next/link";
import { Env } from "./env";

export default function Header() {
  const Heading = Styled.header`
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      background: #111;
      padding: 10px 20px;
      color: white;
      align-items: center;
`;

  const Button = Styled.div`
      border-radius: 3px;
      background: ${Env.PRIMARY_COLOR};
      background-size: 300% 300%;
      animation: gradient 4s ease infinite;
      padding: 12px 18px;
      outline: 0;
      border: 2px black solid;
      color: white;
      font-size: 1.8rem;
      font-weight: 800;
      cursor: pointer;
      &:hover {

      }
`;

  const Menu = Styled.div`
      padding: 12px 0px;
      color: white;
      font-size: 1.8rem;
      font-weight: 800;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: ${Env.PRIMARY_COLOR}
      }
      @media (max-width: 700px) {
        display: none;
      }
`;

  return (
    <>
      <Heading>
        <div className="left">
          <Link href="#top">
            <img src={`/${Env.LOGO_IMAGE}`} width={60} height={60} />
          </Link>
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            gap: 20,
            fontSize: "1.8rem",
          }}
        >
          <Link href="#about">
            <Menu>About</Menu>
          </Link>
          <Link href="#tokenomics">
            <Menu>Tokenomics</Menu>
          </Link>
          <Link href="#roadmap">
            <Menu>Roadmap</Menu>
          </Link>
          <Link href={`https://app.uniswap.org/tokens/ethereum/${Env.CA}`}>
            <Button>Buy {Env.SYMBOL}</Button>
          </Link>
        </div>
      </Heading>
    </>
  );
}
