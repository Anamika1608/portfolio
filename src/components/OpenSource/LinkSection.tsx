import React from 'react';

interface LinkProps {
  href: string;
  title: string;
  linkText: string;
  icon: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
}

const LinkSection = ({ href, title, linkText, icon, variant = 'primary' }: LinkProps) => {
const baseClasses =
  "flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg shadow-black/5";
  
  const variantClasses = {
    primary: "text-gray-800 border-white/30 hover:border-white/50 hover:bg-white/10 focus:ring-2 focus:ring-white/20",
    secondary: "text-gray-700 border-gray-200/40 hover:border-gray-200/60 hover:bg-gray-100/20 focus:ring-2 focus:ring-gray-200/30"
  };

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h4 className="font-crimson text-xl text-gray-800">
        {title}
      </h4>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {icon}
        <span>{linkText}</span>
      </a>
    </div>
  );
};

export default LinkSection;