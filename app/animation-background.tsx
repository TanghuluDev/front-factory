

import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'

export default function Background({ children }: { children: any}) {
  const Background = Styled.div`
    @keyframes move {
      100% {
          transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }

    overflow: hidden;
    top: 0;
    width: 100vw;


& span {
    width: 23vmin;
    height: 23vmin;
    border-radius: 23vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 48;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


& span:nth-child(0) {
    color: #ff0f0f;
    top: 36%;
    left: 61%;
    animation-duration: 7s;
    animation-delay: -11s;
    transform-origin: -15vw 9vh;
    box-shadow: -46vmin 0 6.671934057701131vmin currentColor;
}
& span:nth-child(1) {
    color: #ff5900;
    top: 40%;
    left: 88%;
    animation-duration: 21s;
    animation-delay: -7s;
    transform-origin: 13vw -9vh;
    box-shadow: 46vmin 0 6.535442975715364vmin currentColor;
}
& span:nth-child(2) {
    color: #ffde85;
    top: 54%;
    left: 3%;
    animation-duration: 16s;
    animation-delay: -19s;
    transform-origin: -8vw 4vh;
    box-shadow: 46vmin 0 6.558770542371155vmin currentColor;
}
& span:nth-child(3) {
    color: #ffde85;
    top: 41%;
    left: 68%;
    animation-duration: 14s;
    animation-delay: -5s;
    transform-origin: -14vw -6vh;
    box-shadow: 46vmin 0 6.41679820421911vmin currentColor;
}
& span:nth-child(4) {
    color: #ff5900;
    top: 56%;
    left: 89%;
    animation-duration: 6s;
    animation-delay: -7s;
    transform-origin: -6vw 20vh;
    box-shadow: 46vmin 0 5.764410558598586vmin currentColor;
}
& span:nth-child(5) {
    color: #ff0f0f;
    top: 97%;
    left: 2%;
    animation-duration: 9s;
    animation-delay: -5s;
    transform-origin: -23vw -3vh;
    box-shadow: 46vmin 0 6.057853479617926vmin currentColor;
}
& span:nth-child(6) {
    color: #ff0f0f;
    top: 34%;
    left: 34%;
    animation-duration: 13s;
    animation-delay: -4s;
    transform-origin: -14vw 7vh;
    box-shadow: 46vmin 0 6.245049337682985vmin currentColor;
}
& span:nth-child(7) {
    color: #ff5900;
    top: 57%;
    left: 15%;
    animation-duration: 9s;
    animation-delay: -4s;
    transform-origin: -20vw -9vh;
    box-shadow: -46vmin 0 6.488858213016092vmin currentColor;
}
& span:nth-child(8) {
    color: #ffde85;
    top: 20%;
    left: 42%;
    animation-duration: 19s;
    animation-delay: -1s;
    transform-origin: 19vw -22vh;
    box-shadow: -46vmin 0 6.443851515041259vmin currentColor;
}
& span:nth-child(9) {
    color: #ff5900;
    top: 17%;
    left: 92%;
    animation-duration: 9s;
    animation-delay: -15s;
    transform-origin: 8vw 16vh;
    box-shadow: 46vmin 0 5.867996152144099vmin currentColor;
}
& span:nth-child(10) {
    color: #ff5900;
    top: 79%;
    left: 36%;
    animation-duration: 20s;
    animation-delay: -4s;
    transform-origin: -11vw -18vh;
    box-shadow: -46vmin 0 5.762336777803285vmin currentColor;
}
& span:nth-child(11) {
    color: #ff0f0f;
    top: 71%;
    left: 36%;
    animation-duration: 8s;
    animation-delay: -9s;
    transform-origin: 13vw -22vh;
    box-shadow: -46vmin 0 6.163853482503063vmin currentColor;
}
& span:nth-child(12) {
    color: #ffde85;
    top: 43%;
    left: 49%;
    animation-duration: 23s;
    animation-delay: -15s;
    transform-origin: -16vw -1vh;
    box-shadow: 46vmin 0 6.333955026499747vmin currentColor;
}
& span:nth-child(13) {
    color: #ffde85;
    top: 11%;
    left: 75%;
    animation-duration: 10s;
    animation-delay: -7s;
    transform-origin: 8vw -13vh;
    box-shadow: 46vmin 0 6.564398439843096vmin currentColor;
}
& span:nth-child(14) {
    color: #ff0f0f;
    top: 1%;
    left: 38%;
    animation-duration: 22s;
    animation-delay: -5s;
    transform-origin: 25vw -9vh;
    box-shadow: -46vmin 0 6.137354473539971vmin currentColor;
}
& span:nth-child(15) {
    color: #ffde85;
    top: 9%;
    left: 21%;
    animation-duration: 7s;
    animation-delay: -19s;
    transform-origin: -15vw -10vh;
    box-shadow: 46vmin 0 6.113527360095567vmin currentColor;
}
& span:nth-child(16) {
    color: #ff0f0f;
    top: 48%;
    left: 14%;
    animation-duration: 7s;
    animation-delay: -1s;
    transform-origin: -24vw 14vh;
    box-shadow: 46vmin 0 6.356346650955119vmin currentColor;
}
& span:nth-child(17) {
    color: #ffde85;
    top: 74%;
    left: 67%;
    animation-duration: 22s;
    animation-delay: -18s;
    transform-origin: -24vw -13vh;
    box-shadow: -46vmin 0 6.390501094837452vmin currentColor;
}
& span:nth-child(18) {
    color: #ffde85;
    top: 61%;
    left: 23%;
    animation-duration: 17s;
    animation-delay: -18s;
    transform-origin: -2vw -6vh;
    box-shadow: -46vmin 0 5.82541826221268vmin currentColor;
}
& span:nth-child(19) {
    color: #ff0f0f;
    top: 39%;
    left: 89%;
    animation-duration: 11s;
    animation-delay: -7s;
    transform-origin: -16vw -8vh;
    box-shadow: -46vmin 0 6.634694649078043vmin currentColor;
}
& span:nth-child(20) {
    color: #ff0f0f;
    top: 21%;
    left: 92%;
    animation-duration: 21s;
    animation-delay: -20s;
    transform-origin: 5vw -23vh;
    box-shadow: -46vmin 0 5.962717848124894vmin currentColor;
}
& span:nth-child(21) {
    color: #ff0f0f;
    top: 13%;
    left: 24%;
    animation-duration: 16s;
    animation-delay: -5s;
    transform-origin: -1vw -22vh;
    box-shadow: 46vmin 0 6.176979076868031vmin currentColor;
}

  `;



  return (
    <>
    <div>
      <div style={{
        zIndex: 1,
        position: "relative"
      }}>{ children }</div>
      <Background className="background" style={{
        zIndex: 0
      }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Background>
     
      </div>
    </>
  )
}

