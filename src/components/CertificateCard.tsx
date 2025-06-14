
import React from 'react';

interface CertificateCardProps {
  title: string;
  imageUrl?: string;
  onShare: () => void;
  onDownload: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  imageUrl,
  onShare,
  onDownload
}) => {
  return (
    <div className="bg-[#1A252C] border border-[#28BFFF]/20 rounded-xl p-6 flex flex-col">
      {imageUrl && (
        <div className="mb-6">
          <img
            src={imageUrl}
            className="w-full h-auto rounded-lg"
            alt={`${title} certificate`}
          />
        </div>
      )}
      
      <h3 className="text-white text-lg font-medium mb-6">
        {title}
      </h3>
      
      <div className="flex gap-3 mt-auto">
        <button
          onClick={onShare}
          className="flex items-center gap-2 px-4 py-2 bg-[#1A252C] border border-[#28BFFF] rounded-lg text-[#85A8C3] text-sm hover:bg-[#1E2A32] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L10 5" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 7L10 11" stroke="#85A8C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 5C14.3284 5 15 4.32843 15 3.5C15 2.67157 14.3284 2 13.5 2C12.6716 2 12 2.67157 12 3.5C12 4.32843 12.6716 5 13.5 5Z" stroke="#85A8C3" strokeWidth="1.5"/>
            <path d="M2.5 10C3.32843 10 4 9.32843 4 8.5C4 7.67157 3.32843 7 2.5 7C1.67157 7 1 7.67157 1 8.5C1 9.32843 1.67157 10 2.5 10Z" stroke="#85A8C3" strokeWidth="1.5"/>
            <path d="M13.5 14C14.3284 14 15 13.3284 15 12.5C15 11.6716 14.3284 11 13.5 11C12.6716 11 12 11.6716 12 12.5C12 13.3284 12.6716 14 13.5 14Z" stroke="#85A8C3" strokeWidth="1.5"/>
          </svg>
          Share
        </button>
        
        <button
          onClick={onDownload}
          className="flex items-center gap-2 px-4 py-2 bg-[#28BFFF] rounded-lg text-white text-sm hover:bg-[#1FA8E8] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 11L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 8L8 11L11 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 14L15 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};
