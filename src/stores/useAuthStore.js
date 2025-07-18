import { create } from "zustand";
import { persist } from "zustand/middleware";
import { API_URL, StorageKeys } from "../utils/Constants";
import { toast } from "sonner";
import axiosInstance from "../api/axios";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,
      isBtnLoading: false,
      isSendEmailLoading: false,

      login: async (data) => {
        try {
          set({ isBtnLoading: true });

          const response = await axiosInstance.post(
            `${API_URL}/auth/login`,
            data
          );
          if (response?.data?.success) {
            const { loggedInUser, accessToken, refreshToken } =
              response.data.data;

            localStorage.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
            localStorage.setItem(StorageKeys.REFRESH_TOKEN, refreshToken);

            set({ user: loggedInUser, accessToken, refreshToken });

            toast.success(response?.data?.message || "Login successful");
            return response?.data?.success;
          } else {
            toast.error(response?.data?.message || "Login failed");
            return response?.data?.statusCode;
          }
        } catch (error) {
          toast.error(error?.response?.data?.message || "Login failed");
        } finally {
          set({ isBtnLoading: false });
        }
      },

      logout: async () => {
        try {
          await axiosInstance.get(`${API_URL}/auth/logout`);
        } catch (err) {
          console.error(" Error logging out:", err);
        } finally {
          localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
          localStorage.removeItem(StorageKeys.REFRESH_TOKEN);
          set({ user: null, accessToken: null, refreshToken: null });
          toast.success("Logged out");
        }
      },

      registerUser: async (userData) => {
        try {
          set({ isLoading: true });

          const response = await axiosInstance.post(
            `${API_URL}/auth/register`,
            userData
          );

          if (response?.data?.success) {
            toast.success(response?.data?.message || "Registered successfully");
          } else {
            toast.error(response?.data?.message || "Registration failed");
          }
          return response?.data?.success;
        } catch (error) {
          console.log(error);
          toast.error(error?.response?.data?.message || "Registration failed");
        } finally {
          set({ isLoading: false });
        }
      },

      verifyEmail: async (token) => {
        try {
          const response = await axiosInstance.get(
            `${API_URL}/auth/verify/${token}`
          );
          if (response?.data?.success) {
            toast.success(
              response?.data?.message || "Email verified successfully"
            );
          } else {
            toast.error(response?.data?.message || "Email verification failed");
          }
          return response?.data?.success;
        } catch (error) {
          console.log(error);
          toast.error(
            error?.response?.data?.message || "Email verification failed"
          );
        }
      },

      resendVerificationEmail: async (email) => {
        try {
          set({ isSendEmailLoading: true });
          const response = await axiosInstance.post(
            `${API_URL}/auth/resend-verify-email`,
            { email }
          );
          console.log(response);
          if (response?.data?.success) {
            toast.success(
              response?.data?.message || "Verification email sent successfully"
            );
          } else {
            toast.error(
              response?.data?.message || "Error sending verification email"
            );
          }
          return response?.data?.success;
        } catch (error) {
          console.log(error);
          toast.error(
            error?.response?.data?.message || "Error sending verification email"
          );
        } finally {
          set({ isSendEmailLoading: false });
        }
      },

      initializeUser: async () => {
        try {
          const response = await axiosInstance.get(`${API_URL}/auth/profile`);
          if (response?.data?.success) {
            set({ user: response?.data?.data });
          } else {
            get().logout();
          }
        } catch (error) {
          get().logout();
          console.log(error);
        }
      },

      setTokens: ({ accessToken, refreshToken }) => {
        if (accessToken) {
          localStorage.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
          set({ accessToken });
        }
        if (refreshToken) {
          localStorage.setItem(StorageKeys.REFRESH_TOKEN, refreshToken);
          set({ refreshToken });
        }
      },

      isAuthenticated: () => {
        return !!get().accessToken;
      },
    }),
    {
      name: "auth",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
);

export default useAuthStore;
