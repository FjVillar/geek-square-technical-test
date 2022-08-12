export type CategoryItem = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};
