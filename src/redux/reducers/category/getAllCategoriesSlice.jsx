import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpJson from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";

export const getAllCategoriesAction = createAsyncThunk(
	"category/getAllCategories",
	async (search, { rejectWithValue }) => {
		try {
			const response = await httpJson().get(`${baseUrl}/category`);

			return response.data.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const getAllCategorieSlice = createSlice({
	name: "allCategories",
	initialState: {
		isLoading: false,
		isError: false,
		data: [],
	},
	extraReducers: (builder) => {
		builder.addCase(getAllCategoriesAction.pending, (state, action) => {
			state.isLoading = true;
			state.isError = false;
		});

		builder.addCase(getAllCategoriesAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action?.payload;
		});

		builder.addCase(getAllCategoriesAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default getAllCategorieSlice.reducer;
