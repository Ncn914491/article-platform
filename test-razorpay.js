const Razorpay = require('razorpay');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

console.log('Testing Razorpay Configuration...');
console.log('Key ID:', process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
console.log('Key Secret Present:', !!process.env.RAZORPAY_KEY_SECRET);

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Test order creation
async function testRazorpay() {
  try {
    console.log('\nCreating test order...');
    
    const order = await razorpay.orders.create({
      amount: 100, // ₹1 in paise
      currency: 'INR',
      receipt: `test_receipt_${Date.now()}`,
    });
    
    console.log('✅ Success! Order created:', {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status
    });
    
  } catch (error) {
    console.error('❌ Error creating order:');
    console.error('Message:', error.message);
    console.error('Details:', error.response?.data || error);
  }
}

testRazorpay();