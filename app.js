// Translations
const translations = {
    ar: {
        schoolNameShort: "مدرسة سراج الدارين",
        logoAlt: "شعار مدرسة سراج الدارين",
        logoAlt2: "شعار المدرسة",
        logoAlt3: "شعار المدرسة",
        menuAria: "القائمة",
        navHome: "الرئيسية",
        navAbout: "عن المدرسة",
        navMission: "الرسالة",
        navFounders: "التأسيس",
        navGallery: "معرض الصور",
        navDetails: "التفاصيل",
        navContact: "الاتصال",
        navInfo: "معلومات",
        heroTitle: "مدرسة سراج الدارين الأساسية والثانوية",
        heroTagline: "أهلا بكم في سرح العلم والمعرفة",
        heroScroll: "اكتشف المزيد",
        aboutLabel: "عن المدرسة",
        aboutTitle: "نبذة عن مدرسة سراج الدارين",
        aboutP1: "مدرسة سراج الدارين كانت ولا تزال أحد الأماكن التي أنشئت واستمرت في أوقات صعبة، وتقديم العلم بأفضل الطرق الممكنة هي عونها الأهم.",
        aboutP2: "شكلت مدرسة سراج الدارين جيلاً صاعداً من المتعلمين دون فصلهم عن المواد العلمية، بل جمعت في تشكيلة خاصة نوعاً من التآلف بين المواد العلمية والدينية.",
        aboutP3: "تمنح مدرسة سراج الدارين شهادات معتمدة ومعترف بها رسمياً من وزارة التعليم في الصومال، والتي تتيح للطلاب مواصلة مسيرتهم التعليمية والانتقال بسلاسة إلى الجامعات داخل الوطن وخارجه.",
        cardLocation: "المكان",
        cardLocationAr: "مقديشو / حي سيليغا",
        cardAge: "العمر",
        cardAgeAr: "٨ سنوات",
        cardCert: "الشهادات",
        cardCertAr: "شهادات موثوقة على مستوى الجامعات",
        teachersLabel: "الكادر",
        galleryLabel: "الصور",
        galleryTitle: "معرض صور المدرسة",
        gallerySubtitle: "لحظات من مسيرة العلم والتعليم",
        carouselPrev: "السابق",
        carouselNext: "التالي",
        slide1Title: "خريجي المدرسة",
        slide1Desc: "أجيال متميزة من خريجي سراج الدارين",
        slide1Alt: "خريجي المدرسة",
        slide2Title: "خريجي المدرسة",
        slide2Desc: "أجيال متميزة من خريجي سراج الدارين",
        slide2Alt: "خريجي المدرسة",
        slide3Title: "خريجي المدرسة",
        slide3Desc: "أجيال متميزة من خريجي سراج الدارين",
        slide3Alt: "خريجي المدرسة",
        slide4Title: "خريجي المدرسة",
        slide4Desc: "أجيال متميزة من خريجي سراج الدارين",
        slide4Alt: "خريجي المدرسة",
        slide5Title: "خريجي المدرسة",
        slide5Desc: "أجيال متميزة من خريجي سراج الدارين",
        slide5Alt: "خريجي المدرسة",
        slide6Title: "خريجي المدرسة",
        slide6Desc: "أجيال متميزة من خريجي سراج الدارين",
        slide6Alt: "خريجي المدرسة",
        missionLabel: "الرسالة والأهداف",
        missionTitle: "رسالة المدرسة وأهدافها",
        missionHeader: "الرسالة",
        missionText: '"إعداد وتنشئة جيل واعد، مسلح بالمعارف والعلوم الشرعية والكونية، معتز بهويته الإسلامية، ومتخلق بالأخلاق الفاضلة والقيم النبيلة."',
        goalsTitle: "الأهداف",
        goal1: "تأصيل الهوية والمنهج الوسطي: نشر وتعزيز الدين الإسلامي وفق المنهج الوسطي المعتدل، ومحاربة التطرف، والغلو، والفكر التكفيري.",
        goal2: "تحصين الفكر والمجتمع: حماية المجتمع والطلاب من العقائد الفاسدة، والأفكار المنحرفة، والتوجهات القائمة على الهوى.",
        goal3: "تمكين اللغة العربية: تطوير وتكامل مهارات الطلاب في التحدث باللغة العربية، والكتابة بها، وتمكينهم من التعبير بطلاقة.",
        goal4: "التوعية الدينية المجتمعية: توعية المجتمع المحلي وتثقيفه لرفع مستوى فهمه واستيعابه لأمور دينه الإسلامي الصحيح.",
        goal5: "الجمع بين الأصالة والمعاصرة: فتح الآفاق أمام طلاب حلقات العلم في المساجد وتأهيلهم للالتحاق بالتعليم الأكاديمي النظامي، تحقيقاً للتكامل بين العلوم الشرعية الأصيلة والمعارف العصرية الحديثة.",
        goal6: "بناء الدعاة وقادة المستقبل: تشجيع الطلاب وتأهيلهم لنقل العلم الشرعي إلى المجتمع، وإعدادهم ليكونوا خطباء ودعاة قادرين على قيادة الأمة وتوجيهها.",
        goal7: "الارتقاء الأخلاقي وبناء الشخصية: تربية الطلاب على مكارم الأخلاق والمسؤولية، ليكونوا قدوة حسنة للأجيال القادمة.",
        foundersLabel: "التأسيس",
        foundersTitle: "مؤسسو المدرسة",
        foundersSubtitle: "تأسست المدرسة في عام 2018م بجهود مباركة",
        founder1: "فضيلة الشيخ بشير شيخ علي بري",
        founder1Alt: "فضيلة الشيخ بشير شيخ علي بري",
        founderRole1: "أحد مؤسسي المدرسة ومديرها",
        founder2: "فضيلة الشيخ داود علي عبار",
        founder2Alt: "فضيلة الشيخ داود علي عبار",
        founderRole2: "أحد مؤسسي المدرسة",
        foundingReason: "جاء تأسيس مدرسة سراج الدارين الأساسية والثانوية استجابةً لحاجة المجتمع الماسة والملحة في المنطقة لتعلم العلوم الشرعية الإسلامية واللغة العربية، وسداً لهذه الفجوة التعليمية والتربوية.",
        detailsLabel: "معلومات تفصيلية",
        detailsTitle: "مراحل الدراسة وشروط الالتحاق",
        levelsTitle: "مراحل المدرسة",
        level1: "المرحلة الابتدائية:",
        level1Years: "سنة واحدة",
        level2: "المرحلة الإعدادية:",
        level2Years: "سنتان",
        level3: "المرحلة الثانوية:",
        level3Years: "سنتان",
        requirementsTitle: "شروط الالتحاق",
        req1: "أن لا يقل عمر الطالب عن تسع سنوات",
        req2: "أن يعرف كتابة وقراءة اللغة العربية بشكل جيد",
        req3: "أن يكون معه مسؤول شرعي",
        accreditationTitle: "الاعتراف بالشهادة",
        accreditationText: "المدرسة مسجلة بوزارة التعليم والثقافة الصومالية. تمنح المدرسة شهادات ثانوية دينية تمكن للخريجين للالتحاق بالجامعات الوطنية والخارجية.",
        contactLabel: "الاتصال",
        contactTitle: "معلومات الاتصال والمقر",
        locationTitle: "المقر الرئيسي",
        locationText: "حي siliga ameerikaanka، ناحية ودجر، مقديشو الصومال",
        phoneTitle: "للاتصال",
        infoBannerTitle: "مدرسة سراج الدارين",
        infoBannerArabic: "مسيرة من العطاء في خدمة العلم والمعرفة",
        infoNameLabel: "الاسم",
        infoNameValue: "مدرسة سراج الدارين الأساسية والثانوية",
        infoLocationLabel: "الموقع",
        infoLocationValue: "مقديشو - حي سيليغا",
        infoAgeLabel: "العمر",
        infoAgeValue: "٨ سنوات",
        footerSchoolName: "مدرسة سراج الدارين",
        footerTagline: "أهلا بكم في سرح العلم والمعرفة",
        footerCopy: "© 2026 مدرسة سراج الدارين الأساسية والثانوية - جميع الحقوق محفوظة"
    },
    en: {
        schoolNameShort: "Siraj al-Darayn School",
        logoAlt: "Siraj al-Darayn School Logo",
        logoAlt2: "School Logo",
        logoAlt3: "School Logo",
        menuAria: "Menu",
        navHome: "Home",
        navAbout: "About",
        navMission: "Mission",
        navFounders: "Founders",
        navGallery: "Gallery",
        navDetails: "Details",
        navContact: "Contact",
        navInfo: "Info",
        heroTitle: "Siraj al-Darayn Primary & Secondary School",
        heroTagline: "Welcome to the Path of Knowledge",
        heroScroll: "Discover More",
        aboutLabel: "About School",
        aboutTitle: "About Siraj al-Darayn School",
        aboutP1: "Siraj al-Darayn School was and still is one of the places established and continued during difficult times, and providing knowledge in the best possible ways is its most important mission.",
        aboutP2: "Siraj al-Darayn School formed a rising generation of learners without separating them from scientific subjects, but rather combined in a special formation a kind of harmony between scientific and religious subjects.",
        aboutP3: "Siraj al-Darayn School grants officially recognized and accredited certificates from the Ministry of Education of Somalia, enabling students to continue their education and smoothly transition to universities at home and abroad.",
        cardLocation: "Location",
        cardLocationAr: "Mogadishu / Siliga",
        cardAge: "Age",
        cardAgeAr: "8 years",
        cardCert: "Certificates",
        cardCertAr: "Reliable certificates at university level",
        teachersLabel: "Staff",
        galleryLabel: "Photos",
        galleryTitle: "School Photo Gallery",
        gallerySubtitle: "Moments from the journey of knowledge and education",
        carouselPrev: "Previous",
        carouselNext: "Next",
        slide1Title: "School Graduates",
        slide1Desc: "Distinguished generations of Siraj al-Darayn graduates",
        slide1Alt: "School Graduates",
        slide2Title: "School Graduates",
        slide2Desc: "Distinguished generations of Siraj al-Darayn graduates",
        slide2Alt: "School Graduates",
        slide3Title: "School Graduates",
        slide3Desc: "Distinguished generations of Siraj al-Darayn graduates",
        slide3Alt: "School Graduates",
        slide4Title: "School Graduates",
        slide4Desc: "Distinguished generations of Siraj al-Darayn graduates",
        slide4Alt: "School Graduates",
        slide5Title: "School Graduates",
        slide5Desc: "Distinguished generations of Siraj al-Darayn graduates",
        slide5Alt: "School Graduates",
        slide6Title: "School Graduates",
        slide6Desc: "Distinguished generations of Siraj al-Darayn graduates",
        slide6Alt: "School Graduates",
        missionLabel: "Mission & Goals",
        missionTitle: "School Mission and Goals",
        missionHeader: "Mission",
        missionText: '"Preparing and nurturing a promising generation, armed with knowledge of Islamic and worldly sciences, proud of their Islamic identity, and characterized by virtuous morals and noble values."',
        goalsTitle: "Goals",
        goal1: "Rooting Identity and Moderate Approach: Spreading and promoting Islam according to the moderate approach, combating extremism, excess, and takfiri ideology.",
        goal2: "Safeguarding Thought and Society: Protecting society and students from corrupt beliefs, deviant ideas, and whims-based tendencies.",
        goal3: "Empowering Arabic Language: Developing and integrating students' skills in speaking, writing Arabic, and expressing themselves fluently.",
        goal4: "Community Religious Awareness: Raising awareness and educating the local community to increase understanding of correct Islam.",
        goal5: "Combining Authenticity and Modernity: Opening horizons for mosque students and qualifying them for formal academic education, integrating original Islamic sciences with modern knowledge.",
        goal6: "Building Preachers and Future Leaders: Encouraging and qualifying students to convey Islamic knowledge to society, preparing them to be preachers and leaders.",
        goal7: "Moral Development and Character Building: Educating students in noble morals and responsibility to be role models for future generations.",
        foundersLabel: "Founding",
        foundersTitle: "School Founders",
        foundersSubtitle: "Established in 2018 through blessed efforts",
        founder1: "Sheikh Bashir Sheikh Ali Bari",
        founder1Alt: "Sheikh Bashir Sheikh Ali Bari",
        founderRole1: "Co-founder and Principal of the School",
        founder2: "Sheikh Daud Ali Abaar",
        founder2Alt: "Sheikh Daud Ali Abaar",
        founderRole2: "Co-founder of the School",
        foundingReason: "The establishment of Siraj al-Darayn Primary and Secondary School came in response to the dire need of the community in the area for learning Islamic sciences and Arabic language, filling this educational and cultural gap.",
        detailsLabel: "Detailed Information",
        detailsTitle: "Study Levels and Admission Requirements",
        levelsTitle: "School Levels",
        level1: "Primary Level:",
        level1Years: "One year",
        level2: "Intermediate Level:",
        level2Years: "Two years",
        level3: "Secondary Level:",
        level3Years: "Two years",
        requirementsTitle: "Admission Requirements",
        req1: "Student must be at least 9 years old",
        req2: "Must be able to read and write Arabic well",
        req3: "Must have a religious guardian",
        accreditationTitle: "Certificate Recognition",
        accreditationText: "The school is registered with the Ministry of Education and Culture of Somalia. It awards religious secondary certificates that enable graduates to join national and international universities.",
        contactLabel: "Contact",
        contactTitle: "Contact Information & Location",
        locationTitle: "Main Campus",
        locationText: "Siliga Americana, Wadajir District, Mogadishu, Somalia",
        phoneTitle: "Contact Us",
        infoBannerTitle: "Siraj al-Darayn School",
        infoBannerArabic: "A journey of giving in service of knowledge",
        infoNameLabel: "Name",
        infoNameValue: "Siraj al-Darayn Primary & Secondary School",
        infoLocationLabel: "Location",
        infoLocationValue: "Mogadishu - Siliga District",
        infoAgeLabel: "Age",
        infoAgeValue: "8 years",
        footerSchoolName: "Siraj al-Darayn School",
        footerTagline: "Welcome to the Path of Knowledge",
        footerCopy: "© 2026 Siraj al-Darayn Primary & Secondary School - All Rights Reserved"
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

// Apply language
function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (t[key]) {
            el.setAttribute('alt', t[key]);
        }
    });
    
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key]) {
            el.setAttribute('aria-label', t[key]);
        }
    });
    
    const langToggleText = document.getElementById('langToggleText');
    if (langToggleText) {
        langToggleText.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }
    
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

// Language toggle
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
}

// Smooth scroll for hero scroll indicator
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

// Scroll Reveal Animation with IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    // Fallback for older browsers
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('load', revealOnScroll);
}

// Carousel Functionality
const carouselTrack = document.getElementById('carouselTrack');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const carouselDotsContainer = document.getElementById('carouselDots');

let currentSlide = 0;
const totalSlides = carouselSlides.length;

if (carouselSlides.length > 0 && carouselDotsContainer) {
    // Create dots
    carouselSlides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', currentLang === 'ar' ? `انتقل إلى الصورة ${index + 1}` : `Go to image ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        carouselDotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.carousel-dot');
    
    function updateCarousel() {
        carouselSlides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(n) {
        currentSlide = (n + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
    }
    
    // Auto-advance carousel every 6 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 6000);
}

// Parallax effect removed for performance

// Initialize theme and language on load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
});
