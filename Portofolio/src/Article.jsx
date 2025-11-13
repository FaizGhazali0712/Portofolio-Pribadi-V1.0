import React from 'react';

// 1. Impor gambar-gambar artikel Anda
import imgCoding from './assets/coding.jpg';
import imgFixing from './assets/fixing.jpg';
import imgSapala from './assets/sapala.jpg';

const ArticlesSection = () => {
  return (
    <section id="articles" className="bg-gray-200 py-20 md:py-28">
      
      <div className="container mx-auto max-w-7xl px-8">

        <div className="text-left mb-12
                        js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 mt-2">
            My Articles
          </h2>
          <p className="mt-4 text-lg text-black">
            Beberapa tulisan dan artikel Tentang Kehidupan saya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- Artikel 1 --- */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-200">
            
            <a href="#" target="_blank" rel="noopener noreferrer">
              {/* 2. Gunakan variabel impor dan tutup sendiri tag img */}
              <img src={imgCoding} alt="Cara Mengatur Project React" className="w-full h-48 object-cover" />
            </a>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                My IT Journey
              </h3>
              <p className="text-base text-gray-600 mb-4">
                My day with Computer Starts here
              </p>
              
              <a href="https://contoh.com/artikel-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Read More &rarr;
              </a>
            </div>
          </div>

          {/* --- Artikel 2 --- */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-300">
            
            <a href="https://contoh.com/artikel-2" target="_blank" rel="noopener noreferrer">
              <img src={imgFixing} alt="Tailwind CSS vs. Bootstrap" className="w-full h-48 object-cover" />
            </a>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Minat saya di Teknologi
              </h3>
              <p className="text-base text-gray-600 mb-4">
                Minat pertama kali saya di Teknologi
              </p>
              
              <a href="https://contoh.com/artikel-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Read More &rarr;
              </a>
            </div>
          </div>

          {/* --- Artikel 3 --- */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-400">
            
            <a href="https://contoh.com/artikel-3" target="_blank" rel="noopener noreferrer">
              <img src={imgSapala} alt="Tips UI/UX untuk Pemula" className="w-full h-48 object-cover" />
            </a>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                First Time in SAPALA
              </h3>
              <p className="text-base text-gray-600 mb-4">
                Hari pertama di SAPALA
              </p>
              
              <a href="https://contoh.com/artikel-3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Read More &rarr;
              </a>
            </div>
          </div>

        </div> 
      </div> 
    </section>
  );
};

export default ArticlesSection;