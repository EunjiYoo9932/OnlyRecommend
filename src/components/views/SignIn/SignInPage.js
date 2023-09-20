import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./SignInPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(""); // 이메일 상태 추가
  const [userPasswd, setUserPasswd] = useState(""); // 비밀번호 상태 추가
  const [userBirth, setUserBirth] = useState(""); // 생일 추가
  const [userPhone, setUserPhone] = useState(""); // 휴대폰 추가
  const [userData, setUserData] = useState(null); // 유저 상태 추가

  // const axiosData = async() => {
  //     const response = await axios.post("http://localhost:4000/userSignIn");
  //     console.log(response);
  // };
  // useEffect(()=> {
  //     axiosData();
  // },[]);

  const onSubmit = async () => {
	try {
	  const response = await axios.post(
		"http://localhost:4000/userSignIn",
		{
		  userEmail: userEmail, // userEmail 상태를 서버에 전달
		  userPasswd: userPasswd, // userPasswd 상태를 서버에 전달
		  userBirth: userBirth,
		  userPhone: userPhone,
		},
		{
		  headers: {
			"Content-Type": "application/json",
		  },
		}
	  );
	  setUserData(response.data);
	  console.log(response.data);
	  //response.data가 success로 응답이 오면 if실행
	  if (response.data.success) {
		setTimeout(() => {
		  navigate("/LoginPage");
		}, 3000);
	  }
	  // 서버로부터의 응답 처리
	  // await axios.post(SERVER_URL, );
	  // axiosData();
	} catch (error) {
	  console.error(error);
	}
  };
  const formSchema = yup.object({
	userEmail: yup
	  .string()
	  .required("이메일을 입력해주세요")
	  .email("이메일 형식이 아닙니다."),
	userPasswd: yup
	  .string()
	  .required("영문, 숫자포함 8자리를 입력해주세요.")
	  .min(8, "최소 8자 이상 가능합니다")
	  .max(15, "최대 15자 까지만 가능합니다")
	  .matches(
		/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
		"영문 숫자포함 8자리를 입력해주세요."
	  ),
	passwordConfirm: yup
	  .string()
	  .oneOf([yup.ref("userPasswd")], "비밀번호가 다릅니다."),
  });

  const {
	register,
	handleSubmit,
	watch,
	formState: { errors },
  } = useForm({
	mode: "onChange",
	resolver: yupResolver(formSchema),
  });

  return (
	<div className="signIn">
	  <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
		<input
		  name="userEmail"
		  placeholder="이메일"
		  {...register("userEmail")}
		  value={userEmail}
		  onChange={(e) => setUserEmail(e.target.value)}
		  // register에 포함된 구문임 onChange={(e)=> setUserEmail(e.target.value)}
		/>
		{errors.userEmail && <p>{errors.userEmail.message}</p>}
		<input
		  name="userPasswd"
		  type="password"
		  placeholder="비밀번호"
		  value={userPasswd}
		  {...register("userPasswd")}
		  onChange={(e) => setUserPasswd(e.target.value)}
		/>
		{errors.userPasswd && <p>{errors.userPasswd.message}</p>}

		<input
		  type="password"
		  name="passwordConfirm"
		  placeholder="비밀번호 확인"
		  {...register("passwordConfirm")}
		/>
		{errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
		<input
		  name="userBirth"
		  placeholder="생년월일"
		  value={userBirth}
		  {...register("userBirth")}
		  onChange={(e) => setUserBirth(e.target.value)}
		/>

		<input
		  name="userPhone"
		  placeholder="핸드폰 번호"
		  value={userPhone}
		  {...register("userPhone")}
		  onChange={(e) => setUserPhone(e.target.value)}
		/>
		<input
		  className="loginButton"
		  type="submit"
		  value="회원가입"
		  onClick={handleSubmit(onSubmit)}
		/>
	  </form>

	  {/* 백엔드 응답에 따라 메시지 표시 */}
	  {userData !== null ? (
		userData.success ? (
		  <p>회원가입 성공했습니다. 3초 후에 로그인 페이지로 이동합니다.</p>
		) : (
		  <p>회원 정보가 이미 존재합니다.</p>
		)
	  ) : null}
	</div>
  );
}

export default SignInPage;