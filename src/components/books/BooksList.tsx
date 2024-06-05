import styled from 'styled-components'
import BookItem from './BookItem';
import { Book } from '../../models/book.model';

const dummyBook : Book = {
        "id": 2,
        "title": "장화홍련전",
        "img": 80,
        "category_id": 2,
        "summary": "기억이 안나요..",
        
        "author": "김장화",
        "price": 20000,
        "likes": 22,
        "form": "ebook",
        "isbn": "7",

        "detail": "장화와 홍련이?..",
        "pages": 100,
        "contents": "목차입니다.",
        "pub_date": "2024-04-12",
}


const BooksList = () => {
  return (
    <BooksListStyle>
        <BookItem book={dummyBook}/>
    </BooksListStyle>
  )
}

const BooksListStyle = styled.div`
    
`;

export default BooksList