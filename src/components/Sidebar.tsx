import React, { useState } from 'react';

interface MenuItem {
  icon: string;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  subItems?: MenuItem[];
}

interface SidebarProps {
  isCollapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false }) => {
  const [expandedTools, setExpandedTools] = useState(true);

  const mainMenuItems: MenuItem[] = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/6bfa646a4977554a1ad90e0e9bdc0932d7df24cd?placeholderIfAbsent=true', label: 'Dashboard' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/f782b222ef78642a54187c56273d9bb11b7415f0?placeholderIfAbsent=true', label: 'Leaderboards' },
    { icon: '', label: 'Withdrawal' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/70d4c40f1cf0ebac2e8abbade75876c239e49cbb?placeholderIfAbsent=true', label: 'My Stats' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/9e4fb3ae38895b65ef53c4247e164b81b3616588?placeholderIfAbsent=true', label: 'My Offers' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/6c290e1b8f6c04f871a0cf2efa0b2f44d362dc86?placeholderIfAbsent=true', label: 'A-book scaling' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/115a5cb661f3852bcf15d82e5d69b799c8e1aaa9?placeholderIfAbsent=true', label: 'Certificates', isActive: true },
  ];

  const toolsSubItems: MenuItem[] = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/e960f99fb93a17b6a78e2d73c2eac491f3e43b95?placeholderIfAbsent=true', label: 'Lotsize Calculator' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/10be9dd3fa60736ef64d4ec780f24d4b72595a5e?placeholderIfAbsent=true', label: 'Economic Calendar' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/db603022b8caa41c133dbccf76001994be80c8a5?placeholderIfAbsent=true', label: 'Forex heatmap' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/361108bf30db1537f8a4d1d74638431332c4b054?placeholderIfAbsent=true', label: 'Challenge comparison' },
  ];

  const bottomMenuItems: MenuItem[] = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/e458c36a7e3695e66be0584032c45eaad9144b69?placeholderIfAbsent=true', label: 'Affiliate' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/6c469f02e92f604b30eee25d50a401ae8996580d?placeholderIfAbsent=true', label: 'Rules & FAQ' },
  ];

  const renderMenuItem = (item: MenuItem, index: number) => {
    const baseClasses = "flex min-h-[52px] w-full items-center gap-3 pl-4 pr-3.5 py-3.5 rounded-lg transition-colors";
    const activeClasses = item.isActive 
      ? "items-center border border-[#09F] shadow-[0px_0px_40px_0px_rgba(79,214,255,0.20)_inset] bg-[rgba(8,8,8,0.01)] text-[#E4EEF5] font-semibold border-solid"
      : "text-[#85A8C3] font-medium hover:bg-[rgba(40,191,255,0.05)]";

    return (
      <div key={index} className={`${baseClasses} ${activeClasses}`}>
        <div className="self-stretch flex w-full items-center gap-3 flex-1 shrink basis-[0%] my-auto">
          {item.icon && (
            <img
              src={item.icon}
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt={`${item.label} icon`}
            />
          )}
          {!item.icon && (
            <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
          )}
          <span className="self-stretch flex-1 shrink basis-[0%] my-auto">
            {item.label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <aside className="min-w-60 min-h-[952px] overflow-hidden text-sm w-[238px] pt-4 pb-2 px-4 bg-[#0A1114]">
      <div className="w-full">
        <button className="text-[#E4EEF5] self-stretch border border-[#3AB3FF] shadow-[0px_3px_1px_0px_rgba(255,255,255,0.35)_inset] min-h-12 w-full gap-2 font-semibold px-5 py-4 rounded-lg border-solid hover:bg-[rgba(58,179,255,0.1)] transition-colors">
          Start New Challenge
        </button>
        
        <nav className="w-full text-[#85A8C3] font-medium mt-8">
          <div className="w-full">
            {mainMenuItems.map((item, index) => renderMenuItem(item, index))}
            
            <div className="w-full rounded-lg">
              <button
                onClick={() => setExpandedTools(!expandedTools)}
                className="flex min-h-[52px] w-full items-center whitespace-nowrap justify-between pl-4 pr-3.5 py-3.5 rounded-lg hover:bg-[rgba(40,191,255,0.05)] transition-colors"
              >
                <div className="self-stretch flex items-center gap-3 flex-1 shrink basis-[0%] my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/667d5359b53ff7a7aecd5fb14e7a105b0928014d?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                    alt="Tools icon"
                  />
                  <span className="text-[#85A8C3] self-stretch flex-1 shrink basis-[0%] my-auto">
                    Tools
                  </span>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/e8787e06625288aef3ee4feef51323edcadd5be4?placeholderIfAbsent=true"
                  className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform ${expandedTools ? 'rotate-180' : ''}`}
                  alt="Dropdown arrow"
                />
              </button>
              
              {expandedTools && (
                <div className="w-full">
                  {toolsSubItems.map((item, index) => (
                    <div key={index} className="flex min-h-[52px] w-full items-center gap-3 px-4 py-3.5 rounded-lg hover:bg-[rgba(40,191,255,0.05)] transition-colors">
                      <img
                        src={item.icon}
                        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                        alt={`${item.label} icon`}
                      />
                      <span className="text-[#85A8C3] self-stretch flex-1 shrink basis-[0%] my-auto">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex min-h-[52px] w-full items-center justify-between pl-4 pr-3.5 py-3.5 rounded-lg hover:bg-[rgba(40,191,255,0.05)] transition-colors">
              <div className="self-stretch flex w-full items-center gap-3 flex-1 shrink basis-[0%] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/90ebc2b5ff7b4a20badecdc487273096/fbbeea869816fca294012f353b04e59f9f371594?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt="Trading View icon"
                />
                <span className="text-[#85A8C3] self-stretch flex-1 shrink basis-[0%] my-auto">
                  Trading View
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      <nav className="w-full text-[#85A8C3] font-medium mt-[60px] max-md:mt-10">
        <div className="w-full">
          {bottomMenuItems.map((item, index) => (
            <div key={index} className="flex min-h-[52px] w-full items-center gap-3 pl-4 pr-3.5 py-3.5 rounded-lg hover:bg-[rgba(40,191,255,0.05)] transition-colors">
              <img
                src={item.icon}
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt={`${item.label} icon`}
              />
              <span className="text-[#85A8C3] self-stretch my-auto">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};
