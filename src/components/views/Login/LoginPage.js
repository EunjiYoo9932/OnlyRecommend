
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import './LoginPage.css'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(''); // 이메일 상태 추가
    const [userPasswd, setUserPasswd] = useState(''); // 비밀번호 상태 추가

    const onSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:4000/user", {
                userEmail: userEmail, // userEmail 상태를 서버에 전달
                userPasswd: userPasswd // userPasswd 상태를 서버에 전달
            });
            setUserEmail(response.data);
            console.log(response.data);
            // 서버로부터의 응답 처리
            
            const response1 = await axios.get("http://localhost:4000/getuser");
            console.log(response1);
            
            if (response1.data.success) {
                navigate('/');
                // 사용자 정보가 맞다면 홈으로 이동
            } else {
                // 사용자 정보가 틀리다면 실패 메시지 처리
                console.error("로그인 실패");
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    const formSchema = yup.object({
        userEmail: yup
            .string()
            .required('이메일을 입력해주세요')
            .email('이메일 형식이 아닙니다.'),
        userPasswd: yup
            .string()
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
    });
    
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <img className="loginGrupImg" alt="grupImg" src="image/GRUP로고.png" />
                <input
                    name='userEmail'
                    placeholder='이메일'
                    {...register('userEmail')}
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)} // 이메일 입력 상태 업데이트
                />
                {errors.userEmail && <p>{errors.userEmail.message}</p>}
                <input 
                    name='userPasswd'
                    type='password'
                    placeholder='비밀번호'
                    {...register('userPasswd')}
                    value={userPasswd}
                    onChange={(e) => setUserPasswd(e.target.value)} // 비밀번호 입력 상태 업데이트
                />
                {errors.userPasswd && <p>{errors.userPasswd.message}</p>}

                <input className='loginButton' type="submit" value="로그인" />
            </form>
            <div className='signInPage'>
                <a href='/SignInPage'>
                    회원가입
                </a>
            </div>
        </div>
    );
}

export default LoginPage;
