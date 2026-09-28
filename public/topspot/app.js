/**
 * TOPSPOT - KINETIC RENTAL & SERVICES PLATFORM
 * Core Engine & Interactive Controllers
 */

// ── State Management ──
const state = {
  userLocation: { lat: 41.31108, lng: 69.24056, label: "Toshkent markazi (Amir Temur xiyoboni)" },
  radiusKm: 8,
  selectedVertical: 'mobility',
  selectedSubcategory: 'all',
  searchQuery: '',
  selectedProduct: null,
  currentSlide: 0,
  autoSlideInterval: null,
  calendarSelectedDates: [15, 16],
  map: null,
  mapMarkers: [],
  userMarker: null,
  radarCircle: null
};

// ── Verticals & Subcategories Data ──
const verticalsData = {
  mobility: {
    id: 'mobility',
    name: "Mobillik (Transport)",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    subcategories: [
      { id: 'all', label: "Barchasi" },
      { id: 'cars', label: "Yengil avto" },
      { id: 'trucks', label: "Yuk mashinalari" },
      { id: 'cranes', label: "Kranlar & Manipulyator" },
      { id: 'scooters', label: "Skuterlar & Moto" },
      { id: 'buses', label: "Avtobuslar" }
    ]
  },
  realty: {
    id: 'realty',
    name: "Ko'chmas mulk",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-3"/><path d="M9 9h1"/><path d="M9 13h1"/><path d="M9 17h1"/></svg>`,
    subcategories: [
      { id: 'all', label: "Barchasi" },
      { id: 'warehouses', label: "A-Klass Omborlar" },
      { id: 'offices', label: "Ofis maydonlari" },
      { id: 'production', label: "Ishlab chiqarish bazalari" },
      { id: 'cold_storage', label: "Sovutgichli omborlar" },
      { id: 'retail', label: "Savdo rastalari" }
    ]
  },
  equipment: {
    id: 'equipment',
    name: "Uskunalar",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    subcategories: [
      { id: 'all', label: "Barchasi" },
      { id: 'generators', label: "Dizel Generatorlar" },
      { id: 'compressors', label: "Havo Kompressorlari" },
      { id: 'concrete', label: "Beton qorgichlar" },
      { id: 'plates', label: "Vibroplitalar" },
      { id: 'welding', label: "Payvandlash apparatlari" }
    ]
  },
  masters: {
    id: 'masters',
    name: "Ustalar",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
    subcategories: [
      { id: 'all', label: "Barchasi" },
      { id: 'crane_op', label: "Avtokran haydovchilari" },
      { id: 'welders', label: "Payvandchi mutaxassislar" },
      { id: 'electricians', label: "Sanoat elektrik ustalari" },
      { id: 'plumbers', label: "Santexnika brigadasi" },
      { id: 'hvac', label: "Konditsioner montajchi" }
    ]
  }
};

