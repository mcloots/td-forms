export interface Book {
    id: number;
    title: string;
    author: string;
    category?: number;
    subcategories: SubCategory[];
}

export interface BookCategory {
    id: number;
    name: string;
}

export const categories: BookCategory[] = [
    { "id": 1, "name": "Fiction" },
    { "id": 2, "name": "Science Fiction" },
    { "id": 3, "name": "Fantasy" },
    { "id": 4, "name": "Mystery" },
    { "id": 5, "name": "Romance" },
    { "id": 6, "name": "Thriller" },
    { "id": 7, "name": "Horror" },
    { "id": 8, "name": "Non-fiction" },
    { "id": 9, "name": "Biography" },
    { "id": 10, "name": "History" }
];

export const subcategories: SubCategory[] = [
    { "id": 1, "categoryId": 1, "name": "Classic Fiction" },
    { "id": 2, "categoryId": 1, "name": "Contemporary Fiction" },
    { "id": 3, "categoryId": 2, "name": "Space Opera" },
    { "id": 4, "categoryId": 2, "name": "Dystopian Fiction" },
    { "id": 5, "categoryId": 3, "name": "High Fantasy" },
    { "id": 6, "categoryId": 3, "name": "Urban Fantasy" },
    { "id": 7, "categoryId": 4, "name": "Detective Mystery" },
    { "id": 8, "categoryId": 4, "name": "Psychological Thriller" },
    { "id": 9, "categoryId": 5, "name": "Historical Romance" },
    { "id": 10, "categoryId": 5, "name": "Contemporary Romance" },
    { "id": 11, "categoryId": 6, "name": "Action Thriller" },
    { "id": 12, "categoryId": 6, "name": "Political Thriller" },
    { "id": 13, "categoryId": 7, "name": "Supernatural Horror" },
    { "id": 14, "categoryId": 7, "name": "Psychological Horror" },
    { "id": 15, "categoryId": 8, "name": "Self-Help" },
    { "id": 16, "categoryId": 8, "name": "Science and Nature" },
    { "id": 17, "categoryId": 9, "name": "Autobiography" },
    { "id": 18, "categoryId": 9, "name": "Memoir" },
    { "id": 19, "categoryId": 10, "name": "Ancient History" },
    { "id": 20, "categoryId": 10, "name": "Modern History" }
  ]
export interface SubCategory {
    id: number;
    categoryId: number;
    name: string;
}

export interface BookFormModel {
    book: Book;
    categories: BookCategory[];
    subCategories: SubCategory[];
}

let newId = -1;
/** Next id for a new entity. Always negative! Will be replaced during save */
export function nextNewId() {
  return newId--;
}