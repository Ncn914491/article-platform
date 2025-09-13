# 🧪 Article Platform Testing Guide

## 🌐 **Live Application URL**
**https://article-platform-rjvw92y2b-ncn914491s-projects.vercel.app**

## 📋 **Test Scenarios Checklist**

### ✅ **Test 1: Basic Application Access**
- [ ] Home page loads correctly
- [ ] Navigation works (Login, Signup buttons visible)
- [ ] Policy pages accessible (Contact, Shipping, Refund)
- [ ] Responsive design on mobile/desktop

### ✅ **Test 2: User Registration & Authentication**
- [ ] Sign up with dummy email (test@example.com)
- [ ] Receive confirmation (if any)
- [ ] Login with created credentials
- [ ] Dashboard access after login
- [ ] User role shows as "normal" (not Pro)

### ✅ **Test 3: Article Reading (Public Access)**
- [ ] View articles without login
- [ ] Click to read full articles
- [ ] Navigate between articles
- [ ] Articles display properly formatted

### ✅ **Test 4: Pro Upgrade Payment Flow**
- [ ] Access upgrade page (/upgrade)
- [ ] See ₹1 pricing and features
- [ ] Click "Pay ₹1 - Upgrade to Pro" button
- [ ] Razorpay modal opens
- [ ] Test payment with dummy credentials
- [ ] Payment success and user upgrade
- [ ] Dashboard shows Pro status

### ✅ **Test 5: Article Creation (Pro Feature)**
- [ ] Access to "Create Article" button after Pro upgrade
- [ ] Create new article with title and content
- [ ] Submit article successfully
- [ ] Article appears in public list
- [ ] Author name shows correctly

### ✅ **Test 6: Security & Role-Based Access**
- [ ] Normal users cannot create articles
- [ ] Pro users can create unlimited articles
- [ ] Firestore rules work correctly
- [ ] Authentication required for protected routes

## 🧪 **Dummy Test Credentials**

### **Test User Account:**
- **Email:** test-article-platform@example.com
- **Password:** TestPass123!

### **Razorpay Test Payment:**
- **Test Card:** 4111 1111 1111 1111
- **CVV:** Any 3 digits (e.g., 123)
- **Expiry:** Any future date (e.g., 12/25)
- **Name:** Test User
- **Amount:** ₹1 (automatic)

## 🔧 **Manual Firebase Setup Required**

### **Before Testing - Enable Firebase Authentication:**
1. Go to [Firebase Console](https://console.firebase.google.com/project/articlepaymentapp)
2. Click **Authentication** → **Get started**
3. Go to **Sign-in method** tab
4. Enable **Email/Password** provider
5. Click **Save**

### **Create Firestore Database:**
1. Go to **Firestore Database**
2. Click **Create database**
3. Choose **Production mode** (rules already deployed)
4. Select your preferred region
5. Click **Done**

## 📊 **Expected Test Results**

### **✅ PASS Criteria:**
- [ ] User can sign up and login
- [ ] Payment processing works with test card
- [ ] User upgrades to Pro successfully
- [ ] Pro users can create articles
- [ ] Articles are publicly visible
- [ ] Security rules prevent unauthorized access

### **❌ FAIL Scenarios to Watch:**
- Payment fails or doesn't process
- User doesn't upgrade after payment
- Articles not saving to database
- Authentication errors
- Permission denied errors
- UI/UX issues or broken layouts

## 🐛 **Common Issues & Solutions**

### **Issue 1: Authentication Errors**
- **Cause:** Firebase Auth not enabled
- **Solution:** Enable Email/Password in Firebase Console

### **Issue 2: Payment Fails**
- **Cause:** Wrong Razorpay test keys
- **Solution:** Verify test keys in Vercel environment variables

### **Issue 3: Articles Not Saving**
- **Cause:** Firestore rules or database not created
- **Solution:** Create Firestore database in Firebase Console

### **Issue 4: Permission Denied**
- **Cause:** Security rules preventing access
- **Solution:** Check Firestore rules are properly deployed

## 📝 **Test Report Template**

```markdown
## Test Report - [Date]

### Environment:
- App URL: https://article-platform-rjvw92y2b-ncn914491s-projects.vercel.app
- Test Mode: Razorpay Test Keys
- Browser: [Chrome/Firefox/Safari]

### Test Results:
- [ ] ✅ Basic Access
- [ ] ✅ User Registration  
- [ ] ✅ Authentication
- [ ] ✅ Article Reading
- [ ] ✅ Payment Flow
- [ ] ✅ Pro Upgrade
- [ ] ✅ Article Creation
- [ ] ✅ Security Rules

### Issues Found:
1. [Description of issue]
2. [Description of issue]

### Recommendations:
1. [Fix suggestion]
2. [Improvement suggestion]
```

## 🎯 **Next Steps After Testing**

1. **If tests pass:** Ready for production Razorpay keys
2. **If issues found:** Debug and fix before production
3. **Performance:** Test with multiple users/articles
4. **Security:** Verify all access controls work properly

Ready to test! 🚀