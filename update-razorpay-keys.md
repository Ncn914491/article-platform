# Update Razorpay Keys on Vercel

Now that your app is deployed at: **https://article-platform-q9epvdfdd-ncn914491s-projects.vercel.app**

## Step 1: Get Razorpay Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up/Login with your account
3. Go to Settings → API Keys
4. Generate Test Keys (for development)
5. Copy your:
   - **Key ID** (starts with `rzp_test_`)
   - **Key Secret**

## Step 2: Update Environment Variables on Vercel

### Option 1: Using Vercel CLI

```bash
# Update production keys
vercel env rm NEXT_PUBLIC_RAZORPAY_KEY_ID production
vercel env rm RAZORPAY_KEY_SECRET production

vercel env add NEXT_PUBLIC_RAZORPAY_KEY_ID
# Enter your actual Razorpay Key ID (rzp_test_...)
# Select: Production

vercel env add RAZORPAY_KEY_SECRET
# Enter your actual Razorpay Secret Key
# Select: Production

# Redeploy
vercel --prod
```

### Option 2: Using Vercel Dashboard (Easier)

1. Go to https://vercel.com/dashboard
2. Click on your `article-platform` project
3. Go to Settings → Environment Variables
4. Find `NEXT_PUBLIC_RAZORPAY_KEY_ID` and click Edit
5. Replace the placeholder value with your real Razorpay Key ID
6. Find `RAZORPAY_KEY_SECRET` and click Edit
7. Replace the placeholder value with your real Razorpay Secret
8. Click "Redeploy" on the deployments page

## Step 3: Test Your Application

After updating the keys:

1. Visit: https://article-platform-q9epvdfdd-ncn914491s-projects.vercel.app
2. Sign up for a new account
3. Browse articles
4. Go to /upgrade and try the payment flow
5. Use test card: **4111 1111 1111 1111** (any CVV, future date)
6. After successful payment, you should become a Pro user
7. Create your first article!

## Important Notes:

- **Test Mode:** Use `rzp_test_` keys for testing
- **Production Mode:** Later, switch to `rzp_live_` keys for real payments
- **Webhook URL:** If needed, use: `https://your-app.vercel.app/api/payment/verify`
- **Domain Whitelist:** Add your Vercel domain to Razorpay settings if required

## Your App Features:

✅ **Public Features:**
- Browse all articles (no login required)
- Responsive design
- Clean, minimal interface

✅ **User Features:**
- Sign up / Login with email
- View dashboard
- Read full articles

✅ **Pro Features ($1 upgrade):**
- Create unlimited articles
- Publish to the platform
- Pro badge on articles

Your Article Platform is now live! 🚀