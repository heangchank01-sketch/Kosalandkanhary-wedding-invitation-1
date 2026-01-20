
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

interface WelcomeGateProps {
  onOpen: () => void;
}

const WelcomeGate: React.FC<WelcomeGateProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState('');

  return (
    <motion.div 
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[100] bg-[#F9F7F2] flex flex-col items-center justify-center text-center p-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Heart Icon Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-gold/20 scale-110" />
            <Heart className="text-gold w-8 h-8 fill-gold/10" />
          </div>
          
          <h2 className="mt-8 font-serif text-[10px] uppercase tracking-[0.5em] text-gold/80 font-medium">
            Wedding Invitation
          </h2>
        </div>

        {/* Guest Input Section */}
        <div className="space-y-4">
          <p className="font-khmer-body text-gray-500 text-sm md:text-base">
            ជូនចំពោះ:
          </p>
          
          <div className="relative p-1">
            {/* Elegant Double Border Frame */}
            <div className="absolute inset-0 border border-gold/50 rounded-sm" />
            <div className="absolute inset-[3px] border border-gold/30 rounded-sm" />
            
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold" />
            
            {/* Center Diamonds */}
            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gold rotate-45" />
            <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gold rotate-45" />

            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="បញ្ចូលឈ្មោះភ្ញៀវកិត្តិយស"
              className="relative w-full py-6 px-4 bg-white text-center font-khmer-body text-[#333] text-lg md:text-xl outline-none placeholder-gray-200"
            />
          </div>
        </div>

        {/* Invitation Text */}
        <div className="pt-8 space-y-4">
          <p className="font-serif text-gray-500 text-xs italic opacity-70">
            You are cordially invited to the wedding of
          </p>
          
          <div className="space-y-1">
            <h1 className="font-serif text-3xl md:text-4xl text-gold" style={{ fontFamily: "'Moul', serif" }}>
              ហៀង ច័ន្ទកុសល
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-serif">
              Heang Chankosal
            </p>
          </div>
          
          <div className="text-gold italic text-2xl opacity-60 font-serif">&</div>

          <div className="space-y-1">
            <h1 className="font-serif text-3xl md:text-4xl text-gold" style={{ fontFamily: "'Moul', serif" }}>
              ប្រាជ្ញ កញ្ញារី
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-serif">
              Prach Kanhary
            </p>
          </div>

          <div className="pt-6">
            <p className="font-serif text-gray-600 text-sm tracking-widest uppercase">
              February 8, 2026
            </p>
          </div>
        </div>

        {/* Pulsing Button */}
        <div className="pt-10 flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 0 0px rgba(197, 160, 89, 0)",
                "0 0 0 15px rgba(197, 160, 89, 0.1)",
                "0 0 0 25px rgba(197, 160, 89, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={onOpen}
            className="group flex items-center gap-3 bg-gold text-white px-10 py-5 rounded-full shadow-xl transition-all hover:bg-[#b38f4d]"
          >
            <div className="flex flex-col items-center">
              <span className="font-khmer-body text-sm leading-tight">សូមចុចបើកការអញ្ជើញ</span>
            </div>
            <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <button 
            onClick={onOpen}
            className="mt-6 text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-gold transition-colors"
          >
            Open Invitation
          </button>
        </div>
      </motion.div>

      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 p-8 opacity-10 pointer-events-none">
        <div className="w-32 h-32 border-t-2 border-l-2 border-gold rounded-tl-[60px]" />
      </div>
      <div className="absolute bottom-0 right-0 p-8 opacity-10 pointer-events-none">
        <div className="w-32 h-32 border-b-2 border-r-2 border-gold rounded-br-[60px]" />
      </div>
    </motion.div>
  );
};

export default WelcomeGate;
