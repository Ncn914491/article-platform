# Article Platform

A minimalist Next.js application for reading and publishing articles with Firebase authentication, Firestore database, and Razorpay payment integration.

## Features

- **User Authentication**: Sign up and login using Firebase Authentication
- **Role-based Access**: Normal users can read articles, Pro users can create articles
- **Article Management**: Full CRUD operations for articles stored in Firestore
- **Payment Integration**: Upgrade to Pro membership for ₹1 using Razorpay
- **Responsive Design**: Clean and minimal UI using Tailwind CSS
- **Secure API Routes**: Serverless functions for payment processing and user management

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Cloud Firestore
- **Payments**: Razorpay
- **Deployment**: Vercel

## Project Structure

```
article-platform/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── payment/
│   │   │       ├── create-order/route.ts
│   │   │       └── verify/route.ts
│   │   ├── dashboard/page.tsx
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── upgrade/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── articles/
│   │   ├── auth/
│   │   ├── layout/
│   │   └── payment/
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   ├── firebase.ts
│   │   └── articlesService.ts
│   └── types/
│       └── index.ts
├── .env.local
├── .env.example
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication and Firestore enabled
- Razorpay account for payment processing

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy the `.env.example` file to `.env.local` and fill in your configuration:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # Razorpay Configuration
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret

   # Next.js Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_random_secret
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Firebase Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and Firestore Database

2. **Configure Authentication**:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider

3. **Set up Firestore**:
   - Go to Firestore Database
   - Create database in production mode
   - Set up the following collections:
     - `users` (for user profiles and roles)
     - `articles` (for article content)

4. **Firestore Security Rules**:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users can read/write their own user document
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Anyone can read articles
       match /articles/{articleId} {
         allow read: if true;
         allow create: if request.auth != null && 
           get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'pro';
         allow update, delete: if request.auth != null && 
           request.auth.uid == resource.data.authorId;
       }
     }
   }
   ```

## Razorpay Setup

1. **Create Razorpay Account**:
   - Sign up at [Razorpay](https://razorpay.com/)
   - Get your API keys from the dashboard

2. **Test Mode**:
   - Use test API keys for development
   - Test card: 4111 1111 1111 1111

## Git Setup and Deployment

### Initialize Git Repository

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Complete article platform with Firebase and Razorpay"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/article-platform.git

# Push to GitHub
git push -u origin main
```

### Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy with Vercel CLI**:
   ```bash
   vercel
   ```

3. **Set Environment Variables on Vercel**:
   - Go to your project dashboard on Vercel
   - Navigate to Settings > Environment Variables
   - Add all the variables from your `.env.local` file
   - Update `NEXTAUTH_URL` to your production URL

4. **Alternative: Deploy via GitHub**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy on every push
   - Set environment variables in Vercel dashboard

### Production Environment Variables

For production, update these variables:

```env
NEXTAUTH_URL=https://your-app.vercel.app
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_production_razorpay_key
RAZORPAY_KEY_SECRET=your_production_razorpay_secret
```

## Usage

1. **Home Page**: View all articles (public access)
2. **Sign Up/Login**: Create account or sign in
3. **Dashboard**: Authenticated view with article creation for Pro users
4. **Upgrade**: Pay ₹1 to become a Pro user
5. **Create Articles**: Pro users can create and publish articles

## API Routes

- `POST /api/payment/create-order` - Create Razorpay payment order
- `POST /api/payment/verify` - Verify payment and upgrade user

## Security Features

- Firebase Authentication for secure user management
- Firestore security rules for data access control
- Razorpay signature verification for payment security
- Environment variables for sensitive configuration
- Protected routes and role-based access control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Make sure to replace placeholder values with your actual Firebase and Razorpay credentials before deploying to production.
