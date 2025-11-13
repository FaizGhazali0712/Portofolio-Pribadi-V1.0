import React from 'react';

// 1. Impor logo Anda
import Logo from './assets/Group 24.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-20 md:py-28">
      
      <div className="container mx-auto max-w-7xl px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* --- Kolom 1: Info --- */}
          <div className="text-center md:text-left 
                          js-fade-in opacity-0 -translate-x-10 transition-all duration-700 ease-out delay-100">
            
            <a href="#home" className="flex items-center justify-center md:justify-start mb-4">
              {/* 2. Gunakan variabel impor dan tutup sendiri tag img */}
              <img src={Logo} alt="Logo" className="w-10 h-10 mr-3" />
              <span className="text-white text-2xl font-bold">Faiz Ghazali</span>
            </a>
            <p className="text-gray-400 text-sm">
              Front-End Developer & Tech Enthusiast. 
              Menciptakan pengalaman digital yang intuitif dan menarik.
            </p>
          </div>

          {/* --- Kolom 2: Navigasi --- */}
          <div className="text-center md:text-left 
                          js-fade-in opacity-0 -translate-x-10 transition-all duration-700 ease-out delay-200">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#expertise" className="hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#articles" className="hover:text-purple-400 transition-colors">Articles</a></li>
            </ul>
          </div>

          {/* --- Kolom 3: Social Media --- */}
          <div className="text-center md:text-left
                          js-fade-in opacity-0 -translate-x-10 transition-all duration-700 ease-out delay-300">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-4">
              Ikuti Saya
            </h3>
            
            <div className="flex space-x-5 justify-center md:justify-start">
              
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.265 1.983-.399 3.003-.404 1.02.005 2.047.139 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.053 1.902.218 2.458.42c.64.237 1.08.51 1.56.99c.48.48.753.92.99 1.56c.202.556.367 1.286.42 2.458c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.172-.218 1.902-.42 2.458c-.237.64-.51 1.08-.99 1.56c-.48.48-.92.753-1.56.99c-.556.202-1.286.367-2.458.42c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.053-1.902-.218-2.458-.42c-.64-.237-1.08-.51-1.56-.99c-.48-.48-.753-.92-.99-1.56c-.202-.556-.367 1.286-.42-2.458c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.172.218 1.902.42-2.458c.237-.64.51-1.08.99-1.56c.48-.48.92.753 1.56-.99c.556-.202 1.286.367 2.458.42c1.266.058 1.646.07 4.85.07zm0-2.163c-3.258 0-3.668.014-4.942.071c-1.272.058-2.16.227-2.928.51c-.78.29-1.46.696-2.126 1.36c-.664.666-1.07 1.346-1.36 2.126c-.283.768-.452 1.656-.51 2.928c-.057 1.274-.07 1.684-.07 4.942s.013 3.668.07 4.942c.058 1.272.227 2.16.51 2.928c.29.78.696 1.46 1.36 2.126c.666.664 1.346 1.07 2.126 1.36c.768.283 1.656.452 2.928.51c1.274.057 1.684.07 4.942.07s3.668-.013 4.942-.07c1.272-.058 2.16-.227 2.928-.51c.78-.29 1.46-.696 2.126-1.36c.664-.666 1.07-1.346 1.36-2.126c.283-.768.452-1.656-.51-2.928c.057-1.274.07-1.684.07-4.942s-.013-3.668-.07-4.942c-.058-1.272-.227-2.16-.51-2.928c-.29-.78-.696-1.46-1.36-2.126c-.666-.664-1.346-1.07-2.126-1.36c-.768-.283-1.656-.452-2.928-.51c-1.274-.057-1.684-.07-4.942-.07z"/>
                  <path d="M12 6.865c-2.835 0-5.135 2.3-5.135 5.135s2.3 5.135 5.135 5.135 5.135-2.3 5.135-5.135-2.3-5.135-5.135-5.135zm0 8.27c-1.73 0-3.135-1.405-3.135-3.135s1.405-3.135 3.135-3.135 3.135 1.405 3.135 3.135-1.405 3.135-3.135 3.135z"/>
                  <path d="M16.965 6.405c-.77 0-1.4.63-1.4 1.4s.63 1.4 1.4 1.4 1.4-.63 1.4-1.4-.63-1.4-1.4-1.4z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div> 
        
        {/* --- Garis Pemisah dan Copyright --- */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 <a href="#home" className="hover:text-purple-400">Faiz Ghazali</a>. All Rights Reserved.
          </p>
        </div>

      </div> 
    </footer>
  );
};

export default Footer;