// ── Products Database (Tashkent GPS Clusters) ──
const productsDatabase = [
  // MOBILLIK
  {
    id: 'm1',
    vertical: 'mobility',
    subcategory: 'cranes',
    title: "XCMG QY25K5 Avtokran (25 tonna, 39m strela)",
    locationName: "Yunusobod 19-mavze, Toshkent",
    lat: 41.3541,
    lng: 69.2915,
    hourlyPrice: 450000,
    dailyPrice: 3600000,
    monthlyPrice: 85000000,
    deposit: 0,
    minRentalHours: 3,
    availability: "Hozir bo'sh",
    rating: 4.95,
    reviewsCount: 38,
    img: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"TEXNO-KAPITAL CRANE" MCHJ`,
      stir: "308941278",
      oneIdVerified: true,
      phone: "+998 90 123 45 67",
      manager: "Aziz Qodirov"
    },
    specs: [
      "Yuk ko'tarish: 25 tonna",
      "Asosiy strela uzunligi: 39 metr",
      "Gusyok: 8.3 metr",
      "Tajribali operator bilan",
      "GPS telemetriya yoqilgan"
    ],
    bookedDays: [4, 5, 12, 19, 20]
  },
  {
    id: 'm2',
    vertical: 'mobility',
    subcategory: 'trucks',
    title: "Isuzu NPR 75 Bortli Yuk Mashinasi (5 tonna)",
    locationName: "Bektemir sanoat zonasi, Toshkent",
    lat: 41.2589,
    lng: 69.3312,
    hourlyPrice: 180000,
    dailyPrice: 1300000,
    monthlyPrice: 32000000,
    deposit: 500000,
    minRentalHours: 2,
    availability: "Hozir bo'sh",
    rating: 4.88,
    reviewsCount: 52,
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"LOGISTIKA TRANS AVTO" MCHJ`,
      stir: "304819024",
      oneIdVerified: true,
      phone: "+998 93 456 78 90",
      manager: "Bobur Rahimov"
    },
    specs: [
      "Bort uzunligi: 5.2 metr",
      "Yuk hajmi: 28 m³",
      "GIDROBORT mavjud (1 tonnagacha)",
      "Haydovchi bilan yoki alohida",
      "Toshkent halqa yo'lida kirish ruxsatnomasi"
    ],
    bookedDays: [8, 9, 10, 22]
  },
  {
    id: 'm3',
    vertical: 'mobility',
    subcategory: 'cars',
    title: "Chevrolet Damas Van 2023 (Yuk yetkazish)",
    locationName: "Chilonzor 9-mavze, Toshkent",
    lat: 41.2782,
    lng: 69.2084,
    hourlyPrice: 65000,
    dailyPrice: 380000,
    monthlyPrice: 9000000,
    deposit: 1000000,
    minRentalHours: 2,
    availability: "Ertaga bo'sh",
    rating: 4.79,
    reviewsCount: 64,
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `YaTT "Alisher Normatov"`,
      stir: "519284019",
      oneIdVerified: true,
      phone: "+998 97 789 01 23",
      manager: "Alisher Normatov"
    },
    specs: [
      "Yil: 2023, Gaz metan 4-avlod",
      "Konditsioner mavjud",
      "Toza salon, yuk bo'limi temir qoplangan",
      "Haydovchisiz beriladi (Prava B)"
    ],
    bookedDays: [1, 2, 3, 14, 15]
  },
  {
    id: 'm4',
    vertical: 'mobility',
    subcategory: 'scooters',
    title: "Honda Dio 110 Yetkazib berish Skuteri (Termobox bilan)",
    locationName: "Mirzo Ulug'bek, Parkent bozori",
    lat: 41.3195,
    lng: 69.3142,
    hourlyPrice: 25000,
    dailyPrice: 130000,
    monthlyPrice: 3200000,
    deposit: 500000,
    minRentalHours: 3,
    availability: "Hozir bo'sh",
    rating: 4.92,
    reviewsCount: 110,
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"MOTO-SHARE EXPRESS" MCHJ`,
      stir: "309228190",
      oneIdVerified: true,
      phone: "+998 99 888 12 34",
      manager: "Jasur Mirzayev"
    },
    specs: [
      "Yoqilg'i sarfi: 2.2L / 100km",
      "80 litrli izolyatsiyalangan termosumka",
      "Telefon zaryadlash porti",
      "Kaska va qo'lqop komplektda"
    ],
    bookedDays: [17, 18, 25]
  },

  // KO'CHMAS MULK
  {
    id: 'r1',
    vertical: 'realty',
    subcategory: 'warehouses',
    title: "A-Klass Logistika Ombori & Bojxona Zonasi (2,500 m²)",
    locationName: "Sergeli Sanoat Xabi, Toshkent",
    lat: 41.2294,
    lng: 69.2311,
    hourlyPrice: 850000,
    dailyPrice: 7200000,
    monthlyPrice: 180000000,
    deposit: 15000000,
    minRentalHours: 4,
    availability: "Hozir bo'sh",
    rating: 4.98,
    reviewsCount: 29,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"GLOBAL TERMINAL LOGISTICS" MCHJ`,
      stir: "307182940",
      oneIdVerified: true,
      phone: "+998 71 200 55 99",
      manager: "Farrux Zokirov"
    },
    specs: [
      "Ship balandligi: 12 metr (anti-pilli pol)",
      "4 ta avtomatlashtirilgan dock-leveler rampa",
      "Sprinkler yong'inga qarshi avtomatik tizim",
      "24/7 video-kuzatuv va qurolli qo'riqlash",
      "Temir yo'l shoxobchasi ulanish imkoni"
    ],
    bookedDays: [7, 8, 28, 29]
  },
  {
    id: 'r2',
    vertical: 'realty',
    subcategory: 'offices',
    title: "Zamonaviy IT Kovorking & Muzokaralar Zali (12 kishilik)",
    locationName: "Toshkent City, Nest One binosi 14-qavat",
    lat: 41.3155,
    lng: 69.2492,
    hourlyPrice: 150000,
    dailyPrice: 950000,
    monthlyPrice: 22000000,
    deposit: 0,
    minRentalHours: 1,
    availability: "Hozir bo'sh",
    rating: 4.96,
    reviewsCount: 74,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"SMART WORK HUB" MCHJ`,
      stir: "308291045",
      oneIdVerified: true,
      phone: "+998 78 140 10 20",
      manager: "Malika Yusupova"
    },
    specs: [
      "1 Gbps optik tolali zaxira internet",
      "4K video-konferensiya ekran va audio tizim",
      "Kofe-breyk hududi va barista xizmati",
      "Smart-kartali biometrik kirish eshigi"
    ],
    bookedDays: [3, 11, 21]
  },
  {
    id: 'r3',
    vertical: 'realty',
    subcategory: 'cold_storage',
    title: "Muzlatgichli Omborxona (-22°C gacha, 500 m²)",
    locationName: "Zangiota tumani, Oziq-ovqat klasteri",
    lat: 41.2410,
    lng: 69.1720,
    hourlyPrice: 380000,
    dailyPrice: 3100000,
    monthlyPrice: 75000000,
    deposit: 5000000,
    minRentalHours: 4,
    availability: "Hozir bo'sh",
    rating: 4.87,
    reviewsCount: 19,
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"COLD CHAIN UZBEKISTAN" MCHJ`,
      stir: "306192847",
      oneIdVerified: true,
      phone: "+998 90 999 44 22",
      manager: "Sanjar Bekov"
    },
    specs: [
      "Harorat diapazoni: +4°C dan -22°C gacha",
      "Bitzer (Germaniya) kompressor agregatlari",
      "Zaxira dizel generatori (avtomatik ishga tushish)",
      "Elektron namlik va harorat datchiklari jurnali"
    ],
    bookedDays: [6, 7, 8, 9]
  },

  // USKUNALAR
  {
    id: 'e1',
    vertical: 'equipment',
    subcategory: 'generators',
    title: "Atlas Copco QAS 100 kVA Sanoat Dizel Generatori",
    locationName: "Yakkasaroy, Shota Rustaveli ko'chasi",
    lat: 41.2890,
    lng: 69.2514,
    hourlyPrice: 160000,
    dailyPrice: 1200000,
    monthlyPrice: 28000000,
    deposit: 2000000,
    minRentalHours: 3,
    availability: "Hozir bo'sh",
    rating: 4.93,
    reviewsCount: 45,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"ENERGY TECH POWER" MCHJ`,
      stir: "305192837",
      oneIdVerified: true,
      phone: "+998 90 333 77 11",
      manager: "Temur Mahmudov"
    },
    specs: [
      "Quvvat: 100 kVA / 80 kW (3 faza 380V)",
      "Ovozsiz tovush yutuvchi korpus (Super Silent)",
      "Yoqilg'i baki: 230 litr (14 soat uzluksiz ish)",
      "Avtomatika (ATS) va montaj xizmati mavjud"
    ],
    bookedDays: [10, 11, 12, 24]
  },
  {
    id: 'e2',
    vertical: 'equipment',
    subcategory: 'plates',
    title: "Wacker Neuson DPU 6555 Og'ir Dizel Vibroplita (500 kg)",
    locationName: "Uchtepa tumani, Foziltepa",
    lat: 41.2978,
    lng: 69.1764,
    hourlyPrice: 85000,
    dailyPrice: 550000,
    monthlyPrice: 12000000,
    deposit: 1500000,
    minRentalHours: 2,
    availability: "Hozir bo'sh",
    rating: 4.85,
    reviewsCount: 31,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"YOL VA QURILISH TEXNIKASI" MCHJ`,
      stir: "308192301",
      oneIdVerified: true,
      phone: "+998 91 555 66 77",
      manager: "Sherzod Jalilov"
    },
    specs: [
      "Zichlash kuchi: 65 kN",
      "Ish kengligi: 710 mm",
      "Reversiv harakat (oldinga-orqaga)",
      "Asfalt va shag'al uchun ideal"
    ],
    bookedDays: [13, 14, 27]
  },
  {
    id: 'e3',
    vertical: 'equipment',
    subcategory: 'welding',
    title: "Kemppi MasterTig 335ACDC Sanoat Payvandlash Apparati",
    locationName: "Shayxontohur, Navoiy ko'chasi",
    lat: 41.3241,
    lng: 69.2392,
    hourlyPrice: 50000,
    dailyPrice: 320000,
    monthlyPrice: 7500000,
    deposit: 1000000,
    minRentalHours: 2,
    availability: "Hozir bo'sh",
    rating: 4.97,
    reviewsCount: 28,
    img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"WELDING PRO TECH" MCHJ`,
      stir: "306281940",
      oneIdVerified: true,
      phone: "+998 93 111 22 33",
      manager: "Doston Yoqubov"
    },
    specs: [
      "Alyuminiy, zanglamas po'lat va qora metallar uchun",
      "Argon bilan payvandlash rejimi (TIG / MMA)",
      "Suv sovutish tizimi bilan jihozlangan",
      "380V tarmoqdan ishlaydi"
    ],
    bookedDays: [5, 6, 23]
  },

  // USTALAR
  {
    id: 'u1',
    vertical: 'masters',
    subcategory: 'crane_op',
    title: "Oliy toifali Avtokran Operatori (10 yillik tajriba)",
    locationName: "Chilonzor tumani, Oqtepa maydoni",
    lat: 41.3021,
    lng: 69.2215,
    hourlyPrice: 90000,
    dailyPrice: 650000,
    monthlyPrice: 15000000,
    deposit: 0,
    minRentalHours: 3,
    availability: "Hozir bo'sh",
    rating: 5.0,
    reviewsCount: 42,
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `YaTT "Sardor Karimov"`,
      stir: "519284729",
      oneIdVerified: true,
      phone: "+998 94 666 88 00",
      manager: "Sardor Karimov"
    },
    specs: [
      "Toifa: 6-razryadli kranchi-manipulyatorchi",
      "Sanoat xavfsizligi davlat guvohnomasi mavjud",
      "Murakkab montaj va tor joylarda ishlash tajribasi",
      "Spirtli ichimliklardan xoli, shartnomaviy javobgarlik"
    ],
    bookedDays: [2, 3, 16, 17]
  },
  {
    id: 'u2',
    vertical: 'masters',
    subcategory: 'welders',
    title: "Argon & Yuqori Bosimli Quvurlar Payvandchisi (Naxit)",
    locationName: "Olmazor tumani, Qorasaroy ko'chasi",
    lat: 41.3412,
    lng: 69.2319,
    hourlyPrice: 85000,
    dailyPrice: 600000,
    monthlyPrice: 14000000,
    deposit: 0,
    minRentalHours: 2,
    availability: "Hozir bo'sh",
    rating: 4.94,
    reviewsCount: 36,
    img: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `YaTT "Jamshid Oripov"`,
      stir: "520194821",
      oneIdVerified: true,
      phone: "+998 90 777 55 33",
      manager: "Jamshid Oripov"
    },
    specs: [
      "Rentgen nazoratidan o'tuvchi choklar kafolati",
      "Gaz, bug' va neft quvurlarini montaj qilish",
      "O'z shaxsiy niqob va himoya vositalari bilan",
      "Sertifikatlangan NAKS standarti ekvivalenti"
    ],
    bookedDays: [9, 10, 26]
  },
  {
    id: 'u3',
    vertical: 'masters',
    subcategory: 'electricians',
    title: "Sanoat 380V Elektr Montaj Brigadasi (3 nafar usta)",
    locationName: "Mirobod tumani, Nukus ko'chasi",
    lat: 41.2989,
    lng: 69.2785,
    hourlyPrice: 190000,
    dailyPrice: 1400000,
    monthlyPrice: 32000000,
    deposit: 0,
    minRentalHours: 2,
    availability: "Hozir bo'sh",
    rating: 4.91,
    reviewsCount: 58,
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
    owner: {
      company: `"ELEKTRO-MONT PRO" MCHJ`,
      stir: "309827162",
      oneIdVerified: true,
      phone: "+998 93 300 40 50",
      manager: "Ulug'bek Fayziyev"
    },
    specs: [
      "1000V gacha bo'lgan elektr qurilmalarga kirish ruxsati (IV guruh)",
      "Transformator podstansiyalari va taqsimlash shkaflari yig'ish",
      "Kabel trassalari tortish va yuklama hisob-kitobi",
      "O'lchov vositalari va sinov protokoli beriladi"
    ],
    bookedDays: [14, 15, 16]
  }
];

// ── Distance Calculation (Haversine formula in KM) ──
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

// ── Currency Formatter ──
function formatUZS(amount) {
  return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
}

// ==========================================================================
// 2. INTRO VA LOADING ANIMATSIYASI CONTROLLER
// ==========================================================================
function initIntroAnimation() {
  const introScreen = document.getElementById('intro-screen');
  const coordDisplay = document.getElementById('intro-coord');
  
  if (!introScreen) return;

  // Simulate GPS coordinates lock
  let step = 0;
  const coords = [
    "GPS klaster: 41.31108° N, 69.24056° E",
    "Aniqlik radiusi: ± 3 metr | Toshkent markazi",
    "Kinetik radar klasterlari faollashtirildi ✓"
  ];

  const coordInterval = setInterval(() => {
    step++;
    if (coordDisplay && coords[step]) {
      coordDisplay.textContent = coords[step];
    }
  }, 600);

  // Smooth dismiss after loading completes (~2.2 seconds)
  setTimeout(() => {
    clearInterval(coordInterval);
    introScreen.classList.add('hide');
    setTimeout(() => {
      introScreen.style.display = 'none';
      if (state.map) {
        state.map.invalidateSize();
      }
    }, 850);
  }, 2200);
}

// ==========================================================================
// 3. E'LONLAR TAXTASI (AUTO-SLIDING CAROUSEL BANNER)
// ==========================================================================
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot-indicator');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const container = document.getElementById('carousel-container');

  if (!track || slides.length === 0) return;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    state.currentSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    state.autoSlideInterval = setInterval(() => {
      goToSlide(state.currentSlide + 1);
    }, 4500);
  }

  function stopAutoSlide() {
    if (state.autoSlideInterval) {
      clearInterval(state.autoSlideInterval);
      state.autoSlideInterval = null;
    }
  }

  // Prev / Next button clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(state.currentSlide - 1);
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(state.currentSlide + 1);
      startAutoSlide();
    });
  }

  // Dots clicks
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const slideIdx = parseInt(dot.getAttribute('data-slide') || '0', 10);
      goToSlide(slideIdx);
      startAutoSlide();
    });
  });

  // Pause on hover
  if (container) {
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);

    // Touch swipe support
    let touchStartX = 0;
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoSlide();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goToSlide(state.currentSlide + 1);
        else goToSlide(state.currentSlide - 1);
      }
      startAutoSlide();
    }, { passive: true });
  }

  startAutoSlide();
}

// ==========================================================================
// 4. 4 TA ASOSIY VERTIKAL VA SUB-KATEGORIYALAR
// ==========================================================================
function initVerticals() {
  const grid = document.getElementById('verticals-grid');
  const subContainer = document.getElementById('subcategories-container');
  if (!grid || !subContainer) return;

  // Render Verticals Cards
  grid.innerHTML = Object.values(verticalsData).map(vert => {
    const isActive = vert.id === state.selectedVertical;
    const count = productsDatabase.filter(p => p.vertical === vert.id).length;
    return `
      <div class="vertical-card ${isActive ? 'active' : ''}" data-vertical="${vert.id}">
        <div class="vertical-icon-box">${vert.icon}</div>
        <div class="vertical-info">
          <div class="vertical-name">${vert.name}</div>
          <div class="vertical-count">${count} ta mavjud obyekt</div>
        </div>
      </div>
    `;
  }).join('');

  // Add click listener to verticals
  grid.querySelectorAll('.vertical-card').forEach(card => {
    card.addEventListener('click', () => {
      const vId = card.getAttribute('data-vertical');
      if (state.selectedVertical !== vId) {
        state.selectedVertical = vId;
        state.selectedSubcategory = 'all';

        grid.querySelectorAll('.vertical-card').forEach(c => {
          c.classList.toggle('active', c.getAttribute('data-vertical') === vId);
        });

        renderSubcategories();
        filterAndRenderListings();
      }
    });
  });

  renderSubcategories();
}

function renderSubcategories() {
  const subContainer = document.getElementById('subcategories-container');
  if (!subContainer) return;

  const currentVert = verticalsData[state.selectedVertical];
  if (!currentVert) return;

  subContainer.innerHTML = currentVert.subcategories.map(sub => {
    const isActive = sub.id === state.selectedSubcategory;
    return `
      <button class="subchip ${isActive ? 'active' : ''}" data-sub="${sub.id}">
        <span>${sub.label}</span>
      </button>
    `;
  }).join('');

  subContainer.querySelectorAll('.subchip').forEach(chip => {
    chip.addEventListener('click', () => {
      const sId = chip.getAttribute('data-sub');
      state.selectedSubcategory = sId;

      subContainer.querySelectorAll('.subchip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-sub') === sId);
      });

      filterAndRenderListings();
    });
  });
}

// ==========================================================================
// 5. SPLIT-SCREEN (40% LISTING / 60% XARITA) & RADIUS SLIDER
// ==========================================================================
function initMap() {
  const mapElement = document.getElementById('topspot-map');
  if (!mapElement) return;

  // Initialize Leaflet map with Dark Matter tiles
  state.map = L.map('topspot-map', {
    center: [state.userLocation.lat, state.userLocation.lng],
    zoom: 12,
    zoomControl: false
  });

  // Zoom control in custom position
  L.control.zoom({ position: 'bottomright' }).addTo(state.map);

  // CartoDB Dark Matter tiles (Obsidian dark theme)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(state.map);

  // Add User Marker with animated orange radar pulsing waves
  const userRadarIcon = L.divIcon({
    className: 'custom-user-radar',
    html: `
      <div class="user-radar-marker">
        <div class="user-radar-center"></div>
        <div class="user-radar-wave"></div>
        <div class="user-radar-wave"></div>
      </div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });

  state.userMarker = L.marker([state.userLocation.lat, state.userLocation.lng], { icon: userRadarIcon })
    .addTo(state.map)
    .bindPopup(`
      <div style="text-align:center; padding: 4px;">
        <strong style="color:#FF5500;">📍 Sizning joylashuvingiz</strong><br/>
        <span style="font-size:12px; color:#94A3B8;">${state.userLocation.label}</span>
      </div>
    `);

  // Add Dynamic Orange Radar Circle around user location
  state.radarCircle = L.circle([state.userLocation.lat, state.userLocation.lng], {
    radius: state.radiusKm * 1000,
    color: '#FF5500',
    weight: 1.5,
    fillColor: '#FF5500',
    fillOpacity: 0.08,
    dashArray: '4, 8'
  }).addTo(state.map);
}

