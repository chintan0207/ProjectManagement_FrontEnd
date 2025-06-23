import axios from "axios";
import useAuthStore from "../stores/useAuthStore"; // 👈 Import store directly

const API_URL =
  import.meta.env.VITE_API_URL || "https://api.projectbuild.live/api/v1";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor with token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken, setTokens, logout } = useAuthStore.getState();

      if (!refreshToken) {
        logout();
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          `${API_URL}/auth/refresh-accesstoken`,
          { refreshToken },
          { withCredentials: true }
        );

        const newAccessToken = res?.data?.accessToken;
        const newRefreshToken = res?.data?.refreshToken;

        if (newAccessToken) {
          setTokens({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } else {
          logout();
        }
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
