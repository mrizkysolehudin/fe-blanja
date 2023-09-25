import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../helpers/baseUrl";
import Swal from "sweetalert2";
import httpJson from "../../../helpers/http";

const resetRegisterCustomer = createAction("customer/reset/registerCustomer");

export const registerCustomerAction = createAsyncThunk(
	"customer/registerCustomer",
	async ({ data }, { rejectWithValue, dispatch }) => {
		try {
			if (data.name === "" || data.email === "" || data.password === "") {
				Swal.fire({
					title: "Input error",
					text: "Please, input all data",
					icon: "error",
				});

				return rejectWithValue("Input is empty");
			}

			const response = await httpJson().post(`${baseUrl}/customer/register`, data);

			if (response.data.data) {
				Swal.fire({
					title: "Register success",
					text: "Congratulations!",
					icon: "success",
				});

				setTimeout(() => {
					window.location.reload();
				}, 1000);

				dispatch(resetRegisterCustomer());
			}
		} catch (error) {
			Swal.fire({
				title: "Register error",
				text: "Please try again...",
				icon: "error",
			});

			return rejectWithValue("Register error");
		}
	},
);

const registerCustomerSlice = createSlice({
	name: "registerCustomer",
	initialState: {
		isCreated: false,
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(registerCustomerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(resetRegisterCustomer, (state, action) => {
			state.isCreated = true;
		});

		builder.addCase(registerCustomerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isCreated = false;
		});

		builder.addCase(registerCustomerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default registerCustomerSlice.reducer;
