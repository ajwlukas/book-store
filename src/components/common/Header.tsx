import { styled } from "styled-components"
import logo from "../../assets/logo.jpg"
import { FaSignInAlt, FaRegUser, FaSignOutAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { Category } from "../../models/category.model";
import { fetchCategory } from "../../api/category.api";
import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";

function Header() {

    const { categories } = useCategory();
    const { isLoggedIn, storeLogout } = useAuthStore();

    return (
        <HeaderStyle>
            <h1 className="logo">
                <Link to='/'>
                    <img src={logo} alt="book store" />
                </Link>
            </h1>

            <nav className="category">
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link to={
                                category.id === null
                                    ? `/books?view=${localStorage.getItem("view")}`
                                    : `/books?category_id=${category.id}&view=${localStorage.getItem("view")}`}>{category.categoryName}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>

            <nav className="auth">
                {
                    isLoggedIn ? (
                        <ul>
                            <li><Link to="/cart">장바구니</Link></li>
                            <li><Link to="/orderlist">주문 내역</Link></li>
                            <li><button onClick={storeLogout}><FaSignOutAlt />로그아웃</button></li>
                        </ul>
                    ):
                    !isLoggedIn && (

                        <ul>
                            <li>
                                <Link to="/login">
                                    <FaSignInAlt />로그인
                                </Link>
                            </li>
                            <li>
                                <Link to="/join">
                                    <FaRegUser />회원가입
                                </Link>
                            </li>
                        </ul>
                    )
                }
            </nav>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
width:100%;
margin: 0 auto;
max-width: ${({ theme }) => theme.layout.width.large};
padding : 20px 0;

display:flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${({ theme }) => theme.color.background};

.logo {
    img{
        width: 200px;
    }
}

.category{
    ul{
        display: flex;
        gap : 32px;
        li{
            a{
                font-size: 1.5rem;
                font-weight: 600;
                text-decoration: none;

                &:hover{
                    color : ${({ theme }) => theme.color.primary}
                }
            }
        }
    }
}

.auth{
    ul{
        display: flex;
        gap : 16px;
        li{
            a, button{
                font-size: 1.5rem;
                font-weight: 600;
                text-decoration: none;
                display: flex;
                align-items: center;
                line-height: 1;
                background: none;
                border: 0;

                cursor: pointer;

                svg{
                    margin-right: 6px;
                }
            }
        }
    }
}
`;

export default Header;