import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useBook } from '../hooks/useBook';
import { getImgSrc } from '../utils/image';
import Title from '../components/common/Title';
import { BookDetail as iBookDetail } from '../models/book.model';
import { formatDate, formatNumber } from '../utils/format';
import { Link } from 'react-router-dom';

const bookInfoList = [
    {
        label:"카테고리",
        key:"categoryName",
        // filter: (book: iBookDetail)=>(
        //     <Link to={`/books?category_id=${book.category_id}`}>
        //     {book.categoryName}
        //     </Link>
        // )
    },
    {
        label:"포맷",
        key:"form"
    },
    {
        label:"페이지",
        key:"pages"
    },
    {
        label:"ISBN",
        key:"isbn"
    },
    {
        label:"출간일",
        key:"pub_date",
        // filter: (book:iBookDetail) =>{
        //     return formatDate(book.pub_date);
        // }
    },
    {
        label:"가격",
        key:"price",
        // filter: (book: iBookDetail)=>{
        //     return `${formatNumber(book.price)} 원`;
        // }
    },
]

const BookDetail = () => {
    const {bookId} = useParams();
    const {book} = useBook(bookId);

    console.log(book);

    if(!book) return null;

  return (
    
    <BookDetailStyle>
        <header className='header'>
            <div className='img'>
                <img src={getImgSrc(book.img)} alt={book.title}/>
            </div>
            <div className="info">
                <Title size="large" color="text">
                    {book.title}
                </Title>
                <dl>
                    <dt>카테고리</dt>
                    <dd>{book.categoryName}</dd>
                </dl>
                <dl>
                    <dt>포맷</dt>
                    <dd>{book.form}</dd>
                </dl>
                {
                    bookInfoList.map(info => (
                        <dl key={info.key}>
                            <dt>{info.label}</dt>
                            {/* <dd>{info.filter ?
                            info.filter(book)
                            :book[info.key as  keyof iBookDetail]}</dd> */}
                        </dl>
                    ))
                }
            </div>
        </header>
    </BookDetailStyle>
  )
}

const BookDetailStyle = styled.div`
    
`;

export default BookDetail