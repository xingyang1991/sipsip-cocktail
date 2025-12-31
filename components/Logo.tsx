import React from 'react';

export interface LogoProps {
  /** px */
  size?: number;
  className?: string;
}

/**
 * SipSip Logo
 * - 维持项目的极简/莫兰迪纸感风格：深色圆形 + 轻微米白描边。
 * - 使用 "SS" 作为识别度较高的 monogram。
 */
export const Logo: React.FC<LogoProps> = ({ size = 44, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="SipSip"
    >
      {/* outer */}
      <circle cx="32" cy="32" r="31" fill="#333333" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="#E9E2DA" strokeWidth="1.5" opacity="0.8" />

      {/* subtle highlight */}
      <path
        d="M18 20c6-7 22-7 28 0"
        fill="none"
        stroke="#F7F4EF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.25"
      />

      {/* monogram */}
      <text
        x="32"
        y="36"
        textAnchor="middle"
        fontFamily="Nunito, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#F7F4EF"
        letterSpacing="1"
      >
        SS
      </text>

      {/* underline */}
      <rect x="22" y="41" width="20" height="2" rx="1" fill="#F7F4EF" opacity="0.85" />

      {/* tiny drop */}
      <circle cx="44" cy="22" r="2" fill="#F7F4EF" opacity="0.7" />
    </svg>
  );
};
