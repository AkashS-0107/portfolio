import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TextRollButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'orange' | 'dark' | 'white';
  className?: string;
}

export const TextRollButton: React.FC<TextRollButtonProps> = ({
  text,
  onClick,
  href,
  variant = 'orange',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'orange':
        return {
          btn: 'bg-[#F26522] hover:bg-[#e05a1a] text-white pl-5 sm:pl-6 pr-2 py-2',
          circle: 'w-7 h-7 sm:w-8 sm:h-8 bg-white text-[#F26522]'
        };
      case 'dark':
        return {
          btn: 'bg-gray-900 hover:bg-black text-white pl-5 pr-2 py-2',
          circle: 'w-6 h-6 bg-white text-gray-900'
        };
      case 'white':
        return {
          btn: 'bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 pl-5 sm:pl-6 pr-2 py-2',
          circle: 'w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 text-white'
        };
    }
  };

  const styles = getVariantStyles();

  const content = (
    <div
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 rounded-full text-13px sm:text-14px font-medium transition-all duration-300 cursor-pointer ${styles.btn} ${className}`}
    >
      {/* Text Roll Container */}
      <div className="relative overflow-hidden h-[20px] flex flex-col">
        <span className="block transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
        <span className="block transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
      </div>

      {/* Rotating Arrow Circle */}
      <div className={`rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${styles.circle}`}>
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
