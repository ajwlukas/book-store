export interface Book {
    id: number;
    title: string;
    img: number;
    category_id: number;
    form: string;
    isbn: number;
    detail: string;
    summary: string;
    author: string;
    pages: number;
    contents: string;
    price: number;
    pub_date: string;
}

export interface BookDetail extends Book {
    categoryName: string;
    liked : boolean;
}