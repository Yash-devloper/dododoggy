import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object using environment variables or optional config file
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Database ID (defaults to '(default)' or process.env setting)
const databaseId = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_ID || '(default)';

// Ensure Firebase is initialized only once across Next.js App Router renders & HMR
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Export Auth and Firestore instances for client components
export const auth = getAuth(app);
export const db = getFirestore(app, databaseId);

export default app;
