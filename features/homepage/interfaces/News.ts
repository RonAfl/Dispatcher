export interface ArticleInterface {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: {id:string | undefined, name: string },
    isLiked: boolean,
  }

export interface FavsArticleInterface {
  title: string;
  urlToImage: string;
  source: {id:string | undefined, name: string }
}
