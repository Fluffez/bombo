# Bombo - Advanced Workout Tracker

Profesyonel antrenman takip uygulaması. Kişisel programını paylaş, arkadaşlarının programını yönet, antrenman sırasında dinlenme sürelerini takip et.

**🚀 Canlı Demo**: https://bombo.vercel.app (Deployment tamamlandıktan sonra)

## Features

✨ **Beautiful Modern UI** - Dark theme with gradient accents and smooth animations
👥 **Multi-User Support** - Create profiles for you and your friends
📊 **User Profiles** - Track height, weight, age, and BMI
💪 **Workout Programs** - Pre-loaded with your complete training program
⏱️ **Rest Timers** - Customizable rest periods with relaxing audio notifications
📱 **Mobile Ready** - Responsive design for all devices
🎯 **Exercise Tracking** - Track sets, reps, RIR (Reps in Reserve), and failure types
✏️ **Program Customization** - Add, edit, and customize exercises for each user

## Your Workout Program

The app includes your complete training program:
- **Monday**: Chest, Back, Legs (11 exercises)
- **Tuesday**: Shoulders, Arms (9 exercises)
- **Wednesday**: Full Body (13 exercises)
- **Friday**: Upper Body (9 exercises)
- **Saturday**: Full Body (13 exercises)

Your program is protected as the default template. When friends create profiles, they get a copy they can customize.

## Hızlı Başlangıç

### Yerel Geliştirme

1. Proje klasörüne git:
```bash
cd c:\Users\kapta\Downloads\wind
```

2. Bağımlılıkları yükle:
```bash
npm install
```

3. Development sunucusunu başlat:
```bash
npm run dev
```

4. Tarayıcında aç: `http://localhost:3000`

### Production'a Deploy Et

**Ücretsiz deployment için DEPLOYMENT.md dosyasını oku!**

Adımlar:
1. Firebase projesi oluştur
2. Credentials'ı `.env.local`'e ekle
3. GitHub'a push et
4. Vercel'e bağlan
5. Canlı yayında!

## Usage

### Creating a Profile
1. Click "Add New User" on the welcome screen
2. Enter your name, height (cm), weight (kg), and age (optional)
3. Click "Create Profile"

### Viewing Your Workout
1. Select your profile
2. Choose a training day from the day selector
3. View all exercises for that day

### Using the Rest Timer
1. Complete a set of an exercise
2. Click the "Rest" button
3. Choose a preset time (30s, 60s, 90s, 120s, 180s) or enter custom time
4. Click "Start" - you'll hear a relaxing notification when time is up

### Editing Your Profile
1. Click "Edit Stats" in your profile card
2. Update your height, weight, or age
3. Click "Save Changes"

### Adding Custom Exercises
1. Select a training day
2. Click "Add Exercise"
3. Fill in exercise details (name, sets, reps, RIR, failure type)
4. Click "Add Exercise"

## Teknoloji Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management (local)
- **Firebase** - Backend & Database
  - Firestore - Veritabanı
  - Authentication - Kullanıcı yönetimi
- **Lucide React** - Icons
- **Web Audio API** - Dinlenme süresi bildirimleri
- **Vercel** - Hosting (ücretsiz)

## Proje Yapısı

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Main app component
├── firebase.js           # Firebase config
├── firebaseStore.js      # Firebase state management
├── store.js              # Zustand state management (local)
├── index.css             # Global styles
└── components/
    ├── AuthPage.jsx      # Login & Register
    ├── UserProfile.jsx   # Kullanıcı istatistikleri
    ├── WorkoutView.jsx   # Gün seçici
    ├── WorkoutDay.jsx    # Günün antrenmanları
    ├── ExerciseCard.jsx  # Egzersiz kartı
    └── RestTimer.jsx     # Dinlenme süresi timer'ı
```

## Features Explained

### Rest Timer
- Preset times: 30s, 60s, 90s, 120s, 180s
- Custom time input for flexibility
- Relaxing bell-like audio notification when complete
- Pause/Resume functionality
- Visual warning when time is running out (red glow)

### User Profiles
- Track BMI automatically
- Edit stats anytime
- Delete profiles when needed
- Each user gets their own copy of the program

### Workout Tracking
- Visual progress bars for set completion
- Color-coded exercise cards
- Green highlight when exercise is complete
- Exercise details: sets, reps, RIR, failure type

## Mobile Integration

The app is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones

For better mobile experience, consider adding to home screen (PWA support coming soon).

## Future Enhancements

- Progressive Web App (PWA) support
- Workout history and statistics
- Progress photos
- Exercise notes and form tips
- Workout duration tracking
- Social features for sharing progress
- Offline support
- Cloud sync across devices

## Özellikler

### 🔐 Güvenlik
- Firebase Authentication ile güvenli giriş
- Her kullanıcının kendi verilerine erişim
- Firestore güvenlik kuralları

### 💾 Veri Depolama
- Tüm veriler Firebase Firestore'da saklanır
- Bulut senkronizasyonu
- Cihazlar arasında senkronize

### 🌍 Deployment
- Vercel'de ücretsiz hosting
- Otomatik SSL
- GitHub entegrasyonu
- Özel domain desteği

## Notlar

- Senin kişisel programın varsayılan şablon olarak korunur
- Her kullanıcı programın kendi kopyasını alır ve özelleştirebilir
- Tüm veriler Firebase'de güvenli şekilde saklanır
- İnternet bağlantısı gereklidir

## Lisans

Kişisel kullanım için.
