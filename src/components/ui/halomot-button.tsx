import React from 'react';

type HalomotButtonProps = {
  inscription: string;
  onClick?: () => void;
  fixedWidth?: string;
  fillWidth?: boolean;
  gradient?: string;
  backgroundColor?: string;
  textColor?: string;
  innerBorderRadius?: string;
  outerBorderRadius?: string;
  hoverTextColor?: string;
  href?: string;
};

export const HalomotButton: React.FC<HalomotButtonProps> = ({
  inscription,
  onClick,
  fixedWidth,
  fillWidth = false,
  gradient = 'linear-gradient(to right, #be123c, #9f1239)',
  backgroundColor = '#140b0d',
  textColor = '#fff',
  innerBorderRadius = '6px',
  outerBorderRadius = '6.34px',
  hoverTextColor,
  href
}) => {
  const content = (
    <div
      className="relative transition-all duration-300 group cursor-pointer inline-block"
      style={{
        width: fillWidth ? '100%' : fixedWidth || 'auto',
        borderRadius: outerBorderRadius,
        padding: '1px',
        background: gradient
      }}
      onClick={onClick}
    >
      <div
        className="px-4 py-2.5 flex items-center justify-center font-medium text-xs tracking-wider uppercase transition-all duration-300"
        style={{
          borderRadius: innerBorderRadius,
          backgroundColor: backgroundColor,
          color: textColor
        }}
      >
        <span>{inscription}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={fillWidth ? 'w-full' : ''}>
        {content}
      </a>
    );
  }

  return content;
};
