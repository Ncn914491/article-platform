'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): RazorpayInstance;
    };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    email: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open(): void;
  on(event: string, handler: (response: { error: { description: string } }) => void): void;
}

interface PaymentButtonProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function PaymentButton({ amount, onSuccess, onError }: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { user, upgradeUser } = useAuth();

  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => onError?.('Failed to load payment gateway');
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [onError]);

  const handlePayment = async () => {
    if (!user) {
      onError?.('You must be logged in to make a payment');
      return;
    }

    if (!scriptLoaded) {
      onError?.('Payment gateway not loaded. Please try again.');
      return;
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      onError?.('Payment configuration error. Please try again later.');
      return;
    }

    try {
      setLoading(true);

      // Create order on server
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order');
      }

      const orderData = await orderResponse.json();

      // Initialize Razorpay checkout
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Article Platform',
        description: 'Upgrade to Pro Account',
        order_id: orderData.orderId,
        handler: async function (response: RazorpayResponse) {
          try {
            // Verify payment on server
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                userId: user.uid,
              }),
            });

            const verifyData = await verifyResponse.json();
            
            if (!verifyResponse.ok) {
              console.error('Verification failed:', verifyData);
              throw new Error(verifyData.error || 'Payment verification failed');
            }

            console.log('Payment verification successful:', verifyData);
            
            // Update user role locally
            await upgradeUser();
            onSuccess?.();
          } catch (error) {
            console.error('Payment verification error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Payment verification failed';
            onError?.(errorMessage);
          }
        },
        prefill: {
          email: user.email || '',
        },
        theme: {
          color: '#4F46E5',
        },
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response: { error: { description: string } }) {
        onError?.('Payment failed: ' + response.error.description);
      });

      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      onError?.('Failed to initiate payment: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading || !scriptLoaded}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
    >
      {loading ? 'Processing...' : !scriptLoaded ? 'Loading...' : `Pay ₹${amount} - Upgrade to Pro`}
    </button>
  );
}