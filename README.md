# React Native TypeScript Project

โปรเจกต์ React Native ที่ใช้ TypeScript สำหรับการพัฒนาแอพพลิเคชั่นมือถือ

## 🚀 เริ่มต้นใช้งาน

### ติดตั้ง dependencies
```bash
npm install
```

### รัน Metro Bundler
```bash
npm start
```

### รันบน iOS (macOS เท่านั้น)
```bash
npm run ios
```

### รันบน Android
```bash
npm run android
```

## 📁 โครงสร้างโปรเจกต์

```
FrontEnd/
├── src/
│   ├── components/     # React components ที่ใช้ซ้ำได้
│   │   └── Button.tsx  # ตัวอย่าง Button component
│   ├── screens/        # หน้าจอต่างๆ ของแอพ
│   └── types/          # TypeScript type definitions
│       └── index.ts    # Shared types
├── App.tsx             # Component หลักของแอพ
├── index.ts            # Entry point
├── package.json        # Dependencies และ scripts
└── tsconfig.json       # TypeScript configuration
```

## 🛠 เทคโนโลยีที่ใช้

- **React Native** - Framework สำหรับพัฒนาแอพมือถือ
- **TypeScript** - Type-safe JavaScript
- **React** - UI Library

## 📝 ตัวอย่างการใช้งาน

### สร้าง Component ใหม่

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description && <Text>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyComponent;
```

## 🔧 Scripts ที่มี

- `npm start` - เริ่ม Metro bundler
- `npm run android` - รันแอพบน Android
- `npm run ios` - รันแอพบน iOS
- `npm run tsc` - ตรวจสอบ TypeScript errors

## ⚠️ หมายเหตุ

โปรเจกต์นี้ยังต้องการการตั้งค่าเพิ่มเติมสำหรับ native platforms:
- สำหรับ iOS: ต้องมี Xcode และตั้งค่า iOS project
- สำหรับ Android: ต้องมี Android Studio และตั้งค่า Android project

หากต้องการสร้างโปรเจกต์ที่สมบูรณ์ แนะนำให้ใช้คำสั่ง:
```bash
npx react-native@latest init ProjectName --template react-native-template-typescript
``` 