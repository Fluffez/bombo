# Bombo - Kurulum ve Deployment Rehberi

## 📋 Özet

**Bombo**, Firebase veritabanı ile entegre edilmiş, ücretsiz olarak yayınlanabilen profesyonel antrenman takip uygulamasıdır.

- ✅ **Veritabanı**: Firebase Firestore
- ✅ **Hosting**: Vercel (ücretsiz)
- ✅ **Kimlik Doğrulama**: Firebase Auth
- ✅ **Maliyet**: 0₺ (tamamen ücretsiz)

---

## 🚀 Hızlı Başlangıç (5 dakika)

### 1. Yerel Geliştirme Ortamı

```bash
# Proje klasörüne git
cd c:\Users\kapta\Downloads\wind

# Bağımlılıkları yükle (zaten yapıldı)
npm install

# Development sunucusunu başlat
npm run dev
```

Tarayıcında açılacak: `http://localhost:3000`

### 2. Firebase Projesi Oluştur

1. https://console.firebase.google.com adresine git
2. "Proje Oluştur" > "bombo-workout" adıyla proje oluştur
3. Web uygulaması ekle
4. Firebase config'i kopyala

### 3. Credentials'ı Ekle

`.env.local` dosyasını aç ve Firebase config'i yapıştır:

```
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Firestore Ayarla

Firebase Console'da:
- "Firestore Database" > "Veritabanı Oluştur"
- Bölge: `europe-west1`
- Güvenlik: "Test modunda başla"

### 5. Authentication Etkinleştir

Firebase Console'da:
- "Authentication" > "Başlat"
- "Email/Şifre" sağlayıcısını etkinleştir

---

## 🌐 Production'a Deploy Et (Vercel)

### Adım 1: GitHub'a Push Et

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bombo.git
git branch -M main
git push -u origin main
```

### Adım 2: Vercel'e Bağlan

1. https://vercel.com adresine git
2. GitHub hesabınla giriş yap
3. "New Project" > `bombo` repository'sini seç
4. "Import" butonuna tıkla

### Adım 3: Environment Variables Ekle

Vercel Dashboard'da:
- Settings > Environment Variables
- Tüm Firebase credentials'ını ekle

### Adım 4: Deploy Et

"Deploy" butonuna tıkla. Deployment tamamlandıktan sonra:
- **URL**: `https://bombo.vercel.app` (veya senin domain'in)
- **Canlı yayında!** 🎉

---

## 🔒 Firestore Güvenlik Kuralları

Firebase Console > Firestore > Rules sekmesinde:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

"Yayınla" butonuna tıkla.

---

## 📁 Dosya Yapısı

```
bombo/
├── src/
│   ├── firebase.js              # Firebase config
│   ├── firebaseStore.js         # Firebase state management
│   ├── App.jsx                  # Main app
│   ├── components/
│   │   ├── AuthPage.jsx         # Login/Register
│   │   ├── UserProfile.jsx      # Profil
│   │   ├── WorkoutView.jsx      # Antrenman görünümü
│   │   ├── WorkoutDay.jsx       # Günün antrenmanı
│   │   ├── ExerciseCard.jsx     # Egzersiz kartı
│   │   └── RestTimer.jsx        # Timer
│   └── index.css                # Styles
├── .env.local                   # Firebase credentials
├── .env.example                 # Template
├── .gitignore                   # Git ignore
├── package.json                 # Dependencies
├── vite.config.js               # Vite config
├── tailwind.config.js           # Tailwind config
├── README.md                    # Türkçe/İngilizce dokümantasyon
├── DEPLOYMENT.md                # Deployment rehberi
└── SETUP_GUIDE.md              # Bu dosya
```

---

## 🎯 Özellikler

### Kullanıcı Yönetimi
- ✅ Email/Şifre ile kayıt
- ✅ Güvenli giriş
- ✅ Profil yönetimi
- ✅ Boy, kilo, yaş takibi
- ✅ BMI hesaplaması

### Antrenman Takibi
- ✅ Kişisel antrenman programı
- ✅ Günlük antrenman planı
- ✅ Egzersiz ekleme/düzenleme
- ✅ Set takibi
- ✅ RIR (Reps in Reserve) takibi

### Dinlenme Süresi
- ✅ Önceden ayarlanmış süreler (30s-180s)
- ✅ Özel süre girişi
- ✅ Rahatlatıcı ses bildirimi
- ✅ Pause/Resume

### Veri Depolama
- ✅ Firebase Firestore
- ✅ Bulut senkronizasyonu
- ✅ Cihazlar arası senkronize
- ✅ Güvenli yedekleme

---

## 💾 Veri Modeli

### Users Collection
```javascript
{
  uid: "user_id",
  email: "user@example.com",
  name: "Ad Soyad",
  height: 188,
  weight: 76,
  age: 25,
  program: {
    "Monday": [...exercises],
    "Tuesday": [...exercises],
    // ...
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

## 🔧 Geliştirme Komutları

```bash
# Development sunucusunu başlat
npm run dev

# Production build
npm run build

# Build'i preview et
npm run preview

# Bağımlılıkları güncelle
npm update

# Güvenlik denetimi
npm audit
```

---

## ⚠️ Sorun Giderme

### "Firebase config not found" hatası
- `.env.local` dosyasının var olduğunu kontrol et
- Tüm credentials'ın doğru olduğunu kontrol et
- Development sunucusunu yeniden başlat

### "Permission denied" hatası
- Firestore güvenlik kurallarını kontrol et
- Authentication'ın etkinleştirildiğini kontrol et
- Kullanıcının giriş yaptığını kontrol et

### Deploy başarısız
```bash
# Yerel olarak build'i test et
npm run build

# Hata mesajını oku
# GitHub'a push et ve Vercel yeniden deploy edecek
```

### Veri kaydetmiyor
- Browser console'u aç (F12)
- Hata mesajlarını oku
- Firebase Console'da Firestore'u kontrol et

---

## 🌟 Sonraki Adımlar

1. **Özel Domain Ekle**
   - Namecheap/GoDaddy'den domain satın al
   - Vercel'e bağla

2. **PWA Desteği**
   - Offline çalışma
   - Home screen'e ekle

3. **Sosyal Özellikler**
   - Arkadaşlarla paylaş
   - Progress takibi

4. **Mobile App**
   - React Native
   - iOS/Android

---

## 📞 Yardım

- Firebase Docs: https://firebase.google.com/docs
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com/docs

---

## 📊 Maliyetler

| Hizmet | Bedeli | Notlar |
|--------|--------|--------|
| Firebase | **Ücretsiz** | Spark plan, 50K read/day |
| Vercel | **Ücretsiz** | Sınırsız bandwidth |
| Domain | ~$10-15/yıl | Opsiyonel |
| **Toplam** | **0₺** | Tamamen ücretsiz! |

---

## ✅ Kontrol Listesi

- [ ] Firebase projesi oluşturdum
- [ ] Firestore Database oluşturdum
- [ ] Authentication etkinleştirdim
- [ ] Credentials'ı `.env.local`'e ekledim
- [ ] Yerel olarak test ettim (`npm run dev`)
- [ ] GitHub'a push ettim
- [ ] Vercel'e bağladım
- [ ] Environment variables ekledim
- [ ] Deploy ettim
- [ ] Canlı URL'i test ettim
- [ ] Arkadaşlarımı davet ettim

---

**Tebrikler! Bombo'yu başarıyla kurdum ve yayınladım! 🎉**
