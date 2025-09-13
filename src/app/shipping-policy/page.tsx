import React from 'react';
import Navigation from '@/components/layout/Navigation';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
            
            <div className="prose max-w-none text-gray-700">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">Digital Service Notice</h2>
                <p className="text-blue-800">
                  <strong>Article Platform is a digital service.</strong> We do not ship physical products. 
                  All services and content are delivered digitally through our online platform.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Delivery</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Content Access</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Immediate Access:</strong> All articles and content are available immediately upon publication</li>
                <li><strong>24/7 Availability:</strong> Access your account and content anytime through our web platform</li>
                <li><strong>Global Access:</strong> Available worldwide with internet connection</li>
                <li><strong>No Geographic Restrictions:</strong> Content can be accessed from any location</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pro Membership Activation</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Instant Activation:</strong> Pro membership is activated immediately after successful payment</li>
                <li><strong>Feature Access:</strong> Article creation and publishing features are available instantly</li>
                <li><strong>No Waiting Period:</strong> Start creating content right after upgrade</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Requirements</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Stable internet connection</li>
                <li>JavaScript enabled</li>
                <li>Cookies enabled for authentication</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supported Devices</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Desktop computers (Windows, Mac, Linux)</li>
                <li>Laptops and notebooks</li>
                <li>Tablets (iOS, Android)</li>
                <li>Mobile phones (iOS, Android)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Uptime Commitment</h3>
                <ul className="list-disc pl-6 space-y-2 text-green-800">
                  <li><strong>99.9% Uptime:</strong> We strive to maintain high availability</li>
                  <li><strong>Scheduled Maintenance:</strong> Rare planned maintenance with advance notice</li>
                  <li><strong>Status Updates:</strong> Any service interruptions will be communicated promptly</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data and Content Delivery</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Storage</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Cloud Storage:</strong> All content is securely stored in the cloud</li>
                <li><strong>Automatic Backup:</strong> Regular backups ensure data protection</li>
                <li><strong>Cross-Device Sync:</strong> Access your content from any device</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Delivery Network</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Fast loading times worldwide</li>
                <li>Optimized for mobile and desktop</li>
                <li>Secure HTTPS delivery</li>
                <li>Cached content for improved performance</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Support and Assistance</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Email Support:</strong> chaitanyanaidunarisetti@gmail.com</li>
                  <li><strong>Response Time:</strong> 24-48 hours for technical issues</li>
                  <li><strong>Support Hours:</strong> Monday to Friday, business hours</li>
                  <li><strong>Help Documentation:</strong> Comprehensive guides available</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Modifications</h2>
              
              <p className="mb-4">
                We reserve the right to modify, update, or enhance our digital services. Users will be 
                notified of significant changes that may affect their experience.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              
              <p className="mb-4">
                For questions about our service delivery or technical support, please contact us:
              </p>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p><strong>Email:</strong> chaitanyanaidunarisetti@gmail.com</p>
                <p><strong>Response Time:</strong> 24-48 hours</p>
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