# 🔑 Environment Variables Kurulumu

Firebase credentials'ını başarıyla aldın! Şimdi `.env.local` dosyasını oluşturman gerekiyor.

## ⚠️ ÖNEMLİ

`.env.local` dosyası **GİT'E PUSH EDİLMEMELİDİR**. Bu dosya `.gitignore` tarafından korunuyor ve sadece yerel geliştirme için kullanılır.

---

## 📝 Adım 1: .env.local Dosyasını Oluştur

### Seçenek A: VS Code ile
1. VS Code'da proje klasörünü aç
2. Sol panelde "Explorer" seçeneğine tıkla
3. Proje klasörünün yanında "Yeni Dosya" butonuna tıkla
4. Dosya adı: `.env.local`
5. Enter'e bas

### Seçenek B: Terminal ile
```bash
# Proje klasöründe
echo. > .env.local
```

### Seçenek C: Manuel olarak
1. Not Defteri aç
2. Aşağıdaki kodu yapıştır
3. Dosya > Farklı Kaydet
4. Dosya adı: `.env.local`
5. Dosya türü: "Tüm dosyalar (*.*)"
6. Proje klasörüne kaydet

---

## 🔐 Adım 2: Credentials'ı Ekle

`.env.local` dosyasını aç ve aşağıdaki kodu yapıştır:

```
VITE_FIREBASE_API_KEY=AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU
VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=bombo-workout
VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=511435779994
VITE_FIREBASE_APP_ID=1:511435779994:web:e8c7080ecba82de2a15423
```

**Dosyayı kaydet!**

---

## ✅ Adım 3: Doğrulama

### Dosya Var mı?
Proje klasöründe `.env.local` dosyasını görebilmen gerekiyor:
```
c:\Users\kapta\Downloads\wind\
├── .env.local          ✅ Bu dosya olmalı
├── .env.example        ✅ Bu dosya da var
├── src/
└── ...
```

### Dosya İçeriği Doğru mu?
`.env.local` dosyasını aç ve aşağıdaki satırları kontrol et:
- [ ] `VITE_FIREBASE_API_KEY=AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU`
- [ ] `VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com`
- [ ] `VITE_FIREBASE_PROJECT_ID=bombo-workout`
- [ ] `VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.firebasestorage.app`
- [ ] `VITE_FIREBASE_MESSAGING_SENDER_ID=511435779994`
- [ ] `VITE_FIREBASE_APP_ID=1:511435779994:web:e8c7080ecba82de2a15423`

---

## 🚀 Adım 4: Development Sunucusunu Başlat

```bash
npm run dev
```

Eğer hata alırsan:
1. Development sunucusunu durdur (Ctrl+C)
2. `.env.local` dosyasını kontrol et
3. Tüm credentials'ın doğru olduğunu kontrol et
4. Tekrar `npm run dev` komutunu çalıştır

---

## 🧪 Adım 5: Test Et

1. Tarayıcı açılacak: `http://localhost:3000`
2. Login sayfası görünecek
3. Aşağıdaki test kullanıcısıyla giriş yap:
   - **Email**: `test@example.com`
   - **Şifre**: `Test123456`

### Başarılı Giriş
- ✅ Profil sayfası açılacak
- ✅ Boy, kilo, yaş bilgileri gösterilecek
- ✅ Antrenman programı görünecek

### Hata Alırsan
- ❌ "Permission denied" → Firestore güvenlik kurallarını kontrol et
- ❌ "User not found" → Test kullanıcısını Firebase Console'da oluştur
- ❌ "Firebase config not found" → `.env.local` dosyasını kontrol et

---

## 🔒 Güvenlik Notları

### ✅ Yapılması Gerekenler
- ✅ `.env.local` dosyasını `.gitignore`'a ekle (zaten eklendi)
- ✅ Credentials'ı sadece yerel geliştirmede kullan
- ✅ Production'da Vercel environment variables kullan
- ✅ Credentials'ı kimseyle paylaşma

### ❌ Yapılmaması Gerekenler
- ❌ `.env.local` dosyasını GitHub'a push etme
- ❌ Credentials'ı kod içine yazma
- ❌ Credentials'ı email ile gönderme
- ❌ Credentials'ı public repository'de sakla

---

## 📋 Kontrol Listesi

- [ ] `.env.local` dosyasını oluşturdun
- [ ] Credentials'ı `.env.local`'e ekledin
- [ ] Dosyayı kaydettiniz
- [ ] `npm run dev` komutunu çalıştırdın
- [ ] Login sayfası açıldı
- [ ] Test kullanıcısıyla giriş yaptın
- [ ] Profil sayfası açıldı
- [ ] Antrenman programı görünüyor

---

## 🆘 Sorun Giderme

### Sorun: "Cannot find module 'firebase'"
**Çözüm:**
```bash
npm install
npm run dev
```

### Sorun: ".env.local not found"
**Çözüm:**
1. `.env.local` dosyasını oluştur
2. Credentials'ı ekle
3. Development sunucusunu yeniden başlat

### Sorun: "Firebase config is undefined"
**Çözüm:**
1. `.env.local` dosyasını aç
2. Tüm satırların doğru olduğunu kontrol et
3. Boş satır olmadığını kontrol et
4. Development sunucusunu yeniden başlat

### Sorun: "Permission denied" hatası
**Çözüm:**
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

## ✨ Sonraki Adımlar

1. ✅ `.env.local` dosyasını oluştur
2. ✅ Credentials'ı ekle
3. ✅ Development sunucusunu başlat
4. ✅ Test kullanıcısıyla giriş yap
5. ⬜ Yeni kullanıcı oluştur
6. ⬜ Profil bilgilerini gir
7. ⬜ Antrenman programını kullan
8. ⬜ GitHub'a push et
9. ⬜ Vercel'e deploy et

---

**Tebrikler! Firebase credentials'ını başarıyla ekledin! 🎉**

Şimdi yerel geliştirmeye başlayabilirsin!
