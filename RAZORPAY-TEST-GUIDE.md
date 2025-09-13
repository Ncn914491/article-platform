# 🧪 RAZORPAY TEST PAYMENT - COMPLETE GUIDE

## ✅ **Your Configuration Status**
- ✅ Razorpay Key ID: `rzp_test_RGzkZnEyJRs8kh` (Correct!)
- ✅ Test Mode: Active (Key starts with `rzp_test_`)
- ✅ Environment Variables: Properly configured

## 🔥 **STEP-BY-STEP TEST PAYMENT**

### **Step 1: Access Payment Page**
1. **Login** to your app: https://article-platform-3hc42fyf1-ncn914491s-projects.vercel.app
2. **Go to:** `/upgrade` page
3. **Click:** "Pay ₹1 - Upgrade to Pro"

### **Step 2: Razorpay Modal Opens**
When the payment modal opens, you should see:
- ✅ Amount: ₹1.00
- ✅ Merchant: "Article Platform"
- ✅ Card payment option

### **Step 3: Enter EXACT Indian Test Card Credentials** 🇮🇳
```
🇮🇳 INDIAN TEST CARDS (Use these to avoid international card restrictions):

Card Number: 5555 5555 5555 4444 (Mastercard - Indian)
Expiry Date: 12/25 (or any future date)
CVV: 123
Name on Card: Test User

OR

Card Number: 4111 1111 1111 1111 (Visa - but may show international error)
Expiry Date: 12/25
CVV: 123
Name on Card: Test User

OR

Card Number: 6521 1111 1111 1117 (RuPay - Indian domestic)
Expiry Date: 12/25
CVV: 123
Name on Card: Test User
```

### **Step 4: Submit Payment**
1. **Click "Pay"** button
2. **Wait 2-3 seconds** for processing
3. **Should show "Payment Successful"**
4. **Modal should close automatically**
5. **You should be redirected** to dashboard
6. **User status should change to "PRO"**

## ❌ **TROUBLESHOOTING PAYMENT FAILURES**

### **Issue 1: "Payment Failed" Message**

**Possible Causes:**
- Wrong card number (must be exactly `4111 1111 1111 1111`)
- Using real card number instead of test card
- Expiry date in the past
- Network connectivity issues

**Solution:**
- Use INDIAN test cards to avoid international restrictions:
  - `5555 5555 5555 4444` (Mastercard - Indian)
  - `6521 1111 1111 1117` (RuPay - Indian domestic)
- Avoid `4111 1111 1111 1111` if showing international error

### **Issue 2: "Invalid Card Number"**

**Cause:** Using non-test card numbers
**Solution:** Only use Razorpay's official test cards:

```
✅ INDIAN TEST CARDS (RECOMMENDED):
- Mastercard (Indian): 5555 5555 5555 4444 ⭐ USE THIS FIRST
- RuPay (Indian): 6521 1111 1111 1117 ⭐ BACKUP OPTION
- Visa (might show international error): 4111 1111 1111 1111
- Amex: 3782 8224 6310 005

❌ DON'T USE:
- Real card numbers
- Random numbers
- Expired test cards
- International cards if restricted
```

### **Issue 3: Modal Doesn't Open**

**Debug Steps:**
1. **Open browser console** (F12)
2. **Check for JavaScript errors**
3. **Verify Razorpay script loads:**
   ```
   Look for: checkout.razorpay.com/v1/checkout.js
   ```

### **Issue 4: Payment Succeeds But User Doesn't Upgrade**

**Possible Causes:**
- Payment verification API error
- Database connection issue
- Authentication token problem

**Debug Steps:**
1. **Check Vercel function logs**
2. **Verify Firebase Firestore is accessible**
3. **Check browser network tab** for API errors

## 🔍 **DEBUGGING PAYMENT ISSUES**

### **Browser Console Debugging:**
1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Attempt payment**
4. **Look for error messages**

### **Common Console Errors:**
```
❌ "Razorpay is not defined"
   → Solution: Script loading issue, refresh page

❌ "Payment configuration error"
   → Solution: Environment variables missing

❌ "Failed to create payment order"
   → Solution: Check Vercel function logs
```

### **Vercel Function Logs:**
1. **Go to:** https://vercel.com/dashboard
2. **Select:** article-platform project
3. **Click:** Functions tab
4. **Check:** create-order and verify function logs

## 🎯 **TEST DIFFERENT SCENARIOS**

### **Scenario 1: Successful Payment**
- Card: `5555 5555 5555 4444` (Mastercard - Indian) ⭐ RECOMMENDED
- Alternative: `6521 1111 1111 1117` (RuPay - Indian)
- Expected: Payment success, user upgrades

### **Scenario 2: Card Declined**
- Card: `4000 0000 0000 0002`
- Expected: Payment fails gracefully

### **Scenario 3: Network Error**
- Disconnect internet during payment
- Expected: Proper error handling

## 📱 **TEST ON DIFFERENT DEVICES**

### **Desktop Browsers:**
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Edge
- ❌ Internet Explorer (not supported)

### **Mobile Testing:**
- Test on mobile browsers
- Ensure Razorpay modal is responsive

## 🚨 **IF NOTHING WORKS**

### **Emergency Debugging:**
1. **Check Razorpay Dashboard:**
   - Login to: https://dashboard.razorpay.com
   - Check if test payments appear in logs

2. **Verify Razorpay Account:**
   - Ensure test mode is enabled
   - Check if API keys are active

3. **Test API Directly:**
   ```bash
   # Test if order creation works
   curl -X POST https://your-app.vercel.app/api/payment/create-order \
     -H "Content-Type: application/json" \
     -d '{"amount": 1}'
   ```

## 📞 **Get Help**

If payment still fails:
1. **Note the exact error message**
2. **Check browser console**
3. **Check Vercel function logs**
4. **Contact:** chaitanyanaidunarisetti@gmail.com

## 🎉 **SUCCESS INDICATORS**

When payment works correctly:
- ✅ Razorpay modal opens
- ✅ Test card accepted
- ✅ "Payment Successful" message
- ✅ User role changes to "PRO"
- ✅ "Create Article" button appears
- ✅ Can create and publish articles

Your payment system is ready - just follow the exact test card details! 💳