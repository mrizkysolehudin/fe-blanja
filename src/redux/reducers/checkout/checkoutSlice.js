import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
	name: "checkoutItems",
	initialState: {
		checkoutItems: [],
		totalPrice: 0,
	},
	reducers: {
		addToCheckoutAction: (state, action) => {
			const existingItem = state.checkoutItems.find(
				(item) => item.product_id === action.payload.product_id,
			);

			if (existingItem) {
				existingItem.quantity_unit += action.payload.quantity_unit || 1;
			} else {
				state.checkoutItems.push(action.payload);
			}

			state.totalPrice +=
				(action.payload.quantity_unit || 0) * (action.payload.price_unit || 0);
		},
		clearCheckoutAction: (state, action) => {
			state.checkoutItems = [];
			state.totalPrice = 0;
		},
		removeFromCheckoutAction: (state, action) => {
			const itemIndex = state.checkoutItems.findIndex(
				(item) => item.product_id === action.payload.product_id,
			);
			if (itemIndex !== -1) {
				const removedItem = state.checkoutItems[itemIndex];
				state.totalPrice -=
					(removedItem.quantity_unit || 0) * (removedItem.price_unit || 0);
				state.checkoutItems.splice(itemIndex, 1);
			}
		},
	},
});

export const {
	addToCheckoutAction,
	clearCheckoutAction,
	removeFromCheckoutAction,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
