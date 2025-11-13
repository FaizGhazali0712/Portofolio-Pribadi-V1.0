import React from 'react';

// 1. Impor gambar-gambar proyek Anda di bagian atas
import projectImg1 from './assets/example2.png';
import projectImg2 from './assets/example.png';

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-800 py-20 md:py-28">
      
      <div className="container mx-auto max-w-7xl px-8">

        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 mt-2">
            My Projects
          </h2>
          <p className="text-xl md:text-3xl text-white mt-2">
            Beberapa proyek yang telah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- Kartu Proyek 1 --- */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* 2. Gunakan variabel impor dan tutup sendiri tag img */}
            <img 
              src={projectImg1} 
              alt="Project 2" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">App Book Database</h3>
              <p className="text-base text-gray-600"> 
                "A simple book management app that lets you store essential book information. 
                Users can add book titles, upload cover images via URL, set categories, and easily edit their entries. 
                Perfect for keeping track of your book collection in a straightforward way"
              </p>
              {/* 3. Atribut 'target' dan 'rel' sudah benar untuk tautan eksternal */}
              <a 
                href="https://app-book-database-5lo5.vercel.app/" 
                className="text-blue-500 hover:underline mt-4 block" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Website 
              </a>
            </div>
          </div>

          {/* --- Kartu Proyek 2 --- */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={projectImg2} 
              alt="Project 3" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eduverse</h3>
              <p className="text-base text-gray-600">
                "Eduverse is an immersive learning platform that combines interactive courses, 
                virtual classrooms, and collaborative tools in a single digital space. 
                It makes learning more engaging by using personalized content, social features, 
                and real-time activities to help users discover and master new skills."
              </p>
              <a 
                href="https://fawwazrn.github.io/EDUVERSE/" 
                className="text-blue-500 hover:underline mt-4 block" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Website 
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;