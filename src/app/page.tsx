'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import ArticleList from '@/components/articles/ArticleList';
import ArticleViewer from '@/components/articles/ArticleViewer';
import { Article } from '@/types';
import Link from 'next/link';

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedArticle ? (
          <ArticleViewer 
            article={selectedArticle} 
            onBack={handleBackToList}
          />
        ) : (
          <div>
            {/* Hero Section */}
            <div className="text-center py-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Article Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover amazing articles from our community. Sign up to join the conversation 
                and upgrade to Pro to start publishing your own content.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="/login"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Get Started
                </Link>
                <Link
                  href="/signup"
                  className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Platform Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Read Articles</h3>
                  <p className="text-gray-600">
                    Access all published articles for free. Discover insights from our community of writers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Write & Publish</h3>
                  <p className="text-gray-600">
                    Upgrade to Pro for just ₹1 and start creating your own articles to share with the world.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pro Features</h3>
                  <p className="text-gray-600">
                    Get unlimited article creation, publishing capabilities, and a Pro badge on your content.
                  </p>
                </div>
              </div>
            </div>

            {/* Articles Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
              <ArticleList onArticleSelect={handleArticleSelect} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
