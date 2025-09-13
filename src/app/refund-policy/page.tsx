import React from 'react';
import Navigation from '@/components/layout/Navigation';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cancellations and Refunds Policy</h1>
            
            <div className="prose max-w-none text-gray-700">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-yellow-900 mb-2">Important Notice</h2>
                <p className="text-yellow-800">
                  This policy applies to our digital Pro membership upgrade service. Please read carefully 
                  before making a purchase.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pro Membership Purchase</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What You Purchase</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Digital Service:</strong> Pro membership is a digital service upgrade</li>
                <li><strong>Instant Access:</strong> Features are activated immediately upon successful payment</li>
                <li><strong>Permanent Upgrade:</strong> Pro status is permanent for your account</li>
                <li><strong>Article Creation:</strong> Unlimited article creation and publishing capabilities</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Policy</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2">No Refunds Policy</h3>
                <p className="text-red-800 mb-4">
                  <strong>Due to the digital nature of our service and instant activation of Pro features, 
                  we operate a strict no-refunds policy.</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-red-800">
                  <li>All Pro membership purchases are <strong>final and non-refundable</strong></li>
                  <li>Once payment is processed, Pro features are immediately activated</li>
                <li>Digital services cannot be &quot;returned&quot; like physical products</li>
                  <li>The ₹1 Pro upgrade fee is permanently applied to your account</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exceptional Circumstances</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">When We May Consider Refunds</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-800 mb-4">
                  We may consider refunds only in the following exceptional circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-blue-800">
                  <li><strong>Technical Error:</strong> Payment processed but Pro features not activated due to system error</li>
                  <li><strong>Duplicate Charges:</strong> Accidental multiple payments for the same upgrade</li>
                  <li><strong>Platform Malfunction:</strong> Service completely unavailable for extended periods</li>
                  <li><strong>Fraudulent Transaction:</strong> Unauthorized payment with proper documentation</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Cancellation</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Free to Cancel:</strong> You can delete your account at any time</li>
                <li><strong>No Ongoing Charges:</strong> Pro upgrade is a one-time payment, no subscriptions</li>
                <li><strong>Data Retention:</strong> Published articles may remain on the platform</li>
                <li><strong>No Refund:</strong> Account cancellation does not qualify for refunds</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Discontinuation</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>If we discontinue the service, users will be notified in advance</li>
                <li>Reasonable notice period will be provided</li>
                <li>Alternative solutions or data export options may be offered</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Disputes</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li><strong>Contact Us First:</strong> Email chaitanyanaidunarisetti@gmail.com before disputing with bank/card company</li>
                  <li><strong>Provide Details:</strong> Include transaction ID, date, and description of issue</li>
                  <li><strong>Investigation:</strong> We will investigate within 3-5 business days</li>
                  <li><strong>Resolution:</strong> We will provide a written response with our findings</li>
                </ol>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Chargeback Policy</h2>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Chargeback Consequences</h3>
                <p className="text-orange-800 mb-4">
                  <strong>Initiating a chargeback without contacting us first may result in:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-orange-800">
                  <li>Immediate suspension of Pro account features</li>
                  <li>Temporary or permanent account suspension</li>
                  <li>Loss of all created content and articles</li>
                  <li>Ineligibility for future services</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consumer Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Right to receive the service as described</li>
                <li>Right to functional Pro features upon upgrade</li>
                <li>Right to customer support for technical issues</li>
                <li>Right to account data portability where technically feasible</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitations</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>No right to refund for change of mind</li>
                <li>No right to refund after using Pro features</li>
                <li>No right to downgrade back to free account with refund</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Contact Us</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Before Making a Complaint</h3>
                <p className="text-green-800 mb-4">
                  <strong>Please contact us before taking any other action:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-green-800">
                  <li><strong>Email:</strong> chaitanyanaidunarisetti@gmail.com</li>
                  <li><strong>Subject Line:</strong> &quot;Billing Issue - [Your Issue]&quot;</li>
                  <li><strong>Include:</strong> Transaction details, account email, description of problem</li>
                  <li><strong>Response Time:</strong> 24-48 hours during business days</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Information</h2>
              
              <p className="mb-4">
                This refund policy is part of our Terms of Service. By making a purchase, you acknowledge 
                that you have read, understood, and agree to this policy.
              </p>

              <p className="mb-4">
                This policy is governed by applicable consumer protection laws. Nothing in this policy 
                is intended to override your statutory consumer rights where they cannot be lawfully excluded.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
              
              <p className="mb-6">
                We reserve the right to update this policy. Changes will be posted on this page with 
                an updated revision date. Continued use of our service after changes constitutes 
                acceptance of the updated policy.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p><strong>Questions?</strong> Contact us at chaitanyanaidunarisetti@gmail.com</p>
                <p><strong>We&apos;re here to help:</strong> Reach out before making any payment disputes</p>
              </div>

              <p className="text-sm text-gray-600 mt-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}