import React, { useState } from 'react';

interface DropdownFooterProps {
  title: string;
  children: React.ReactNode;
}

const DropdownFooter: React.FC<DropdownFooterProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 md:mb-0">
      <button 
        className="w-full flex justify-between items-center py-2 text-left md:text-center md:py-0 font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="md:hidden">
          {isOpen ? '˅' : '˂'}
        </span>
      </button>
      <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default DropdownFooter;
