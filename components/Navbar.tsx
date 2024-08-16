import React, { useState } from 'react';
import { HomeIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around items-center py-2 shadow-lg">
        <Link href="/">
        
      <button
        className={`flex flex-col items-center ${activeTab === 'home' ? 'text-red-500' : 'text-gray-400'}`}
        onClick={() => setActiveTab('home')}
      >
        <HomeIcon className="h-6 w-6 mb-1" />
        <span className="text-xs">Home</span>
      </button>
      </Link>
      <Link href="/Dapps">
      <button
        className={`flex flex-col items-center ${activeTab === 'dapps' ? 'text-red-500' : 'text-gray-400'}`}
        onClick={() => setActiveTab('dapps')}
      >
        <div className="relative">
          <GlobeAltIcon className="h-14 w-14 p-2 rounded-full bg-red-600 text-white" />
          <span className="absolute inset-0 rounded-full border-2 border-red-500" />
        </div>
        <span className="text-xs mt-1">DApps</span>
      </button>
      </Link>

      
      <Link href="/Mission">
      <button
        className={`flex flex-col items-center ${activeTab === 'missions' ? 'text-red-500' : 'text-gray-400'}`}
        onClick={() => setActiveTab('missions')}
      >
        
        <TrophyIcon className="h-6 w-6 mb-1" />
        <span className="text-xs">Missions</span>
      </button>
      </Link>

    </div>
  );
};

export default Navbar;