'use client';

import React from 'react';
import { Article } from '@/types';

interface ArticleViewerProps {
  article: Article;
  onBack?: () => void;
}

export default function ArticleViewer({ article, onBack }: ArticleViewerProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to articles
        </button>
      )}
      
      <article className="prose max-w-none">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-500 border-b pb-4">
            <div className="flex items-center space-x-4">
              <span>By {article.authorEmail}</span>
              <span>•</span>
              <time dateTime={article.createdAt.toISOString()}>
                {article.createdAt.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            {article.updatedAt > article.createdAt && (
              <span className="text-xs">
                Updated {article.updatedAt.toLocaleDateString()}
              </span>
            )}
          </div>
        </header>
        
        <div className="text-gray-700 leading-relaxed">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}