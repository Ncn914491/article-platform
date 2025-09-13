'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
  requiresPro?: boolean;
}

export default function ProtectedRoute({ 
  children, 
  requiresAuth = true,
  requiresPro = false 
}: ProtectedRouteProps) {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (requiresAuth && !user) {
        router.push('/login');
        return;
      }
      
      if (requiresPro && userData?.role !== 'pro') {
        router.push('/upgrade');
        return;
      }
    }
  }, [user, userData, loading, requiresAuth, requiresPro, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (requiresAuth && !user) {
    return null;
  }

  if (requiresPro && userData?.role !== 'pro') {
    return null;
  }

  return <>{children}</>;
}