import api from "@/utils/api";

// 获取用户信息
export const fetchUser = async () => {
	try {
		const userData = await api.get("/user/profile");
		console.log("User Data:", userData);
	} catch (error) {
		console.error("Failed to fetch user data", error);
	}
};
// 用户登录
export const login = async (email: string, password: string) => {
	try {
		const response = await api.post("/auth/login", { email, password });
		console.log("Login response:", response);
	} catch (error) {
		console.error("Login failed", error);
	}
};
