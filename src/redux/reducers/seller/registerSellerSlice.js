import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../helpers/baseUrl";
import Swal from "sweetalert2";
import httpJson from "../../../helpers/http";

const resetRegisterSeller = createAction("seller/reset/registerSeller");

export const registerSellerAction = createAsyncThunk(
	"seller/registerSeller",
	async ({ data }, { rejectWithValue, dispatch }) => {
		try {
			if (
				data.name === "" ||
				data.email === "" ||
				data.phone === "" ||
				data.store_name === "" ||
				data.password === ""
			) {
				Swal.fire({
					title: "Input error",
					text: "Please, input all data",
					icon: "error",
				});

				return rejectWithValue("Input is empty");
			}

			const response = await httpJson().post(`${baseUrl}/seller/register`, data);

			if (response.data.data) {
				Swal.fire({
					title: "Register success",
					text: "Congratulations!",
					icon: "success",
				});

				setTimeout(() => {
					window.location.reload();
				}, 1000);

				dispatch(resetRegisterSeller());
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

const registerSellerSlice = createSlice({
	name: "registerSeller",
	initialState: {
		isCreated: false,
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(registerSellerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(resetRegisterSeller, (state, action) => {
			state.isCreated = true;
		});

		builder.addCase(registerSellerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isCreated = false;
		});

		builder.addCase(registerSellerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default registerSellerSlice.reducer;
