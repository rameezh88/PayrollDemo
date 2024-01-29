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

# Implementation

The app has the following features:

1. **Home Screen**: The home screen shows a list of available payroll items. Clicking on one of these will take you to a Payment details page.
2. **Payment Details**: Shows the details of the selected payment. On `iOS` and `Android`, there is a button that allows you to download a PDF of the payment details. There will be a confirmation alert dialog when the file is successfully downloaded.

To check the file, you will need to check specific locations according to platform:

### _iOS_:

- Go to `Files` app
- Select the "Browse" tab.
- Open the `payrolldemo` folder. There you will see the downloaded PDFs.

### _Android_:

- Go to any File-browser app. Preferably the default bundled one from the manufacturer.
- Open the "Recents" option from the menu.
- You will see the downloaded PDFs.

# Further Improvements & Challenges

- Open downloaded PDF file (especially on `Android`) or open the file location.
- Getting actions to work through accessibility on `iOS` simulator.
- Better accessibility setup
  - Better navigation between elements.
  - Disable `Talkback` for the parent views of the screens. And of the Ionic app.
  - Check properly if accessibility works for `Chrome`.
- Better animations and transitions.
