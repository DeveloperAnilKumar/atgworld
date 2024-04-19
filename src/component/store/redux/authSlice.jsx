import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || {},
        isLogin: JSON.parse(localStorage.getItem("isLogin")) || false
    },
    reducers: {
        // Reducer for authenticating a user
        authenticateUser: (state, action) => {
          
            // Update the user and isLogin state based on the provided user
            state.user = action.payload;
            state.isLogin = true;
            // Update the localStorage
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("isLogin", true);
        },
        // Reducer for logging out a user
        logoutUser: (state) => {
            // Reset user and isLogin state
            state.user = {};
            state.isLogin = false;
            // Clear localStorage
            localStorage.removeItem("user");
            localStorage.removeItem("isLogin");
        }
    }
});

// Action creators
export const { authenticateUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
