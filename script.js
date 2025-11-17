// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    

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
// Menjalankan kode setelah semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Fungsi untuk Menu Mobile (Hamburger) ---
    
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Memilih kedua ikon (hamburger dan 'X') di dalam tombol
    const hamburgerIcon = menuButton.querySelector('svg:first-child');
    const closeIcon = menuButton.querySelector('svg:last-child');

    // Menambahkan event listener 'click' pada tombol
    menuButton.addEventListener('click', () => {
        // Menampilkan atau menyembunyikan menu
        mobileMenu.classList.toggle('hidden');

        // Menukar ikon hamburger dengan ikon 'X'
        hamburgerIcon.classList.toggle('hidden'); // Sembunyikan/tampilkan hamburger
        closeIcon.classList.toggle('hidden');     // Tampilkan/sembunyikan 'X'
    });

    // --- 2. Fungsi untuk Animasi "Fade In" saat Scroll ---

    // Memilih semua elemen yang punya kelas 'js-fade-in'
    const fadeElements = document.querySelectorAll('.js-fade-in');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai 'root'
        rootMargin: '0px',
        threshold: 0.1 // Memicu animasi saat 10% elemen terlihat
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke dalam layar
            if (entry.isIntersecting) {
                // Hapus kelas-kelas yang menyembunyikan elemen
                // Ini akan memicu transisi CSS yang sudah kamu atur (duration, ease-out)
                entry.target.classList.remove('opacity-0', 'translate-y-5', '-translate-x-10', 'translate-x-10');
                
                // Berhenti mengamati elemen ini setelah animasi berjalan
                observer.unobserve(entry.target);
            }
        });
    };

    // Membuat observer baru
    const fadeInObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Menerapkan observer ke setiap elemen 'js-fade-in'
    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });

    // --- 3. (Bonus) Fungsi Ganti Gambar Profil "Real" / "Digital" ---
    
    // Saya lihat di HTML kamu ada tombol "Real" dan "Digital"
    // Kode ini akan membuatnya berfungsi untuk mengganti gambar.

    const realButton = document.getElementById('real-button');
    const digitalButton = document.getElementById('digital-button');
    const profileImage = document.getElementById('profile-image');

    // Tentukan path gambar kamu di sini
    const realImageSrc = 'assets/img/pf.jpg'; // Path gambar "Real" (sudah ada)
    
    // GANTI INI dengan path gambar "Digital" atau avatar kamu
    const digitalImageSrc = 'assets/img/pf-digital.png'; // Contoh path

    // Event listener untuk tombol "Real"
    realButton.addEventListener('click', () => {
        profileImage.src = realImageSrc;
        
        // Update style tombol
        realButton.classList.add('text-white');
        realButton.classList.remove('text-gray-400');
        digitalButton.classList.add('text-gray-400');
        digitalButton.classList.remove('text-white');
    });

    // Event listener untuk tombol "Digital"
    digitalButton.addEventListener('click', () => {
        profileImage.src = digitalImageSrc;

        // Update style tombol
        digitalButton.classList.add('text-white');
        digitalButton.classList.remove('text-gray-400');
        realButton.classList.add('text-gray-400');
        realButton.classList.remove('text-white');
    });

});