/**
 * Coinly decorative SVG elements — sparkles, squiggles, clouds, stars, dots
 * Used as playful scattered decorations throughout the site
 */

interface DecoProps {
  className?: string;
  color?: string;
  size?: number;
}

// 4-point sparkle star (the signature Coinly mark)
export const Sparkle = ({ className = "", color = "currentColor", size = 32 }: DecoProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 0 L18 14 L32 16 L18 18 L16 32 L14 18 L0 16 L14 14 Z"
      fill={color}
    />
  </svg>
);

// Small simple star
export const Star = ({ className = "", color = "currentColor", size = 24 }: DecoProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
      fill={color}
    />
  </svg>
);

// Wavy squiggle line
export const Squiggle = ({ className = "", color = "currentColor", size = 80 }: DecoProps) => (
  <svg className={className} width={size} height={size / 3} viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 15 Q 10 2, 20 15 T 40 15 T 60 15 T 78 15"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Cloud shape
export const Cloud = ({ className = "", color = "currentColor", size = 80 }: DecoProps) => (
  <svg className={className} width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 40 Q 8 40 8 30 Q 8 22 16 22 Q 18 10 32 12 Q 38 4 48 10 Q 62 8 64 22 Q 74 22 74 32 Q 74 40 64 40 Z"
      fill={color}
    />
  </svg>
);

// Dot cluster
export const Dots = ({ className = "", color = "currentColor", size = 60 }: DecoProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="4" fill={color} />
    <circle cx="30" cy="10" r="4" fill={color} />
    <circle cx="50" cy="10" r="4" fill={color} />
    <circle cx="10" cy="30" r="4" fill={color} />
    <circle cx="30" cy="30" r="4" fill={color} />
    <circle cx="50" cy="30" r="4" fill={color} />
    <circle cx="10" cy="50" r="4" fill={color} />
    <circle cx="30" cy="50" r="4" fill={color} />
    <circle cx="50" cy="50" r="4" fill={color} />
  </svg>
);

// Leaf / flame shape
export const Leaf = ({ className = "", color = "currentColor", size = 40 }: DecoProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 2 Q 38 18 20 38 Q 2 18 20 2 Z"
      fill={color}
    />
  </svg>
);

// Zigzag wavy line
export const Zigzag = ({ className = "", color = "currentColor", size = 100 }: DecoProps) => (
  <svg className={className} width={size} height={size / 5} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 18 L 15 2 L 28 18 L 41 2 L 54 18 L 67 2 L 80 18 L 93 2"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Dashed curve (for connecting elements)
export const Curve = ({ className = "", color = "currentColor", size = 120 }: DecoProps) => (
  <svg className={className} width={size} height={size * 0.6} viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 65 Q 40 10 115 60"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="6 8"
      fill="none"
    />
  </svg>
);

// Section label with sparkles: ✦ TEXT ✦
interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ children, className = "" }: LabelProps) => (
  <div className={`section-label ${className}`}>
    <Sparkle size={14} />
    <span>{children}</span>
    <Sparkle size={14} />
  </div>
);
