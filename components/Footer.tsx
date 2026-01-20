
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="font-khmer-body text-3xl md:text-4xl mb-2 leading-tight">
            ដោយក្តីស្រឡាញ់ពី ហៀង ច័ន្ទកុសល <span className="text-gold italic">និង</span> ប្រាជ្ញ កញ្ញារី
          </h2>
          <p className="font-serif text-lg md:text-2xl text-white/60">
            With Love, Heang Chankosal <span className="text-gold italic">&</span> Prach Kanhary
          </p>
        </div>
        
        <div className="mb-12">
          <p className="font-khmer-body text-white/50 text-xs mb-1">
            យើងរង់ចាំទទួលស្វាគមន៍លោកអ្នកដោយក្តីរីករាយ
          </p>
          <p className="text-white/30 text-[9px] uppercase tracking-[0.5em]">
            We can't wait to celebrate with you
          </p>
        </div>
        
        <div className="w-px h-16 bg-gold/40 mx-auto mb-12" />
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-white/40 text-[9px] uppercase tracking-widest">
          <span>#HeangAndPrach2026</span>
          <span className="text-gold hidden md:inline">•</span>
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center">
            <span className="font-khmer-body">រចនាឡើងដោយក្តីស្រឡាញ់</span>
            <span className="hidden md:inline text-gold opacity-50">/</span>
            <span>Designed with Love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
