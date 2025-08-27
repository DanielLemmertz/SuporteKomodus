import styled, { keyframes } from "styled-components";
import whatsapp from "../../assets/images/whatsapplogo.svg"; // ✅ usa seu arquivo

const waLink = (phone, msg = "Olá! Vim pelo site da Komodus.") => {
    const digits = String(phone || "").replace(/\D/g, "");
    return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
};

const slide = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CarouselWrap = styled.div`
  position: relative;
  margin: 8px auto 0;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
  mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
`;

const Track = styled.div`
  display: flex;
  gap: 16px;
  width: max-content;
  animation: ${slide} 22s linear infinite;

  ${CarouselWrap}:hover & {
    animation-play-state: paused;
  }
`;

const CardItem = styled.div`
  --size: 110px;
  flex: 0 0 190px;
  height: 210px;
  border-radius: 16px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #fff;
  padding: 12px;
  display: grid;
  grid-template-rows: var(--size) auto auto;
  align-items: center;
  justify-items: center;
  text-align: center;
  box-shadow: inset 0 0 40px rgba(0,0,0,.25);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255,255,255,0.35);
    box-shadow:
      0 0 18px rgba(255,255,255,0.15),
      0 12px 28px rgba(0,0,0,.35),
      inset 0 0 60px rgba(255,255,255,0.06);
  }
`;

const Avatar = styled.img`
  --size: 110px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;     
  object-fit: cover;      
  box-shadow: 0 6px 20px rgba(0,0,0,.35);
`;

const Name = styled.div`
  margin-top: 8px;
  font-weight: 800;
  letter-spacing: .5px;
`;

const Role = styled.div`
  font-size: .9rem;
  opacity: .85;
`;

const Whats = styled.a`
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  background: #25D366;
  box-shadow: 0 0 0 2px rgba(255,255,255,.12) inset, 0 6px 16px rgba(37,211,102,.35);
  transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    box-shadow:
      0 0 0 2px rgba(255,255,255,.18) inset,
      0 10px 28px rgba(37,211,102,.45),
      0 0 24px rgba(37,211,102,.35);
  }
`;

const WhatsIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
`;

export default function StaffCarousel({ items = [] }) {
    const doubled = [...items, ...items];

    return (
        <CarouselWrap>
            <Track>
                {doubled.map((p, i) => (
                    <CardItem key={`${p.name}-${i}`}>
                        <Avatar src={p.photo} alt={p.name} />
                        <Name>{p.name}</Name>
                        <Role>{p.role}</Role>
                        <Whats href={waLink(p.phone)} target="_blank" rel="noopener noreferrer">
                            <WhatsIcon src={whatsapp} alt="" aria-hidden="true" />
                            WhatsApp
                        </Whats>
                    </CardItem>
                ))}
            </Track>
        </CarouselWrap>
    );
}
