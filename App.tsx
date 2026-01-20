
import React, { useEffect, useState, createContext, useContext } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import ApologyLetter from './components/ApologyLetter';
import WelcomeGate from './components/WelcomeGate';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export type Language = 'en' | 'kh';

// --- Default Content Data ---
const defaultContent = {
  hero: {
    bgImage: 'https://lh3.googleusercontent.com/d/17CT4vM2INHuBt9JcLbGxTPhyswwsCBbL',
    en: {
      sub: "The Wedding of",
      name1: "Heang Chankosal",
      name2: "Prach Kanhary",
      date: "February 8, 2026"
    },
    kh: {
      sub: "សិរីសួស្តីអាពាហ៍ពិពាហ៍",
      name1: "ហៀង ច័ន្ទកុសល",
      name2: "ប្រាជ្ញ កញ្ញារី",
      date: "ថ្ងៃអាទិត្យ ទី ០៨ ខែ កុម្ភៈ ឆ្នាំ ២០២៦"
    }
  },
  story: {
    en: [
      {
        date: "June 15, 2020",
        title: "First Encounter",
        description: "A chance meeting that changed our lives forever. We discovered a shared love for art and coffee.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
      },
      {
        date: "September 20, 2022",
        title: "Our First Trip",
        description: "Exploring the temples of Angkor together, building memories that would last a lifetime.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
      },
      {
        date: "January 1, 2025",
        title: "The Proposal",
        description: "Under the stars, he asked and she said yes. The beginning of our forever journey.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    kh: [
      {
        date: "ថ្ងៃទី ១៥ ខែ មិថុនា ឆ្នាំ ២០២០",
        title: "ការជួបគ្នាដំបូង",
        description: "ការជួបគ្នាដោយចៃដន្យដែលបានផ្លាស់ប្តូរជីវិតរបស់យើងជារៀងរហូត។ យើងបានរកឃើញចំណង់ចំណូលចិត្តរួមគ្នាលើសិល្បៈ និងកាហ្វេ។",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
      },
      {
        date: "ថ្ងៃទី ២០ ខែ កញ្ញា ឆ្នាំ ២០២២",
        title: "ដំណើរកម្សាន្តដំបូង",
        description: "ការរុករកប្រាសាទអង្គរវត្តជាមួយគ្នា បង្បង្កើតនូវអនុស្សាវរីយ៍ដែលមិនអាចបំភ្លេចបាន។",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
      },
      {
        date: "ថ្ងៃទី ០១ ខែ មករា ឆ្នាំ ២០២៥",
        title: "ការសុំរៀបការ",
        description: "នៅក្រោមពន្លឺតារា គាត់បានសុំរៀបការ ហើយនាងបានយល់ព្រម។ នេះជាការចាប់ផ្តើមនៃដំណើរជីវិតរួមគ្នាជារៀងរហូត។",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  gallery: [
    { id: 'highlight-1', src: 'https://lh3.googleusercontent.com/d/1M2wl48CcOXKIwRMo5DaCCoN_IPu3YNzW' },
    { id: 'highlight-2', src: 'https://lh3.googleusercontent.com/d/13f_p6NjYqRQK0cNupLrlDaGBIOBbsnCF' },
    { id: 'highlight-3', src: 'https://lh3.googleusercontent.com/d/1jOK321lvXhY1ncywBhevl5umzm_LApzo' },
    { id: 'highlight-4', src: 'https://lh3.googleusercontent.com/d/1DHl2LlA65fLvDwUR_HZ4GU-akc1LFujf' },
    { id: 'highlight-5', src: 'https://lh3.googleusercontent.com/d/16B3zQncibRTQhds-8yQckvAC7VyZ8wVQ' },
    { id: 'highlight-6', src: 'https://lh3.googleusercontent.com/d/1-AHXs_yKUcnHR-adRjRkd5RmHndyR9Y_' },
    { id: 'highlight-7', src: 'https://lh3.googleusercontent.com/d/1iqG5v2wz3jdKOyZLuQjDrT9RfFHY5C79' },
    { id: 'highlight-8', src: 'https://lh3.googleusercontent.com/d/1Lb4VTSTeZ0kLVVD59asgcCAHBwe1A3Ka' }
  ]
};

// --- Contexts ---

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

interface ContentContextType {
  content: typeof defaultContent;
  updateContent: (newContent: typeof defaultContent) => void;
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'en', setLang: () => {} });
const ContentContext = createContext<ContentContextType>({ 
  content: defaultContent, 
  updateContent: () => {}, 
  isEditMode: false, 
  toggleEditMode: () => {} 
});

export const useLanguage = () => useContext(LanguageContext);
export const useContent = () => useContext(ContentContext);

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('kh'); 
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState(defaultContent);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('wedding_app_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent({
          ...defaultContent,
          ...parsed,
          hero: parsed.hero || defaultContent.hero,
          story: parsed.story || defaultContent.story,
          gallery: parsed.gallery && parsed.gallery.length > 0 ? parsed.gallery : defaultContent.gallery
        });
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  const updateContent = (newContent: typeof defaultContent) => {
    setContent(newContent);
    try {
      localStorage.setItem('wedding_app_content', JSON.stringify(newContent));
    } catch (e) {
      console.warn("Storage quota exceeded or error saving", e);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <ContentContext.Provider value={{ content, updateContent, isEditMode, toggleEditMode: () => setIsEditMode(!isEditMode) }}>
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <WelcomeGate key="gate" onOpen={() => setIsOpen(true)} />
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="min-h-screen relative overflow-x-hidden"
            >
              <Navbar isScrolled={isScrolled} />
              
              <main>
                <Hero />
                
                <section id="details" className="py-24 bg-[#F9F7F2]">
                  <EventDetails />
                </section>

                <section id="gallery" className="py-24 bg-white">
                  <Gallery />
                </section>

                <section id="apology" className="py-24 bg-[#F9F7F2]">
                  <ApologyLetter />
                </section>
              </main>

              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </ContentContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
