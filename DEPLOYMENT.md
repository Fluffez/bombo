# Bombo - Deployment Rehberi

Uygulamayı **ücretsiz** olarak yayınlamak için adım adım rehber.

## 1. Firebase Projesi Oluştur

### Adım 1: Firebase Console'a Git
1. https://console.firebase.google.com adresine git
2. Google hesabınla giriş yap
3. "Proje Oluştur" butonuna tıkla
4. Proje adını gir: `bombo-workout`
5. Devam et ve projeyi oluştur

### Adım 2: Web Uygulaması Ekle
1. Firebase Console'da proje açıldıktan sonra
2. Sol menüde "Oluştur" > "Web" seçeneğini tıkla
3. Uygulama adını gir: `bombo`
4. "Uygulamayı Kaydet" butonuna tıkla
5. Firebase config kodunu kopyala

### Adım 3: Firestore Database Oluştur
1. Sol menüde "Firestore Database" seçeneğini tıkla
2. "Veritabanı Oluştur" butonuna tıkla
3. Bölge seç: `europe-west1` (Avrupa)
4. Güvenlik kuralları: "Test modunda başla"
5. Oluştur

### Adım 4: Authentication Etkinleştir
1. Sol menüde "Authentication" seçeneğini tıkla
2. "Başlat" butonuna tıkla
3. "Email/Şifre" sağlayıcısını etkinleştir
4. Kaydet

## 2. Credentials'ı Uygulamaya Ekle

### Adım 1: Config Bilgilerini Kopyala
Firebase Console'dan aldığın config'i `.env.local` dosyasına ekle:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Adım 2: Yerel Olarak Test Et
```bash
npm install
npm run dev
```

## 3. Vercel'e Deploy Et (Ücretsiz)

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
3. "New Project" butonuna tıkla
4. `bombo` repository'sini seç
5. "Import" butonuna tıkla

### Adım 3: Environment Variables Ekle
1. Vercel dashboard'da proje açıldıktan sonra
2. "Settings" > "Environment Variables" seçeneğine git
3. Firebase credentials'ını ekle:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

### Adım 4: Deploy Et
1. "Deploy" butonuna tıkla
2. Deployment tamamlanana kadar bekle
3. Vercel sana bir URL verecek (örn: `https://bombo.vercel.app`)

## 4. Firestore Güvenlik Kurallarını Ayarla

### Adım 1: Firestore Console'a Git
1. Firebase Console > Firestore Database
2. "Kurallar" sekmesine tıkla

### Adım 2: Güvenlik Kurallarını Güncelle
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users koleksiyonu
    match /users/{userId} {
      // Sadece kendi verilerine erişebilir
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

3. "Yayınla" butonuna tıkla

## 5. Özel Domain Ekle (Opsiyonel)

### Adım 1: Domain Satın Al
- Namecheap, GoDaddy, Cloudflare vb. sitelerden domain satın al
- Örn: `bombo-workout.com`

### Adım 2: Vercel'e Domain Bağla
1. Vercel Dashboard > Settings > Domains
2. Domain adını gir
3. DNS ayarlarını takip et

## 6. Arkadaşlarını Davet Et

Şimdi arkadaşlarını davet edebilirsin:
- **URL**: `https://bombo.vercel.app` (veya kendi domain'in)
- Hesap oluşturmasını söyle
- Boy, kilo, yaş bilgilerini girmesini söyle
- Antrenman programını kullanmaya başlasın!

## Maliyetler

- **Firebase**: Ücretsiz (Spark plan)
  - Firestore: 50,000 read/day, 20,000 write/day
  - Authentication: Sınırsız
  
- **Vercel**: Ücretsiz
  - Sınırsız bandwidth
  - Otomatik SSL
  - GitHub entegrasyonu

- **Domain**: ~$10-15/yıl (opsiyonel)

## Sorun Giderme

### "Firebase config not found" hatası
- `.env.local` dosyasının doğru credentials'ı içerdiğini kontrol et
- Vercel'de environment variables'ın ayarlandığını kontrol et

### "Permission denied" hatası
- Firestore güvenlik kurallarını kontrol et
- Authentication'ın etkinleştirildiğini kontrol et

### Deploy başarısız
- `npm run build` komutunu yerel olarak çalıştır
- Hata mesajını oku ve düzelt
- GitHub'a push et ve Vercel otomatik olarak yeniden deploy edecek

## Sonraki Adımlar

1. **Özel domain ekle** - Daha profesyonel görünüm
2. **PWA desteği ekle** - Offline çalışma
3. **Workout history** - Geçmiş antrenmanları takip et
4. **Sosyal özellikler** - Arkadaşlarla paylaş
5. **Mobile app** - iOS/Android uygulaması

## İletişim

Sorularınız varsa, Firebase docs'u kontrol edin:
- https://firebase.google.com/docs
- https://vercel.com/docs
