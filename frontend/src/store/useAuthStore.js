import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import { toast } from 'react-hot-toast';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    onlineUsers: [],

    checkAuth: async () => {
        try {
            const response = await axiosInstance.get("/auth/check");
            set({ authUser: response.data});
        } catch (error) {
            console.log(error);
            set({ authUser: null});
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const response = await axiosInstance.post("/auth/signup", data);
            set({ authUser: response.data });
            toast.success("Account created successfully!");
        } catch (error) {
            toast.error("Error creating account. Please try again.");
            console.log(error);
        } finally {
            set({ isSigningUp: false });
        }
    },
    
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const response = await axiosInstance.post("/auth/login", data);
            set({ authUser: response.data });
            toast.success("Logged in successfully!");
        } catch (error) {
            toast.error("Error logging in. Please try again.");
            console.log(error);
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error("Error logging out. Please try again.");
            console.log(error);
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const response = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: response.data });
            toast.success("Profile updated successfully!");
        } catch (error) {
            toast.error("Error updating profile. Please try again.");
            console.log(error);
        } finally {
            set({ isUpdatingProfile: false });
        }
    }

}));