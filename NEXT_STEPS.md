# 🚀 Sonraki Adımlar

Firebase credentials'ı başarıyla ekledin! Şimdi ne yapacağını adım adım anlat.

---

## ✅ Tamamlanan

- ✅ Firebase credentials aldın
- ✅ `.env.local` dosyası oluşturuldu
- ✅ Development sunucusu çalışıyor
- ✅ Uygulamaya erişebilirsin: `http://localhost:3000`

---

## 🎯 Şimdi Yapacakların

### 1️⃣ Uygulamayı Test Et (5 dakika)

#### Login Sayfası
Tarayıcıda `http://localhost:3000` açıldığında:
- ✅ "Bombo" başlığı görünecek
- ✅ Login/Register seçeneği olacak
- ✅ Email ve Şifre alanları olacak

#### Test Kullanıcısıyla Giriş Yap
```
Email: test@example.com
Şifre: Test123456
```

#### Başarılı Giriş
- ✅ Profil sayfası açılacak
- ✅ Boy, kilo, yaş bilgileri gösterilecek
- ✅ Antrenman programı görünecek
- ✅ Dinlenme süresi timer'ı çalışacak

---

### 2️⃣ Yeni Kullanıcı Oluştur (5 dakika)

1. Login sayfasında "Kaydol" seçeneğine tıkla
2. Bilgilerini gir:
   - **Email**: Senin email adresin
   - **Şifre**: Güçlü bir şifre
   - **Ad Soyad**: Senin adın
   - **Boy**: 188 (cm)
   - **Kilo**: 76 (kg)
   - **Yaş**: Senin yaşın (opsiyonel)
3. "Hesap Oluştur" butonuna tıkla

#### Başarılı Kayıt
- ✅ Otomatik giriş yapılacak
- ✅ Profil sayfası açılacak
- ✅ Antrenman programı görünecek

---

### 3️⃣ Antrenman Programını Kullan (10 dakika)

#### Gün Seçme
1. Gün seçici butonlarından bir gün seç (Pazartesi, Salı, vb.)
2. O günün antrenman programı görünecek

#### Egzersiz Takibi
1. Egzersiz kartını aç
2. "Set 1 Done" butonuna tıkla
3. Dinlenme süresi timer'ı açılacak
4. Önceden ayarlanmış sürelerden birini seç (30s, 60s, 90s, vb.)
5. "Start" butonuna tıkla
6. Timer çalışacak ve ses bildirimi verecek

#### Egzersiz Ekleme
1. "Egzersiz Ekle" butonuna tıkla
2. Egzersiz bilgilerini gir:
   - Adı
   - Set sayısı
   - Rep aralığı
   - RIR (opsiyonel)
   - Failure type (opsiyonel)
3. "Egzersiz Ekle" butonuna tıkla

---

### 4️⃣ Profil Düzenle (5 dakika)

1. Sol panelde profil kartını aç
2. "İstatistikleri Düzenle" butonuna tıkla
3. Boy, kilo, yaş bilgilerini güncelle
4. "Değişiklikleri Kaydet" butonuna tıkla

#### Otomatik Hesaplanan
- ✅ BMI (Boy-Kilo İndeksi) otomatik hesaplanır

---

### 5️⃣ GitHub'a Push Et (10 dakika)

#### Adım 1: Git Kurulumu
```bash
git init
git add .
git commit -m "Initial commit - Bombo with Firebase"
```

#### Adım 2: GitHub Repository Oluştur
1. https://github.com adresine git
2. Sağ üst köşede "+" butonuna tıkla
3. "New repository" seçeneğini tıkla
4. Repository adı: `bombo`
5. Açıklama: `Advanced Workout Tracker with Firebase`
6. "Create repository" butonuna tıkla

#### Adım 3: Remote Ekle ve Push Et
```bash
git remote add origin https://github.com/YOUR_USERNAME/bombo.git
git branch -M main
git push -u origin main
```

**NOT**: `YOUR_USERNAME` yerine GitHub kullanıcı adını koy!

---

### 6️⃣ Vercel'e Deploy Et (15 dakika)

#### Adım 1: Vercel Hesabı Oluştur
1. https://vercel.com adresine git
2. "Sign Up" butonuna tıkla
3. GitHub hesabınla giriş yap

#### Adım 2: Proje Oluştur
1. Vercel Dashboard'a git
2. "New Project" butonuna tıkla
3. GitHub hesabını bağla
4. `bombo` repository'sini seç
5. "Import" butonuna tıkla

#### Adım 3: Environment Variables Ekle
1. "Settings" > "Environment Variables" seçeneğine git
2. Aşağıdaki değişkenleri ekle:

