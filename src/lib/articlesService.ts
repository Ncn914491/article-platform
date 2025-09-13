import { 
  collection, 
  addDoc, 
  getDocs, 
  orderBy, 
  query, 
  Timestamp,
  DocumentData 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Article, CreateArticleData } from '@/types';

export const articlesService = {
  async createArticle(articleData: CreateArticleData, authorId: string, authorEmail: string): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'articles'), {
        title: articleData.title,
        content: articleData.content,
        authorId,
        authorEmail,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error creating article:', error);
      throw new Error('Failed to create article');
    }
  },

  async getAllArticles(): Promise<Article[]> {
    try {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const articles: Article[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        articles.push({
          id: doc.id,
          title: data.title,
          content: data.content,
          authorId: data.authorId,
          authorEmail: data.authorEmail,
          createdAt: data.createdAt.toDate(),
          updatedAt: data.updatedAt.toDate()
        });
      });
      
      return articles;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw new Error('Failed to fetch articles');
    }
  }
};