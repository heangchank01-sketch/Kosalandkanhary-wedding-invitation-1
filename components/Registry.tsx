
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

const Registry: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gold/20 mb-4">
          <Gift className="text-gold w-6 h-6" />
        </div>
        
        <div>
          <h2 className="text-3xl font-khmer-body font-bold text-[#333333] mb-1">សមានចិត្ត</h2>
          <p className="text-gold uppercase tracking-[0.2em] text-[10px] font-serif italic">Wishing Well</p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-khmer-body text-gray-600 leading-relaxed text-sm">
            វត្តមានដ៏ខ្ពង់ខ្ពស់របស់លោកអ្នកគឺជាកាដូដ៏មានតម្លៃបំផុតសម្រាប់ពួកយើង។ ប្រសិនបើលោកអ្នកមានបំណងផ្តល់ជាសមានចិត្តសម្រាប់ពួកយើង លោកអ្នកអាចធ្វើការផ្ទេរតាមរយៈគណនីខាងក្រោម។
          </p>
          <p className="text-gray-400 text-xs italic leading-relaxed font-light">
            Your presence at our wedding is the greatest gift of all. However, should you wish to honor us with a gift, a contribution to our wishing well would be sincerely appreciated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-white border border-gray-100 rounded-sm shadow-sm flex flex-col items-center">
            <h4 className="font-khmer-body text-gold text-xs mb-0.5">ព័ត៌មានគណនី</h4>
            <span className="text-[8px] uppercase tracking-[0.2em] text-gray-300 mb-4">Bank Details</span>
            <div className="space-y-1">
              <p className="font-khmer-body text-[#333333] font-medium text-sm">អាពាហ៍ពិពាហ៍របស់ ច័ន្ទកុសល & កញ្ញារី</p>
              <p className="text-[10px] text-gray-400 italic mb-3">Chankosal & Kanhary Wedding</p>
              <p className="text-sm text-gray-600 font-bold tracking-widest">ABA: 000 000 000</p>
              <p className="text-[9px] text-gray-400 font-bold uppercase">Name: HEANG CHANKOSAL / PRACH KANHARY</p>
            </div>
          </div>
          
          <div className="p-8 bg-white border border-gray-100 rounded-sm shadow-sm flex flex-col items-center justify-center">
            <h4 className="font-khmer-body text-gold text-xs mb-0.5">បញ្ជីកាដូ</h4>
            <span className="text-[8px] uppercase tracking-[0.2em] text-gray-300 mb-6">Gift Registry</span>
            <a 
              href="#" 
              className="inline-flex flex-col items-center px-8 py-3 border border-gold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              <span className="font-khmer-body text-xs">មើលបញ្ជីកាដូអនឡាញ</span>
              <span className="text-[8px] uppercase tracking-widest opacity-60">View Online Registry</span>
            </a>
          </div>
        </div>

        <div className="pt-12 flex justify-center items-center space-x-2 text-gold/40">
          <div className="w-12 h-[1px] bg-gold/40" />
          <Heart size={14} />
          <div className="w-12 h-[1px] bg-gold/40" />
        </div>
      </motion.div>
    </div>
  );
};

export default Registry;
