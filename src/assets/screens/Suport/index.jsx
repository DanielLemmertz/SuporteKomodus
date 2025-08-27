import styled, { keyframes } from "styled-components";
import { useRef } from "react";
import AnimatedCircle from "../../../components/AnimatedCircle";
import logo from "../../images/logo.png";
import { TeamViewerButton, AnyDeskButton } from "../../../components/DownloadButtons";
// import StaffCarousel from "../../../components/Carrossel";
// import staffData from "../../../components/Staff";

const BlobsLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const BackGround = styled.div`
  background: #0f0b1a;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: start center;
  grid-auto-rows: min-content;
  gap: 18px;
  padding-top: 40px;
  position: relative;
  overflow: hidden;
`;

const Card = styled.div`
  margin: auto;         
  position: relative;
  z-index: 1;
  isolation: isolate;
  contain: paint;
  width: 820px;
  min-height: 360px;
  padding: 2rem;
  border-radius: 28px;
  color: #fff;
  background: rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(22px) saturate(120%);
  -webkit-backdrop-filter: blur(22px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow:
    6px 10px 18px rgba(0, 0, 0, 0.35),
    inset 0 0 120px rgba(0, 0, 0, 0.55);
`;


const TeamCard = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  width: 820px;
  padding: 18px 22px 26px;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(22px) saturate(120%);
  -webkit-backdrop-filter: blur(22px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow:
    6px 10px 18px rgba(0, 0, 0, 0.35),
    inset 0 0 120px rgba(0, 0, 0, 0.55);
`;

const TeamTitle = styled.div`
  font-weight: 800;
  letter-spacing: .2em;
  opacity: .95;
  margin-bottom: 12px;
  text-transform: uppercase;
  text-align: center;   /* centraliza o texto */
`;

const sweep = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const KomodusBadge = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 14px;
  isolation: isolate;
  background: rgba(255, 255, 255, 0.06);
  box-shadow:
    0 6px 18px rgba(0,0,0,.35),
    inset 0 0 60px rgba(0,0,0,.25);

&::before {
  content:"";
  position:absolute;
  inset:0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    90deg,
    #FFDE59,
    #f94c1c,
    #d90000
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
  pointer-events: none;
  z-index: 0;
}

  &::after{
    content:"";
    position:absolute;
    inset:0;
    border-radius: inherit;
    padding: 2px;
    background:
      linear-gradient(90deg, transparent 0%, rgba(255,255,255,.15) 45%, rgba(255,255,255,.95) 50%, rgba(255,255,255,.15) 55%, transparent 60%);
    background-size: 300% 100%;
    animation: ${sweep} 2.2s linear infinite;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
`;

const Aura = styled.div`
  position:absolute;
  inset:-12px;
  border-radius: 22px;
  background: radial-gradient(35% 80% at 50% 50%, rgba(249,76,28,.35), rgba(127,0,255,.28) 40%, rgba(233,5,58,.25) 55%, rgba(255,222,89,.22) 70%, rgba(217,0,0,.28) 85%, transparent 90%);
  filter: blur(22px);
  z-index: -1;
  pointer-events: none;
`;

const KomodusText = styled.h1`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: .35em;
  text-transform: uppercase;
  color: #fff;
`;

export default function Suport() {
  const containerRef = useRef(null);

  return (
    <BackGround ref={containerRef}>
      <BlobsLayer>
        <AnimatedCircle containerRef={containerRef} size={500} speed={300} intensity={0.5} palette="yellow" />
        <AnimatedCircle containerRef={containerRef} size={400} speed={300} intensity={1} palette="red" />
        <AnimatedCircle containerRef={containerRef} size={300} speed={300} intensity={1} palette="mix" />
        <AnimatedCircle containerRef={containerRef} size={300} speed={150} intensity={1} palette="mix" />
        <AnimatedCircle containerRef={containerRef} size={250} speed={300} intensity={1} palette="yellow" />
        <AnimatedCircle containerRef={containerRef} size={200} speed={100} intensity={1.2} palette="red" />
      </BlobsLayer>

      <Card>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "12px", marginBottom: "1.2rem" }}>
          <img src={logo} alt="Logo" style={{ maxWidth: 120 }} />
          <div style={{ position: "relative" }}>
            <KomodusBadge>
              <KomodusText>KOMODUS</KomodusText>
            </KomodusBadge>
            <Aura />
          </div>
        </div>

        <div style={{ maxWidth: 420, margin: "0 auto", padding: 16 }}>
          <TeamViewerButton style={{ marginBottom: 12 }} />
          <AnyDeskButton />
        </div>
      </Card>

      {/* <TeamCard> */}
      {/* <TeamTitle>Equipe</TeamTitle> */}
      {/* <StaffCarousel items={staffData} /> */}
      {/* </TeamCard> */}
    </BackGround>
  );
}
