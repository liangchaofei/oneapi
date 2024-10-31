// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useStore } from "../../store/useStore";
import { fetchUser, login } from "@/services/user";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const setUser = useStore((state) => state.setUser);
	const router = useRouter();

	const handleLogin = async () => {
		// try {
		//   const response = await login(email, password);
		//   setUser(response.user); // 设置用户信息
		//   localStorage.setItem('token', response.access_token); // 存储 token
		//   router.push('/'); // 登录成功后跳转到主页
		// } catch (error) {
		//   console.error('登录失败', error);
		//   alert('登录失败，请检查您的凭据。');
		// }
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col space-y-4"
			>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border p-2"
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border p-2"
					required
				/>
				<button
					type="button"
					onClick={handleLogin}
					className="bg-blue-500 text-white p-2"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
