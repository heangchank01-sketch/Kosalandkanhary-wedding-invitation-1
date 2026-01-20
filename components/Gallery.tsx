
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import { useContent } from '../App';

interface GalleryImage {
  id: string;
  src: string;
}

const Gallery: React.FC = () => {
  const { content, updateContent, isEditMode } = useContent();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const galleryImages = content.gallery || [];

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newImages: GalleryImage[] = [];
    const uploadPromises = Array.from(files).map((file) => {
      return new Promise<void>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (result) {
            newImages.push({
              id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
              src: result
            });
          }
          resolve();
        };
        reader.readAsDataURL(file);
      });
    });

    await Promise.all(uploadPromises);
    if (newImages.length > 0) {
      updateContent({ ...content, gallery: [...newImages, ...galleryImages] });
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = (id: string) => {
    if (window.confirm('តើអ្នកពិតជាចង់លុបរូបភាពនេះមែនទេ? / Are you sure?')) {
      updateContent({ ...content, gallery: galleryImages.filter((img) => img.id !== id) });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-khmer-body font-bold text-[#333333] mb-1">រូបភាពអនុស្សាវរីយ៍</h2>
        <p className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4">Captured Moments</p>
        
        <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
        
        <p className="font-khmer-body text-gray-500 text-sm mb-1">រូបភាពមុនអាពាហ៍ពិពាហ៍</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest italic">Pre-Wedding Highlights</p>

        {isEditMode && (
          <div className="mt-8 flex flex-col items-center">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" multiple className="hidden" />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex flex-col items-center px-8 py-3 bg-gold text-white hover:bg-[#b38f4d] transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <Upload size={14} />
                <span className="font-khmer-body text-xs">បញ្ចូលរូបភាព</span>
              </div>
              <span className="text-[8px] uppercase tracking-widest opacity-70">Upload Photos</span>
            </button>
          </div>
        )}
      </div>

      {galleryImages.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden bg-gray-100 rounded-sm relative group break-inside-avoid"
              >
                <img src={image.src} alt="Gallery" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                {isEditMode && (
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 text-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:text-red-500 shadow-md transform hover:scale-110 pointer-events-auto"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-32 border border-dashed border-gray-200 rounded-lg bg-gray-50/30 flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
            <ImageIcon size={32} />
          </div>
          <p className="font-khmer-body text-gray-400 text-sm">មិនទាន់មានរូបភាពនៅឡើយទេ</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">No photos yet</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
