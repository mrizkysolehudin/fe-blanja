import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { baseUrl } from "../../../helpers/baseUrl";
import httpJson from "../../../helpers/http";

export const ggetAllProductsAction = createAsyncThunk(
	"product/getAllRecipes",
	async (search, { rejectWithValue }) => {
		try {
			const response = await httpJson().get(`${baseUrl}/product?search=${search}`);

			return response.data.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const getAllProductsSlice = createSlice({
	name: "product",
	initialState: {
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getAllRecipesAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(getAllRecipesAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action?.payload;
		});

		builder.addCase(getAllRecipesAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});

		// delete
		builder.addCase(deleteRecipeAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(deleteRecipeAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isDelete = true;
		});

		builder.addCase(deleteRecipeAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default getAllProductsSlice.reducer;
