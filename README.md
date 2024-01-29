# Payroll Demo Project

This project is built using Capacitor and React, providing a cross-platform mobile app with web support.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

- NPM: NPM is the package manager for Node.js. It is usually included with Node.js installation.

- Capacitor: Install Capacitor globally using the following command:

  ```bash
  npm install -g @capacitor/cli
  ```

- Make sure you have the latest version of Xcode and Android Studio installed.

# Getting Started

## Clone the Repository:

```
git clone https://github.com/rameezh88/PayrollDemo.git
cd PayrollDemo
```

## Install Dependencies:

```
npm install
```

# Running the App

## Web

To run the app in a web browser, use the following command:

```
npm run web
```

Or install the Capacitor plugin for VSCode and run using `Run > iOS`

## iOS

Run the app on `iOS` simulator:

```
npx cap run ios
```

Or open the iOS project in `Xcode` to run it on an attached device or simulator:

```
npx cap open ios
```

Build and run the project in `Xcode`.

Or, install the Capacitor plugin for `VSCode` and run using `Run > iOS`

## Android

Run on Android Emulator or attached device:

```
npx cap run android
```

Open the Android project in `Android Studio`:

```
npx cap open android
```

Build and run the project in `Android Studio`.

Or, install the Capacitor plugin for `VSCode` and run using `Run > Android`

# Further Improvements & Challenges

- Open downloaded PDF file (especially on `Android`) or open the file location.
- Getting actions to work through accessibility on `iOS` simulator.
- Better accessibility setup
  - Better navigation between elements.
  - Disable `Talkback` for the parent views of the screens. And of the Ionic app.
  - Check properly if accessibility works for `Chrome`.
- Better animations and transitions.
