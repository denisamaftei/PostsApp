# Posts App
This is a simple React Native project with TypeScript and Firebase integration, allowing users to add, delete, and edit posts.
**Note: This project was created purely for learning purposes.**

## Features
* Create new posts with a title and content
* Edit existing posts
* Delete blog posts

## Prerequisites
Before running the project, make sure you have the following installed:

* Node.js (v12 or above)
* Yarn or npm package manager
* Firebase account and Firebase project set up

  Installation
1. Clone the repository:

```bash
git clone https://github.com/denisamaftei/PostsApp.git
```
2. Navigate to the project directory:

```bash
cd PostsApp
```
3. Install dependencies:

```bash
yarn install
# or
npm install
```
4. Configure Firebase:
* Create a new Firebase project at the Firebase Console.
* Enable Authentication using email and password in the Firebase project settings.
* Enable Cloud Firestore database in the Firebase project settings.

5. Update Firebase configuration:
* Open the src/config/firebase.ts file.
* Replace the configuration values with your own Firebase project credentials.

```typescript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // ...add other Firebase config values
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const projectAuth = firebase.auth();
const db = firebase.firestore();
// collection references
export const postsCollection = db.collection("posts");
export default { db };
```
6. Start Metro (the JavaScript bundler):
```bash
npx react-native start
```
7. Start the app:
```bash
npx react-native run-android
```
Now you should be able to run the app successfully and test its features.

# Usage
* Launch the app on your emulator or device.
* Log in.
* Create a new post by providing a title and content.
* Edit or delete existing posts by tapping on them in the list.
Make sure to follow the directory structure and read the documentation within the code to further understand the project.

# Directory Structure
The project structure is organized as follows:

```bash
├── __tests__/          # Test files
├── android/            # Android native files
├── ios/                # iOS native files
├── src/                # Source code directory
│   ├── components/     # Reusable UI components
│   ├── screens/        # Application screens
│   ├── store/          # Redux store files
├── App.tsx             # Entry point of the application
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies and scripts
└── README.md           # Project README (you're currently reading this!)
```

# Contributing
Contributions are welcome! If you find any issues or want to enhance the functionality of this project, please feel free to open an issue or submit a pull request.

# License
This project is licensed under the [MIT License](https://github.com/denisamaftei/PostsApp/blob/master/LICENSE).

# Acknowledgments
* [React Native](https://reactnative.dev/)
* [Firebase](https://firebase.google.com/)
* [TypeScript](https://www.typescriptlang.org/)

# Contact
For any questions or inquiries, please contact denisa.mihaela.maftei@gmail.com

Happy coding!
