// ==========================================
// CLOUDINARY CONFIG
// ==========================================
const CLOUD = 'dk38zn7up';
const cld = (id, w = 'auto', q = 'auto') =>
    `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},q_${q},f_auto/${id}`;

// ==========================================
// LOADING SCREEN
// ==========================================
(function () {
    const overlay = document.getElementById('loaderOverlay');
    const bar = document.getElementById('loaderBar');
    const pct = document.getElementById('loaderPct');
    if (!overlay) return;

    const MIN_DURATION = 4500;   // minimal 4.5 detik biar logo + animasi keliatan semua
    const startTime = Date.now();

    let progress = 0;
    const duration = 4200;
    const interval = 30;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
        const ease = progress < 70 ? step * 1.4 : step * 0.55;
        progress = Math.min(progress + ease, 99);
        bar.style.width = progress + '%';
        pct.textContent = Math.floor(progress) + '%';
    }, interval);

    function finish() {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DURATION - elapsed);
        clearInterval(timer);
        setTimeout(() => {
            bar.style.width = '100%';
            pct.textContent = '100%';
            setTimeout(() => {
                overlay.classList.add('done');
                document.body.classList.add('page-ready');
            }, 700);
        }, remaining);
    }

    window.addEventListener('load', finish);
    setTimeout(finish, MIN_DURATION + 800);
})();

