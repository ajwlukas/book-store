import styled from 'styled-components'
import BookItem from './BookItem';
import { Book } from '../../models/book.model';
import BooksFilter from './BooksFilter';
import BooksViewSwitcher from './BooksViewSwitcher';
import BooksEmpty from './BooksEmpty';

interface Props {
  books?: Book[];
}


const BooksList = ({books}:Props) => {
  return (
    <>
    <BooksListStyle>
      {
        books?.map((book)=>
          <BookItem book={book} key={book.id} />
        )
      }
        {/* <BookItem book={dummyBook}/> */}
    </BooksListStyle>
    </>
  )
}

const BooksListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`;

export default BooksList