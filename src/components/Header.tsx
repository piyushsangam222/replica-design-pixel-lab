import React from 'react';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="relative flex min-h-16 w-full items-center gap-[40px_48px] overflow-hidden justify-between px-4 py-2.5 bg-[#0A1114]">
      <div className="self-stretch z-0 flex min-w-60 items-center gap-[40px_100px] justify-between w-[266px] my-auto">
        <div className="self-stretch flex items-center gap-[40px_48px] w-[125px] my-auto">
          <div className="self-stretch flex w-[125px] items-stretch justify-center my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/8fd662e5c334cebaeec01369e2a29d236624bdb2?placeholderIfAbsent=true"
              className="aspect-[5.68] object-contain w-[125px]"
              alt="Logo"
            />
          </div>
        </div>
        <button
          onClick={onToggleSidebar}
          className="justify-center items-center border border-[#28BFFF] shadow-[0px_-8px_32px_0px_rgba(78,193,255,0.06)_inset] self-stretch flex min-h-8 flex-col overflow-hidden w-8 h-8 bg-[rgba(40,191,255,0.05)] my-auto rounded-lg border-solid hover:bg-[rgba(40,191,255,0.1)] transition-colors"
          aria-label="Toggle sidebar"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/56ccf912a17692770da8c7e47fa47d62ed651c43?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6"
            alt="Collapse"
          />
        </button>
      </div>
      
      <nav className="absolute z-0 flex items-center gap-4 text-sm text-[#85A8C3] font-semibold whitespace-nowrap translate-x-[0%] -translate-y-2/4 left-[330px] top-2/4">
        <div className="self-stretch flex items-center gap-1.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/7f81d78ef597622aa2b3f99cefb0e2df73d115e6?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Certificates icon"
          />
          <span className="text-[#85A8C3] self-stretch my-auto">
            Certificates
          </span>
        </div>
      </nav>
      
      <button className="justify-center items-center border border-[#28BFFF] shadow-[0px_-8px_32px_0px_rgba(78,193,255,0.06)_inset] self-stretch z-0 flex min-h-11 gap-2 text-sm text-[#E4EEF5] font-semibold bg-[rgba(40,191,255,0.05)] my-auto pl-4 pr-3 py-3 rounded-lg border-solid hover:bg-[rgba(40,191,255,0.1)] transition-colors">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/7a17caea54a669b88b7e0eec2dcf3a7bd28b6e95?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="User avatar"
        />
        <span className="text-[#E4EEF5] self-stretch my-auto">
          Jonas J.
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/bbab564e26a02ba0df23bef2f57cbfe226dae916?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Dropdown arrow"
        />
      </button>
    </header>
  );
};
