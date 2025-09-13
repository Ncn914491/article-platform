export interface Article {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateArticleData {
  title: string;
  content: string;
}

export interface UserRole {
  uid: string;
  email: string;
  role: 'normal' | 'pro';
}