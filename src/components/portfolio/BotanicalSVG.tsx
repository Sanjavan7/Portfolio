/**
 * Botanical SVG illustrations inspired by AceFund's vintage engraving style.
 * Detailed line art: flowers, leaves with veins, berries, stems.
 * Supports custom color prop for white-on-indigo sections.
 */

interface BotanicalProps {
  className?: string;
  opacity?: number;
  color?: string;
}

export const BotanicalCornerTopRight = ({ className = "", opacity = 0.08, color }: BotanicalProps) => {
  const c = color || "var(--color-indigo)";
  return (
    <svg className={className} viewBox="0 0 500 500" fill="none" style={{ opacity }}>
      {/* Main stem */}
      <path d="M480 500 Q460 400 440 320 Q420 240 400 180 Q380 120 350 60" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M440 320 Q400 310 360 330 Q320 350 280 340" stroke={c} strokeWidth="1.2" fill="none" />
      <path d="M400 180 Q430 160 460 140 Q480 130 500 120" stroke={c} strokeWidth="1.2" fill="none" />

      {/* Large flower top */}
      <circle cx="350" cy="55" r="18" stroke={c} strokeWidth="1.2" fill="none" />
      <circle cx="350" cy="55" r="8" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.15" />
      <ellipse cx="332" cy="42" rx="14" ry="7" transform="rotate(-45 332 42)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="368" cy="42" rx="14" ry="7" transform="rotate(45 368 42)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="338" cy="70" rx="14" ry="7" transform="rotate(45 338 70)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="362" cy="70" rx="14" ry="7" transform="rotate(-45 362 70)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="350" cy="33" rx="7" ry="14" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />

      {/* Detailed leaf 1 */}
      <path d="M360 330 Q330 310 300 320 Q270 330 260 340" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M360 330 Q340 340 310 345 Q280 350 260 340" stroke={c} strokeWidth="1" fill="none" />
      <path d="M340 325 Q330 330 320 332" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M325 322 Q318 328 310 335" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M305 325 Q300 332 290 338" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Detailed leaf 2 */}
      <path d="M420 240 Q450 220 470 200 Q480 190 485 175" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M420 240 Q445 240 465 225 Q480 215 485 175" stroke={c} strokeWidth="1" fill="none" />
      <path d="M445 225 Q455 218 460 210" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M455 232 Q462 222 468 212" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M435 235 Q440 228 448 220" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Leaf 3 */}
      <path d="M460 350 Q470 380 465 410 Q460 430 450 450" stroke={c} strokeWidth="1" fill="none" />
      <path d="M460 350 Q480 375 480 405 Q478 430 450 450" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M470 370 Q475 380 476 390" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M466 390 Q472 398 474 408" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Berry cluster */}
      <circle cx="280" cy="335" r="5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.1" />
      <circle cx="270" cy="342" r="4" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.12" />
      <circle cx="285" cy="345" r="4.5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.08" />
      <circle cx="275" cy="350" r="3.5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.1" />

      {/* Small flower */}
      <circle cx="465" cy="138" r="10" stroke={c} strokeWidth="0.8" fill="none" />
      <circle cx="465" cy="138" r="4" fill={c} fillOpacity="0.12" />
      <ellipse cx="455" cy="130" rx="8" ry="4" transform="rotate(-30 455 130)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.05" />
      <ellipse cx="475" cy="130" rx="8" ry="4" transform="rotate(30 475 130)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.05" />
      <ellipse cx="465" cy="125" rx="4" ry="8" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.05" />

      {/* Extra leaves */}
      <path d="M450 380 Q430 370 415 380 Q405 390 400 400" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M450 380 Q440 395 420 400 Q410 402 400 400" stroke={c} strokeWidth="0.8" fill="none" />
      <path d="M410 220 Q385 210 370 220 Q360 230 355 245" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M410 220 Q395 235 375 240 Q365 242 355 245" stroke={c} strokeWidth="0.8" fill="none" />

      {/* Tendrils */}
      <path d="M380 120 Q370 110 375 95 Q382 85 390 90" stroke={c} strokeWidth="0.7" fill="none" />
      <path d="M300 340 Q290 330 295 318 Q302 310 310 315" stroke={c} strokeWidth="0.7" fill="none" />

      {/* Additional detail - second flower mid */}
      <circle cx="390" cy="280" r="12" stroke={c} strokeWidth="0.8" fill="none" />
      <circle cx="390" cy="280" r="5" fill={c} fillOpacity="0.1" />
      <ellipse cx="380" cy="270" rx="10" ry="4" transform="rotate(-40 380 270)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="400" cy="270" rx="10" ry="4" transform="rotate(40 400 270)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="382" cy="292" rx="10" ry="4" transform="rotate(30 382 292)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="398" cy="292" rx="10" ry="4" transform="rotate(-30 398 292)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />

      {/* More leaves along stem */}
      <path d="M470 440 Q490 420 500 395" stroke={c} strokeWidth="0.8" fill="none" />
      <path d="M470 440 Q495 435 500 395" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M430 145 Q410 130 395 140" stroke={c} strokeWidth="0.7" fill="none" />
      <path d="M430 145 Q415 150 395 140" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.03" />
    </svg>
  );
};

