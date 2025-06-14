
import React from 'react';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0F1B20] border-b border-[#28BFFF]/20 flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="text-[#28BFFF] text-xl font-bold">
            WeFund
          </div>
          <button
            onClick={onToggleSidebar}
            className="w-8 h-8 bg-[#1A252C] border border-[#28BFFF] rounded-lg flex items-center justify-center hover:bg-[#1E2A32] transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4H14" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 8H14" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 12H14" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="flex items-center gap-1">
          <div className="w-6 h-6 bg-[#28BFFF] rounded flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeWidth="1"/>
              <path d="M4.5 6L5.5 7L7.5 5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#85A8C3] text-sm">Certificates</span>
        </nav>
      </div>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-[#1A252C] border border-[#28BFFF] rounded-lg text-white text-sm hover:bg-[#1E2A32] transition-colors">
        <div className="w-6 h-6 bg-[#28BFFF] rounded-full flex items-center justify-center text-xs font-bold">
          J
        </div>
        <span>Jonas J.</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </header>
  );
};
