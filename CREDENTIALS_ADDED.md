# ✅ Firebase Credentials Eklendi!

Harika! Firebase credentials'ını başarıyla aldın! 🎉

---

## 🔐 Senin Credentials'ın

```
API Key: AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU
Auth Domain: bombo-workout.firebaseapp.com
Project ID: bombo-workout
Storage Bucket: bombo-workout.firebasestorage.app
Messaging Sender ID: 511435779994
App ID: 1:511435779994:web:e8c7080ecba82de2a15423
```

---

## 📝 Adım 1: .env.local Dosyasını Oluştur

### Seçenek A: Otomatik Script (Kolay)

#### Windows CMD:
```bash
setup-env.bat
```

#### Windows PowerShell:
```bash
powershell -ExecutionPolicy Bypass -File setup-env.ps1
```

#### macOS/Linux:
```bash
cat > .env.local << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU
VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=bombo-workout
VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=511435779994
VITE_FIREBASE_APP_ID=1:511435779994:web:e8c7080ecba82de2a15423
EOF
```

### Seçenek B: Manuel (VS Code)

1. VS Code'da proje klasörünü aç
2. Sol panelde "Explorer" seçeneğine tıkla
3. Proje klasörünün yanında "Yeni Dosya" butonuna tıkla
4. Dosya adı: `.env.local`
5. Aşağıdaki kodu yapıştır:

```
VITE_FIREBASE_API_KEY=AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU
VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=bombo-workout
VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=511435779994
VITE_FIREBASE_APP_ID=1:511435779994:web:e8c7080ecba82de2a15423
```

6. Ctrl+S ile kaydet

---

## 🚀 Adım 2: Development Sunucusunu Başlat

```bash
npm run dev
```

Tarayıcı otomatik açılacak: `http://localhost:3000`

---

## 🧪 Adım 3: Test Et

### Login Sayfası
- ✅ Login sayfası görünecek
- ✅ Email ve Şifre alanları olacak

### Test Kullanıcısıyla Giriş Yap
- **Email**: `test@example.com`
- **Şifre**: `Test123456`

### Başarılı Giriş
- ✅ Profil sayfası açılacak
- ✅ Boy, kilo, yaş bilgileri gösterilecek
- ✅ Antrenman programı görünecek
- ✅ Dinlenme süresi timer'ı çalışacak

---

## 🔍 Kontrol Listesi

- [ ] `.env.local` dosyasını oluşturdun
- [ ] Credentials'ı `.env.local`'e ekledin
- [ ] `npm run dev` komutunu çalıştırdın
- [ ] Login sayfası açıldı
- [ ] Test kullanıcısıyla giriş yaptın
- [ ] Profil sayfası açıldı
- [ ] Antrenman programı görünüyor

---

## ⚠️ Sorun Giderme

### Sorun: "Cannot find module 'firebase'"
```bash
npm install
npm run dev
```

### Sorun: ".env.local not found"
1. `.env.local` dosyasını oluştur
2. Credentials'ı ekle
3. Development sunucusunu yeniden başlat

### Sorun: "Permission denied" hatası
1. Firebase Console'a git
2. Firestore Database > Rules sekmesine git
3. Aşağıdaki kodu yapıştır:

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

4. "Yayınla" butonuna tıkla

---

## 📚 Sonraki Adımlar

1. ✅ Firebase credentials aldın
2. ✅ `.env.local` dosyasını oluştur
3. ✅ Development sunucusunu başlat
4. ⬜ Test kullanıcısıyla giriş yap
5. ⬜ Yeni kullanıcı oluştur
6. ⬜ Profil bilgilerini gir
7. ⬜ Antrenman programını kullan
8. ⬜ GitHub'a push et
9. ⬜ Vercel'e deploy et

---

## 🎉 Harika!

Şimdi yerel geliştirmeye başlayabilirsin!

**Komut:**
```bash
npm run dev
```

**URL:**
```
http://localhost:3000
```

**Test Kullanıcısı:**
- Email: `test@example.com`
- Şifre: `Test123456`

---

**Başarılar! 💪**
