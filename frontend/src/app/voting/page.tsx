'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { voters } from '../../../src/data/voters';
import { ethers } from 'ethers';
import CONTRACT_ABI from '../../../src/abis/VotingDApp.json'; // adjust this path

const CONTRACT_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

type VoterInfo = {
  id: string;
  name: string;
  constituency: string;
};

export default function CastVotePage() {
  const searchParams = useSearchParams();
  const nameFromParams = searchParams.get('name') || '';

  const [voterInfo, setVoterInfo] = useState<VoterInfo>({
    id: '',
    name: '',
    constituency: '',
  });

  const parties = [
    {
      id: 'Bhartiya GenZ Party',
      name: 'Bhartiya GenZ Party',
      description: 'Humka chahi badlaaa.',
      logo: '/bgp.png',
      candidate: ['Sunil Shetty'],
    },
    {
      id: 'Sooryavansham',
      name: 'Sooryavansham',
      description: 'Heera betee.',
      logo: '/sooryavansham.png',
      candidate: ['Bhanupratap Singh'],
    },
    {
      id: 'Brahmax 1.O',
      name: 'Brahmax 1.O',
      description: 'National Level Hackathon.',
      logo: '/brahmax1.O.png',
      candidate: ['Harsh Chouksey'],
    },
    {
      id: 'Team Vasiliades', // Unique ID fixed
      name: 'Team Vasiliades',
      description: 'Brahmax 1.O winners.',
      logo: '/vasiliades.png',
      candidate: ['Sayman Lal'],
    },
  ];

  const [selectedParty, setSelectedParty] = useState<string | null>(null);

  useEffect(() => {
    if (nameFromParams) {
      const matchedVoter = voters.find((voter) => voter.name === nameFromParams);
      if (matchedVoter) {
        setVoterInfo({
          id: matchedVoter.voterId,
          name: matchedVoter.name,
          constituency: matchedVoter.state || 'N/A',
        });
      } else {
        setVoterInfo({ id: '', name: nameFromParams, constituency: 'N/A' });
      }
    }
  }, [nameFromParams]);

  const handleVoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedParty) {
      alert('Please select a party to cast your vote.');
      return;
    }

    try {
      if (typeof window === 'undefined' || !window.ethereum) {
        alert('🦊 MetaMask not detected.');
        return;
      }

      console.log('window.ethereum detected:', window.ethereum);

      // Request accounts
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected accounts:', accounts);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      console.log('Current network:', network);

      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      console.log('Calling contract.vote with:', voterInfo.id, voterInfo.constituency, selectedParty);
      const tx = await contract.vote(voterInfo.id, voterInfo.constituency, selectedParty);

      console.log('Transaction response:', tx);

      await tx.wait();

      alert(`✅ Vote successfully cast for ${selectedParty}`);
    } catch (error: any) {
      console.error('Full error:', error);
      alert(`❌ Voting failed: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#000] px-4 sm:px-6 py-20">
      {/* Voter Info Card Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/30 backdrop-blur-md rounded-xl p-5 mb-10 text-white max-w-6xl mx-auto"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">🧾 Voter Information</h2>
        <p>
          <span className="text-blue-200 font-semibold">ID:</span> {voterInfo.id || 'N/A'}
        </p>
        <p>
          <span className="text-blue-200 font-semibold">Name:</span> {voterInfo.name || 'N/A'}
        </p>
        <p>
          <span className="text-blue-200 font-semibold">Constituency:</span>{' '}
          {voterInfo.constituency || 'N/A'}
        </p>
      </motion.div>

      {/* Voting Form */}
      <form onSubmit={handleVoteSubmit} className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-center py-5 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-bold text-xl text-white"
          >
            Select a Candidate/Party below and cast your vote
          </motion.span>
        </div>

        {/* Party Cards */}
        <div className="flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parties.map((party, index) => (
              <motion.label
                key={party.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`block relative bg-white/20 backdrop-blur-md border ${
                  selectedParty === party.id ? 'border-blue-500' : 'border-white'
                } rounded-md p-2 w-56 h-32 cursor-pointer hover:bg-white/30 transition text-xs overflow-hidden`}
              >
                <img
                  src={party.logo}
                  alt={`${party.name} logo`}
                  className="absolute top-1/2 left-1/2 w-40 h-32 object-contain opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                />
                <div className="relative flex justify-between items-start gap-2">
                  <div className="flex-1 z-10">
                    <h3 className="text-white font-bold text-sm">{party.name}</h3>
                    <p className="text-orange-200 text-[10px]">{party.description}</p>
                    <p className="text-blue-300 font-semibold mt-1">Candidate:</p>
                    <ul className="list-disc list-inside text-white text-[10px] ml-2">
                      {party.candidate.map((candidate, i) => (
                        <li key={i}>{candidate}</li>
                      ))}
                    </ul>
                  </div>
                  <input
                    type="radio"
                    name="party"
                    checked={selectedParty === party.id}
                    onChange={() => setSelectedParty(party.id)}
                    className="circle-radio mt-1 z-10"
                  />
                </div>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition"
          >
            Submit Vote
          </motion.button>
        </motion.div>
      </form>

      {/* Custom Radio Style */}
      <style jsx>{`
        .circle-radio {
          appearance: none;
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-radius: 9999px;
          cursor: pointer;
          transition: border-color 0.2s;
          position: relative;
        }
        .circle-radio:checked {
          border-color: #2276c5;
        }
        .circle-radio:checked::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 6px;
          height: 6px;
          background-color: #2276c5;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
