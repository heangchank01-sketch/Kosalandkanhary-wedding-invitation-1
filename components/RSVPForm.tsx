
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending',
    guests: '1',
    dietary: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/40 backdrop-blur-xl border border-white/40 p-10 md:p-16 rounded-sm shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-khmer-body font-bold text-[#333333] mb-1">ការឆ្លើយតប</h2>
          <p className="text-xs text-gold uppercase tracking-widest mb-4 font-serif">RSVP</p>
          
          <div className="w-8 h-[1px] bg-gold mx-auto mb-4" />
          
          <p className="font-khmer-body text-gray-500 text-xs">សូមផ្ដល់សេចក្តីឆ្លើយតបត្រឹមថ្ងៃទី ០១ ខែ កញ្ញា</p>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider italic">Kindly respond by September 1st</p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-khmer-body font-bold text-[#333333] mb-1">សូមអរគុណ! / Thank You!</h3>
            <p className="text-gray-600 font-khmer-body text-sm">យើងបានទទួលសេចក្តីឆ្លើយតបរបស់លោកអ្នកហើយ។</p>
            <p className="text-[10px] text-gray-400 italic">We have received your response.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 font-khmer-body text-xs text-gold underline tracking-normal"
            >
              ធ្វើបច្ចុប្បន្នភាព / Update
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="block ml-1">
                <span className="font-khmer-body text-[11px] text-[#333333] block">ឈ្មោះពេញ</span>
                <span className="text-[8px] uppercase tracking-widest text-gray-400 block">Full Name</span>
              </label>
              <input
                type="text"
                required
                className="w-full bg-white/60 border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 placeholder-gray-300 font-khmer-body text-sm"
                placeholder="ឈ្មោះរបស់អ្នក / Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block ml-1">
                  <span className="font-khmer-body text-[11px] text-[#333333] block">តើលោកអ្នកនឹងចូលរួមដែរឬទេ?</span>
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 block">Will you attend?</span>
                </label>
                <select
                  className="w-full bg-white/60 border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 font-khmer-body text-sm"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="attending">រីករាយនឹងចូលរួម / Happily Attending</option>
                  <option value="declined">សូមអភ័យទោស / Regretfully Decline</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block ml-1">
                  <span className="font-khmer-body text-[11px] text-[#333333] block">ចំនួនភ្ញៀវ</span>
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 block">Number of Guests</span>
                </label>
                <select
                  className="w-full bg-white/60 border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 font-khmer-body text-sm"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  <option value="1">1 នាក់ / Person</option>
                  <option value="2">2 នាក់ / People</option>
                  <option value="3">3 នាក់ / People</option>
                  <option value="4">4 នាក់ / People</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block ml-1">
                <span className="font-khmer-body text-[11px] text-[#333333] block">តម្រូវការអាហារពិសេស</span>
                <span className="text-[8px] uppercase tracking-widest text-gray-400 block">Dietary Requirements</span>
              </label>
              <textarea
                className="w-full bg-white/60 border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 resize-none h-24 font-khmer-body text-sm"
                placeholder="ឧទាហរណ៍៖ អាលែកហ្សីជាមួយសណ្តែក / Ex. Nut allergy"
                value={formData.dietary}
                onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#333333] text-white py-4 transition-all hover:bg-gold shadow-xl flex flex-col items-center justify-center"
            >
              <span className="font-khmer-body text-sm mb-0.5">ផ្ញើសេចក្តីឆ្លើយតប</span>
              <span className="text-[8px] uppercase tracking-[0.3em] opacity-60">Send RSVP</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default RSVPForm;
