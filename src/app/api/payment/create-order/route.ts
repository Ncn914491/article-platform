import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    console.log('Razorpay Key ID:', process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ? 'Present' : 'Missing');
    console.log('Razorpay Key Secret:', process.env.RAZORPAY_KEY_SECRET ? 'Present' : 'Missing');
    
    const { amount, currency = 'INR' } = await req.json();
    console.log('Order request:', { amount, currency });

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      );
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay keys missing!');
      return NextResponse.json(
        { error: 'Payment configuration error' },
        { status: 500 }
      );
    }

    console.log('Creating Razorpay order with:', {
      amount: amount * 100,
      currency,
      receipt: `receipt_${Date.now()}`
    });
    
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt: `receipt_${Date.now()}`,
    });
    
    console.log('Razorpay order created:', order.id);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:');
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error message:', errorMessage);
    console.error('Error details:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create payment order',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}