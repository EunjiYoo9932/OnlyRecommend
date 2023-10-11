import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [memberEmail, setMemberEmail] = useState(""); // 이메일 상태 추가
  const [memberPassword, setMemberPassword] = useState(""); // 비밀번호 상태 추가
  const [showModal, setShowModal] = useState(false); // 모달 창 열림/닫힘 상태를 관리하는 useState

  const openModal = () => {
    setShowModal(true); // 모달 창을 열기 위한 함수
  };

  const closeModal = () => {
    setShowModal(false); // 모달 창을 닫기 위한 함수
  };
  const onSubmit = async () => {
    try {
      //로그인할 때
      const response = await axios.post("/PlantsPlanet/login", {
        memberEmail: memberEmail, // memberEmail 상태를 서버에 전달
        memberPassword: memberPassword, // memberPassword 상태를 서버에 전달
      });
      //서버로부터의 응답 처리

      // 로그인 실패시
      if (response.data.startsWith("login")) {
        setMemberEmail(memberEmail);
        console.log(response.data);
      } else {
        setMemberEmail(response.data);
        console.log(response.data);
      }

      const response1 = await axios.get(`/PlantsPlanet/loginCheck?memberEmail=${memberEmail}`);
      console.log(response1);

            // 세션에 계정 정보가 있으면 success, 그 외 값은 전부 로그인 실패
            if (response1.data=="success") {
              navigate('/');
              // 사용자 정보가 맞다면 홈으로 이동
          } else {
              // 사용자 정보가 틀리다면 실패 메시지 처리
              openModal();
              console.error("로그인 실패");
              
          }
    } catch (error) {
      console.log(error);
    }
  };

  const formSchema = yup.object({
    memberEmail: yup
    .string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 아닙니다.'),
memberPassword: yup
    .string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <img className="loginGrupImg" alt="grupImg" src="image/로고2.jpg" />
        <input
          name="memberEmail"
          placeholder="이메일"
          {...register("memberEmail")}
          value={memberEmail}
          onChange={(e) => setMemberEmail(e.target.value)} // 이메일 입력 상태 업데이트
        />
        {errors.memberEmail && <p>{errors.memberEmail.message}</p>}
        <input
          name="memberPassword"
          type="password"
          placeholder="비밀번호"
          {...register("memberPassword")}
          value={memberPassword}
          onChange={(e) => setMemberPassword(e.target.value)} // 비밀번호 입력 상태 업데이트
        />
        {errors.memberPassword && <p>{errors.memberPassword.message}</p>}

        <input className="loginButton" type="submit" value="로그인" />
      </form>
      <div className="signInPage">
        <a href="/SignInPage">회원가입</a>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>로그인에 실패했습니다. 다시 입력해주세요!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
