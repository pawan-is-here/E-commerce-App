# ShopApp - React Native E-commerce Application

A modern e-commerce mobile application built with React Native and Expo.

## Features

- User authentication (Sign In/Sign Up)
- Product browsing and searching
- Shopping cart functionality
- User profile management
- Dark mode support
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shopapp.git
cd shopapp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
- Press `i` to run on iOS simulator
- Press `a` to run on Android emulator
- Scan the QR code with Expo Go app on your physical device

## Project Structure

```
shopapp/
├── app/                    # Main application code
│   ├── (tabs)/            # Tab-based navigation screens
│   ├── _layout.jsx        # Root layout configuration
│   ├── signin.jsx         # Sign in screen
│   └── signup.jsx         # Sign up screen
├── assets/                # Static assets (images, fonts)
├── components/            # Reusable components
└── context/              # React Context providers
```

## Technologies Used

- React Native
- Expo
- React Navigation
- AsyncStorage
- Lucide React Native (Icons)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
