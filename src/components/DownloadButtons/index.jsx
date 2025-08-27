import styled, { keyframes } from "styled-components";
import teamviewerLogo from "../../assets/images/teamviewerlogo.png";
import anydeskLogo from "../../assets/images/anydesklogo.svg";

// anima o gradiente da borda
const borderFlow = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ButtonLink = styled.a`
  --radius: 15px;
  --pad-x: 24px;
  --height: 56px;
  --bg: rgba(255,255,255,0.06);
  --text: #fff;
  --glow: ${(p) => p.$glow || "#ffffff"};
  --grad: ${(p) =>
    p.$gradient ||
    "#22E07B, #7f00ff, #E9053A"}; /* fallback */

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: var(--height);
  width: 100%;
  padding: 0 var(--pad-x);
  border: none;
  border-radius: var(--radius);
  color: var(--text);
  font: 600 16px/1 "Poppins", system-ui, -apple-system, sans-serif;
  text-decoration: none;
  background: var(--bg);
  cursor: pointer;
  isolation: isolate;

  /* Borda gradiente */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(90deg, var(--grad));
    background-size: 300% 300%;
    animation: ${borderFlow} 4s linear infinite;

    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;

    pointer-events: none;
    z-index: 0;
    opacity: 0.95;
  }

  > * { position: relative; z-index: 1; }

  /* Hover */
  transition: box-shadow .25s ease, filter .2s ease, transform .05s ease;
  &:hover {
    filter: brightness(1.06);
    box-shadow:
      0 0 18px 4px color-mix(in srgb, var(--glow) 65%, transparent),
      0 0 42px 6px color-mix(in srgb, var(--glow) 45%, transparent);
  }
  &:active  { transform: translateY(1px); }
  &:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255,255,255,.9); }
`;

/* Ícones */
const Icon = styled.img`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  display: block;
`;

export const TeamViewerButton = (props) => (
  <ButtonLink
    href="https://suportesn.com.br/Suporte_remoto_SNTI.exe"
    target="_blank"
    rel="noopener noreferrer"
    $gradient="#0EA5E9, #22D3EE, #60A5FA"
    $glow="#22D3EE"
    {...props}
  >
    <Icon src={teamviewerLogo} alt="TeamViewer logo" />
    <span>Baixar TeamViewer (Windows)</span>
  </ButtonLink>
);

export const AnyDeskButton = (props) => (
  <ButtonLink
    href="https://anydesk.com/pt/downloads/thank-you?dv=win_exe"
    target="_blank"
    rel="noopener noreferrer"
    $gradient="#FF3B30, #FF6B6B, #FFD166"
    $glow="#FF6B6B"
    {...props}
  >
    <Icon src={anydeskLogo} alt="AnyDesk logo" />
    <span>Baixar AnyDesk (Windows)</span>
  </ButtonLink>
);