export const BotanicalCornerBottomLeft = ({ className = "", opacity = 0.08, color }: BotanicalProps) => {
  const c = color || "var(--color-indigo)";
  return (
    <svg className={className} viewBox="0 0 500 500" fill="none" style={{ opacity }}>
      {/* Main stem */}
      <path d="M20 0 Q40 80 60 160 Q80 240 100 300 Q120 360 150 420 Q170 460 200 490" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M60 160 Q100 150 140 170 Q170 185 200 180" stroke={c} strokeWidth="1.2" fill="none" />
      <path d="M100 300 Q60 290 30 310 Q10 325 0 350" stroke={c} strokeWidth="1.2" fill="none" />

      {/* Large dahlia flower */}
      <circle cx="200" cy="180" r="22" stroke={c} strokeWidth="1" fill="none" />
      <circle cx="200" cy="180" r="10" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.12" />
      <ellipse cx="178" cy="170" rx="15" ry="6" transform="rotate(-30 178 170)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="222" cy="170" rx="15" ry="6" transform="rotate(30 222 170)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="185" cy="195" rx="15" ry="6" transform="rotate(40 185 195)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="215" cy="195" rx="15" ry="6" transform="rotate(-40 215 195)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="200" cy="158" rx="6" ry="15" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="200" cy="202" rx="6" ry="15" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="175" cy="180" rx="15" ry="6" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="225" cy="180" rx="15" ry="6" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />

      {/* Detailed leaf - large */}
      <path d="M60 160 Q30 140 15 110 Q10 95 15 80" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M60 160 Q40 130 35 105 Q32 90 15 80" stroke={c} strokeWidth="1" fill="none" />
      <path d="M45 140 Q38 130 33 118" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M35 130 Q30 120 28 108" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M25 118 Q22 108 22 98" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Leaf right side */}
      <path d="M120 360 Q150 340 175 350 Q195 360 200 380" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M120 360 Q155 365 178 375 Q195 382 200 380" stroke={c} strokeWidth="0.8" fill="none" />
      <path d="M145 355 Q155 358 162 362" stroke={c} strokeWidth="0.4" fill="none" />
      <path d="M160 358 Q168 362 175 368" stroke={c} strokeWidth="0.4" fill="none" />

      {/* Leaf left side */}
      <path d="M30 310 Q15 290 20 265 Q25 250 35 240" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M30 310 Q10 285 15 260 Q20 248 35 240" stroke={c} strokeWidth="0.8" fill="none" />
      <path d="M22 290 Q18 278 20 268" stroke={c} strokeWidth="0.4" fill="none" />

      {/* Berry cluster */}
      <circle cx="145" cy="165" r="5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.1" />
      <circle cx="138" cy="158" r="4" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.12" />
      <circle cx="150" cy="155" r="4.5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.08" />

      {/* Tendrils */}
      <path d="M170 430 Q185 420 180 405 Q175 395 185 390" stroke={c} strokeWidth="0.7" fill="none" />
      <path d="M80 240 Q65 230 70 215 Q78 208 85 212" stroke={c} strokeWidth="0.7" fill="none" />

      {/* Small bud */}
      <ellipse cx="5" cy="345" rx="6" ry="10" transform="rotate(15 5 345)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <path d="M0 355 Q5 348 5 340" stroke={c} strokeWidth="0.6" fill="none" />

      {/* Additional flower mid */}
      <circle cx="80" cy="240" r="10" stroke={c} strokeWidth="0.8" fill="none" />
      <circle cx="80" cy="240" r="4" fill={c} fillOpacity="0.1" />
      <ellipse cx="72" cy="233" rx="8" ry="3.5" transform="rotate(-30 72 233)" stroke={c} strokeWidth="0.5" fill={c} fillOpacity="0.04" />
      <ellipse cx="88" cy="233" rx="8" ry="3.5" transform="rotate(30 88 233)" stroke={c} strokeWidth="0.5" fill={c} fillOpacity="0.04" />

      {/* Extra leaf detail */}
      <path d="M140 420 Q165 405 185 415" stroke={c} strokeWidth="0.7" fill="none" />
      <path d="M140 420 Q165 425 185 415" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.03" />
    </svg>
  );
};

