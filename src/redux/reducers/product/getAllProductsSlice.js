import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpJson from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";

export const ggetAllProductsAction = createAsyncThunk(
	"product/getAllProducts",
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
	name: "allProducts",
	initialState: {
		isLoading: false,
		isError: false,
		data: [],
	},
	extraReducers: (builder) => {
		builder.addCase(ggetAllProductsAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(ggetAllProductsAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action?.payload;
		});

		builder.addCase(ggetAllProductsAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default getAllProductsSlice.reducer;
