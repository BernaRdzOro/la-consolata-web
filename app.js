/**
 * La Consolata interactions and logic.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for internal anchors
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Expand Product Info logic
    const verMasButtons = document.querySelectorAll('.btn-ver-mas');
    
    verMasButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const moreInfo = productCard.querySelector('.product-more-info');
            
            if (moreInfo) {
                if (moreInfo.classList.contains('hidden')) {
                    moreInfo.classList.remove('hidden');
                    
                    const spanEs = this.querySelector('.lang-es');
                    const spanEn = this.querySelector('.lang-en');
                    if(spanEs) spanEs.textContent = 'Ocultar';
                    if(spanEn) spanEn.textContent = 'Hide';
                } else {
                    moreInfo.classList.add('hidden');
                    
                    const spanEs = this.querySelector('.lang-es');
                    const spanEn = this.querySelector('.lang-en');
                    if(spanEs) spanEs.textContent = 'Ver más';
                    if(spanEn) spanEn.textContent = 'View more';
                }
            }
        });
    });

    // 3. Language Translation Toggle Logic
    const currentLang = localStorage.getItem('laConsolataLang') || 'es';
    setLanguage(currentLang);

    const btnsEs = document.querySelectorAll('.btn-es');
    const btnsEn = document.querySelectorAll('.btn-en');

    btnsEs.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('es');
    }));

    btnsEn.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    }));

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('laConsolataLang', lang);
        
        document.querySelectorAll('.btn-es').forEach(btn => {
            if (lang === 'es') btn.classList.add('active');
            else btn.classList.remove('active');
        });
        document.querySelectorAll('.btn-en').forEach(btn => {
            if (lang === 'en') btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }
});
