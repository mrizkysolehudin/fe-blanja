import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../helpers/baseUrl";
import httpJson from "../../../helpers/http";

export const getOneSellerAction = createAsyncThunk(
	"seller/getOneSeller",
	async (id, { rejectWithValue }) => {
		try {
			const response = await httpJson().get(`${baseUrl}/seller/${id}`);

			return response.data.data[0];
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const getOneSellerSlice = createSlice({
	name: "getOneSeller",
	initialState: {
		isLoading: false,
		isError: false,
		data: null,
	},
	extraReducers: (builder) => {
		builder.addCase(getOneSellerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(getOneSellerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action?.payload;
		});

		builder.addCase(getOneSellerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default getOneSellerSlice.reducer;
