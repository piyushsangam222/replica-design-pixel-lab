
import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { CertificateCard } from './CertificateCard';

interface Certificate {
  id: string;
  title: string;
  imageUrl?: string;
}

export const MyCertificates: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Passed Phase 1',
      imageUrl: '/lovable-uploads/cedce9df-0996-407c-8c8c-989233642a3c.png'
    },
    {
      id: '2',
      title: 'Payout Certificate',
      imageUrl: '/lovable-uploads/cedce9df-0996-407c-8c8c-989233642a3c.png'
    }
  ];

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleShare = (certificateId: string) => {
    console.log('Sharing certificate:', certificateId);
  };

  const handleDownload = (certificateId: string) => {
    console.log('Downloading certificate:', certificateId);
  };

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="flex overflow-hidden bg-[#0A1114] min-h-screen">
      <Header onToggleSidebar={handleToggleSidebar} />
      
      <div className="flex w-full">
        <Sidebar isCollapsed={sidebarCollapsed} />
        
        <main className="flex-1 bg-[#111B20] pt-8 pb-8 px-8 min-h-screen">
          <header className="flex w-full items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#28BFFF] rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M6 8L7.5 9.5L10.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-white text-2xl font-medium">
                Certificates
              </h1>
            </div>
            
            <div className="relative">
              <button
                onClick={handleFilterToggle}
                className="flex items-center gap-2 px-4 py-2 bg-[#1A252C] border border-[#28BFFF] rounded-lg text-[#85A8C3] text-sm hover:bg-[#1E2A32] transition-colors"
              >
                <span>All certificates</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {filterOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-[#1A252C] border border-[#28BFFF] rounded-lg shadow-lg z-10">
                  <div className="p-2">
                    <button className="w-full text-left px-3 py-2 text-[#85A8C3] hover:bg-[#1E2A32] rounded text-sm">
                      All certificates
                    </button>
                    <button className="w-full text-left px-3 py-2 text-[#85A8C3] hover:bg-[#1E2A32] rounded text-sm">
                      Phase 1 certificates
                    </button>
                    <button className="w-full text-left px-3 py-2 text-[#85A8C3] hover:bg-[#1E2A32] rounded text-sm">
                      Payout certificates
                    </button>
                  </div>
                </div>
              )}
            </div>
          </header>
          
          <section className="grid grid-cols-2 gap-6 max-w-none">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                title={certificate.title}
                imageUrl={certificate.imageUrl}
                onShare={() => handleShare(certificate.id)}
                onDownload={() => handleDownload(certificate.id)}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};
