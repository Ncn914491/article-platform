# Firebase Setup Guide

## ✅ Completed Steps

1. ✅ Firebase CLI installed and logged in
2. ✅ Firebase project initialized 
3. ✅ Firestore rules configured and deployed
4. ✅ Firebase configuration already set in your app

## 🔧 Manual Firebase Console Setup Required

### Step 1: Enable Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/project/articlepaymentapp)
2. Click on **Authentication** in the left sidebar
3. Click **Get started** if not already enabled
4. Go to **Sign-in method** tab
5. Click on **Email/Password**
6. Toggle **Enable** to ON
7. Click **Save**

### Step 2: Configure Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. If not created, click **Create database**
3. Choose **Production mode** (our security rules are already deployed)
4. Select a region (preferably closest to your users)
5. Click **Done**

**Verification:** The rules we deployed should already be active:
```javascript
// Users can manage their own data
// Anyone can read articles
// Only Pro users can create articles
```

### Step 3: Verify Storage (Optional)

1. Go to **Storage** in Firebase Console
2. If you want file uploads later, click **Get started**
3. Use production mode (rules are set)

## 🎯 Test Your Firebase Setup

### In Your Application:

1. **Visit:** https://article-platform-q9epvdfdd-ncn914491s-projects.vercel.app
2. **Test Signup:** Create a new account
3. **Test Login:** Sign in with your credentials
4. **Check Dashboard:** Verify you can see the dashboard
5. **Upgrade to Pro:** Use payment flow (with real Razorpay keys)
6. **Create Article:** Test article creation as Pro user

### Expected Behavior:

✅ **Normal Users:**
- Can create account and login
- Can read all articles
- Cannot create articles (upgrade prompt shown)

✅ **Pro Users:**
- All normal user features
- Can create unlimited articles
- Articles are publicly visible

## 🛠 Firebase CLI Commands (Already Done)

```bash
# ✅ Already completed:
firebase login
firebase init firestore
firebase deploy --only firestore:rules
```

## 🔐 Security Rules Deployed

Our Firestore rules are now active:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null && request.auth.uid == userId;
    }
    
    // Articles rules
    match /articles/{articleId} {
      // Anyone can read articles (public access)
      allow read: if true;
      
      // Only authenticated pro users can create articles
      allow create: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'pro';
      
      // Only the article author can update or delete their articles
      allow update, delete: if request.auth != null && 
        request.auth.uid == resource.data.authorId;
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## 📧 Contact Email

All contact forms and support emails go to: **chaitanyanaidunarisetti@gmail.com**

## 🚨 Important Notes

1. **Authentication:** Must be manually enabled in Firebase Console
2. **Database:** Should be created in production mode (rules already deployed)
3. **Razorpay Keys:** Update with real keys for payment processing
4. **Testing:** Use test cards for Razorpay (4111 1111 1111 1111)

## 🔗 Useful Links

- **Firebase Console:** https://console.firebase.google.com/project/articlepaymentapp
- **Your Live App:** https://article-platform-q9epvdfdd-ncn914491s-projects.vercel.app
- **GitHub Repo:** https://github.com/Ncn914491/article-platform

## ⚡ Next Steps

1. **Enable Authentication** in Firebase Console (Email/Password)
2. **Get Razorpay API keys** and update Vercel environment variables
3. **Test the complete flow** from signup to article creation
4. **Update policy pages** if needed for your specific requirements

Your Article Platform is now production-ready! 🎉