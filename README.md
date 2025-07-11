# LIFEØS - Intelligent Life Management App

A revolutionary mobile app that combines Gemini AI, Google Calendar, and Google Tasks into one intelligent, beautiful interface. Built with React Native and Expo, featuring iOS 26-inspired liquid glass effects and comprehensive accessibility support.

## 🌟 Features

### 🤖 AI-Powered Intelligence
- **Gemini AI Integration**: Smart insights and recommendations
- **Natural Language Processing**: Create events and tasks using voice commands
- **Intelligent Scheduling**: AI suggests optimal meeting times and task scheduling
- **Contextual Insights**: Personalized recommendations based on your patterns

### 📅 Calendar & Task Management
- **Google Calendar Sync**: Seamless integration with your existing calendar
- **Google Tasks Integration**: Manage tasks across all your devices
- **Smart Notifications**: Intelligent reminders and alerts
- **Priority Management**: AI-powered task prioritization

### 🎨 Beautiful Design
- **iOS 26 Liquid Glass**: Advanced glassmorphism effects throughout the app
- **Dark/Light Mode**: Auto-detection with manual toggle
- **Advanced Gradients**: Beautiful color transitions and effects
- **Cal AI Inspired**: Modern, clean interface design
- **Mobile-First**: Optimized for mobile devices

### ♿ Accessibility
- **WCAG 2.1 Compliance**: Full accessibility support
- **VoiceOver Support**: Complete screen reader compatibility
- **Dynamic Type**: Supports system font scaling
- **High Contrast**: Enhanced visibility options
- **Minimum Touch Targets**: 44pt minimum for all interactive elements

### 🔧 Technical Excellence
- **TypeScript**: Full type safety
- **React Native**: Cross-platform compatibility
- **Expo**: Easy development and deployment
- **App Store Ready**: Follows all Apple guidelines
- **Performance Optimized**: Smooth animations and interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lifeos
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on device/simulator**
   - Scan the QR code with Expo Go app
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

## 📱 App Structure

```
src/
├── components/          # Reusable UI components
│   ├── LiquidGlass.tsx  # iOS 26 glassmorphism component
│   └── AccessibleButton.tsx # WCAG compliant button
├── context/            # React Context providers
│   └── ThemeContext.tsx # Dark/light mode management
├── screens/            # App screens
│   ├── HomeScreen.tsx  # Main dashboard
│   ├── CalendarScreen.tsx
│   ├── TasksScreen.tsx
│   ├── AIScreen.tsx    # Gemini AI interface
│   └── ProfileScreen.tsx
└── theme/              # Design system
    └── theme.ts        # Color schemes and styling
```

## 🎯 Key Features in Detail

### Smart Dashboard
- **Personalized Greetings**: Time-based greetings with user name
- **AI Insights**: Contextual recommendations and productivity tips
- **Today's Schedule**: Clean overview of upcoming events
- **Task Overview**: Priority-based task management
- **Quick Actions**: One-tap access to common functions

### Theme System
- **Auto-Detection**: Automatically matches system theme
- **Manual Toggle**: Easy switching between light and dark modes
- **Smooth Transitions**: Animated theme changes
- **Consistent Design**: All components adapt to theme changes

### Accessibility Features
- **Screen Reader Support**: Complete VoiceOver/TalkBack compatibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color ratios
- **Touch Targets**: Minimum 44pt for all interactive elements
- **Semantic Labels**: Descriptive accessibility labels

## 🔐 Privacy & Security

- **Local Storage**: Sensitive data stored securely on device
- **Google OAuth**: Secure authentication with Google services
- **Data Encryption**: All data encrypted in transit and at rest
- **Privacy First**: Minimal data collection, user control over sharing

## 📋 App Store Compliance

- **Apple Guidelines**: Follows all App Store Review Guidelines
- **Accessibility**: Meets Section 508 and WCAG requirements
- **Performance**: Optimized for smooth performance
- **Privacy**: Compliant with App Privacy requirements

## 🛠 Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for quality assurance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Google**: For Gemini AI and Google services integration
- **Expo**: For the amazing development platform
- **React Native**: For cross-platform mobile development
- **Cal AI**: For design inspiration

---

**LIFEØS** - Where AI meets productivity, beautifully.