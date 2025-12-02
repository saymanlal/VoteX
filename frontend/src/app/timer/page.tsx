'use client';
import { useState, useEffect } from 'react';

const FlipUnit = ({ value, label, size = 'lg' }: { value: number, label: string, size?: string }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [nextValue, setNextValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== currentValue) {
      setNextValue(value);
      setIsFlipping(true);
      
      const flipTimeout = setTimeout(() => {
        setCurrentValue(value);
        setIsFlipping(false);
      }, 600);

      return () => clearTimeout(flipTimeout);
    }
  }, [value, currentValue]);

  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-[100px] h-[110px] md:w-[120px] md:h-[130px] bg-gray-900 text-white text-5xl md:text-6xl font-bold rounded-lg overflow-hidden shadow-lg`}>
        <div className={`absolute inset-0 flex items-center justify-center ${isFlipping ? 'flip-out' : ''}`}>
          {String(currentValue).padStart(2, '0')}
        </div>
        {isFlipping && (
          <div className="absolute inset-0 flex items-center justify-center flip-in">
            {String(nextValue).padStart(2, '0')}
          </div>
        )}
      </div>
      <div className="text-base text-gray-400 mt-2 uppercase tracking-wider">
        {label}
      </div>
      
      <style>{`
        .flip-out {
          animation: flipOut 0.6s ease-in-out forwards;
          transform-origin: bottom;
          backface-visibility: hidden;
        }
        .flip-in {
          animation: flipIn 0.6s ease-in-out forwards;
          transform-origin: top;
          backface-visibility: hidden;
        }
        @keyframes flipOut {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(90deg); opacity: 0; }
        }
        @keyframes flipIn {
          0% { transform: rotateX(-90deg); opacity: 0; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default function CountdownWithLocation() {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Location state
  const [location, setLocation] = useState('');
  const [district, setDistrict] = useState('');
  const [locationLoading, setLocationLoading] = useState(false);

  // Initialize countdown
  useEffect(() => {
    const targetDate = new Date('2028-11-17T12:00:00');
    
    const update = () => {
      const now = new Date();
      let diff = targetDate.getTime() - now.getTime();
      if (diff < 0) return;

      const ms = {
        second: 1000,
        minute: 60_000,
        hour: 3_600_000,
        day: 86_400_000,
        year: 365.25 * 86_400_000,
      };

      const years = Math.floor(diff / ms.year);
      diff %= ms.year;
      const days = Math.floor(diff / ms.day);
      diff %= ms.day;
      const hours = Math.floor(diff / ms.hour);
      diff %= ms.hour;
      const minutes = Math.floor(diff / ms.minute);
      diff %= ms.minute;
      const seconds = Math.floor(diff / ms.second);

      setTimeLeft({ years, days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load location from localStorage
  useEffect(() => {
    const savedLocation = localStorage.getItem('user_location');
    const savedDistrict = localStorage.getItem('user_district');
    if (savedLocation) setLocation(savedLocation);
    if (savedDistrict) setDistrict(savedDistrict);
  }, []);

  const getLocationDetails = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=d0ba148bbcf6450285431bfd4c70945a`
      );
      const data = await response.json();

      const result = data?.results?.[0];
      const components = result?.components || {};

      const village = components.village || components.hamlet || components.suburb || '';
      const city = components.city || components.town || components.village || components.county || '';
      const state = components.state || '';
      const postcode = components.postcode || '';

      const formattedLocation = [village, city, state, postcode]
        .filter(Boolean)
        .join(', ');

      const districtName = components.county || components.state_district || components.district || '';

      return {
        fullLocation: formattedLocation || 'Unknown Location',
        district: districtName || 'Unknown District',
      };
    } catch (error) {
      console.error('Error fetching location:', error);
      return {
        fullLocation: 'Error retrieving location',
        district: 'Error retrieving district',
      };
    }
  };

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const locationDetails = await getLocationDetails(
          position.coords.latitude,
          position.coords.longitude
        );
        setLocation(locationDetails.fullLocation);
        setDistrict(locationDetails.district);
        localStorage.setItem('user_location', locationDetails.fullLocation);
        localStorage.setItem('user_district', locationDetails.district);
        setLocationLoading(false);
      },
      (error) => {
        console.error(error);
        setLocation('Location access denied or unavailable');
        setDistrict('');
        setLocationLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center p-4 space-y-12">
      {/* Countdown Section */}
      <div className="w-full max-w-6xl bg-gray-800 bg-opacity-70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 shadow-2xl">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
          Countdown to November 17, 2028
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <FlipUnit label="Years" value={timeLeft.years} />
          <FlipUnit label="Days" value={timeLeft.days} />
          <FlipUnit label="Hours" value={timeLeft.hours} />
          <FlipUnit label="Minutes" value={timeLeft.minutes} />
          <FlipUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-80 p-6">
        <div className="flex flex-col items-center">
          <button
            onClick={handleLocationClick}
            disabled={locationLoading}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
              locationLoading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
            } text-white shadow-md`}
          >
            {locationLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Detecting Location...
              </span>
            ) : (
              'Get My Location'
            )}
          </button>

          <div className="mt-6 w-full">
            {locationLoading ? (
              <div className="h-24 flex items-center justify-center">
                <p className="text-gray-300 text-lg">Fetching your location...</p>
              </div>
            ) : (
              <div className="bg-gray-900 bg-opacity-60 p-5 rounded-lg border border-gray-700">
                {location && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-blue-400">YOUR LOCATION</p>
                    <p className="text-xl font-semibold text-white">{location}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Combined Footer */}
      <div className="text-center text-gray-300">
        <p className="text-md font-semibold">
          &copy; Copyright 2025
        </p>
      </div>
    </div>
  );
}
