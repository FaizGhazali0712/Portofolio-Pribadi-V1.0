import React, { useEffect, useState } from 'react'; // 1. Impor useState

// 2. Impor kedua gambar Anda dari folder assets
import realImage from './assets/pf.jpg'; // Gambar 'Real' Anda
import digitalImage from './assets/pfp.png'; // Ganti dengan nama file gambar digital Anda

const HomeSection = () => {
  // 3. Buat state untuk melacak mode yang sedang aktif
  const [mode, setMode] = useState('real'); // Default-nya adalah 'real'

  // (Logika animasi useEffect Anda dari sebelumnya tetap di sini)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', '-translate-x-10', 'translate-x-10');
          entry.target.classList.remove('js-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const targets = document.querySelectorAll('.js-fade-in');
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-banner-hero flex items-center p-8 sm:p-16 md:p-24 bg-cover bg-center bg-no-repeat overflow-hidden">
      
      {/* ... Overlay dan Konten Kiri (tidak berubah) ... */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="text-white text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-200 js-fade-in opacity-0 -translate-x-10 transition-all duration-900 ease-out delay-100">
            Hey Buddy its me
          </h2>
          <h1 className="text-5xl font-momo sm:text-7xl font-momo font-black text-purple-400 mt-1 js-fade-in opacity-0 translate-x-10 transition-all duration-900 ease-out delay-200">
            Faiz Ghazali
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 js-fade-in opacity-0 -translate-x-10 transition-all duration-200 ease-out delay-300">
            An Front-End Devloper, Computer Engineer, Tech Enthusiast, Military, Cars, and Game Lover.
          </p>
        </div>

        {/* --- KONTEN KANAN (YANG BERUBAH) --- */}
        <div className="flex flex-col items-center js-fade-in opacity-0 translate-x-10 transition-all duration-700 ease-out delay-500">
          
          <div className="flex space-x-6 mb-4">
            {/* 4. Tambahkan onClick dan className dinamis */}
            <span 
              id="real-button" 
              className={`font-bold text-xl cursor-pointer ${mode === 'real' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setMode('real')}
            >
              Real
            </span>
            <span 
              id="digital-button" 
              className={`font-bold text-xl cursor-pointer ${mode === 'digital' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setMode('digital')}
            >
              Digital
            </span>
          </div>

          <div className="w-48 h-48 sm:w-64 sm:h-64 overflow-hidden rounded-full border-4 border-purple-500 shadow-xl">
            {/* 5. Ganti 'src' menjadi dinamis berdasarkan state 'mode' */}
            <img 
              id="profile-image" 
              src={mode === 'real' ? realImage : digitalImage} 
              alt="Foto Profil Faiz" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSection;