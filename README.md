# طبختي

هذا المشروع جاهز الآن للتغليف كـ تطبيقات iPhone و Android باستخدام Capacitor.

## الخطوة 1: تثبيت المكتبات

```bash
npm install
```

## الخطوة 2: إنشاء مشاريع iOS و Android

```bash
npx cap init "Tabkhaty" --web-dir .
npx cap add ios
npx cap add android
```

## الخطوة 3: مزامنة المشروع بعد أي تعديل

```bash
npx cap sync
```

## الخطوة 4: فتح المشاريع في الأدوات الرسمية

### iOS (Xcode)

```bash
npx cap open ios
```

### Android (Android Studio)

```bash
npx cap open android
```

## الخطوة 5: بناء التطبيق للنشر

### iOS
- افتح Xcode
- اختر فريقك (Team)
- اضبط Bundle Identifier
- اذهب إلى Signing & Capabilities
- ارفع الـ build إلى App Store Connect

### Android
- افتح Android Studio
- أنشئ ملف Sign Key
- أرسل الـ AAB إلى Google Play Console

## ملاحظات مهمة

- لا ترفع المشروع كـ PWA خام إلى App Store أو Google Play.
- يجب تغليفه عبر Capacitor.
- تأكد أن `index.html` هو الصفحة الرئيسية.
- تأكد أن `manifest.webmanifest` و `sw.js` يعملان داخل التطبيق في حالة الاستخدام.

## المتطلبات

- MacBook + Xcode لِـ App Store
- Android Studio + Google Play Console لِـ Android
- Apple Developer Program
- Google Play Console account

## التهيئة الأساسية الحالية

تمت إضافة ملف `capacitor.config.json` داخل المشروع ليكون جاهزًا للبدء مباشرة.
