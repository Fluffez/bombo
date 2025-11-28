@echo off
REM Bombo - Environment Setup Script
REM Bu script .env.local dosyasini olusturur

echo.
echo ====================================
echo Bombo - Environment Setup
echo ====================================
echo.

REM .env.local dosyasini olustur
echo VITE_FIREBASE_API_KEY=AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU > .env.local
echo VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com >> .env.local
echo VITE_FIREBASE_PROJECT_ID=bombo-workout >> .env.local
echo VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.firebasestorage.app >> .env.local
echo VITE_FIREBASE_MESSAGING_SENDER_ID=511435779994 >> .env.local
echo VITE_FIREBASE_APP_ID=1:511435779994:web:e8c7080ecba82de2a15423 >> .env.local

echo.
echo ✓ .env.local dosyasi olusturuldu!
echo.
echo Dosya icerigi:
echo ====================================
type .env.local
echo ====================================
echo.
echo Simdi npm run dev komutunu calistir:
echo npm run dev
echo.
pause
