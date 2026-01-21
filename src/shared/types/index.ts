export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface Site {
  id: string;
  categoryId: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  addedAt: string;
  popularity?: number;
}
