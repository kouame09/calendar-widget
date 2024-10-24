import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, PenLine, Plus } from 'lucide-react';
import { format, addDays, subDays } from 'date-fns';

const Calendar = () => {
  const [view, setView] = useState<'weekly' | 'monthly'>('weekly');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = [-3, -2, -1, 0, 1, 2, 3].map(offset => {
    const date = offset === 0 ? selectedDate : (offset > 0 ? addDays(selectedDate, offset) : subDays(selectedDate, Math.abs(offset)));
    return {
      date,
      dayName: format(date, 'EEE'),
      dayNumber: format(date, 'd'),
    };
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-200/80 backdrop-blur-xl rounded-3xl p-6 w-[400px] shadow-xl"
    >
      <div className="flex justify-between items-center mb-6 ">
        <div className="flex space-x-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm ${view === 'weekly' ? 'bg-white text-black' : 'text-gray-600'}`}
            onClick={() => setView('weekly')}
          >
            Weekly
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm ${view === 'monthly' ? 'bg-white text-black' : 'text-gray-600'}`}
            onClick={() => setView('monthly')}
          >
            Monthly
          </motion.button>
        </div>
        <motion.button
          whileHover={{ rotate: 90 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="p-2 rounded-full hover:bg-white/10"
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>

      <div className="mb-8">
        <h1 className="text-5xl font-light text-gray-800 mb-6">
          {format(selectedDate, 'MMMM dd')}
        </h1>

        <div className="flex justify-between items-center">
          {days.map(({ date, dayName, dayNumber }, index) => (
            <motion.button
              key={dayNumber}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center ${
                index === 3 ? 'bg-blue-600 text-white p-6 rounded-lg w-10 h-10 flex items-center justify-center' : 'text-gray-600'
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <span className="text-sm">{dayName}</span>
              <span className="text-sm mt-1">{dayNumber}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center text-gray-600 text-sm"
        >
          <PenLine className="w-4 h-4 mr-2" />
          Add a note...
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Calendar;