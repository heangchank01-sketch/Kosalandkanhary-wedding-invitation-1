
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useLanguage, useContent } from '../App';

const OurStory: React.FC = () => {
  const { lang } = useLanguage();
  const { content, updateContent, isEditMode } = useContent();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

  const milestones = content.story[lang];

  const handleTextChange = (index: number, field: 'title' | 'description' | 'date', value: string) => {
    const newMilestones = [...milestones];
    newMilestones[index] = { ...newMilestones[index], [field]: value };
    
    updateContent({
      ...content,
      story: {
        ...content.story,
        [lang]: newMilestones
      }
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeImageIndex !== null) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          // Update image for ALL languages to keep visuals consistent, 
          // or just the current language? Usually images are shared.
          // Let's update both en and kh for the same index to keep them in sync visually.
          const newContent = { ...content };
          const imgStr = event.target.result as string;
          
          newContent.story.en[activeImageIndex].image = imgStr;
          newContent.story.kh[activeImageIndex].image = imgStr;
          
          updateContent(newContent);
          setActiveImageIndex(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = (index: number) => {
    setActiveImageIndex(index);
    // Slight timeout to ensure state is set before click (React batching)
    setTimeout(() => fileInputRef.current?.click(), 0);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-serif text-[#333333] mb-4 italic ${lang === 'kh' ? 'not-italic font-bold font-khmer-body' : ''}`}>
          {lang === 'en' ? 'Our Story' : 'សាច់រឿងរបស់យើង'}
        </h2>
        <div className="w-12 h-[1px] bg-gold mx-auto" />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gold/30 hidden md:block" />

        {milestones.map((milestone, index) => (
          <motion.div
            key={`${lang}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center mb-24 last:mb-0 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 relative group">
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 border-[12px] border-[#F9F7F2]/20 m-4 pointer-events-none" />
                
                {/* Edit Image Overlay */}
                {isEditMode && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 backdrop-blur-[2px]">
                    <button
                      onClick={() => triggerImageUpload(index)}
                      className="bg-white/90 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white transition-colors shadow-lg"
                    >
                      <Camera size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest">Change Image</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full hidden md:block" />

            <div className={`w-full md:w-1/2 px-8 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              
              {isEditMode ? (
                <div className="flex flex-col gap-3">
                   <input
                    value={milestone.date}
                    onChange={(e) => handleTextChange(index, 'date', e.target.value)}
                    className={`text-gold text-xs tracking-[0.3em] uppercase block font-medium bg-gray-50 border border-gray-200 p-2 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    placeholder="Date"
                  />
                  <input
                    value={milestone.title}
                    onChange={(e) => handleTextChange(index, 'title', e.target.value)}
                    className={`text-2xl font-serif text-[#333333] font-bold bg-gray-50 border border-gray-200 p-2 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    placeholder="Title"
                  />
                  <textarea
                    value={milestone.description}
                    onChange={(e) => handleTextChange(index, 'description', e.target.value)}
                    className={`text-gray-600 leading-relaxed w-full bg-gray-50 border border-gray-200 p-2 min-h-[100px] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    placeholder="Description"
                  />
                </div>
              ) : (
                <>
                  <span className={`text-gold text-xs tracking-[0.3em] uppercase mb-2 block font-medium ${lang === 'kh' ? 'font-khmer-body tracking-normal' : ''}`}>
                    {milestone.date}
                  </span>
                  <h3 className={`text-2xl font-serif text-[#333333] mb-4 ${lang === 'kh' ? 'text-3xl font-khmer-body font-bold' : ''}`}>
                    {milestone.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0 ${lang === 'kh' ? 'font-khmer-body' : ''}`}>
                    {milestone.description}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
