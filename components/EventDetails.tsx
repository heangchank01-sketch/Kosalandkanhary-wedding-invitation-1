
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  const scheduleData = {
    day1: {
      dateKh: 'ថ្ងៃសៅរ៍ ទី ០៧ ខែ កុម្ភៈ ឆ្នាំ ២០២៦',
      dateEn: 'Saturday, February 07, 2026',
      locationKh: 'គេហដ្ឋានខាងស្រី',
      locationEn: "Bride's Residence",
      addressKh: 'ភូមិត្រពាំងវែង ឃុំអង្គភ្នំតូច ស្រុកអង្គរជ័យ ខេត្តកំពត',
      addressEn: 'Trapeang Veng Village, Kampot Province',
      events: [
        { timeKh: 'វេលាម៉ោង ០៣:០០ រសៀល', timeEn: '3:00 PM', titleKh: 'ពិធីសែនក្រុងពាលី', titleEn: 'Krong Peali Ceremony' },
        { timeKh: 'វេលាម៉ោង ០៤:៣៥ រសៀល', timeEn: '4:35 PM', titleKh: 'ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត', titleEn: "Buddhist Monks' Blessing" },
        { timeKh: 'វេលាម៉ោង ០៥:២០ ល្ងាច', timeEn: '5:20 PM', titleKh: 'អញ្ជើញភ្ញៀវពិសាអាហារពេលល្ងាច', titleEn: 'Dinner Reception' },
        { timeKh: 'វេលាម៉ោង ០៦:០០ ល្ងាច', timeEn: '6:00 PM', titleKh: 'ពិធីជាវខាន់ស្លា', titleEn: 'Khan Sla Purchase Ceremony' }
      ]
    },
    day2: {
      dateKh: 'ថ្ងៃអាទិត្យ ទី ០៨ ខែ កុម្ភៈ ឆ្នាំ ២០២៦',
      dateEn: 'Sunday, February 08, 2026',
      locationKh: 'គេហដ្ឋានខាងស្រី',
      locationEn: "Bride's Residence",
      addressKh: 'ភូមិត្រពាំងវែង ឃុំអង្គភ្នំតូច ស្រុកអង្គរជ័យ ខេត្តកំពត',
      addressEn: 'Trapeang Veng Village, Kampot Province',
      events: [
        { timeKh: 'វេលាម៉ោង ០៦:៣៥ ព្រឹក', timeEn: '6:35 AM', titleKh: 'ជួបជុំភ្ញៀវកិត្តិយសរៀបចំពិធីហែជំនួន', titleEn: 'Procession Gathering' },
        { timeKh: 'វេលាម៉ោង ០៧:០៥ ព្រឹក', timeEn: '7:05 AM', titleKh: 'ពិធីហែជំនួន (កំណត់)', titleEn: "Groom's Procession" },
        { timeKh: 'វេលាម៉ោង ០៧:៣០ ព្រឹក', timeEn: '7:30 AM', titleKh: 'អញ្ជើញភ្ញៀវពិសាអាហារពេលព្រឹក', titleEn: 'Breakfast Reception' },
        { timeKh: 'វេលាម៉ោង ០៨:១០ ព្រឹក', timeEn: '8:10 AM', titleKh: 'ពិធីចៅមហានិយាយជើងការ', titleEn: 'Traditional Negotiation' },
        { timeKh: 'វេលាម៉ោង ០៨:៣០ ព្រឹក', timeEn: '8:30 AM', titleKh: 'ពិធីបំពាក់ចិញ្ចៀន', titleEn: 'Ring Exchange Ceremony' },
        { timeKh: 'វេលាម៉ោង ១០:០៥ ព្រឹក', timeEn: '10:05 AM', titleKh: 'ពិធីកាត់សក់បង្កក់សិរី', titleEn: 'Hair Cutting Ceremony' },
        { timeKh: 'វេលាម៉ោង ១១:០៥ ព្រឹក', timeEn: '11:05 AM', titleKh: 'ពិធីសំពះពេលា សំពះផ្ទឹម សែនចងដៃ បង្វិលពពិល និងបាចផ្កាស្លា', titleEn: 'Knot-Tying & Blessing Ceremony' },
        { timeKh: 'វេលាម៉ោង ១២:០០ ថ្ងៃត្រង់', timeEn: '12:00 PM', titleKh: 'អញ្ជើញភ្ញៀវពិសាអាហារថ្ងៃត្រង់', titleEn: 'Lunch Reception' },
        { timeKh: 'វេលាម៉ោង ០៥:០០ ល្ងាច', timeEn: '5:00 PM', titleKh: 'អញ្ជើញភ្ញៀវពិសាភោជនាហារ', titleEn: 'Grand Wedding Banquet' }
      ]
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-khmer-body font-bold text-[#333333] mb-1">កម្មវិធីមង្គលការ</h2>
        <p className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4">The Celebration</p>
        <div className="w-12 h-[1px] bg-gold mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {[scheduleData.day1, scheduleData.day2].map((day, dIdx) => (
          <motion.div
            key={dIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDFCFB] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-8 text-gold border-b border-gray-100 pb-6">
              <Calendar size={28} />
              <div>
                <h3 className="text-xl font-khmer-body font-bold text-[#333333] leading-tight">{day.dateKh}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-serif">{day.dateEn}</p>
              </div>
            </div>
            
            <div className="space-y-8 mb-10">
              {day.events.map((ev, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-24 md:w-28 flex flex-col pt-1">
                    <span className="text-[10px] text-gold font-bold font-khmer-body leading-tight">{ev.timeKh}</span>
                    <span className="text-[8px] text-gray-400 uppercase tracking-tighter">{ev.timeEn}</span>
                  </div>
                  <div className="flex-grow pb-4 border-b border-gray-50 group-last:border-0">
                    <p className="text-[#333333] font-khmer-body font-medium leading-relaxed mb-0.5">{ev.titleKh}</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wide italic">{ev.titleEn}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-gold" />
                <div>
                  <p className="font-khmer-body font-bold text-[#333333] leading-tight">{day.locationKh}</p>
                  <p className="text-[9px] uppercase text-gray-400 font-serif">{day.locationEn}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6 font-khmer-body leading-relaxed pl-8">
                {day.addressKh}<br/>
                <span className="text-[10px] italic opacity-60">{day.addressEn}</span>
              </p>
              <a 
                href="https://maps.app.goo.gl/Jxei3XRsSPEJdECD7?g_st=ipc"
                target="_blank"
                className="inline-flex flex-col items-center justify-center w-full py-3 bg-[#333333] text-white transition-all hover:bg-gold"
              >
                <span className="font-khmer-body text-xs">មើលទីតាំងលើផែនទី</span>
                <span className="text-[8px] uppercase tracking-widest opacity-60">Open Location</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
