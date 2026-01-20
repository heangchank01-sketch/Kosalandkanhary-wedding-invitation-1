
import React from 'react';
import { useContent } from '../App';
import { Pencil, Check } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const { isEditMode, toggleEditMode } = useContent();

  const navItems = [
    { labelKh: 'ព័ត៌មាន', labelEn: 'Details', href: '#details' },
    { labelKh: 'រូបភាព', labelEn: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#home" className={`font-serif text-2xl tracking-widest transition-colors duration-300 ${
            isScrolled ? 'text-[#333333]' : 'text-white'
          }`}>
            H<span className="text-gold">&</span>P
          </a>
          
          <button
            onClick={toggleEditMode}
            className={`p-2 rounded-full transition-all duration-300 ${
              isEditMode 
                ? 'bg-gold text-white shadow-lg scale-110' 
                : (isScrolled ? 'bg-gray-100 text-gray-400 hover:text-gold' : 'bg-white/10 text-white/50 hover:text-white')
            }`}
          >
            {isEditMode ? <Check size={14} /> : <Pencil size={14} />}
          </button>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.labelEn}
              href={item.href}
              className={`flex flex-col items-center group transition-colors hover:text-gold ${
                isScrolled ? 'text-[#333333]' : 'text-white'
              }`}
            >
              <span className="font-khmer-body text-[11px] leading-tight">{item.labelKh}</span>
              <span className="uppercase text-[8px] tracking-[0.2em] font-medium opacity-70 group-hover:opacity-100">{item.labelEn}</span>
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
           <span className={`text-[10px] tracking-widest font-bold ${isScrolled ? 'text-gold' : 'text-white'}`}>
             H & P 2026
           </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
