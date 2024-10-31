// services/api.ts
import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api", // API 基础 URL
	timeout: 10000, // 超时时间
	headers: {
		"Content-Type": "application/json",
	},
});

// 请求拦截器
api.interceptors.request.use(
	(config) => {
		// 从 localStorage 获取 token 并添加到请求头中
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 响应拦截器
api.interceptors.response.use(
	(response) => {
		return response.data; // 直接返回数据
	},
	(error) => {
		// 在这里处理公共错误，比如 token 失效或服务器错误
		if (error.response?.status === 401) {
			console.log("Unauthorized, redirecting to login...");
			// 清除无效的 token，可以选择跳转到登录页
			localStorage.removeItem("token");
			// 在 Next.js 中，你可以使用 window.location 或者路由导航到登录页面
			window.location.href = "/login";
		}
		return Promise.reject(error);
	},
);

export default api;
