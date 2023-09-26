import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../helpers/baseUrl";
import httpJson from "../../../helpers/http";

export const getOneCustomerAction = createAsyncThunk(
	"customer/getOneCustomer",
	async (id, { rejectWithValue }) => {
		try {
			const response = await httpJson().get(`${baseUrl}/customer/${id}`);

			return response.data.data[0];
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const getOneCustomerSlice = createSlice({
	name: "getOneCustomer",
	initialState: {
		isLoading: false,
		isError: false,
		data: null,
	},
	extraReducers: (builder) => {
		builder.addCase(getOneCustomerAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(getOneCustomerAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action?.payload;
		});

		builder.addCase(getOneCustomerAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default getOneCustomerSlice.reducer;
