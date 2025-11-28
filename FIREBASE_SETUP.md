# Firebase Kurulum - Adım Adım

## 1️⃣ Firebase Projesi Oluştur

### Adım 1: Console'a Git
```
https://console.firebase.google.com
```

### Adım 2: Yeni Proje Oluştur
1. "Proje Oluştur" butonuna tıkla
2. Proje adı: `bombo-workout`
3. Google Analytics: İsteğe bağlı (atla)
4. "Proje Oluştur" butonuna tıkla
5. Proje yüklenmesini bekle (1-2 dakika)

---

## 2️⃣ Web Uygulaması Ekle

### Adım 1: Web App Ekle
1. Firebase Console'da proje açıldıktan sonra
2. Sol menüde "Oluştur" > "Web" seçeneğini tıkla
3. Uygulama takma adı: `bombo`
4. "Firebase Hosting'i de ayarla" - İsteğe bağlı (atla)
5. "Uygulamayı Kaydet" butonuna tıkla

### Adım 2: Config Kopyala
Ekranda Firebase config gösterilecek:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "bombo-workout.firebaseapp.com",
  projectId: "bombo-workout",
  storageBucket: "bombo-workout.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

**Bu değerleri kopyala!**

---

## 3️⃣ Firestore Database Oluştur

### Adım 1: Firestore'u Aç
1. Sol menüde "Firestore Database" seçeneğini tıkla
2. "Veritabanı Oluştur" butonuna tıkla

### Adım 2: Ayarları Yap
1. **Bölge Seçimi**: `europe-west1 (Belçika)`
2. **Güvenlik Kuralları**: "Test modunda başla" seçeneğini seç
3. "Oluştur" butonuna tıkla
4. Veritabanı oluşturulmasını bekle (1-2 dakika)

### Adım 3: Güvenlik Kurallarını Ayarla
1. Firestore Database açıldıktan sonra "Kurallar" sekmesine tıkla
2. Aşağıdaki kodu yapıştır:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users koleksiyonu - sadece kendi verilerine erişebilir
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

3. "Yayınla" butonuna tıkla

---

## 4️⃣ Authentication Etkinleştir

### Adım 1: Authentication'ı Aç
1. Sol menüde "Authentication" seçeneğini tıkla
2. "Başlat" butonuna tıkla

### Adım 2: Email/Şifre Sağlayıcısını Etkinleştir
1. "Email/Şifre" sağlayıcısını tıkla
2. "Email/Şifre" seçeneğini etkinleştir
3. "Kaydet" butonuna tıkla

### Adım 3: Kullanıcı Oluştur (Test)
1. "Kullanıcılar" sekmesine tıkla
2. "Kullanıcı Ekle" butonuna tıkla
3. Test kullanıcısı oluştur:
   - Email: `test@example.com`
   - Şifre: `Test123456`
4. "Kullanıcı Ekle" butonuna tıkla

---

## 5️⃣ Credentials'ı Uygulamaya Ekle

### Adım 1: .env.local Dosyasını Aç
Proje klasöründe `.env.local` dosyasını aç

### Adım 2: Firebase Config'i Yapıştır
Firebase Console'dan kopyaladığın config'i aşağıdaki formata göre doldur:

```
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=bombo-workout
VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

### Adım 3: Dosyayı Kaydet
Ctrl+S ile kaydet

---

## 6️⃣ Yerel Olarak Test Et

### Adım 1: Development Sunucusunu Başlat
```bash
npm run dev
```

### Adım 2: Uygulamayı Aç
Tarayıcı otomatik açılacak: `http://localhost:3000`

### Adım 3: Test Kullanıcısıyla Giriş Yap
- Email: `test@example.com`
- Şifre: `Test123456`

### Adım 4: Profil Oluştur
1. Giriş yaptıktan sonra profil bilgilerini gir
2. Boy, kilo, yaş bilgilerini gir
3. Antrenman programını gör

✅ **Yerel test başarılı!**

---

## 7️⃣ Production'a Deploy Et (Vercel)

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
1. Vercel Dashboard'da proje açıldıktan sonra
2. "Settings" > "Environment Variables" seçeneğine git
3. Aşağıdaki değişkenleri ekle:

| Key | Value |
|-----|-------|
| `VITE_FIREBASE_API_KEY` | `AIzaSy...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `bombo-workout.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `bombo-workout` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `bombo-workout.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `123456789` |
| `VITE_FIREBASE_APP_ID` | `1:123456789:web:abc123def456` |

### Adım 4: Deploy Et
1. "Deploy" butonuna tıkla
2. Deployment tamamlanana kadar bekle (2-5 dakika)
3. Vercel sana bir URL verecek

✅ **Canlı yayında!**

---

## 🔍 Kontrol Listesi

- [ ] Firebase projesi oluşturdum
- [ ] Web uygulaması ekledim
- [ ] Config'i kopyaladım
- [ ] Firestore Database oluşturdum
- [ ] Güvenlik kurallarını ayarladım
- [ ] Authentication etkinleştirdim
- [ ] Test kullanıcısı oluşturdum
- [ ] Credentials'ı `.env.local`'e ekledim
- [ ] Yerel olarak test ettim
- [ ] GitHub'a push ettim
- [ ] Vercel'e bağladım
- [ ] Environment variables ekledim
- [ ] Deploy ettim
- [ ] Canlı URL'i test ettim

---

## ⚠️ Sorun Giderme

### "Firebase config not found" hatası
**Çözüm:**
1. `.env.local` dosyasının var olduğunu kontrol et
2. Tüm credentials'ın doğru olduğunu kontrol et
3. Development sunucusunu yeniden başlat: `npm run dev`

### "Permission denied" hatası
**Çözüm:**
1. Firestore güvenlik kurallarını kontrol et
2. Authentication'ın etkinleştirildiğini kontrol et
3. Kullanıcının giriş yaptığını kontrol et

### Deploy başarısız
**Çözüm:**
```bash
# Yerel olarak build'i test et
npm run build

# Hata mesajlarını oku
# GitHub'a push et ve Vercel yeniden deploy edecek
```

### Veri kaydetmiyor
**Çözüm:**
1. Browser console'u aç (F12)
2. Hata mesajlarını oku
3. Firebase Console > Firestore > Verileri kontrol et

---

## 📞 Yardımcı Linkler

- **Firebase Console**: https://console.firebase.google.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Firebase Docs**: https://firebase.google.com/docs
- **Vercel Docs**: https://vercel.com/docs

---

## 💡 İpuçları

1. **Test Ortamında Başla**
   - Yerel olarak test et
   - Hataları düzelt
   - Sonra production'a deploy et

2. **Credentials'ı Gizli Tut**
   - `.env.local` dosyasını git'e push etme
   - `.gitignore` dosyası bunu otomatik yapıyor

3. **Güvenlik Kurallarını Önemse**
   - Firestore güvenlik kuralları çok önemli
   - Her kullanıcı sadece kendi verilerine erişebilir

4. **Monitoring**
   - Firebase Console'da kullanım takip et
   - Vercel Dashboard'da deployment takip et

---

**Tebrikler! Firebase kurulumunu başarıyla tamamladın! 🎉**
