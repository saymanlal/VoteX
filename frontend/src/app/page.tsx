'use client';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import InvisibleRecaptcha from '@/components/ui/InvisibleRecaptcha';

export default function HomePage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (window as any).executeRecaptcha();
  };

  const handleVerify = async (token: string) => {
    setStatus('Verifying...');

    const res = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus('✅ Verification successful. You are human!');
    } else {
      setStatus('❌ Verification failed. Please try again.');
    }
  };
  return (
    <>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        ></script>
      </Head>


      <Navbar />
      <Hero />

      <form onSubmit={handleSubmit} className="text-center mt-4">
        <button type="submit" className="btn-primary">
          Verify
        </button>
      </form>

      <p className="text-center mt-4">{status}</p>

      <InvisibleRecaptcha
        siteKey="6LdhZz0rAAAAAP5fXA78cPXn_D3KBbAhIxT8Rhh1"
        onVerify={handleVerify}
      />
    </>
  );
}
