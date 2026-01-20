
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useContent } from '../App';

const WEDDING_DATE = new Date('2026-02-08T17:00:00').getTime();

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = WEDDING_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const values = [
    { val: timeLeft.days, kh: 'ថ្ងៃ', en: 'Days' },
    { val: timeLeft.hours, kh: 'ម៉ោង', en: 'Hours' },
    { val: timeLeft.minutes, kh: 'នាទី', en: 'Minutes' },
    { val: timeLeft.seconds, kh: 'វិនាទី', en: 'Seconds' }
  ];

  return (
    <div className="flex gap-4 md:gap-8 mt-12">
      {values.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-serif text-white mb-1">
            {item.val.toString().padStart(2, '0')}
          </span>
          <span className="font-khmer-body text-[10px] text-white/80 leading-tight">
            {item.kh}
          </span>
          <span className="text-[7px] uppercase tracking-[0.1em] text-white/50">
            {item.en}
          </span>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const { content, updateContent, isEditMode } = useContent();
  const [offsetY, setOffsetY] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateContent({
            ...content,
            hero: { ...content.hero, bgImage: event.target.result as string }
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center group bg-[#222]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url("${content.hero.bgImage}")`,
          transform: `translateY(${offsetY * 0.4}px)`,
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className={`absolute bottom-8 right-8 z-20 transition-opacity duration-300 ${isEditMode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
        />
        <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 text-xs uppercase tracking-widest hover:bg-white/20 hover:text-white transition-all shadow-lg"
        >
            <Camera size={14} />
            <span>Change Cover</span>
        </button>
      </div>
      
      <div className="relative z-10 px-4 flex flex-col items-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="mb-8">
            <span className="font-khmer-body text-white/90 text-sm block mb-1 tracking-wide">{content.hero.kh.sub}</span>
            <span className="text-white/60 uppercase tracking-[0.4em] text-[8px] block">{content.hero.en.sub}</span>
          </div>

          <div className="text-white mb-10 leading-tight flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg" style={{ fontFamily: "'Moul', serif" }}>
                {content.hero.kh.name1}
              </span>
              <span className="text-[10px] md:text-sm font-serif opacity-40 uppercase tracking-[0.4em]">
                {content.hero.en.name1}
              </span>
            </div>
            
            <span className="text-gold italic text-2xl md:text-4xl opacity-80">&</span>

            <div className="flex flex-col items-center space-y-1">
              <span className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg" style={{ fontFamily: "'Moul', serif" }}>
                {content.hero.kh.name2}
              </span>
              <span className="text-[10px] md:text-sm font-serif opacity-40 uppercase tracking-[0.4em]">
                {content.hero.en.name2}
              </span>
            </div>
          </div>
          
          <div className="w-10 h-[1px] bg-gold/50 mx-auto my-8" />
          
          <div className="mb-12">
            <p className="font-khmer-body text-white/95 text-lg md:text-xl mb-1 tracking-wide">
              {content.hero.kh.date}
            </p>
            <p className="text-white/40 text-[9px] md:text-xs tracking-[0.3em] font-serif uppercase">
              {content.hero.en.date}
            </p>
          </div>
          
          <CountdownTimer />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F9F7F2] to-transparent z-10" />
    </div>
  );
};

export default Hero;
