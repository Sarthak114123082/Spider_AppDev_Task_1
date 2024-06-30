Installing React Native with Expo -

Step 1: Prerequisites
Node.js: Ensure you have Node.js installed on your machine. You can download it from Node.js official website.
npm or Yarn: npm is included with Node.js. Alternatively, you can use Yarn, which you can install from Yarn's official website.

Step 2: Install Expo CLI
Expo CLI is a command-line tool for managing your Expo projects.
bash Copy code - "npm install -g expo-cli"
Or, if you're using Yarn:
bash Copy code - "yarn global add expo-cli"

Step 3: Create a New Expo Project
Create a new project using Expo CLI. Navigate to your desired directory and run:
bash Copy code - "expo init my-new-project"
Choose a template. For a beginner, the "blank" template is usually a good start. Follow the prompts to set up your project.

Step 4: Navigate to Your Project Directory
Change to the newly created project directory:

bash Copy code - "cd my-new-project"

Step 5: Start the Expo Development Server
Start the development server with:

bash Copy code - "expo start"
This will open Expo Dev Tools in your browser, and you will see a QR code. You can use the Expo Go app on your mobile device to scan this QR code and run your project.

Step 6: Install Expo Go App
Android: Go to Google Play Store and install Expo Go.
iOS: Go to the App Store and install Expo Go.
Scan the QR code from Expo Dev Tools with the Expo Go app to view your application on your mobile device.

Step 7: Develop Your Application
You can now start coding your React Native application. Your App.js file is the entry point. Modify it as needed to build your app.

Additional Steps
Testing on an Emulator or Simulator

Android:

Install Android Studio from Android Studio's official website.
Open Android Studio and configure an AVD (Android Virtual Device).
Once set up, you can start the AVD and Expo CLI will detect it. You can then press a in the Expo CLI to open your project in the Android emulator.
iOS (macOS only):

Ensure you have Xcode installed from the Mac App Store.
Open Xcode and go to Preferences > Locations, then select the Xcode command-line tools.
Open a terminal and run xcrun simctl list devices to list available simulators.
Start the simulator with open -a Simulator.
Press i in the Expo CLI to open your project in the iOS simulator.
Managing Dependencies

To install additional packages, use npm or Yarn. For example, to install react-navigation:

bash
Copy code
npm install @react-navigation/native
Or with Yarn:

bash
Copy code
yarn add @react-navigation/native
Running on a Physical Device

To run your app on a physical device:

Ensure your computer and mobile device are on the same Wi-Fi network.
Scan the QR code from Expo Dev Tools with the Expo Go app.
Tips for Development
Hot Reloading: Changes to your JavaScript files will automatically reload your app. You can enable hot reloading from the developer menu in Expo Go.
Error Debugging: Use the browser console or the console in Expo Go to view error messages and logs.


IMPORTANT
******************************************
My react-native installation was on mac which lead to external dependencies error files, to run the project instead of using "expo start" command I used "npx start expo" command.
******************************************
