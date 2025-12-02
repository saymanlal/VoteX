'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VoterAuth() {
  const [voterId, setVoterId] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/voters/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ voterId }),
    });

    const data = await response.json();

    if (data.success) {
      router.push('/voting');
    } else {
      alert(data.message || 'Invalid Voter ID');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 flex flex-col gap-4">
      <label htmlFor="voterId" className="font-semibold">Enter Voter ID:</label>
      <input
        id="voterId"
        type="text"
        value={voterId}
        onChange={(e) => setVoterId(e.target.value.trim())}
        placeholder="e.g. MPJ1234567"
        required
        className="border border-gray-300 rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Verify
      </button>
    </form>
  );
}
