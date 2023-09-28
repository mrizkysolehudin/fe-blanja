import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpJson from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";

export const getAllProductsAction = createAsyncThunk(
	"product/getAllProducts",
	async (search, { rejectWithValue }) => {
		try {
			const response = await httpJson().get(`${baseUrl}/product?search=${search}`);

			console.log(response.data.data);
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
		builder.addCase(getAllProductsAction.pending, (state, action) => {
			state.isLoading = true;
			state.isError = false;
		});

		builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action?.payload;
		});

		builder.addCase(getAllProductsAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default getAllProductsSlice.reducer;
