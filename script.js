// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // KODE UNTUK SWITCHER FOTO 'REAL/DIGITAL'
    // ===============================================
    const realButton = document.getElementById('real-button');
    const digitalButton = document.getElementById('digital-button');
    const profileImage = document.getElementById('profile-image');

    // Tentukan path gambar Anda
    const realImagePath = 'assets/img/pf.jpg'; // GANTI INI dengan foto asli Anda
    const digitalImagePath = 'assets/img/pfp.png'; // GANTI INI dengan foto digital/avatar Anda

    // Cek apakah elemennya ada sebelum menambahkan listener
    if (realButton && digitalButton && profileImage) {
        realButton.addEventListener('click', () => {
            profileImage.src = realImagePath;
            realButton.classList.add('text-white');
            realButton.classList.remove('text-gray-400');
            digitalButton.classList.add('text-gray-400');
            digitalButton.classList.remove('text-white');
        });

        digitalButton.addEventListener('click', () => {
            profileImage.src = digitalImagePath;
            digitalButton.classList.add('text-white');
            digitalButton.classList.remove('text-gray-400');
            realButton.classList.add('text-gray-400');
            realButton.classList.remove('text-white');
        });
    }

    // ===============================================
    // KODE BARU UNTUK ANIMASI FADE-IN SAAT SCROLL
    // ===============================================
    
    // 1. Pilih semua elemen dengan kelas 'js-fade-in'
    const fadeElements = document.querySelectorAll('.js-fade-in');

    // 2. Siapkan opsi untuk observer
    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Memicu saat 10% elemen terlihat
    };

// 3. Buat callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke viewport
            if (entry.isIntersecting) {
                
                // Hapus SEMUA kelas animasi awal
                entry.target.classList.remove('opacity-0', '-translate-x-10', 'translate-x-10'); 
                
                // 4. Berhenti mengamati elemen ini agar animasi tidak berulang
                observer.unobserve(entry.target);
            }
        });
    };

    // 5. Buat observer baru
    const fadeInObserver = new IntersectionObserver(observerCallback, observerOptions);

    // 6. Amati setiap elemen
    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });

});