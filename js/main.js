document.addEventListener("DOMContentLoaded", () => {
    // i18n Logic
    const langSelect = document.getElementById('lang-select');
    
    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update document language
        document.documentElement.lang = lang;
        // Save preference
        localStorage.setItem('preferredLang', lang);
    }
    
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
    
    // Check local storage for language preference, otherwise default to Italian
    const savedLang = localStorage.getItem('preferredLang') || 'it';
    langSelect.value = savedLang;
    setLanguage(savedLang);

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations (fade in)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});
