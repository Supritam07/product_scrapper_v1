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

## 📱 Latest Build
The latest Android APK has been successfully built and can be downloaded here:
**[Download PriceCompare India APK](https://expo.dev/accounts/ashish132435/projects/price-compare-india/builds/aa9d0ea8-ab81-4b7c-ab29-897e70ad51b3)**

## API Configuration
The app is currently configured to use the **Real-Time Product Search API** via RapidAPI. 

### Data Source
- **API**: `real-time-product-search.p.rapidapi.com`
- **Capabilities**: Fetches real-time pricing and availability from major Indian stores including Amazon and Flipkart.

To modify the API or use your own key:
1. Open `src/services/productService.js`.
2. Update the `RAPID_API_KEY` constant with your credentials.

---
*Note: This project was built for educational purposes to demonstrate React Native price comparison capabilities.*
