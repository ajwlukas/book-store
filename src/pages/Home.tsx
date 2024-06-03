import Button from "../components/common/Button";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Title from "../components/common/Title";

function Home() {
    return (
        <>
        <Title size="large" color="background">
            제목 테스트
        </Title>
        <Button size="large" scheme="primary"> 버튼 테스트 </Button>
        <div>home body</div>
        </>
    )
}

export default Home;