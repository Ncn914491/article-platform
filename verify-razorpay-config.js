// Quick verification of Razorpay configuration
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Verifying Razorpay Configuration...\n');

console.log('Environment Variables:');
console.log('NEXT_PUBLIC_RAZORPAY_KEY_ID:', process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
console.log('RAZORPAY_KEY_SECRET present:', !!process.env.RAZORPAY_KEY_SECRET);
console.log('Key starts with rzp_test_:', process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.startsWith('rzp_test_'));

console.log('\n✅ Expected Configuration:');
console.log('✓ Key ID should start with: rzp_test_');
console.log('✓ Key ID should be: rzp_test_RGzkZnEyJRs8kh');
console.log('✓ Secret should be present (hidden for security)');

console.log('\n🧪 Test Payment Instructions:');
console.log('1. Use card: 4111 1111 1111 1111');
console.log('2. CVV: 123');
console.log('3. Expiry: 12/25');
console.log('4. Name: Test User');

if (process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID === 'rzp_test_RGzkZnEyJRs8kh') {
  console.log('\n✅ Configuration looks correct!');
} else {
  console.log('\n❌ Configuration issue detected!');
}