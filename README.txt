
# Study Helper PWA (Starter)

This is a ready-to-deploy PWA shell. It installs on your phone (Add to Home Screen) and works offline. 
Replace the demo JS with your full React app code from the canvas.

## Files
- index.html — app shell
- manifest.json — PWA metadata
- service-worker.js — offline caching
- /icons — app icons

## Quick Deploy (GitHub Pages)
1) Create a new public repo on GitHub.
2) Upload these files (index.html, manifest.json, service-worker.js, icons/*).
3) In Repository Settings → Pages → Deploy from branch → choose `main` and `/ (root)` or `/docs`.
4) Open the `https://username.github.io/repo/` link on your phone.
5) In the browser menu: Add to Home Screen.

## Wrap as Android APK (Capacitor - snapshot)
1) On a PC, install Node.js and Android Studio.
2) In this folder: 
   npm init -y
   npm install @capacitor/core @capacitor/cli
   npx cap init study-helper com.example.studyhelper --web-dir=.
3) Add Android platform:
   npm install @capacitor/android
   npx cap add android
4) Open Android project:
   npx cap open android
5) Build & run from Android Studio (app will load this PWA content).

## Cordova alternative
cordova create studyhelper
cd studyhelper
cordova platform add android
# Copy these PWA files into www/
cordova build android

## Notes
- For single-page apps on GitHub Pages, add a 404.html that redirects to index.html if you use client-side routing.
- To use your full React app, build it to static files and replace index.html + assets here.
