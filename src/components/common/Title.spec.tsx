import {render, screen} from '@testing-library/react'
import Title from "./Title"
import { BookStoreThemeProvider } from '../../context/themeContext';

describe("Title 컴포넌트 테스트", () => {
    it('렌더를 확인', ()=>{
        //1 렌더
        render(<BookStoreThemeProvider>
            <Title size="large">제목</Title>
            </BookStoreThemeProvider>
        );
        //2 확인
        expect(screen.getByText("제목")).toBeInTheDocument();
    })

    
    it('size props 적용', ()=>{
        //1 렌더
        const {container} = render(<BookStoreThemeProvider>
            <Title size="medium">제목</Title>
            </BookStoreThemeProvider>
        );

        
        expect(container?.firstChild).toHaveStyle({fontSize:"1.5rem"});
    })

    
    it('color props 적용', ()=>{
        //1 렌더
        const {container} = render(<BookStoreThemeProvider>
            <Title size="medium" color="primary">제목</Title>
            </BookStoreThemeProvider>
        );

        
        expect(container?.firstChild).toHaveStyle({color:"brown"});
    })

})