export const BotanicalBorder = ({ className = "", opacity = 0.07, color }: BotanicalProps) => {
  const c = color || "var(--color-indigo)";
  return (
    <svg className={className} viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none" style={{ opacity }}>
      {/* Flowing vine */}
      <path d="M0 150 Q100 120 200 140 Q300 160 400 130 Q500 100 600 120 Q700 140 800 110 Q900 80 1000 120 Q1100 150 1200 130" stroke={c} strokeWidth="1.5" fill="none" />

      {/* Leaves */}
      <ellipse cx="100" cy="125" rx="20" ry="8" transform="rotate(-25 100 125)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.05" />
      <ellipse cx="150" cy="135" rx="18" ry="7" transform="rotate(20 150 135)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.04" />
      <ellipse cx="350" cy="140" rx="22" ry="9" transform="rotate(-30 350 140)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.05" />
      <ellipse cx="450" cy="115" rx="18" ry="7" transform="rotate(25 450 115)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.04" />

      {/* Flower at center */}
      <circle cx="600" cy="115" r="16" stroke={c} strokeWidth="1" fill="none" />
      <circle cx="600" cy="115" r="7" fill={c} fillOpacity="0.1" />
      <ellipse cx="584" cy="108" rx="12" ry="5" transform="rotate(-35 584 108)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="616" cy="108" rx="12" ry="5" transform="rotate(35 616 108)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="600" cy="98" rx="5" ry="12" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="590" cy="125" rx="12" ry="5" transform="rotate(40 590 125)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="610" cy="125" rx="12" ry="5" transform="rotate(-40 610 125)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />

      <ellipse cx="750" cy="118" rx="20" ry="8" transform="rotate(-20 750 118)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.05" />
      <ellipse cx="850" cy="95" rx="22" ry="9" transform="rotate(30 850 95)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.04" />

      {/* Small flower right */}
      <circle cx="950" cy="115" r="10" stroke={c} strokeWidth="0.8" fill="none" />
      <circle cx="950" cy="115" r="4" fill={c} fillOpacity="0.1" />
      <ellipse cx="942" cy="108" rx="8" ry="3.5" transform="rotate(-30 942 108)" stroke={c} strokeWidth="0.5" fill={c} fillOpacity="0.04" />
      <ellipse cx="958" cy="108" rx="8" ry="3.5" transform="rotate(30 958 108)" stroke={c} strokeWidth="0.5" fill={c} fillOpacity="0.04" />

      <ellipse cx="1050" cy="125" rx="18" ry="7" transform="rotate(-25 1050 125)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.05" />
      <ellipse cx="1150" cy="135" rx="16" ry="6" transform="rotate(20 1150 135)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.04" />

      {/* Berry clusters */}
      <circle cx="250" cy="145" r="4" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />
      <circle cx="258" cy="140" r="3.5" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.1" />
      <circle cx="245" cy="138" r="3" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />
      <circle cx="1100" cy="128" r="3.5" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />
      <circle cx="1108" cy="122" r="3" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.1" />

      {/* Tendrils */}
      <path d="M300 150 Q310 140 305 128 Q300 120 308 115" stroke={c} strokeWidth="0.6" fill="none" />
      <path d="M500 110 Q510 100 505 88 Q500 82 508 78" stroke={c} strokeWidth="0.6" fill="none" />
      <path d="M800 105 Q810 95 805 85 Q800 78 808 75" stroke={c} strokeWidth="0.6" fill="none" />
    </svg>
  );
};

