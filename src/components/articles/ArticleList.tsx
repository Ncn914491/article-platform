'use client';

import React, { useEffect, useState } from 'react';
import { Article } from '@/types';
import { articlesService } from '@/lib/articlesService';

interface ArticleListProps {
  onArticleSelect?: (article: Article) => void;
}

export default function ArticleList({ onArticleSelect }: ArticleListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const fetchedArticles = await articlesService.getAllArticles();
      setArticles(fetchedArticles);
    } catch {
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {error}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No articles found. Be the first to create one!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <div 
          key={article.id} 
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => onArticleSelect?.(article)}
        >
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.content.substring(0, 200)}
            {article.content.length > 200 && '...'}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>By {article.authorEmail}</span>
            <span>{article.createdAt.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}