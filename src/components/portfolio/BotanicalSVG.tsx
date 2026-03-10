/**
 * Botanical SVG illustrations inspired by AceFund's vintage engraving style.
 * Detailed line art: flowers, leaves with veins, berries, stems.
 * All drawn in indigo (#3639DB) at low opacity for background decoration.
 */

export const BotanicalCornerTopRight = ({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) => (
  <svg className={className} viewBox="0 0 500 500" fill="none" style={{ opacity }}>
    {/* Main stem */}
    <path d="M480 500 Q460 400 440 320 Q420 240 400 180 Q380 120 350 60" stroke="var(--color-indigo)" strokeWidth="1.5" fill="none" />
    {/* Branch left */}
    <path d="M440 320 Q400 310 360 330 Q320 350 280 340" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />
    {/* Branch right */}
    <path d="M400 180 Q430 160 460 140 Q480 130 500 120" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />

    {/* Large flower top */}
    <circle cx="350" cy="55" r="18" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />
    <circle cx="350" cy="55" r="8" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.15" />
    {/* Petals */}
    <ellipse cx="332" cy="42" rx="14" ry="7" transform="rotate(-45 332 42)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.06" />
    <ellipse cx="368" cy="42" rx="14" ry="7" transform="rotate(45 368 42)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.06" />
    <ellipse cx="338" cy="70" rx="14" ry="7" transform="rotate(45 338 70)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.06" />
    <ellipse cx="362" cy="70" rx="14" ry="7" transform="rotate(-45 362 70)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.06" />
    <ellipse cx="350" cy="33" rx="7" ry="14" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.06" />

    {/* Detailed leaf 1 - large, left side */}
    <path d="M360 330 Q330 310 300 320 Q270 330 260 340" stroke="var(--color-indigo)" strokeWidth="1" fill="var(--color-indigo)" fillOpacity="0.04" />
    <path d="M360 330 Q340 340 310 345 Q280 350 260 340" stroke="var(--color-indigo)" strokeWidth="1" fill="none" />
    {/* Leaf veins */}
    <path d="M340 325 Q330 330 320 332" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M325 322 Q318 328 310 335" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M305 325 Q300 332 290 338" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />

    {/* Detailed leaf 2 - right side */}
    <path d="M420 240 Q450 220 470 200 Q480 190 485 175" stroke="var(--color-indigo)" strokeWidth="1" fill="var(--color-indigo)" fillOpacity="0.04" />
    <path d="M420 240 Q445 240 465 225 Q480 215 485 175" stroke="var(--color-indigo)" strokeWidth="1" fill="none" />
    {/* Leaf veins */}
    <path d="M445 225 Q455 218 460 210" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M455 232 Q462 222 468 212" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M435 235 Q440 228 448 220" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />

    {/* Leaf 3 - hanging down */}
    <path d="M460 350 Q470 380 465 410 Q460 430 450 450" stroke="var(--color-indigo)" strokeWidth="1" fill="none" />
    <path d="M460 350 Q480 375 480 405 Q478 430 450 450" stroke="var(--color-indigo)" strokeWidth="1" fill="var(--color-indigo)" fillOpacity="0.04" />
    <path d="M470 370 Q475 380 476 390" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M466 390 Q472 398 474 408" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />

    {/* Berry cluster */}
    <circle cx="280" cy="335" r="5" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.1" />
    <circle cx="270" cy="342" r="4" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.12" />
    <circle cx="285" cy="345" r="4.5" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.08" />
    <circle cx="275" cy="350" r="3.5" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.1" />

    {/* Small flower on branch */}
    <circle cx="465" cy="138" r="10" stroke="var(--color-indigo)" strokeWidth="0.8" fill="none" />
    <circle cx="465" cy="138" r="4" fill="var(--color-indigo)" fillOpacity="0.12" />
    <ellipse cx="455" cy="130" rx="8" ry="4" transform="rotate(-30 455 130)" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="475" cy="130" rx="8" ry="4" transform="rotate(30 475 130)" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="465" cy="125" rx="4" ry="8" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.05" />

    {/* Extra leaves along main stem */}
    <path d="M450 380 Q430 370 415 380 Q405 390 400 400" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.03" />
    <path d="M450 380 Q440 395 420 400 Q410 402 400 400" stroke="var(--color-indigo)" strokeWidth="0.8" fill="none" />

    <path d="M410 220 Q385 210 370 220 Q360 230 355 245" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.03" />
    <path d="M410 220 Q395 235 375 240 Q365 242 355 245" stroke="var(--color-indigo)" strokeWidth="0.8" fill="none" />

    {/* Tendril curls */}
    <path d="M380 120 Q370 110 375 95 Q382 85 390 90" stroke="var(--color-indigo)" strokeWidth="0.7" fill="none" />
    <path d="M300 340 Q290 330 295 318 Q302 310 310 315" stroke="var(--color-indigo)" strokeWidth="0.7" fill="none" />
  </svg>
);

export const BotanicalCornerBottomLeft = ({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) => (
  <svg className={className} viewBox="0 0 500 500" fill="none" style={{ opacity }}>
    {/* Main stem */}
    <path d="M20 0 Q40 80 60 160 Q80 240 100 300 Q120 360 150 420 Q170 460 200 490" stroke="var(--color-indigo)" strokeWidth="1.5" fill="none" />
    {/* Branch */}
    <path d="M60 160 Q100 150 140 170 Q170 185 200 180" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />
    <path d="M100 300 Q60 290 30 310 Q10 325 0 350" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />

    {/* Large dahlia-like flower */}
    <circle cx="200" cy="180" r="22" stroke="var(--color-indigo)" strokeWidth="1" fill="none" />
    <circle cx="200" cy="180" r="10" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.12" />
    {/* Petals radiating */}
    <ellipse cx="178" cy="170" rx="15" ry="6" transform="rotate(-30 178 170)" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="222" cy="170" rx="15" ry="6" transform="rotate(30 222 170)" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="185" cy="195" rx="15" ry="6" transform="rotate(40 185 195)" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="215" cy="195" rx="15" ry="6" transform="rotate(-40 215 195)" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="200" cy="158" rx="6" ry="15" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="200" cy="202" rx="6" ry="15" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="175" cy="180" rx="15" ry="6" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="225" cy="180" rx="15" ry="6" stroke="var(--color-indigo)" strokeWidth="0.7" fill="var(--color-indigo)" fillOpacity="0.05" />

    {/* Detailed leaf - large */}
    <path d="M60 160 Q30 140 15 110 Q10 95 15 80" stroke="var(--color-indigo)" strokeWidth="1" fill="var(--color-indigo)" fillOpacity="0.04" />
    <path d="M60 160 Q40 130 35 105 Q32 90 15 80" stroke="var(--color-indigo)" strokeWidth="1" fill="none" />
    <path d="M45 140 Q38 130 33 118" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M35 130 Q30 120 28 108" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />
    <path d="M25 118 Q22 108 22 98" stroke="var(--color-indigo)" strokeWidth="0.5" fill="none" />

    {/* Leaf right side */}
    <path d="M120 360 Q150 340 175 350 Q195 360 200 380" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.03" />
    <path d="M120 360 Q155 365 178 375 Q195 382 200 380" stroke="var(--color-indigo)" strokeWidth="0.8" fill="none" />
    <path d="M145 355 Q155 358 162 362" stroke="var(--color-indigo)" strokeWidth="0.4" fill="none" />
    <path d="M160 358 Q168 362 175 368" stroke="var(--color-indigo)" strokeWidth="0.4" fill="none" />

    {/* Leaf left side */}
    <path d="M30 310 Q15 290 20 265 Q25 250 35 240" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.03" />
    <path d="M30 310 Q10 285 15 260 Q20 248 35 240" stroke="var(--color-indigo)" strokeWidth="0.8" fill="none" />
    <path d="M22 290 Q18 278 20 268" stroke="var(--color-indigo)" strokeWidth="0.4" fill="none" />

    {/* Berry cluster */}
    <circle cx="145" cy="165" r="5" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.1" />
    <circle cx="138" cy="158" r="4" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.12" />
    <circle cx="150" cy="155" r="4.5" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.08" />

    {/* Tendril */}
    <path d="M170 430 Q185 420 180 405 Q175 395 185 390" stroke="var(--color-indigo)" strokeWidth="0.7" fill="none" />
    <path d="M80 240 Q65 230 70 215 Q78 208 85 212" stroke="var(--color-indigo)" strokeWidth="0.7" fill="none" />

    {/* Small bud */}
    <ellipse cx="5" cy="345" rx="6" ry="10" transform="rotate(15 5 345)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.06" />
    <path d="M0 355 Q5 348 5 340" stroke="var(--color-indigo)" strokeWidth="0.6" fill="none" />
  </svg>
);

export const BotanicalBorder = ({ className = "", opacity = 0.07 }: { className?: string; opacity?: number }) => (
  <svg className={className} viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none" style={{ opacity }}>
    {/* Flowing vine across the bottom */}
    <path d="M0 150 Q100 120 200 140 Q300 160 400 130 Q500 100 600 120 Q700 140 800 110 Q900 80 1000 120 Q1100 150 1200 130" stroke="var(--color-indigo)" strokeWidth="1.5" fill="none" />

    {/* Leaves along the vine */}
    <ellipse cx="100" cy="125" rx="20" ry="8" transform="rotate(-25 100 125)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="150" cy="135" rx="18" ry="7" transform="rotate(20 150 135)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.04" />

    <ellipse cx="350" cy="140" rx="22" ry="9" transform="rotate(-30 350 140)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="450" cy="115" rx="18" ry="7" transform="rotate(25 450 115)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.04" />

    {/* Flower at center */}
    <circle cx="600" cy="115" r="16" stroke="var(--color-indigo)" strokeWidth="1" fill="none" />
    <circle cx="600" cy="115" r="7" fill="var(--color-indigo)" fillOpacity="0.1" />
    <ellipse cx="584" cy="108" rx="12" ry="5" transform="rotate(-35 584 108)" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.04" />
    <ellipse cx="616" cy="108" rx="12" ry="5" transform="rotate(35 616 108)" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.04" />
    <ellipse cx="600" cy="98" rx="5" ry="12" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.04" />
    <ellipse cx="590" cy="125" rx="12" ry="5" transform="rotate(40 590 125)" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.04" />
    <ellipse cx="610" cy="125" rx="12" ry="5" transform="rotate(-40 610 125)" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.04" />

    <ellipse cx="750" cy="118" rx="20" ry="8" transform="rotate(-20 750 118)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="850" cy="95" rx="22" ry="9" transform="rotate(30 850 95)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.04" />

    {/* Small flower right side */}
    <circle cx="950" cy="115" r="10" stroke="var(--color-indigo)" strokeWidth="0.8" fill="none" />
    <circle cx="950" cy="115" r="4" fill="var(--color-indigo)" fillOpacity="0.1" />
    <ellipse cx="942" cy="108" rx="8" ry="3.5" transform="rotate(-30 942 108)" stroke="var(--color-indigo)" strokeWidth="0.5" fill="var(--color-indigo)" fillOpacity="0.04" />
    <ellipse cx="958" cy="108" rx="8" ry="3.5" transform="rotate(30 958 108)" stroke="var(--color-indigo)" strokeWidth="0.5" fill="var(--color-indigo)" fillOpacity="0.04" />

    <ellipse cx="1050" cy="125" rx="18" ry="7" transform="rotate(-25 1050 125)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.05" />
    <ellipse cx="1150" cy="135" rx="16" ry="6" transform="rotate(20 1150 135)" stroke="var(--color-indigo)" strokeWidth="0.8" fill="var(--color-indigo)" fillOpacity="0.04" />

    {/* Berry clusters */}
    <circle cx="250" cy="145" r="4" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.08" />
    <circle cx="258" cy="140" r="3.5" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.1" />
    <circle cx="245" cy="138" r="3" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.08" />

    <circle cx="1100" cy="128" r="3.5" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.08" />
    <circle cx="1108" cy="122" r="3" stroke="var(--color-indigo)" strokeWidth="0.6" fill="var(--color-indigo)" fillOpacity="0.1" />

    {/* Tendrils */}
    <path d="M300 150 Q310 140 305 128 Q300 120 308 115" stroke="var(--color-indigo)" strokeWidth="0.6" fill="none" />
    <path d="M500 110 Q510 100 505 88 Q500 82 508 78" stroke="var(--color-indigo)" strokeWidth="0.6" fill="none" />
    <path d="M800 105 Q810 95 805 85 Q800 78 808 75" stroke="var(--color-indigo)" strokeWidth="0.6" fill="none" />
  </svg>
);
