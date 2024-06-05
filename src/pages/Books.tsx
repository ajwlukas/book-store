import Title from '../components/common/Title'
import styled from 'styled-components';
import BooksFilter from '../components/books/BooksFilter';
import BooksList from '../components/books/BooksList';
import BooksViewSwitcher from '../components/books/BooksViewSwitcher';
import Pagination from '../components/books/Pagination';
import BooksEmpty from '../components/books/BooksEmpty';

const Books = () => {
    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BookStyle>
                <BooksFilter />
                <BooksViewSwitcher />
                <BooksList />
                <BooksEmpty />
                <Pagination />
            </BookStyle>
        </>
    )
}

const BookStyle = styled.div`
`;

export default Books