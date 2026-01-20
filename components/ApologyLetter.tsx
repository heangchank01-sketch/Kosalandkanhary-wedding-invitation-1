
import React from 'react';
import { motion } from 'framer-motion';

const ApologyLetter: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-serif text-[#333333] mb-2" style={{ fontFamily: "'Moul', serif" }}>
            លិខិតសូមអភ័យទោស
          </h2>
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-serif font-medium">
            Apology Letter
          </p>
        </div>

        {/* Decorative Ornament */}
        <div className="flex justify-center items-center gap-4 mb-10 opacity-60">
          <div className="w-16 md:w-24 h-[1px] bg-gold/40" />
          <div className="flex items-center">
             <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24 10L20 20L16 10L20 0Z" fill="#C5A059" />
                <circle cx="10" cy="10" r="2" fill="#C5A059" />
                <circle cx="30" cy="10" r="2" fill="#C5A059" />
             </svg>
          </div>
          <div className="w-16 md:w-24 h-[1px] bg-gold/40" />
        </div>

        {/* Message Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-gold/10 p-8 md:p-16 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="space-y-8">
            <p className="font-khmer-body text-[#444] leading-relaxed text-sm md:text-lg">
              យើងខ្ញុំជាមាតាបិតារបស់កូនប្រុស និងកូនស្រី សូមគោរពអញ្ជើញពីសំណាក់ ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី និងអ្នកនាងកញ្ញា ដែលជាភ្ញៀវកិត្តិយសទាំងអស់ ករណីដែលយើងខ្ញុំពុំបានជួបអញ្ជើញដោយផ្ទាល់។ យើងខ្ញុំសង្ឃឹមថា ភ្ញៀវកិត្តិយសទាំងអស់ នឹងផ្តល់កិត្តិយសអញ្ជើញចូលរួម ក្នុងពិធីមង្គលការអាពាហ៍ពិពាហ៍ របស់កូនប្រុស និងកូនស្រីរបស់យើងខ្ញុំ ដោយក្តីអនុគ្រោះ។
            </p>
            
            <div className="w-32 h-[1px] bg-gray-200 mx-auto" />

            <p className="font-serif text-gray-500 leading-relaxed text-xs md:text-base italic px-4 md:px-8">
              We, as the parents of the bride and groom, respectfully invite Their Excellencies, Ladies and Gentlemen, and all distinguished guests whom we have had the honor to invite personally. We sincerely hope that all distinguished guests will kindly honor us with your presence at the wedding ceremony of our son and daughter.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApologyLetter;