| Key | Value |
|-----|-------|
| `VITE_FIREBASE_API_KEY` | `AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `bombo-workout.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `bombo-workout` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `bombo-workout.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `511435779994` |
| `VITE_FIREBASE_APP_ID` | `1:511435779994:web:e8c7080ecba82de2a15423` |

#### Adım 4: Deploy Et
1. "Deploy" butonuna tıkla
2. Deployment tamamlanana kadar bekle (2-5 dakika)
3. Vercel sana bir URL verecek (örn: `https://bombo.vercel.app`)

#### Adım 5: Test Et
1. Vercel URL'ini tarayıcıda aç
2. Login sayfası görünecek
3. Test kullanıcısıyla giriş yap
4. Antrenman programını gör

---

## 📋 Kontrol Listesi

### Yerel Geliştirme
- [ ] `.env.local` dosyası oluşturuldu
- [ ] `npm run dev` komutu çalışıyor
- [ ] Login sayfası açılıyor
- [ ] Test kullanıcısıyla giriş yapılabiliyor
- [ ] Profil sayfası açılıyor
- [ ] Antrenman programı görünüyor

### Yeni Kullanıcı
- [ ] Yeni kullanıcı oluşturdum
- [ ] Profil bilgilerini girdim
- [ ] Antrenman programını gördüm

### Antrenman Takibi
- [ ] Gün seçebildim
- [ ] Egzersiz kartını açabildim
- [ ] Set tamamladım
- [ ] Dinlenme süresi timer'ını kullandım
- [ ] Ses bildirimi aldım

### Profil Yönetimi
- [ ] Profil bilgilerini düzenledim
- [ ] BMI hesaplanmış
- [ ] Değişiklikler kaydedilmiş

### GitHub
- [ ] Git kurulumu yaptım
- [ ] Repository oluşturdum
- [ ] Kodu push ettim
- [ ] GitHub'da kod görünüyor

### Vercel Deployment
- [ ] Vercel hesabı oluşturdum
- [ ] Repository'yi bağladım
- [ ] Environment variables ekledim
- [ ] Deploy ettim
- [ ] Canlı URL çalışıyor

---

## 🎯 Başarı Göstergeleri

Aşağıdaki durumlar başarıyı gösterir:

1. ✅ Yerel olarak `npm run dev` çalışıyor
2. ✅ Login sayfası görünüyor
3. ✅ Test kullanıcısıyla giriş yapılabiliyor
4. ✅ Profil sayfası açılıyor
5. ✅ Antrenman programı görünüyor
6. ✅ Dinlenme süresi timer'ı çalışıyor
7. ✅ Yeni kullanıcı oluşturulabiliyor
8. ✅ Veriler Firestore'da kaydediliyor
9. ✅ GitHub'a push başarılı
10. ✅ Vercel'de deployment başarılı
11. ✅ Canlı URL çalışıyor
12. ✅ Arkadaşlar davet edilebiliyor

---

## 🆘 Sorun Giderme

### Yerel Geliştirme Sorunları
- **"Firebase config not found"** → `.env.local` dosyasını kontrol et
- **"Permission denied"** → Firestore güvenlik kurallarını kontrol et
- **"Module not found"** → `npm install` komutunu çalıştır

### Deployment Sorunları
- **"Build failed"** → `npm run build` ile yerel test et
- **"Environment variables not found"** → Vercel'de environment variables'ı kontrol et
- **"Deployment stuck"** → Vercel Dashboard'da logs'u kontrol et

---

## 📚 Yardımcı Dosyalar

- `ENV_SETUP.md` - Environment variables kurulumu
- `CREDENTIALS_ADDED.md` - Credentials eklendi
- `SETUP_GUIDE.md` - Detaylı kurulum
- `FIREBASE_SETUP.md` - Firebase kurulumu
- `DEPLOYMENT.md` - Vercel deployment
- `PROJECT_SUMMARY.md` - Proje özeti
- `CHECKLIST.md` - Kontrol listesi

---

## 🚀 Hızlı Komutlar

```bash
# Development sunucusunu başlat
npm run dev

# Production build
npm run build

# Build'i preview et
npm run preview

# Git kurulumu
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bombo.git
git branch -M main
git push -u origin main
```

---

## 🎉 Tebrikler!

Bombo'yu başarıyla kurdum ve Firebase ile entegre ettim! 

Şimdi:
1. ✅ Yerel geliştirmede kullan
2. ✅ Arkadaşlarını davet et
3. ✅ Canlı URL'i paylaş
4. ✅ Antrenman programını takip et

---

**Başarılar! 💪**

*Son güncelleme: 28 Kasım 2025*
