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

    console.log('Payment verification request:', {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature: razorpay_signature ? 'present' : 'missing',
      userId
    });

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !userId) {
      console.error('Missing required parameters:', {
        has_payment_id: !!razorpay_payment_id,
        has_order_id: !!razorpay_order_id,
        has_signature: !!razorpay_signature,
        has_userId: !!userId
      });
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Check if Razorpay secret key is available
    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error('RAZORPAY_KEY_SECRET environment variable is missing');
      return NextResponse.json(
        { error: 'Payment configuration error' },
        { status: 500 }
      );
    }

    // Verify the payment signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    console.log('Signature verification:', {
      body,
      received_signature: razorpay_signature,
      secret_key_present: !!process.env.RAZORPAY_KEY_SECRET
    });
    
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex');

    console.log('Expected signature:', expectedSignature);
    console.log('Received signature:', razorpay_signature);
    console.log('Signatures match:', expectedSignature === razorpay_signature);

    if (expectedSignature !== razorpay_signature) {
      console.error('Signature verification failed:', {
        expected: expectedSignature,
        received: razorpay_signature,
        body
      });
      return NextResponse.json(
        { error: 'Payment verification failed - invalid signature' },
        { status: 400 }
      );
    }

    console.log('Signature verification successful, updating user in Firestore...');
    
    // Update user role to 'pro' in Firestore
    try {
      const userDoc = doc(db, 'users', userId);
      console.log('Updating user document:', userId);
      
      await updateDoc(userDoc, {
        role: 'pro',
        upgradedAt: new Date(),
        paymentId: razorpay_payment_id
      });

      console.log('User successfully upgraded to PRO:', userId);
      
      return NextResponse.json({
        success: true,
        message: 'Payment verified and user upgraded successfully',
        userId,
        paymentId: razorpay_payment_id
      });
    } catch (firestoreError) {
      console.error('Error updating user in Firestore:', firestoreError);
      console.error('Firestore error details:', {
        code: (firestoreError as any).code,
        message: (firestoreError as any).message,
        userId
      });
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