//Signup.tsx
import {useForm} from "react-hook-form"
import styled from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { login, signUp } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { useAuthStore } from "../store/authStore";

export interface SignUpProps{
    email:string;
    password:string;
}

const Login = () => {
    const navigate = useNavigate();
    const showAlert = useAlert();

    const {register, handleSubmit, formState:{errors}} = useForm<SignUpProps>();
    const {isLoggedIn, storeLogin, storeLogout} = useAuthStore();

    const onSubmit = (data:SignUpProps) => {
        
        login(data).then((res)=>{
            storeLogin(res.token);
            showAlert("로그인 완료되었습니다");
            navigate("/");
        },
        (error)=>{
            showAlert("로그인이 실패하였습니다");
        }
    )

    }


    return (
        <>
            <Title size="large">로그인</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText placeholder='이메일' inputType='email' {...register("email", {required:true})}/>
                        {errors.email && <p className="error-text">이메일을 입력해주세요</p>}
                    </fieldset>
                    <fieldset>
                        <InputText placeholder='비밀번호' inputType='password' {...register("password", {required:true})}/>
                        {errors.password && <p className="error-text">비밀번호를 입력해주세요</p>}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size='medium' scheme='primary'>
                        로그인
                        </Button>
                    </fieldset>
                    <div className='info'>
                        <Link to="/reset">비밀번호 초기화</Link>
                    </div>
                </form>
            </SignupStyle>
        </>
    )
}

export const SignupStyle = styled.div`

max-width: ${({ theme }) => theme.layout.width.small};
margin: 80px auto;

fieldset {
    border: 0;
    padding : 0 0 8px 0;
    .error-text {
        color: red;
    }
}

input {
    width: 100%;
}

button {
    width: 100%;
}

.info {
    text-align: center;
    padding : 16px 0 0 0;
}

`;

export default Login;