function updateRadius(newKm) {
  state.radiusKm = parseInt(newKm, 10);
  const display = document.getElementById('radius-val');
  if (display) {
    display.textContent = `${state.radiusKm} km`;
  }

  if (state.radarCircle) {
    state.radarCircle.setRadius(state.radiusKm * 1000);
  }

  filterAndRenderListings();
}

function filterAndRenderListings() {
  const listingsContainer = document.getElementById('listings-scroll-area');
  const countIndicator = document.getElementById('items-count-indicator');
  if (!listingsContainer) return;

  // Filter products by:
  // 1) Vertical
  // 2) Subcategory
  // 3) Radius in KM
  // 4) Search Query
  const filtered = productsDatabase.filter(product => {
    const dist = calculateDistance(
      state.userLocation.lat, state.userLocation.lng,
      product.lat, product.lng
    );
    product.distanceKm = dist;

    // Radius filter
    if (dist > state.radiusKm) return false;

    // Vertical filter
    if (product.vertical !== state.selectedVertical) return false;

    // Subcategory filter
    if (state.selectedSubcategory !== 'all' && product.subcategory !== state.selectedSubcategory) return false;

    // Search query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const match = product.title.toLowerCase().includes(q) ||
                    product.locationName.toLowerCase().includes(q) ||
                    product.owner.company.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  // Sort by nearest distance first
  filtered.sort((a, b) => a.distanceKm - b.distanceKm);

  // Update Count Indicator
  if (countIndicator) {
    countIndicator.innerHTML = `
      <span>Natija: <strong style="color:#FFF;">${filtered.length} ta</strong> obyekt (${state.radiusKm} km radiusi ichida)</span>
      <span style="color:#10B981; font-weight:600;">● Barchasi tasdiqlangan</span>
    `;
  }

  // Render Cards
  if (filtered.length === 0) {
    listingsContainer.innerHTML = `
      <div style="padding: 40px 20px; text-align: center; color: #94A3B8;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; color: #FF5500;">
          <circle cx="12" cy="12" r="10"/>
          <path d="m15 9-6 6"/><path d="m9 9 6 6"/>
        </svg>
        <h4 style="color: #FFF; font-size: 1.1rem; margin-bottom: 6px;">Ushbu radiusda obyekt topilmadi</h4>
        <p style="font-size: 0.85rem;">Radiusni 15 km gacha oshiring yoki boshqa sub-kategoriyani tanlang.</p>
      </div>
    `;
  } else {
    listingsContainer.innerHTML = filtered.map(item => {
      const isSelected = state.selectedProduct && state.selectedProduct.id === item.id;
      return `
        <div class="product-card ${isSelected ? 'selected' : ''}" data-id="${item.id}">
          <div class="product-thumbnail-box">
            <img src="${item.img}" alt="${item.title}" loading="lazy"/>
            <div class="distance-tag">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>${item.distanceKm} km</span>
            </div>
          </div>

          <div class="product-info-wrap">
            <div>
              <div class="product-header-line">
                <h3 class="product-title">${item.title}</h3>
                <div class="avail-status-dot">
                  <span class="status-green-dot"></span>
                  <span>${item.availability}</span>
                </div>
              </div>

              <div class="product-owner-meta">
                <span class="oneid-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  OneID
                </span>
                <span class="stir-num">STIR: ${item.owner.stir}</span>
              </div>
            </div>

            <!-- Standartlashtirilgan Ochiq Narxlar -->
            <div class="product-pricing-matrix-row">
              <div class="pricing-unit">
                <span class="pricing-unit-label">Soatlik narx</span>
                <span class="pricing-unit-amount">${formatUZS(item.hourlyPrice)}</span>
              </div>
              <div class="pricing-divider"></div>
              <div class="pricing-unit">
                <span class="pricing-unit-label">Kunlik narx</span>
                <span class="pricing-unit-amount secondary">${formatUZS(item.dailyPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listener to product cards
    listingsContainer.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const prod = productsDatabase.find(p => p.id === id);
        if (prod) {
          openProductPassport(prod);
          highlightMapMarker(prod);
        }
      });
    });
  }

  // Update map markers
  updateMapMarkers(filtered);
}

function updateMapMarkers(items) {
  if (!state.map) return;

  // Clear existing markers
  state.mapMarkers.forEach(m => state.map.removeLayer(m));
  state.mapMarkers = [];

  // Add markers for filtered products
  items.forEach(item => {
    // Custom Pin HTML Icon with Price label
    const formattedPrice = item.hourlyPrice >= 100000 
      ? Math.round(item.hourlyPrice / 1000) + "k/s"
      : Math.round(item.dailyPrice / 1000000) + "M/k";

    const pinIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div class="pin-bubble" id="pin-${item.id}">
          <span style="color:#FF5500;">●</span>
          <span>${formattedPrice}</span>
        </div>
      `,
      iconSize: [70, 28],
      iconAnchor: [35, 14]
    });

    const marker = L.marker([item.lat, item.lng], { icon: pinIcon }).addTo(state.map);

    // Popup content
    const popupHtml = `
      <div class="map-popup-card">
        <img class="map-popup-img" src="${item.img}" alt="${item.title}" />
        <div class="map-popup-title">${item.title}</div>
        <div class="map-popup-price">${formatUZS(item.hourlyPrice)} / soat</div>
        <button class="map-popup-btn" onclick="window.openProductById('${item.id}')">
          Pasportni ochish →
        </button>
      </div>
    `;

    marker.bindPopup(popupHtml);

    marker.on('click', () => {
      selectCardInList(item.id);
    });

    state.mapMarkers.push(marker);
  });
}

function highlightMapMarker(product) {
  if (!state.map) return;
  state.map.setView([product.lat, product.lng], 14, { animate: true });

  // Update active class on pin bubbles
  document.querySelectorAll('.pin-bubble').forEach(p => p.classList.remove('active-pin'));
  const pinEl = document.getElementById(`pin-${product.id}`);
  if (pinEl) pinEl.classList.add('active-pin');
}

function selectCardInList(productId) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const isTarget = card.getAttribute('data-id') === productId;
    card.classList.toggle('selected', isTarget);
    if (isTarget) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// Global hook for map popup button
window.openProductById = function(productId) {
  const prod = productsDatabase.find(p => p.id === productId);
  if (prod) openProductPassport(prod);
};

// ==========================================================================
// 6. MAHSULOT PASPORTI VA XAVFSIZLIK (MODAL CONTROLLER)
// ==========================================================================
function openProductPassport(product) {
  state.selectedProduct = product;
  const modal = document.getElementById('passport-modal');
  if (!modal) return;

  // Populate data
  document.getElementById('passport-img').src = product.img;
  document.getElementById('passport-title').textContent = product.title;
  document.getElementById('passport-category').textContent = `${verticalsData[product.vertical].name} • ${product.locationName}`;
  document.getElementById('passport-rating').textContent = `${product.rating} (${product.reviewsCount} ta baholash)`;
  
  // Security & Legal STIR / OneID
  document.getElementById('passport-stir').textContent = product.owner.stir;
  document.getElementById('passport-owner').textContent = product.owner.company;
  document.getElementById('passport-manager').textContent = product.owner.manager;

  // Open Price Matrix
  document.getElementById('matrix-hourly').textContent = formatUZS(product.hourlyPrice);
  document.getElementById('matrix-daily').textContent = formatUZS(product.dailyPrice);
  document.getElementById('matrix-monthly').textContent = formatUZS(product.monthlyPrice);
  document.getElementById('matrix-deposit').textContent = product.deposit > 0 ? formatUZS(product.deposit) : "Depozitsiz (0 so'm)";

  // Specifications List
  const specsList = document.getElementById('passport-specs');
  if (specsList) {
    specsList.innerHTML = product.specs.map(s => `
      <li style="display:flex; align-items:center; gap:8px; margin-bottom:6px; color:#CBD5E1; font-size:0.85rem;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5500" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${s}</span>
      </li>
    `).join('');
  }

  // Render Real-time Availability Calendar
  renderAvailabilityCalendar(product);

  // Show Modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductPassport() {
  const modal = document.getElementById('passport-modal');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.overflow = '';
}

// Interactive Real-Time Availability Calendar
function renderAvailabilityCalendar(product) {
  const calGrid = document.getElementById('calendar-grid');
  if (!calGrid) return;

  const dayNames = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
  let html = dayNames.map(d => `<div class="cal-day-name">${d}</div>`).join('');

  // Generate 30 days for current month (Oktyabr 2026)
  for (let day = 1; day <= 31; day++) {
    const isBooked = product.bookedDays.includes(day);
    const isSelected = state.calendarSelectedDates.includes(day);

    let className = "cal-day-cell";
    if (isBooked) className += " booked";
    else if (isSelected) className += " selected";
    else className += " available";

    html += `
      <div class="${className}" data-day="${day}">
        <span>${day}</span>
      </div>
    `;
  }

  calGrid.innerHTML = html;

  // Add click to days for rental period selection
  calGrid.querySelectorAll('.cal-day-cell.available, .cal-day-cell.selected').forEach(cell => {
    cell.addEventListener('click', () => {
      const day = parseInt(cell.getAttribute('data-day'), 10);
      const idx = state.calendarSelectedDates.indexOf(day);
      if (idx > -1) {
        state.calendarSelectedDates.splice(idx, 1);
      } else {
        state.calendarSelectedDates.push(day);
      }
      renderAvailabilityCalendar(product);
      updateContractCalculation();
    });
  });

  updateContractCalculation();
}

function updateContractCalculation() {
  const calcDisplay = document.getElementById('calc-summary-text');
  if (!calcDisplay || !state.selectedProduct) return;

  const selectedDaysCount = state.calendarSelectedDates.length;
  if (selectedDaysCount === 0) {
    calcDisplay.innerHTML = `<span style="color:#94A3B8;">Kunlar tanlanmagan. Kalendardan kerakli sanalarni bosing.</span>`;
  } else {
    const totalDaysAmount = selectedDaysCount * state.selectedProduct.dailyPrice;
    calcDisplay.innerHTML = `
      <span style="color:#10B981; font-weight:700;">Tanlandi: ${selectedDaysCount} kun</span> • 
      Jami ijara qiymati: <strong style="color:#FF5500;">${formatUZS(totalDaysAmount)}</strong>
    `;
  }
}

// ==========================================================================
// 7. PDF IJARA SHARTNOMASI GENERATORI (O'ZBEKISTON FUQAROLIK KODEKSI ASOSIDA)
// ==========================================================================
function openContractModal() {
  const product = state.selectedProduct;
  if (!product) return;

  const contractModal = document.getElementById('contract-modal');
  const contractPaper = document.getElementById('printable-contract');
  if (!contractModal || !contractPaper) return;

  const contractNumber = `TS-${new Date().getFullYear()}/` + Math.floor(100000 + Math.random() * 900000);
  const contractDate = new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'long', year: 'numeric' });
  const selectedDays = state.calendarSelectedDates.sort((a,b)=>a-b);
  const daysCount = Math.max(1, selectedDays.length);
  const totalAmount = daysCount * product.dailyPrice;

  contractPaper.innerHTML = `
    <div class="contract-header">
      <h2>TEXNIKA VA USKUNALARNI IJARAGA BERISH SHARTNOMASI № ${contractNumber}</h2>
      <p>O'zbekiston Respublikasi Fuqarolik Kodeksining 535–557-moddalari talablari asosida tuzildi</p>
      <p style="font-weight:600; margin-top:4px;">Toshkent shahri &nbsp;|&nbsp; Tuzilgan sana: ${contractDate}</p>
    </div>

    <div class="contract-parties-grid">
      <div class="party-col">
        <strong>1. IJARAGA BERUVCHI (MULKDOR):</strong><br/>
        Tashkilot: <b>${product.owner.company}</b><br/>
        STIR (INN): <b>${product.owner.stir}</b><br/>
        OneID Tasdiqlangan: <b>Davlat identifikatsiyasi № UZ-99214</b><br/>
        Mas'ul shaxs: ${product.owner.manager}<br/>
        Aloqa telefoni: ${product.owner.phone}
      </div>
      <div class="party-col">
        <strong>2. IJARAGA OLUVCHI (MIJOZ):</strong><br/>
        Jismoniy / Yuridik shaxs: <b>TopSpot platformasi orqali OneID verifikatsiyalangan foydalanuvchi</b><br/>
        Shaxsni tasdiqlovchi hujjat: Passport / ID karta orqali tasdiqlangan<br/>
        GPS Geolocation klasteri: ${state.userLocation.label}<br/>
        Shartnoma formati: Elektron raqamli bitim
      </div>
    </div>

    <div class="contract-section-heading">1. SHARTNOMA PREDMETI</div>
    <p>
      1.1. Ijaraga beruvchi o'ziga qonuniy tegishli bo'lgan <b>"${product.title}"</b> rusumli texnika/uskunani 
      Ijaraga oluvchining vaqtincha egalik qilishi va foydalanishi uchun topshiradi.<br/>
      1.2. Texnika joylashgan manzil: <b>${product.locationName}</b>.<br/>
      1.3. Texnika xususiyatlari: ${product.specs.join(', ')}.
    </p>

    <div class="contract-section-heading">2. TO'LOV SHARTLARI VA IJARA MUDDATI</div>
    <p>
      2.1. Obyektning standart kunlik ijara narxi: <b>${formatUZS(product.dailyPrice)}</b> tashkil etadi.<br/>
      2.2. Tanlangan ijara muddati: <b>${daysCount} kalendar kuni</b> (Sanalari: ${selectedDays.join(', ')} Oktyabr 2026 y.).<br/>
      2.3. Ushbu shartnoma bo'yicha jami to'lov summasi: <b style="color:#0F172A; font-size:15px;">${formatUZS(totalAmount)}</b>.<br/>
      2.4. Garov (depozit) miqdori: <b>${product.deposit > 0 ? formatUZS(product.deposit) : "Talab etilmaydi (0 so'm)"}</b>.
    </p>

    <div class="contract-section-heading">3. TOMONLARNING HUQUQ VA MAJBURIYATLARI</div>
    <p>
      3.1. Ijaraga beruvchi texnikani belgilangan muddatda to'liq soz holatda va yoqilg'i/operator bilan ta'minlashga majbur.<br/>
      3.2. Ijaraga oluvchi texnikadan xavfsizlik texnikasi qoidalariga rioya qilgan holda faqat o'z maqsadida foydalanishga majbur.<br/>
      3.3. Ushbu bitim TopSpot avtomatlashtirilgan xavfsizlik protokoli va kafolati ostida amalga oshiriladi.
    </p>

    <div class="contract-signatures-row">
      <div class="sign-box">
        <strong>IJARAGA BERUVCHI:</strong>
        <span>${product.owner.company}</span>
        <div class="sign-stamp-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          OneID & STIR RAQAMLI MUHRI BILAN TASDIQLANGAN
        </div>
      </div>
      <div class="sign-box">
        <strong>IJARAGA OLUVCHI:</strong>
        <span>TopSpot Mijoz Identifikatori: #USR-84192</span>
        <div class="sign-stamp-badge" style="background:#EFF6FF; border-color:#3B82F6; color:#1D4ED8;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          TOPSPOT KINETIC ESCROW HIMOYALANGAN
        </div>
      </div>
    </div>
  `;

  contractModal.classList.add('open');
}

