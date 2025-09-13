# Quick Deployment Setup

## Step 1: Set up your Razorpay keys

You need to complete your `.env.local` file with your Razorpay credentials:

1. Sign up at [Razorpay](https://razorpay.com/) if you haven't already
2. Get your test API keys from the Razorpay Dashboard
3. Update your `.env.local` file:

```env
# Add these to your existing .env.local file:
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_secret_key_here
NEXTAUTH_SECRET=generate_a_random_string_here
```

## Step 2: Initialize Git and commit

```bash
# Add all files to git
git add .

# Make your first commit
git commit -m "Initial commit: Complete article platform with Firebase and Razorpay"
```

## Step 3: Create GitHub repository and push

1. Go to [GitHub](https://github.com) and create a new repository named `article-platform`
2. Copy the repository URL
3. Run these commands:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/article-platform.git

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow the prompts)
vercel
```

### Option B: Using GitHub integration

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `article-platform` repository
5. Vercel will auto-detect it's a Next.js project

## Step 5: Set Environment Variables on Vercel

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add all variables from your `.env.local` file:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `NEXTAUTH_URL` (set this to your Vercel app URL: `https://your-app.vercel.app`)
   - `NEXTAUTH_SECRET`

## Step 6: Test your deployment

1. Wait for deployment to complete
2. Visit your Vercel app URL
3. Test the following:
   - Sign up for a new account
   - Browse articles
   - Try the payment flow (use test card: 4111 1111 1111 1111)
   - Create an article after upgrading to Pro

## Important Notes:

- Your Firebase configuration is already set up with the provided credentials
- Make sure your Firebase project has the correct security rules (see README.md)
- For production, switch to Razorpay live keys
- Your app will be live at `https://your-app-name.vercel.app`

## Troubleshooting:

- If build fails on Vercel, check the build logs for missing environment variables
- If Firebase connection fails, verify your project configuration
- If payments fail, ensure Razorpay keys are correctly set

Your Article Platform is now ready for the world! 🚀