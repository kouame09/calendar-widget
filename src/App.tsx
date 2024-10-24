import React from 'react';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-28">
      <div className="flex justify-between w-full max-w-[400px] mb-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <span className="mr-2">📅</span>
          <span className="text-sm font-medium">Daily Design Challenge</span>
        </div>
        <div className="bg-white rounded-full px-4 py-2 shadow-sm">
          <span className="text-sm font-medium">Day 9 / 23</span>
        </div>
      </div>
      
      <Calendar />

      <div className="mt-12 flex items-center">
        <img 
          src="/public/profile-pic.jpg" 
          alt="Profile" 
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
        />
        <div className="ml-4">
          <h3 className="font-medium">@princekouame</h3>
          <p className="text-sm text-gray-600">Software developer</p>
        </div>
      </div>
    </div>
  );
}

export default App;