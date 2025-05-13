import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
    
    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const response = await axiosInstance.get("/messages/users");
            const data = response.data;
            if (Array.isArray(data)) {
                set({ users: data });
            } else {
                console.error("Unexpected users response:", data);
                set({ users: [] }); // fallback to empty array
            }
        } catch (error) {
            toast.error("Failed to fetch users");
        } finally {
            set({ isUsersLoading: false });
        }
    },
    
    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const response = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: response.data });
        } catch (error) {
            toast.error("Failed to fetch messages");
        } finally {
            set({ isMessagesLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const response = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, response.data] });
        } catch (error) {
            toast.error("Failed to send message");
        }
    },

    subscribeToMessages: () => {
        const {selectedUser} = get();
        if (!selectedUser) {
            return;
        }
        const socket = useAuthStore.getState().socket;
        
        socket.on("newMessage", (newMessage) => {
            if(newMessage.senderId !== selectedUser._id) return;
            set({messages: [...get().messages, newMessage]});
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        if (!socket) {
            console.log("Socket is null during unsubscribe");
            return;
        }
        socket.off("newMessage");
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),
}));