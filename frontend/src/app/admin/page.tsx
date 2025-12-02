'use client';

import LocationMapClient from "@/components/ui/LocationMapClient";
import VoteBarChart from "@/components/ui/VoteBarChart";
import { useEffect, useState } from "react";

const dummyData = [
  { name: "Bhartiya GenZ Party", votes: 12 },
  { name: "Sooryavansham", votes: 3 },
  { name: "Brahmax 1.O", votes: 6 },
  { name: "Team Vasiliades", votes: 9 }
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh",
];

export default function AdminPage() {
  const latitude = 23.2003;
  const longitude = 79.8819;

  const [stars, setStars] = useState<
    { x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);
  const [isLive, setIsLive] = useState(() => {
    return localStorage.getItem('votingRedirect') === 'true';
  });
  const [selectedState, setSelectedState] = useState("Madhya Pradesh");

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  const handleToggleVoting = () => {
    if (isLive) {
      localStorage.setItem('votingRedirect', 'false');
      alert("Live Voting Disabled. 'Check' now goes to Location.");
    } else {
      localStorage.setItem('votingRedirect', 'true');
      alert("Live Voting Enabled. 'Check' now goes to Voting.");
    }
    setIsLive(!isLive);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Starfield Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-80 animate-starfall"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-10">
        <div className="flex text-8xl font-bold animate-fade-up">
          <span className="text-white glow-text pt-3">Vote</span>
          <div className="text-blue-600 glow-text text-9xl">X</div>
        </div>
      </div>

      {/* Toggle Button and Selector */}
      <div>
        <button
          onClick={handleToggleVoting}
          className="absolute top-20 right-16 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group z-[999]"
        >
          {isLive && (
            <span className="mr-2 inline-block w-4 h-4 rounded-full bg-red-500 animate-pulse" title="Live"></span>
          )}
          <span className="relative cursor-pointer text-white font-bold transition-colors duration-200 ease-in-out z-10">
            {isLive ? 'Live' : 'Live Voting'}
          </span>
        </button>

        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="absolute top-[90px] right-[200px] bg-indigo-600 text-white rounded-md px-4 py-2 focus:outline-none z-[999] pointer-events-auto"
          aria-label="Select State"
        >
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Main Display */}
      <div className="relative z-10 flex w-full">
        <div className="flex w-full justify-evenly pt-5">
          <div className="flex">
            <LocationMapClient latitude={latitude} longitude={longitude} />
          </div>

          <div className="flex">
            <VoteBarChart data={dummyData} />
          </div>
        </div>
      </div>

      {/* Total Count */}
      <div className="absolute bottom-5 left-[46%] z-10">
        <div className="bg-white text-black px-5 py-2 font-bold rounded-2xl">
          Total Count: 12
        </div>
      </div>
    </div>
  );
}
