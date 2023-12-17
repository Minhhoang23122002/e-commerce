import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApis } from "../../apis/userApi";

const initialState = {
    isLoading: false,
    users: [],
    errors: {},
    isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
    userInfo: JSON.parse(localStorage.getItem("user")) || {},
};

export const actLogin = createAsyncThunk(
    "users/login",
    async ({ formValue, navigate }, thunkAPI) => {
        const users = await userApis.getAllUsers();
        const { email, password } = formValue;
        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );
        if (foundUser) {
            thunkAPI.dispatch(loginSuccess(foundUser));
            navigate("/home");
        } else {
            return thunkAPI.rejectWithValue("User or Password incorrect!");
        }
    }
);

export const actCreateNewUser = createAsyncThunk(
    "users/createNewUser",
    async ({ formValue, navigate }, thunkAPI) => {
        try {
            const users = await userApis.getAllUsers();
            const { email, phoneNumber } = formValue;
            const foundEmail = users.find((u) => u.email === email);
            const foundPhoneNumber = users.find((u) => u.phoneNumber === phoneNumber);
            if (foundEmail) {
                return thunkAPI.rejectWithValue("User has been existed!");
            } else if (foundPhoneNumber) {
                return thunkAPI.rejectWithValue("Number phone has been existed!");
            } else {
                await userApis.createNewUser(formValue);
                navigate("/sign-in");
            }
        } catch (error) { }
    }
);

export const actFetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async (params) => {
        return await userApis.getAllUsers({ params: params });
    }
);

export const actFetchUserById = createAsyncThunk(
    "users/fetchMyUser",
    async (userId) => {
        const user = await userApis.getUserById(userId);
        return user;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isLogin = true;
            state.userInfo = action.payload;
            localStorage.setItem("isLogin", true);
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.isLogin = false;
            state.userInfo = null;
            localStorage.setItem("isLogin", false);
            localStorage.setItem("userInfo", JSON.stringify({}));
        },
        logout: (state, action) => {
            state.isLogin = false;
            localStorage.setItem("isLogin", false);
            localStorage.setItem("userInfo", JSON.stringify(null));
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
    },

    extraReducers: (builder) => {
        builder.addCase(actCreateNewUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(actCreateNewUser.rejected, (state, action) => {
            state.errors = {};
            state.isLoading = false;
        });
        builder.addCase(actCreateNewUser.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        });

        builder.addCase(actLogin.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(actLogin.rejected, (state, action) => {
            state.errors = {};
            state.isLoading = false;
            console.log("login failure", action.payload);
        });
        builder.addCase(actFetchAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
        builder.addCase(actFetchUserById.fulfilled, (state, action) => {
            state.userInfo = action.payload;
        });
    },
});

export const { setLoading, loginSuccess, loginFailure, logout, setUserInfo } = userSlice.actions;
export default userSlice.reducer;