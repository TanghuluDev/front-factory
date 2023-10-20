/** @format */

import "./globals.css";
import Image from "next/image";
import Styled from "styled-components";
import Link from "next/link";
import Background from "./animation-background";
import { Env } from "./env";

export default function Section3() {
  const Section = Styled.section`
    background: #222;
    padding: 80px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  `;
  const Rows = Styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: 700px) {
      gap:0px;
      flex-direction: column;
    }

  `;
  const Row = Styled.div`
    

  `;

  const Stick = Styled.div`
    width: 20px;
    height: 20px;
    background: #fff;
    margin: 0 auto;
    margin-top: -2px;
    margin-bottom: -2px;
  `;

  const StickEnd = Styled.div`
    width: 20px;
    height: 140px;
    background: #fff;
    background: linear-gradient(0deg, var(--PC), #fff);
    margin: 0 auto;
    margin-top: -2px;
`;

  const H2 = Styled.h2`
color: white;
font-size: 4.6rem;
margin-bottom: 24px;
`;

  const Dango = Styled.div`

    font-weight: 800;
    color: black;
    line-height: 4.2rem;
    background: white;
    border-radius: 10px;
    padding: 80px 162px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 20px;
    & div {
      position: absolute;
      text-align: center;
      font-size: 3.0rem;
      width: 204px;
      height: 90px;
      

    }
    & span {
      font-size: 4.6rem;
      color: ${Env.PRIMARY_COLOR}
    }
  
  `;

  return (
    <>
      <Section id="tokenomics" style={{}}>
        <H2 style={{}}>Tokenomics</H2>
        <Rows>
          <Row>
            <Dango>
              <div>
                <span>10 Billion</span> <br />
                Total Supply
              </div>
            </Dango>
            <Dango>
              <div>
                <span>0%</span> <br />
                Buy Tax
              </div>
            </Dango>
            <Dango>
              <div>
                <span>0%</span> <br />
                Sell Tax
              </div>
            </Dango>
          </Row>
          <Row>
            <Dango>
              <div>
                Team <br />
                <span>0%</span>
              </div>
            </Dango>
            <Dango>
              <div>
                Pre-Sale <br />
                <span>0%</span>
              </div>
            </Dango>
            <Dango>
              <div>
                Public <br />
                <span>100%</span>
              </div>
            </Dango>
          </Row>
        </Rows>
      </Section>
    </>
  );
}
