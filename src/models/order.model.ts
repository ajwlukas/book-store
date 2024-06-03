export interface Order{
    id: number;
    book_title:string;
    total_quantity: number;
    total_price: number;
    created_at: string;
    address: string;
    receiver: string;
    contact: string;
};