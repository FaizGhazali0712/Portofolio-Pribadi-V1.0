import React from 'react';

// 1. Impor gambar-gambar Anda di bagian atas
import iconFrontEnd from './assets/Group 30.png';
import iconUiUx from './assets/Vector.png';
import iconSpeaking from './assets/talk.png';
import iconComputer from './assets/computer.png';

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="bg-white py-20 md:py-28">
      
      <div className="container mx-auto max-w-7xl px-8">

        <div className="text-left mb-12 
                        js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out">
          
          <p className="text-sm font-bold text-purple-600 uppercase tracking-wider">
            My Skills
          </p>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            My Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* --- Kartu 1 --- */}
          <div className="bg-sky-50 p-6 rounded-lg shadow-sm hover:shadow-lg 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-200">
            <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md mb-6">
              <img src={iconFrontEnd} alt="Front-End Development Icon" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Front-End Development
            </h3>
            <p className="text-base text-gray-600">
              Skilled in HTML, CSS, Javascript and REACT
            </p>
          </div>

          {/* --- Kartu 2 --- */}
          <div className="bg-sky-50 p-6 rounded-lg shadow-sm hover:shadow-lg 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-300">
            <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md mb-6">
              <img src={iconUiUx} alt="UI/UX Icon" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              UI & UX Design
            </h3>
            <p className="text-base text-gray-600">
              Approved in UI/UX Design in Figma 
            </p>
          </div>

          {/* --- Kartu 3 --- */}
          <div className="bg-sky-50 p-6 rounded-lg shadow-sm hover:shadow-lg 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-400">
            <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md mb-6">
              <img src={iconSpeaking} alt="Public Speaking Icon" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Public Speaking
            </h3>
            <p className="text-base text-gray-600">
              Experienced in public speaking and presentations including Storytelling, Broadcasting, and Dubbing.
            </p>
          </div>

          {/* --- Kartu 4 --- */}
          <div className="bg-sky-50 p-6 rounded-lg shadow-sm hover:shadow-lg 
                          js-fade-in opacity-0 translate-y-5 transition-all duration-700 ease-out delay-500">
            <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md mb-6">
              <img src={iconComputer} alt="Computer Builder Icon" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Computer Builder
            </h3>
            <p className="text-base text-gray-600">
              Experienced in building computers from scratch and troubleshooting hardware and software issues.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;