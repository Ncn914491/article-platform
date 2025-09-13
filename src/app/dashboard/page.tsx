'use client';

import React, { useState } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Navigation from '@/components/layout/Navigation';
import ArticleList from '@/components/articles/ArticleList';
import ArticleViewer from '@/components/articles/ArticleViewer';
import CreateArticleForm from '@/components/articles/CreateArticleForm';
import { useAuth } from '@/context/AuthContext';
import { Article } from '@/types';

export default function DashboardPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const { userData } = useAuth();

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    setShowCreateForm(false);
  };

  const handleShowCreateForm = () => {
    setShowCreateForm(true);
    setSelectedArticle(null);
  };

  const handleArticleCreated = () => {
    setShowCreateForm(false);
    setRefreshKey(prev => prev + 1); // Force refresh of article list
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {selectedArticle ? (
            <ArticleViewer 
              article={selectedArticle} 
              onBack={handleBackToList}
            />
          ) : showCreateForm ? (
            <CreateArticleForm 
              onArticleCreated={handleArticleCreated}
              onCancel={handleBackToList}
            />
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Articles</h1>
                  <p className="text-gray-600 mt-2">
                    Discover and read articles from our community
                  </p>
                </div>
                
                {userData?.role === 'pro' && (
                  <button
                    onClick={handleShowCreateForm}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Create Article
                  </button>
                )}
              </div>

              {userData?.role !== 'pro' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Upgrade to Pro</strong> to create and publish your own articles.
                        <a href="/upgrade" className="font-medium underline hover:text-yellow-600 ml-1">
                          Upgrade now →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <ArticleList 
                key={refreshKey} 
                onArticleSelect={handleArticleSelect} 
              />
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}