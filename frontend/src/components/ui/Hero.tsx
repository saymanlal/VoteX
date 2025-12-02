'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../lib/i18n';


export default function Hero() {
    const handleCheckClick = () => {
        const shouldRedirectToVoting = localStorage.getItem('votingRedirect') === 'true';
        const destination = shouldRedirectToVoting ? '/login' : '/error';
        window.location.href = destination;
    };
    const { t, i18n } = useTranslation('common1');
    const [language, setLanguage] = useState(i18n.language || 'en');

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value;
        i18n.changeLanguage(selectedLang);
        setLanguage(selectedLang);
    };
    const [showOverlay, setShowOverlay] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [stars, setStars] = useState<
        {
            angle: number;
            startDist: number;
            startScale: number;
            duration: number;
            delay: number;
            size: number;
            x: number;
            y: number;
        }[]
    >([]);

    const startCloseOverlay = () => {
        if (isClosing) return;
        setIsClosing(true);
        setTimeout(() => {
            setShowOverlay(false);
            setIsClosing(false);
        }, 500);
    };

    useEffect(() => {
        const generatedStars = [...Array(60)].map(() => {
            const angle = Math.random() * 360;
            const startDist = Math.random() * 10;
            const startScale = 0.1 + Math.random() * 0.2;
            const duration = 4 + Math.random() * 6;
            const delay = Math.random() * duration;
            const size = 1 + Math.random() * 2;
            const x = Math.cos((angle * Math.PI) / 180) * startDist;
            const y = Math.sin((angle * Math.PI) / 180) * startDist;
            return { angle, startDist, startScale, duration, delay, size, x, y };
        });
        setStars(generatedStars);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && !showOverlay) {
                setShowOverlay(true);
            } else if (window.scrollY <= 200 && showOverlay) {
                startCloseOverlay();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') startCloseOverlay();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showOverlay, isClosing]);

    return (
        <>
         {/* Hero section */}
                <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-black overflow-hidden">
                    {/* Starfield */}
                    <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        {stars.map((star, i) => (
                            <div
                                key={i}
                                className="star-zoom"
                                style={{
                                    width: `${star.size}px`,
                                    height: `${star.size}px`,
                                    top: '50%',
                                    left: '50%',
                                    marginTop: `-${star.size / 2}px`,
                                    marginLeft: `-${star.size / 2}px`,
                                    animationDelay: `${star.delay}s`,
                                    ['--start-x' as any]: `${star.x}vw`,
                                    ['--start-y' as any]: `${star.y}vw`,
                                    ['--start-scale' as any]: star.startScale,
                                    ['--duration' as any]: `${star.duration}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Top-right buttons */}
                    <div className="absolute top-4 right-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4 z-10">
                        <button
                            onClick={handleCheckClick}
                            className="cursor-pointer font-bold bg-white text-black py-2 px-3 rounded-2xl hover:bg-gray-200 transition duration-300"
                        >
                            {t('check')}
                        </button>

                        <div>
                            <label htmlFor="language-select" className="sr-only">
                                Select language
                            </label>
                            <select
                                id="language-select"
                                className="bg-black rounded px-2 py-3 text-white"
                                value={language}
                                onChange={handleLanguageChange}
                                aria-label="Select language"
                            >
                                <option value="en">English</option>
                                <option value="hi">Hindi</option>
                                <option value="mr">Marathi</option>
                                <option value="gj">Gujrat</option>
                            </select>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="relative z-10 text-white text-center max-w-4xl">
                        <div className="flex text-8xl font-bold justify-center animate-fade-up">
                            <span className="text-white glow-text pt-2">{t('voteX')}</span>
                            <div className="text-blue-600 glow-text text-9xl">X</div>
                        </div>
                        <div className="text-xl font-semibold pt-20 max-w-2xl mx-auto animate-fade-up delay-200">
                            "
                            <span className="text-green-400 font-semibold">{t('empowering')}</span>{' '}
                            {t('web3_desc')}
                            <span className="text-blue-400 font-bold"> Web3</span>-{t('based voting with')}
                            <strong className="text-white"> {t('vote')}</strong>{t('ensuring')}{' '}
                            <span className="text-green-300 font-semibold">{t('transparency')}</span>,{' '}
                            <span className="text-green-300 font-semibold">{t('security')}</span>, {t('and')}{' '}
                            <span className="text-green-300 font-semibold">{t('trust')}</span>."
                        </div>
                    </div>

                    {/* Innovation Tag */}
                    <div className="absolute bottom-5 right-5">
                        <div className="font-bold text-3xl opacity-30">{t('innovated')}</div>
                    </div>

                    {/* Read More Button */}
                    <div className="absolute bottom-24 flex flex-col items-center animate-fade-up delay-500 z-10">
                        <button
                            onClick={() => setShowOverlay(true)}
                            aria-label="Read more about VoteX"
                            className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-white hover:text-blue-800 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 animate-bounce"
                        >
                            {t('read_more')}
                        </button>
                    </div>
                </div>

                {/* Dummy scroll content */}
                <div className="h-[150vh] bg-black text-center text-white flex items-center justify-center"></div>

                {/* Overlay */}
                {(showOverlay || isClosing) && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="overlay-title"
                        className={`fixed inset-0 bg-[#313131] bg-opacity-90 text-white z-50 flex flex-col items-center justify-center px-8
          transition-opacity ease-in-out
          ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
                        style={{ animationDuration: isClosing ? '0.5s' : '1.5s' }}
                    >
                        <h2 id="overlay-title" className="text-4xl font-bold mb-4">
                            {t('about_title')}
                        </h2>
                        <p className="max-w-3xl text-center text-lg mb-6">{t('about_desc')}</p>
                        <button
                            onClick={startCloseOverlay}
                            className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                            aria-label="Close overlay"
                        >
                            {t('close')}
                        </button>
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            {[
                                { name: 'Sayman', image: '/sayman.png' },
                                { name: 'Kaustubh', image: '/kaustubh.png' },
                                { name: 'Utkarsh', image: '/utkarsh.png' },
                                { name: 'Praveen', image: '/praveen.png' },
                            ].map((dev, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center transition transform hover:scale-105 duration-300"
                                >
                                    <img
                                        src={dev.image}
                                        alt={dev.name}
                                        className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
                                    />
                                    <p className="mt-2 font-medium">{dev.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </>
            );
}