function closeContractModal() {
  const modal = document.getElementById('contract-modal');
  if (modal) modal.classList.remove('open');
}

function printContract() {
  window.print();
}

// Contact Modal
function openContactModal() {
  const product = state.selectedProduct;
  if (!product) return;

  const contactModal = document.getElementById('contact-modal');
  if (!contactModal) return;

  document.getElementById('contact-owner-name').textContent = product.owner.company;
  document.getElementById('contact-manager-name').textContent = product.owner.manager;
  document.getElementById('contact-phone-link').href = `tel:${product.owner.phone.replace(/[^0-9+]/g, '')}`;
  document.getElementById('contact-phone-link').textContent = product.owner.phone;
  document.getElementById('contact-tg-link').href = `https://t.me/TopSpot_Support_Bot?start=rent_${product.id}`;

  contactModal.classList.add('open');
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Run Intro and GPS cluster activation
  initIntroAnimation();

  // 2. Initialize Carousel Banner
  initCarousel();

  // 3. Initialize Verticals & Subcategories
  initVerticals();

  // 4. Initialize Dark Map & Radius
  initMap();

  // 5. Initial Filter and Render Listings
  filterAndRenderListings();

  // 6. Bind Radius Slider
  const slider = document.getElementById('radius-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      updateRadius(e.target.value);
    });
  }

  // 7. Bind Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      filterAndRenderListings();
    });
  }

  // 8. Bind Modals
  const passportCloseBtn = document.getElementById('passport-close-btn');
  if (passportCloseBtn) passportCloseBtn.addEventListener('click', closeProductPassport);

  const contractCloseBtn = document.getElementById('contract-close-btn');
  if (contractCloseBtn) contractCloseBtn.addEventListener('click', closeContractModal);

  const contactCloseBtn = document.getElementById('contact-close-btn');
  if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeContactModal);

  const btnOpenContract = document.getElementById('btn-open-contract');
  if (btnOpenContract) btnOpenContract.addEventListener('click', openContractModal);

  const btnOpenContact = document.getElementById('btn-open-contact');
  if (btnOpenContact) btnOpenContact.addEventListener('click', openContactModal);

  const btnPrintPdf = document.getElementById('btn-print-pdf');
  if (btnPrintPdf) btnPrintPdf.addEventListener('click', printContract);

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
      document.body.style.overflow = '';
    }
  });
});
