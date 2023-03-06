export interface News {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: {id:string | undefined, name: string }
  }
