import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpFormData } from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";
import Swal from "sweetalert2";

const resetEditCustomer = createAction("customer/reset/editCustomer");

export const editCustomerAction = createAsyncThunk(
	"customer/editCustomer",
	async ({ data, image, id }, { rejectWithValue, dispatch }) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				Swal.fire({
					title: "Edit customer fail",
					text: "Please re-login and try again later...",
					icon: "error",
				});
				return rejectWithValue("No token");
			}

			if (
				data.name === "" ||
				data.email === "" ||
				data.phone === "" ||
				image === ""
			) {
				Swal.fire({
					name: "Input error",
					text: "Please, input all data",
					icon: "error",
				});

				return rejectWithValue("Input is empty");
			}

			const formData = new FormData();
			formData.append("id", id);
			formData.append("name", data?.name);
			formData.append("email", data?.email);
			formData.append("phone", data?.phone);
			formData.append("gender", data?.gender);
			formData.append("photo", image);

			const response = await httpFormData(token).put(
				`${baseUrl}/customer/${id}`,
				formData,
			);

			if (response.data.data) {
				Swal.fire({
					name: "Edit customer success",
					text: "Congratulations!",
					icon: "success",
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);

				dispatch(resetEditCustomer());
			}
		} catch (error) {
			Swal.fire({
				name: "Edit customer error",
				text: "Please try again later...",
				icon: "error",
			});

			return rejectWithValue("Edit customer error");
		}
	},
);

const editCustomerSlice = createSlice({
	name: "editCustomer",
	initialState: {
		isEdited: false,
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(editCustomerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(resetEditCustomer, (state, action) => {
			state.isEdited = true;
		});

		builder.addCase(editCustomerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isEdited = false;
		});

		builder.addCase(editCustomerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default editCustomerSlice.reducer;
