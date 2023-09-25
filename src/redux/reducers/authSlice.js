import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../helpers/baseUrl";
import Swal from "sweetalert2";
import httpJson from "../../helpers/http";

const initialState = {
	isLogout: false,
	isLogin: false,
	user_id: null,
	token: null,
};

export const loginCustomerAction = createAsyncThunk(
	"customer/login",
	async (data, { rejectWithValue }) => {
		try {
			if (data.email === "" || data.password === "") {
				Swal.fire({
					title: "Input error",
					text: "Please, input your email and password!",
					icon: "error",
				});

				return rejectWithValue("Please, input your email and password!");
			}

			const response = await httpJson().post(`${baseUrl}/customer/login`, data);
			localStorage.setItem("token", response.data.data.token);
			localStorage.setItem("user_id", response.data.data.user_id);

			Swal.fire({
				title: "Login success",
				text: "Congratulations! You are now logged in.",
				icon: "success",
			});

			return response.data.data;
		} catch (error) {
			Swal.fire({
				title: "Login error",
				text: "Wrong password or email. Please try again.",
				icon: "error",
			});
			return rejectWithValue(error.message);
		}
	},
);

export const loginSellerAction = createAsyncThunk(
	"seller/login",
	async (data, { rejectWithValue }) => {
		try {
			if (data.email === "" || data.password === "") {
				Swal.fire({
					title: "Input error",
					text: "Please, input your email and password!",
					icon: "error",
				});

				return rejectWithValue("Please, input your email and password!");
			}

			const response = await httpJson().post(`${baseUrl}/seller/login`, data);
			localStorage.setItem("token", response.data.data.token);
			localStorage.setItem("user_id", response.data.data.user_id);

			Swal.fire({
				title: "Login success",
				text: "Congratulations! You are now logged in.",
				icon: "success",
			});

			return response.data.data;
		} catch (error) {
			Swal.fire({
				title: "Login error",
				text: "Wrong password or email. Please try again.",
				icon: "error",
			});
			return rejectWithValue(error.message);
		}
	},
);

const authSlice = createSlice({
	name: "user/auth",
	initialState,
	reducers: {
		logoutAction: (state) => {
			localStorage.removeItem("token");
			localStorage.removeItem("user_id");
			state.isLogin = false;
			state.token = null;
			state.user_id = null;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(loginCustomerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(loginCustomerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isLogin = true;
			state.token = action?.payload?.token;
			state.user_id = action?.payload?.user_id;
		});

		builder.addCase(loginCustomerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.errMessage = action?.payload;
		});

		builder.addCase(loginSellerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(loginSellerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isLogin = true;
			state.token = action?.payload?.token;
			state.user_id = action?.payload?.user_id;
		});

		builder.addCase(loginSellerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.errMessage = action?.payload;
		});
	},
});

export const { logoutAction } = authSlice.actions;

export default authSlice.reducer;
