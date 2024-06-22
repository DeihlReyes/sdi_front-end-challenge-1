export interface NewsData {
  author_id: string;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
}

export interface AuthorData {
  id: string;
  name: string;
}

export interface NewsItemData extends NewsData {
  author_name: string;
}
