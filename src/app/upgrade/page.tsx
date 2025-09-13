'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Navigation from '@/components/layout/Navigation';
import PaymentButton from '@/components/payment/PaymentButton';
import { useAuth } from '@/context/AuthContext';

export default function UpgradePage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { userData } = useAuth();
  const router = useRouter();

  const handlePaymentSuccess = () => {
    setSuccess('Payment successful! You are now a Pro member.');
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  // If user is already pro, redirect them
  if (userData?.role === 'pro') {
    router.push('/dashboard');
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-8 py-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Upgrade to Pro
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Unlock the ability to create and publish your own articles
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white mb-8">
                <h2 className="text-2xl font-bold mb-4">Pro Membership Benefits</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Create unlimited articles
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Publish to the platform
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Share your expertise with others
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pro badge on your articles
                  </li>
                </ul>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">₹1</div>
                <div className="text-gray-600">One-time payment</div>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {success}
                </div>
              )}

              <PaymentButton 
                amount={1}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Secure payment powered by Razorpay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}