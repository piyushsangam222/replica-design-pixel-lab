
import React, { useState } from 'react';

interface MenuItem {
  icon: React.ReactNode;
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

  const GridIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 13V11.5C10.5 10.7044 10.1839 9.94129 9.62132 9.37868C9.05871 8.81607 8.29565 8.5 7.5 8.5H3.5C2.70435 8.5 1.94129 8.81607 1.37868 9.37868C0.816071 9.94129 0.5 10.7044 0.5 11.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 5.5C6.60457 5.5 7.5 4.60457 7.5 3.5C7.5 2.39543 6.60457 1.5 5.5 1.5C4.39543 1.5 3.5 2.39543 3.5 3.5C3.5 4.60457 4.39543 5.5 5.5 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 13V11.5C15.4999 10.9001 15.2978 10.3187 14.9269 9.84655C14.5559 9.37437 14.0378 9.04341 13.45 8.905" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 1.405C11.5895 1.54231 12.1096 1.87389 12.4824 2.34721C12.8552 2.82054 13.0589 3.40303 13.0589 4.005C13.0589 4.60697 12.8552 5.18946 12.4824 5.66279C12.1096 6.13611 11.5895 6.46769 11 6.605" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ArrowUpIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 8L8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const BarChartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const TagIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 8.5L8.5 13.5C8.36739 13.6326 8.18921 13.7063 8.00355 13.7063C7.8179 13.7063 7.63971 13.6326 7.5071 13.5L2 8V2H8L13.5 7.5C13.6326 7.63261 13.7063 7.8108 13.7063 7.99645C13.7063 8.1821 13.6326 8.36029 13.5 8.4929V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5H5.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ScaleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7H2L3 3H13L14 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7V11C7 11.5304 7.21071 12.0391 7.58579 12.4142C7.96086 12.7893 8.46957 13 9 13C9.53043 13 10.0391 12.7893 10.4142 12.4142C10.7893 12.0391 11 11.5304 11 11V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.21484 9.21484L4.5 14L8 12L11.5 14L10.7852 9.21484" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ToolIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 6.5L9.5 1.5L8 3L13 8L14.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5 14.5L6.5 9.5L7.5 10.5L2.5 15.5L1.5 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const mainMenuItems: MenuItem[] = [
    { icon: <GridIcon />, label: 'Dashboard' },
    { icon: <UsersIcon />, label: 'Leaderboards' },
    { icon: <ArrowUpIcon />, label: 'Withdrawal' },
    { icon: <BarChartIcon />, label: 'My Stats' },
    { icon: <TagIcon />, label: 'My Offers' },
    { icon: <ScaleIcon />, label: 'A-book scaling' },
    { icon: <AwardIcon />, label: 'Certificates', isActive: true },
  ];

  const toolsSubItems: MenuItem[] = [
    { icon: <GridIcon />, label: 'Lotsize Calculator' },
    { icon: <GridIcon />, label: 'Economic Calendar' },
    { icon: <GridIcon />, label: 'Forex heatmap' },
    { icon: <GridIcon />, label: 'Challenge comparison' },
  ];

  const bottomMenuItems: MenuItem[] = [
    { icon: <UsersIcon />, label: 'Affiliate' },
    { icon: <GridIcon />, label: 'Rules & FAQ' },
  ];

  const renderMenuItem = (item: MenuItem, index: number) => {
    const baseClasses = "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-left";
    const activeClasses = item.isActive 
      ? "bg-[#28BFFF]/10 border border-[#28BFFF] text-white"
      : "text-[#85A8C3] hover:bg-[#1A252C]";

    return (
      <button key={index} className={`${baseClasses} ${activeClasses}`}>
        <div className="w-4 h-4 flex-shrink-0">
          {item.icon}
        </div>
        <span className="text-sm">
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-60 bg-[#0F1B20] border-r border-[#28BFFF]/20 p-4 overflow-y-auto">
      <div className="space-y-4">
        <button className="w-full bg-[#28BFFF] text-white text-sm font-medium py-3 px-4 rounded-lg hover:bg-[#1FA8E8] transition-colors">
          Start New Challenge
        </button>
        
        <nav className="space-y-1">
          {mainMenuItems.map((item, index) => renderMenuItem(item, index))}
          
          <div>
            <button
              onClick={() => setExpandedTools(!expandedTools)}
              className="flex items-center justify-between w-full px-4 py-3 text-[#85A8C3] hover:bg-[#1A252C] rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4">
                  <ToolIcon />
                </div>
                <span className="text-sm">Tools</span>
              </div>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform ${expandedTools ? 'rotate-180' : ''}`}
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {expandedTools && (
              <div className="ml-4 space-y-1">
                {toolsSubItems.map((item, index) => (
                  <button key={index} className="flex items-center gap-3 px-4 py-3 text-[#85A8C3] hover:bg-[#1A252C] rounded-lg transition-colors w-full text-left">
                    <div className="w-4 h-4">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button className="flex items-center gap-3 px-4 py-3 text-[#85A8C3] hover:bg-[#1A252C] rounded-lg transition-colors w-full text-left">
            <div className="w-4 h-4">
              <BarChartIcon />
            </div>
            <span className="text-sm">Trading View</span>
          </button>
        </nav>
        
        <div className="pt-8 space-y-1">
          {bottomMenuItems.map((item, index) => (
            <button key={index} className="flex items-center gap-3 px-4 py-3 text-[#85A8C3] hover:bg-[#1A252C] rounded-lg transition-colors w-full text-left">
              <div className="w-4 h-4">
                {item.icon}
              </div>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
