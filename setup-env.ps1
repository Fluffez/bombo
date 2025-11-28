# Bombo - Environment Setup Script (PowerShell)
# Bu script .env.local dosyasini olusturur

Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Bombo - Environment Setup" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# .env.local dosyasini olustur
$envContent = @"
VITE_FIREBASE_API_KEY=AIzaSyDxEq3Y3U__19hKuVBUdN8UA7IJIn9jGSU
VITE_FIREBASE_AUTH_DOMAIN=bombo-workout.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=bombo-workout
VITE_FIREBASE_STORAGE_BUCKET=bombo-workout.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=511435779994
VITE_FIREBASE_APP_ID=1:511435779994:web:e8c7080ecba82de2a15423
"@

Set-Content -Path ".env.local" -Value $envContent

Write-Host "✓ .env.local dosyasi olusturuldu!" -ForegroundColor Green
Write-Host ""
Write-Host "Dosya icerigi:" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Yellow
Get-Content .env.local
Write-Host "====================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "Simdi npm run dev komutunu calistir:" -ForegroundColor Green
Write-Host "npm run dev" -ForegroundColor Yellow
Write-Host ""
