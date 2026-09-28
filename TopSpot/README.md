# 🚀 TopSpot — Kinetik Ijara & Xizmatlar Ekotizimi

TopSpot — O'zbekistondagi zamonaviy, xavfsiz va tezkor ijara platformasi bo'lib, me'moriy glassmorphism dizayn tizimi, geolokatsion radar klasterlari va rasmiy huquqiy shartnomalar generatori bilan jihozlangan.

---

## 🎨 Brend Rang Tizimi va Dizayn Me'morchiligi

- **Asosiy fon**: `#0B0F17` (Obsidian Black)
- **Asosiy kinetik rang**: `#FF5500` (Topspot logotipidagi markaziy yorqin to'q sariq yadro va kinetik elementlar)
- **Me'moriy kontrast**: `#FFFFFF` (Topspot logotipidagi oq me'moriy shevron va asosiy sarlavhalar)
- **Panellar (Glassmorphism)**:
  - `background: rgba(18, 24, 38, 0.70)`
  - `backdrop-filter: blur(20px)`
  - `border: 1px solid rgba(255, 255, 255, 0.08)`
  - `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.45)`
- **Tasdiqlash va Xavfsizlik**: `#10B981` (Emerald Green - OneID va STIR davlat verifikatsiyasi)

---

## ⚙️ Asosiy Modullar va Imkoniyatlar

### 1. Intro va Loading Animatsiyasi
- Ilova yuklanganda qora ekranda oq me'moriy shevron yuqoridan tushib, kinetik to'q sariq yadro pastdan ko'tarilib birikadigan silliq Topspot logotip animatsiyasi.
- Pastida `GPS klasterlari faollashtirilmoqda...` minimalist holati va real koordinatalar ulanishi bilan asosiy platformaga o'tadi.

### 2. E'lonlar Taxtasi (Auto-Sliding Carousel Banner)
- Header ostida to'liq eni bo'yicha yumaloq burchakli (`border-radius: 28px`) avtomatik o'tib turuvchi reklama karuseli.
- Suriluvchi to'q sariq indikatorlar (dots pagination) va hover/touch-swipe boshqaruvi.
- 3 xil pullik reklama toifasi:
  - **RESPUBLIKA VIP** (Og'ir texnika parki, 24/7 butun respublika bo'ylab)
  - **VILOYAT SHOSHILINCH** (Bojxona ombori va logistika markazi)
  - **TUMAN LOKAL** (Sanoat generatorlari va payvandlash uskunalari, 30 daqiqada yetkazish)

### 3. 4 ta Asosiy Vertikal va Sub-Kategoriyalar
- **Mobillik (Transport)**: Yengil avto, Yuk mashinalari, Kranlar & Manipulyator, Skuterlar & Moto, Avtobuslar
- **Ko'chmas mulk**: A-Klass Omborlar, Ofis maydonlari, Ishlab chiqarish bazalari, Sovutgichli omborlar, Savdo rastalari
- **Uskunalar**: Dizel Generatorlar, Havo Kompressorlari, Beton qorgichlar, Vibroplitalar, Payvandlash apparatlari
- **Ustalar**: Avtokran haydovchilari, Payvandchi mutaxassislar, Sanoat elektrik ustalari, Santexnika brigadasi, Konditsioner montajchilari
- Vertikal bosilganda ostidan silliq animatsiya bilan dinamik sub-kategoriya chiplari ochiladi va real vaqtda filtrlanadi.

### 4. Split-Screen (40% Listing / 60% Xarita)
- **Chap tarafda (40%)**:
  - 1-15 km radius slayderi (masofa bo'yicha real vaqtda filtrlaydi).
  - Standartlashtirilgan ochiq narxli (soatlik va kunlik) kartochkalar.
  - Masofa, reyting va OneID tasdiqlanganlik statusi.
- **O'ng tarafda (60%)**:
  - Tungi rejimdagi (Dark Matter) interaktiv xarita.
  - Markazda foydalanuvchining to'q sariq radar pulsi (`@keyframes radarWaveExpand`) va dinamik radius doirasi.
  - Interaktiv pinlar va ikki tomonlama sinxron tanlov.

### 5. Mahsulot Pasporti va Xavfsizlik
- Mahsulot bosilganda ochiq narx matritsasi (soatlik, kunlik, oylik va garov shartlari).
- Mulkdorning STIR (INN) raqami va OneID davlat verifikatsiyasi.
- Real vaqtdagi bandlik kalendari (kunlarni tanlash va jami summani hisoblash).
- "Bog'lanish" (Telefon, Telegram) va O'zbekiston Respublikasi Fuqarolik Kodeksining 535-557-moddalari talablari asosida avtomatik "PDF Ijara Shartnomasi" yuklash va chop etish tizimi.

---

## 💻 Ishga tushirish

Faylni to'g'ridan-to'g'ri istalgan zamonaviy brauzerda ochish kifoya:
```bash
# TopSpot papkasida:
start index.html
```
yoki mahalliy server orqali:
```bash
npx serve .
```