export const BotanicalHeroBottom = ({ className = "", opacity = 0.2, color }: BotanicalProps) => {
  const c = color || "#fff";
  return (
    <svg className={className} viewBox="0 0 1400 350" fill="none" preserveAspectRatio="xMidYMax slice" style={{ opacity }}>
      {/* Dense botanical border for hero bottom - inspired by AceFund hero */}

      {/* Left cluster - large sunflower */}
      <circle cx="120" cy="180" r="35" stroke={c} strokeWidth="1.2" fill="none" />
      <circle cx="120" cy="180" r="15" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.1" />
      <ellipse cx="88" cy="160" rx="22" ry="8" transform="rotate(-40 88 160)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="152" cy="160" rx="22" ry="8" transform="rotate(40 152 160)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="95" cy="200" rx="22" ry="8" transform="rotate(35 95 200)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="145" cy="200" rx="22" ry="8" transform="rotate(-35 145 200)" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="120" cy="145" rx="8" ry="22" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="120" cy="215" rx="8" ry="22" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="85" cy="180" rx="22" ry="8" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      <ellipse cx="155" cy="180" rx="22" ry="8" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" />
      {/* Stem */}
      <path d="M120 215 Q115 260 110 300 Q108 320 100 350" stroke={c} strokeWidth="1.5" fill="none" />

      {/* Large leaf left of sunflower */}
      <path d="M100 280 Q60 250 30 260 Q10 270 0 290" stroke={c} strokeWidth="1" fill="none" />
      <path d="M100 280 Q55 275 25 285 Q10 290 0 290" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M70 262 Q55 265 40 272" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M55 258 Q42 262 30 270" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Large leaf right */}
      <path d="M130 260 Q175 235 210 245 Q235 255 245 275" stroke={c} strokeWidth="1" fill="none" />
      <path d="M130 260 Q180 260 215 268 Q238 275 245 275" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M165 248 Q180 250 195 256" stroke={c} strokeWidth="0.5" fill="none" />
      <path d="M185 245 Q200 250 210 258" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Berry cluster left */}
      <circle cx="50" cy="230" r="6" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.08" />
      <circle cx="40" cy="222" r="5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.1" />
      <circle cx="58" cy="220" r="5.5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.07" />
      <circle cx="45" cy="238" r="4.5" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.09" />
      <path d="M50 215 Q60 200 70 195" stroke={c} strokeWidth="0.7" fill="none" />

      {/* Center - hanging flower/bellflower */}
      <path d="M500 0 Q505 40 510 80 Q515 120 520 160" stroke={c} strokeWidth="1.2" fill="none" />
      <path d="M520 160 Q510 190 500 200 Q490 190 480 160" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.05" />
      <path d="M500 200 Q498 210 500 220" stroke={c} strokeWidth="0.6" fill="none" />
      {/* Hanging leaves */}
      <path d="M510 80 Q540 60 560 70 Q575 80 580 100" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M510 80 Q545 85 565 92 Q578 98 580 100" stroke={c} strokeWidth="0.8" fill="none" />
      <path d="M505 120 Q475 105 460 112 Q450 120 445 135" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.03" />
      <path d="M505 120 Q470 120 455 128 Q448 133 445 135" stroke={c} strokeWidth="0.8" fill="none" />

      {/* Right cluster - peony-like flower */}
      <circle cx="1100" cy="160" r="30" stroke={c} strokeWidth="1" fill="none" />
      <circle cx="1100" cy="160" r="12" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.1" />
      <ellipse cx="1072" cy="145" rx="20" ry="7" transform="rotate(-35 1072 145)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="1128" cy="145" rx="20" ry="7" transform="rotate(35 1128 145)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="1078" cy="178" rx="20" ry="7" transform="rotate(40 1078 178)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="1122" cy="178" rx="20" ry="7" transform="rotate(-40 1122 178)" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="1100" cy="130" rx="7" ry="20" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      <ellipse cx="1100" cy="190" rx="7" ry="20" stroke={c} strokeWidth="0.7" fill={c} fillOpacity="0.05" />
      {/* Stem */}
      <path d="M1100 190 Q1105 240 1110 280 Q1115 310 1120 350" stroke={c} strokeWidth="1.5" fill="none" />

      {/* Right large leaves */}
      <path d="M1115 250 Q1160 225 1200 235 Q1230 245 1250 270" stroke={c} strokeWidth="1" fill="none" />
      <path d="M1115 250 Q1165 255 1205 260 Q1235 265 1250 270" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />
      <path d="M1155 238 Q1175 242 1190 250" stroke={c} strokeWidth="0.5" fill="none" />

      <path d="M1105 230 Q1065 210 1040 220 Q1020 230 1010 250" stroke={c} strokeWidth="1" fill="none" />
      <path d="M1105 230 Q1060 232 1035 242 Q1018 248 1010 250" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.04" />

      {/* Far right leaf */}
      <path d="M1250 200 Q1300 180 1340 190 Q1370 200 1400 230" stroke={c} strokeWidth="1" fill="none" />
      <path d="M1250 200 Q1310 205 1350 215 Q1380 225 1400 230" stroke={c} strokeWidth="1" fill={c} fillOpacity="0.03" />
      <path d="M1290 192 Q1310 195 1330 202" stroke={c} strokeWidth="0.5" fill="none" />

      {/* Mid flowers */}
      <circle cx="350" cy="250" r="14" stroke={c} strokeWidth="0.8" fill="none" />
      <circle cx="350" cy="250" r="6" fill={c} fillOpacity="0.08" />
      <ellipse cx="338" cy="240" rx="10" ry="4" transform="rotate(-35 338 240)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="362" cy="240" rx="10" ry="4" transform="rotate(35 362 240)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="340" cy="262" rx="10" ry="4" transform="rotate(30 340 262)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <ellipse cx="360" cy="262" rx="10" ry="4" transform="rotate(-30 360 262)" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.04" />
      <path d="M350 265 Q348 290 345 320 Q343 335 340 350" stroke={c} strokeWidth="1" fill="none" />

      {/* Mid-right small flower */}
      <circle cx="800" cy="220" r="10" stroke={c} strokeWidth="0.7" fill="none" />
      <circle cx="800" cy="220" r="4" fill={c} fillOpacity="0.08" />
      <ellipse cx="792" cy="212" rx="8" ry="3" transform="rotate(-30 792 212)" stroke={c} strokeWidth="0.5" fill={c} fillOpacity="0.04" />
      <ellipse cx="808" cy="212" rx="8" ry="3" transform="rotate(30 808 212)" stroke={c} strokeWidth="0.5" fill={c} fillOpacity="0.04" />
      <path d="M800 230 Q802 260 805 290 Q807 320 810 350" stroke={c} strokeWidth="0.8" fill="none" />

      {/* Connecting vines */}
      <path d="M245 275 Q280 280 320 270 Q340 262 350 250" stroke={c} strokeWidth="0.8" fill="none" />
      <path d="M350 320 Q400 310 450 290 Q480 275 500 260" stroke={c} strokeWidth="0.7" fill="none" />
      <path d="M520 200 Q600 240 700 230 Q750 225 800 220" stroke={c} strokeWidth="0.7" fill="none" />
      <path d="M810 280 Q900 260 1000 240 Q1050 230 1100 220" stroke={c} strokeWidth="0.7" fill="none" />

      {/* Scattered leaves along vines */}
      <path d="M300 275 Q310 260 325 265" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.03" />
      <path d="M300 275 Q315 278 325 265" stroke={c} strokeWidth="0.6" fill="none" />
      <path d="M650 235 Q665 220 680 225" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.03" />
      <path d="M650 235 Q668 238 680 225" stroke={c} strokeWidth="0.6" fill="none" />
      <path d="M950 245 Q965 230 980 235" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.03" />
      <path d="M950 245 Q968 248 980 235" stroke={c} strokeWidth="0.6" fill="none" />

      {/* Berry clusters scattered */}
      <circle cx="1200" cy="200" r="4" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />
      <circle cx="1210" cy="195" r="3.5" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.1" />
      <circle cx="1195" cy="192" r="3" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />

      <circle cx="420" cy="300" r="3.5" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />
      <circle cx="428" cy="294" r="3" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.1" />
      <circle cx="415" cy="292" r="2.5" stroke={c} strokeWidth="0.6" fill={c} fillOpacity="0.08" />

      {/* Tendrils */}
      <path d="M200 230 Q210 215 205 200 Q200 190 210 185" stroke={c} strokeWidth="0.6" fill="none" />
      <path d="M700 225 Q710 210 705 198 Q700 190 708 186" stroke={c} strokeWidth="0.6" fill="none" />
      <path d="M1050 225 Q1040 210 1045 198 Q1050 190 1042 186" stroke={c} strokeWidth="0.6" fill="none" />

      {/* Far left foliage going off screen */}
      <path d="M0 180 Q-10 160 -5 140" stroke={c} strokeWidth="1" fill="none" />
      <path d="M0 220 Q-20 200 -15 180" stroke={c} strokeWidth="0.8" fill="none" />

      {/* Far right foliage going off screen */}
      <path d="M1400 180 Q1410 160 1405 140" stroke={c} strokeWidth="1" fill="none" />
      <path d="M1380 300 Q1390 280 1400 260" stroke={c} strokeWidth="0.8" fill="none" />
    </svg>
  );
};
