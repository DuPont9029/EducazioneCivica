import React from 'react';

interface TextComponentProps {
  text: string;
  className?: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ text, className }) => {
  return (
    <div className={`relative w-full mt-4 px-4 group ${className}`}> {/* className={`relative w-full mt-4 px-4 group hover:-translate-y-2 ${className}`} */}
      <div className="relative px-6 py-4 bg-gray-100 rounded-xl shadow-md">
        <p className="text-lg font-medium text-black">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextComponent;