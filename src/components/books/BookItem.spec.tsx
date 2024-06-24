import { render, screen } from '@testing-library/react'
import { BookStoreThemeProvider } from '../../context/themeContext';
import { Book } from '../../models/book.model';
import BookItem from './BookItem';
import { formatNumber } from '../../utils/format';
import { getImgSrc } from '../../utils/image';


const dummyBook: Book = {
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


describe("BookItem 컴포넌트 테스트", () => {
    it('렌더를 확인', () => {
        //1 렌더
        const { getByText, getByAltText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        );
        //2 확인
        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText(`${formatNumber(dummyBook.price)}원`)).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByAltText(dummyBook.title)).toHaveAttribute("src", `${getImgSrc(dummyBook.img)}`);
    })


})