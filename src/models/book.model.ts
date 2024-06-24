export interface Book {
    id: number;
    title: string;
    img: number;
    category_id: number;
    form: string;

    isbn: string;
    detail: string;
    summary: string;
    author: string;
    pages: number;

    contents: string;
    price: number;
    pub_date: string;
    likes: number;
}



export interface BookDetail extends Book {
    categoryName: string;
    liked : boolean;
}