# PriceCompare India - React Native Product Price Tracker

A React Native application built with Expo to compare product prices across major Indian e-commerce websites including Amazon, Flipkart, Croma, Reliance Digital, and Tata Cliq.

## Features
- **Global Search**: Search for any product (mobile, laptop, appliances, etc.)
- **Multi-Store Comparison**: Real-time results from 5+ major Indian retailers.
- **Price Highlighting**: Automatically identifies and highlights the lowest price with a "BEST PRICE" badge.
- **Direct Links**: One-tap access to product pages using the Linking API.
- **Modern UI**: Built with React Native Paper for a premium look and feel.

## Tech Stack
- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Stack)
- **UI Components**: React Native Paper
- **API Calls**: Axios

## Getting Started

### Prerequisites
- Node.js installed
- Expo Go app on your Android device (for local testing)

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```
3. Scan the QR code with your Expo Go app to view the app.

## Building the Android APK (Production)

To build a standalone APK for Android using Expo Application Services (EAS):

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure the project**:
   ```bash
   eas build:configure
   ```

4. **Build the APK**:
   ```bash
   eas build -p android --profile preview
   ```
   *Note: `--profile preview` is used to generate an APK (not an AAB for the Play Store).*

## API Configuration
Currently, the app uses a mocked service for demonstration. To use a real API:
1. Open `src/services/productService.js`.
2. Replace `RAPID_API_KEY` with your actual key.
3. Uncomment the API call logic and adjust the response mapping to match your chosen API's structure.
