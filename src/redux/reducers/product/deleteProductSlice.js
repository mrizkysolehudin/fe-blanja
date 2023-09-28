import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import httpJson from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";

export const deleteProductAction = createAsyncThunk(
	"product/deleteProduct",
	async (id, { rejectWithValue }) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				Swal.fire({
					title: "Delete product fail",
					text: "Please re-login and try again later...",
					icon: "error",
				});
				return rejectWithValue("No token");
			}

			await httpJson(token).delete(`${baseUrl}/product/${id}`);

			Swal.fire({
				title: "Delete product success",
				text: "Congratulations!",
				icon: "success",
			});
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			Swal.fire({
				title: "Delete product fail",
				text: "Please try again later...",
				icon: "error",
			});

			return rejectWithValue(error.message);
		}
	},
);

const deleteProductSlice = createSlice({
	name: "deleteProduct",
	initialState: {
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(deleteProductAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(deleteProductAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isDelete = true;
		});

		builder.addCase(deleteProductAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default deleteProductSlice.reducer;