// ==========================================
// DATA SISWA
// ==========================================
const muridData = [
    { id: 1, nama: "Al Amin", nickname: "@alamin", foto: cld("AL_AMIN00_xiadhe", 400), asal: "Tanah Bumbu", keahlian: "Main Futsal", cita: "Sukses dibidang pertanian", quote: "Apa pun ujung nya senang bisa kenal dengan kalian", aib: "Jago futsal", sosmed: { ig: "@4444minn", tiktok: "@4444minn" } },
    { id: 2, nama: "ALFA", nickname: "@alfa_mp", foto: cld("ALFA00_jlejfr", 400), asal: "Tanah Bumbu - Gunung besar", keahlian: "King Boyyah", cita: "Pengusaha yg sukses", quote: "Walaupun nanti jalan kita berbeda tetapi tujuan kita tetap sukses bersama", aib: "Elite Clash SQuad", sosmed: { ig: "@allxbett", tiktok: "@allfaa_03" } },
    { id: 3, nama: "Angga Baratama", nickname: "@Angga", foto: cld("ANGGA00_fw2yx1", 400), asal: "Kotabaru - Desa Tegalrejo", keahlian: "Main Bola", cita: "Pengusaha", quote: "Sudah pasti pecah boy aii", aib: "Mafia Serongga", sosmed: { ig: "@anggabaratama24", tiktok: "-" } },
    { id: 4, nama: "Ardian Asmara Wara", nickname: "@ardian_mp", foto: cld("ARDIAN_ASMARA00_ulsx0y", 400), asal: "Kotabaru - Sungai Durian", keahlian: "Main Mobile Legends", cita: "Sukses", quote: "Apa pun ujung nya senang bisa kenal dengan kalian", aib: "Raja Montage", sosmed: { ig: "@ardian_aswa", tiktok: "@Ar" } },
    { id: 5, nama: "Andrian Usnan", nickname: "@andrian", foto: cld("ARDIAN00_jywmm4", 400), asal: "Mantewe - Tanah Bumbu", keahlian: "Driver Muda", cita: "Sukses di bidang driver", quote: "Utamakan sarapan bukan harapan", aib: "Anak rajin, Rajin menolong", sosmed: { ig: "@and._rn", tiktok: "@jagung_babanam" } },
    { id: 6, nama: "Ary Hananza Sipahutar", nickname: "@Ary", foto: cld("ARY00_mieppa", 400), asal: "Rukahan", keahlian: "Adaptation", cita: "Financial Freedom", quote: "Ketergantungan membunuh harapan.", aib: "Rayap Besi", sosmed: { ig: "@ary_uy_", tiktok: "-" } },
    { id: 7, nama: "Muhamad Arya Dinata", nickname: "@Arya / Bogel", foto: cld("ARYA00_lauum9", 400), asal: "Surabaya / Tanah Bumbu", keahlian: "Kicau Kicau kicau mancing mania", cita: "Gak ada intinya ngikutin alur cerita yg ada", quote: "Jatuh sendiri bangun sendiri, jika nanti sudah tinggi ludahi yg menjauhii.", aib: "Rajin belajar pintar di semua bidang", sosmed: { ig: "@aryaakuck", tiktok: "@Zcukyz" } },
    { id: 8, nama: "Asni", nickname: "@Asni", foto: cld("ASNI00_odocle", 400), asal: "RPJ / Kusan Hilir", keahlian: "BY One Free Fire", cita: "Sukses dibidang perdagangan", quote: "Apa pun prilaku kalian, senang bisa kenal dengan kalian.", aib: "Anak Rajin", sosmed: { ig: "@bllu_aja", tiktok: "@bllu" } },
    { id: 9, nama: "Muh. Bilal Al Banjary", nickname: "@Bilal", foto: cld("BILAL00_jkcjqj", 400), asal: "Tanah Bumbu", keahlian: "Main Basket", cita: "Bos Tahu Tempe", quote: "Jalan Boleh Masing-Masing Tapi Jangan Sampai Asing", aib: "Pemain Basket", sosmed: { ig: "@bilal_2ll", tiktok: "@bilal_2ll" } },
    { id: 10, nama: "Budi Darmawan", nickname: "@Budi", foto: cld("BUDI00_brmzez", 400), asal: "Tebing Tinggi", keahlian: "Suka mencari hal yg baru", cita: "Sukses di masa muda", quote: "Sudah pasti pecah boy aii", aib: "Ada 2 orang", sosmed: { ig: "@bud.ajaa", tiktok: "@di_dermw" } },
    { id: 11, nama: "Apriano Carles Lau", nickname: "@Carles", foto: cld("CHARLES00_eo7j8z", 400), asal: "Kotabaru - Sengayam", keahlian: "Supir dan Mekanik Pertanian", cita: "Pengusaha Bengkel Otomotif", quote: "Berani bermimpi, dan terus melangkah meski menghadapi rintangan. Tuhan Yesus memberkati.", aib: "Ngelawak sama guru mulu", sosmed: { ig: "@apr.carless__", tiktok: "@carles_rakat024" } },
    { id: 12, nama: "Diansyah", nickname: "@Dian", foto: cld("DIANSYAH00_gpsnmz", 400), asal: "Tanah Bumbu - Simpang Empat", keahlian: "Gesit, Idealis", cita: "Sukses", quote: "Pohon mana yang bisa di panjat, itulah buah yang ku petik.", aib: "Tidur saat latihan UKK, hasil UKK ga Remedial", sosmed: { ig: "-", tiktok: "-" } },
    { id: 13, nama: "Dika Yugi Pratama", nickname: "@Dika", foto: cld("DIKA00_ejlcml", 400), asal: "Nganjuk, Jawa Timur", keahlian: "Ngoding full stack adaptasi tingkat kesusahan", cita: "Senior full stack developer", quote: "Kesehatan itu bukan suplemen, tapi pola hidup. Rutin, konsisten, dan disiplin.", aib: "apaajala", sosmed: { ig: "@devxpxnyctrl_", tiktok: "@takashiiorienzx" } },
    { id: 14, nama: "Egidius Berek", nickname: "@Peni", foto: cld("EGIDIUS00_odoylq", 400), asal: "Kotabaru - Sengayam", keahlian: "Main Epep", cita: "Sukses dibidang apapun itu Aminn.", quote: "Apa pun ujung nya senang bisa kenal dengan kalian semua, Semoga sukses semua Kalian", aib: "Ga suka buat marah Bu vina, lambat kerjain tugas", sosmed: { ig: "@pennnn_80", tiktok: "JAGOAN>>MAMA" } },
    { id: 15, nama: "Ervan Effendi", nickname: "@ervan", foto: cld("ERVAN00_wcbjcb", 400), asal: "Kotabaru - Langadai", keahlian: "Bulu Tangkis", cita: "Sukses Dibidang Pertanian", quote: "Susah senang selalu bersama", aib: "Di panggil Ketua", sosmed: { ig: "@ervan__44", tiktok: "@ervan_2304" } },
    { id: 16, nama: "Hengky Saputra", nickname: "@hengky_mp", foto: cld("HENGKY00_g5mhuy", 400), asal: "Tidak tau", keahlian: "Tidak tau", cita: "Tidak tau", quote: "Pertanian harus dibicarakan dengan bangga.", aib: "Tidak tau", sosmed: { ig: "-", tiktok: "-" } },
    { id: 17, nama: "Hermawan", nickname: "@Mawan", foto: cld("HERMAWAN00_fyp82i", 400), asal: "Tanah Bumbu", keahlian: "Mekanisasi Pertanian", cita: "Billionaire", quote: "Skill membuatmu diterima, adab membuatmu bertahan.", aib: "NPC", sosmed: { ig: "@mwannn_", tiktok: "-" } },
    { id: 18, nama: "Masjidi", nickname: "@masjidi_mp", foto: cld("MASJIDI00_nycezj", 400), asal: "Jakarta", keahlian: "Koordinir kegiatan kelas", cita: "Entrepreneur agro-industri", quote: "Pemimpin sejati turun ke sawah, bukan cuma perintah.", aib: "Ketua kelas yang sering lupa rapat sendiri", sosmed: { ig: "-", tiktok: "-" } },
    { id: 19, nama: "Ragil Hafiz Imtiyaz", nickname: "@Ragil", foto: cld("RAGIL00_f6f8kc", 400), asal: "Ngawi - Pasar Sabtu", keahlian: "Berenang", cita: "Mekanik Muda", quote: "Keberhasilan bukanlah milik orang pintar, keberhasilan adalah milik mereka yang senantiasa berusaha.", aib: "Anak Rajin", sosmed: { ig: "@rragilhafiz._", tiktok: "@rragilhafiz" } },
    { id: 20, nama: "Ramadan", nickname: "@Rama", foto: cld("RAMADAN00_gptacb", 400), asal: "Tanah Bumbu", keahlian: "Casting ikan Gabus", cita: "Jadi orang sukses versi diri sendiri", quote: "Setiap baut yang dikencangkan adalah doa.", aib: "Master MTK", sosmed: { ig: "@rama____39", tiktok: "@rama____39" } },
    { id: 21, nama: "Rayhan Said Kelana", nickname: "@Rehan", foto: cld("REHAN00_m4bks1", 400), asal: "Tanah Bumbu - Karang Bintang", keahlian: "Main Volleyball", cita: "Pengusaha Sukses", quote: "Tanah yang dijaga adalah warisan untuk anak cucu.", aib: "Anak Rajin", sosmed: { ig: "@rehannsaiddd_", tiktok: "@Hanzz" } },
    { id: 22, nama: "Revando Rumondor", nickname: "@Revan", foto: cld("REVANDO00_gyyyv7", 400), asal: "Manado", keahlian: "Main Domino", cita: "Tentara", quote: "Jika tidak ada bahu untuk bersandar maka masih ada nasi untuk di dahar, kita butuh asupan bukan harapan", aib: "Anak yg teladan, telat datang pulang duluan", sosmed: { ig: "@Revan.__15", tiktok: "@revvv16_" } },
    { id: 23, nama: "Richo Cahyadi", nickname: "@Riko", foto: cld("RICO00_fupuky", 400), asal: "Kotabaru - Desa sungai Kupang jaya", keahlian: "Nyoper sezzz", cita: "Sukses dibidang usaha", quote: "Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu.", aib: "Anak Rajin", sosmed: { ig: "@rikonamanya_", tiktok: "@ulunkdpapa" } },
    { id: 24, nama: "Aditya Rio Oktavian", nickname: "@Rio", foto: cld("RIO00_sucq66", 400), asal: "Kotabaru - Serongga", keahlian: "Mekanik Alat Berat", cita: "Sukses Dibidang Pertanian", quote: "Apa pun ujung nya senang bisa kenal dengan kalian", aib: "Master Catur", sosmed: { ig: "@aadityaario", tiktok: "@aadityaario" } },
    { id: 25, nama: "Safri", nickname: "@Safri", foto: cld("SAFRI00_qwuixd", 400), asal: "Simpang Empat - Tanah Bumbu", keahlian: "Atlet Boxing", cita: "Sukses bidang Tambang Emas", quote: "Anak baik dan sopan kepada guru.", aib: "Si Paling Atlit Boxing", sosmed: { ig: "@mhmmdsafriyy", tiktok: "@mhmmdsafriyy" } },
    { id: 26, nama: "M. Saupy Aldy Akbar", nickname: "@Saupy", foto: cld("SAUFI00_eepl1v", 400), asal: "Tanah Bumbu - Sungai Kecil", keahlian: "Bahasa inggris", cita: "Menjadi Mekanik Pertanian", quote: "Dunia memang sulit tapi disitulah Seru nya.", aib: "Anak Rajin dan Sopan", sosmed: { ig: "@saupy_kren", tiktok: "-" } },
    { id: 27, nama: "M. Noor Suhan", nickname: "@Subhan", foto: cld("SUBHAN00_ze16jc", 400), asal: "Tanah Bumbu - Desa Selaselilau", keahlian: "Apa aja bisa sampai batas kemampuan", cita: "Sukses", quote: "Hidup akan sangat indah jika kamu tahu manakah jalan yang benar.", aib: "Anak Rajin dan baik hati", sosmed: { ig: "@m.usop_", tiktok: "@usop" } }
];
// ==========================================
// SOSMED CONFIG
// ==========================================
const sosmedConfig = {
    ig: {
        label: "Instagram",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
        class: "ig",
        url: "https://instagram.com/"
    },
    tiktok: {
        label: "TikTok",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg>`,
        class: "tiktok",
        url: "https://tiktok.com/@"
    }
};

// ==========================================
// CUSTOM CURSOR
// ==========================================
function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId = null;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
        if (!rafId) rafId = requestAnimationFrame(animateRing);
    });

    function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        // stop RAF kalau ring sudah sangat dekat ke cursor (idle)
        if (Math.abs(mx - rx) < 0.5 && Math.abs(my - ry) < 0.5) {
            rafId = null;
        } else {
            rafId = requestAnimationFrame(animateRing);
        }
    }

    const hoverTargets = 'a, button, .carousel-item, .fst-card, .folder-tab';
    document.querySelectorAll(hoverTargets).forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '20px'; cursor.style.height = '20px';
            ring.style.width = '60px'; ring.style.height = '60px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '10px'; cursor.style.height = '10px';
            ring.style.width = '36px'; ring.style.height = '36px';
        });
    });
}

// ==========================================
// MODAL PROFIL
// ==========================================
function openModal(id) {
    const data = muridData.find(m => m.id === id);
    if (!data) return;

    document.getElementById('modalPhoto').src = data.foto;
    document.getElementById('modalPhoto').alt = data.nama;
    document.getElementById('modalName').textContent = data.nama;
    document.getElementById('modalNickname').textContent = data.nickname;
    document.getElementById('modalQuote').textContent = `"${data.quote}"`;
    document.getElementById('modalAsal').textContent = data.asal;
    document.getElementById('modalKeahlian').textContent = data.keahlian;
    document.getElementById('modalCita').textContent = data.cita;
    document.getElementById('modalAib').textContent = data.aib;

    const sosmedContainer = document.getElementById('modalSosmed');
    sosmedContainer.innerHTML = '';
    Object.entries(data.sosmed).forEach(([platform, handle]) => {
        const cfg = sosmedConfig[platform];
        if (!cfg) return;
        const clean = handle.replace(/^@/, '').replace(/\/$/, '').trim();
        if (!clean || clean === '-') return;
        const a = document.createElement('a');
        const href = handle.startsWith('http') ? handle : cfg.url + clean;
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = `sosmed-btn ${cfg.class}`;
        a.innerHTML = `<span>${cfg.icon}</span><span>${cfg.label}</span>`;
        sosmedContainer.appendChild(a);
    });

    const overlay = document.getElementById('modalOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
(function () {
    const nav = document.getElementById('siteNav');
    if (!nav) return;
    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    nav.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
})();

// ==========================================
// BACK TO TOP
// ==========================================
(function () {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// ==========================================
// INIT ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initCursor();

    // Carousel click → modal
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => openModal(parseInt(item.dataset.id)));
    });

    // Close modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modalOverlay')) closeModal();
    });

    // ==========================================
    // FOLDER GALLERY SYSTEM
    // ==========================================
    (function () {
        const tabs = document.querySelectorAll('.folder-tab');
        const panels = document.querySelectorAll('.folder-panel');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                const target = document.getElementById('panel-' + tab.dataset.folder);
                if (target) target.classList.add('active');
            });
        });

        // Update folder photo counts
        ['absen', 'kunjungan', 'random', 'selfie'].forEach(folder => {
            const track = document.getElementById('track-' + folder);
            const countEl = document.getElementById('count-' + folder);
            if (track && countEl) {
                const n = track.querySelectorAll('.fst-card').length;
                countEl.textContent = n + ' foto';
            }
        });

        // Lightbox for folder photos
        const lb = document.getElementById('folderLightbox');
        const lbImg = document.getElementById('flImg');
        const lbCaption = document.getElementById('flCaption');
        const lbClose = document.getElementById('flClose');
        const lbPrev = document.getElementById('flPrev');
        const lbNext = document.getElementById('flNext');

        let currentCards = [];
        let currentIdx = 0;

        function openFolderLightbox(cards, idx) {
            currentCards = cards;
            currentIdx = idx;
            showSlide(currentIdx);
            lb.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeFolderLightbox() {
            lb.classList.remove('active');
            document.body.style.overflow = '';
        }

        function showSlide(idx) {
            if (!currentCards.length) return;
            currentIdx = ((idx % currentCards.length) + currentCards.length) % currentCards.length;
            const card = currentCards[currentIdx];
            lbImg.src = card.dataset.src || card.querySelector('img').src;
            lbCaption.textContent = card.dataset.caption || '';
        }

        document.querySelectorAll('.fst-card').forEach(card => {
            card.addEventListener('click', () => {
                const panel = card.closest('.folder-panel');
                const cards = Array.from(panel.querySelectorAll('.fst-card'));
                openFolderLightbox(cards, cards.indexOf(card));
            });
        });

        lbClose.addEventListener('click', closeFolderLightbox);
        lb.addEventListener('click', e => { if (e.target === lb) closeFolderLightbox(); });
        lbPrev.addEventListener('click', () => showSlide(currentIdx - 1));
        lbNext.addEventListener('click', () => showSlide(currentIdx + 1));

        // Touch swipe for folder lightbox
        let touchStartX = 0;
        lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        lb.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) showSlide(diff > 0 ? currentIdx + 1 : currentIdx - 1);
        });

        // Keyboard nav for folder lightbox
        document.addEventListener('keydown', e => {
            if (lb.classList.contains('active')) {
                if (e.key === 'Escape') closeFolderLightbox();
                if (e.key === 'ArrowLeft') showSlide(currentIdx - 1);
                if (e.key === 'ArrowRight') showSlide(currentIdx + 1);
                return;
            }
            if (document.getElementById('modalOverlay').classList.contains('active')) {
                if (e.key === 'Escape') closeModal();
            }
        });
    })();

    // ==========================================
    // LEGACY LIGHTBOX (for .photo-card if any)
    // ==========================================
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    function closeLegacyLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLegacyLightbox);
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', e => {
            if (e.target === lightboxOverlay) closeLegacyLightbox();
        });
    }

    document.querySelectorAll('.photo-card').forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            const caption = card.dataset.caption || '';
            if (lightboxImg) lightboxImg.src = img.src;
            if (lightboxCaption) lightboxCaption.textContent = caption;
            if (lightboxOverlay) lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // ==========================================
    // GSAP SCROLL ANIMATIONS
    // ==========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.murid-section .section-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
              scrollTrigger: { trigger: '.murid-section', start: 'top 80%' } }
        );

        gsap.fromTo('.folder-gallery-section .section-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
              scrollTrigger: { trigger: '.folder-gallery-section', start: 'top 80%' } }
        );

        gsap.fromTo('.quote-section .quote-content',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
              scrollTrigger: { trigger: '.quote-section', start: 'top 75%' } }
        );

        gsap.fromTo('.folder-tabs',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { trigger: '.folder-tabs-wrap', start: 'top 85%' } }
        );
    }

    // ==========================================
    // TOAST ANIMATION CSS (inject once)
    // ==========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes toastIn {
            from { opacity: 0; transform: translate(-50%, 20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }
    `;
    document.head.appendChild(style);
});
