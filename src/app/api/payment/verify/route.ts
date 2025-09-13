import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const { 
      razorpay_payment_id, 
      razorpay_order_id, 
      razorpay_signature,
      userId 
    } = await req.json();

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !userId) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Verify the payment signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // Update user role to 'pro' in Firestore
    try {
      const userDoc = doc(db, 'users', userId);
      await updateDoc(userDoc, {
        role: 'pro',
        upgradedAt: new Date(),
        paymentId: razorpay_payment_id
      });

      return NextResponse.json({
        success: true,
        message: 'Payment verified and user upgraded successfully'
      });
    } catch (firestoreError) {
      console.error('Error updating user in Firestore:', firestoreError);
      return NextResponse.json(
        { error: 'Payment verified but failed to upgrade user' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}