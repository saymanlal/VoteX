'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { voters } from '../../../src/data/voters';

export default function Location() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [voterId, setVoterId] = useState('');
  const [signatureImage, setSignatureImage] = useState('');
  const [message, setMessage] = useState('');
  const [verifiedVoter, setVerifiedVoter] = useState(null as null | { name: string; voterId: string; signatureImage: string; state?: string });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (verifiedVoter) {
      setMessage(`🚀 Access granted. Welcome, ${verifiedVoter.name}!`);
      localStorage.setItem('verifiedVoterName', verifiedVoter.name);

      timer = setTimeout(() => {
        router.push(`/voting?name=${encodeURIComponent(verifiedVoter.name)}`);
      }, 4000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [verifiedVoter, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedVoter = voters.find(
      (voter) =>
        voter.name === name &&
        voter.voterId === voterId &&
        voter.signatureImage === signatureImage
    );

    if (matchedVoter) {
      setVerifiedVoter(matchedVoter);
      setMessage(''); // clear previous errors
    } else {
      setVerifiedVoter(null);
      setMessage('❌ Access denied. Invalid details.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black p-8 relative overflow-hidden text-white font-sans">
      {/* Starry background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] animate-pulse mix-blend-screen" />
        <div className="absolute top-10 left-20 w-1 h-1 rounded-full bg-white opacity-50 animate-starTwinkle" />
        <div className="absolute top-24 right-32 w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-starTwinkle delay-1000" />
        <div className="absolute bottom-20 left-28 w-1 h-1 rounded-full bg-white opacity-40 animate-starTwinkle delay-500" />
      </div>

      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-10 tracking-wide drop-shadow-lg glow-text">
        Voter Verification
      </h1>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-[#111217cc] rounded-xl p-8 shadow-lg shadow-indigo-700/50 backdrop-blur-md"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-6 px-5 py-3 rounded-md bg-transparent border text-white focus:outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Voter ID"
          className="w-full mb-6 px-5 py-3 rounded-md bg-transparent border text-white focus:outline-none transition"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Signature Image Filename"
          className="w-full mb-8 px-5 py-3 rounded-md bg-transparent border text-white focus:outline-none transition"
          value={signatureImage}
          onChange={(e) => setSignatureImage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg tracking-wide shadow-md shadow-indigo-600/70 transition duration-300 glow-button"
        >
          Verify
        </button>
      </form>

      {message && (
        <div
          className={`relative z-10 mt-8 max-w-md p-5 rounded-lg text-center font-semibold ${
            verifiedVoter
              ? 'bg-green-900 text-green-300 shadow-lg shadow-green-500/50'
              : 'bg-red-900 text-red-400 shadow-lg shadow-red-500/50'
          }`}
        >
          {message}
        </div>
      )}

      <style jsx>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-starTwinkle {
          animation: starTwinkle 3s infinite ease-in-out;
        }
        .glow-text {
          text-shadow:
            0 0 5px #7f00ff,
            0 0 5px #7f00ff,
            0 0 10px #7f00ff,
            0 0 20px #8a2be2;
        }
        .glow-button {
          box-shadow:
            0 0 5px #7f00ff,
            0 0 10px #7f00ff,
            0 0 20px #8a2be2;
        }
      `}</style>
    </div>
  );
}
