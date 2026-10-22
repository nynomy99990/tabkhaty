# Tabkhaty

## Run locally

```bash
npm install
npx cap init "Tabkhaty" --web-dir .
npx cap add android
npx cap sync
npx cap open android
```

## Test on Android emulator/device

After opening Android Studio:
- choose an emulator or a connected Android phone
- press Run
- test the app before publishing

## Before publishing to Google Play

- generate a signing key
- create a release AAB
- upload it to Google Play Console

## Note

This project is currently the web app version. For App Store publishing, a MacBook with Xcode is required.
