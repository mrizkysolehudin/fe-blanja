import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartItems",
	initialState: {
		cartItems: [],
		totalPrice: 0,
	},
	reducers: {
		addToCartAction: (state, action) => {
			const existingItem = state.cartItems.find(
				(item) => item.product_id === action.payload.product_id,
			);

			if (existingItem) {
				existingItem.quantity_unit += action.payload.quantity_unit || 1;
			} else {
				state.cartItems.push(action.payload);
			}

			state.totalPrice +=
				(action.payload.quantity_unit || 0) * (action.payload.price_unit || 0);
		},
		removeFromCartAction: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.product_id === action.payload.product_id,
			);
			if (itemIndex !== -1) {
				const removedItem = state.cartItems[itemIndex];
				state.totalPrice -=
					(removedItem.quantity_unit || 0) * (removedItem.price_unit || 0);
				state.cartItems.splice(itemIndex, 1);
			}
		},
		incrementQuantityAction: (state, action) => {
			const item = state.cartItems.find(
				(item) => item.product_id === action.payload.product_id,
			);
			if (item) {
				item.quantity_unit += 1;
				state.totalPrice += item.price_unit || 0;
			}
		},
		decrementQuantityAction: (state, action) => {
			const item = state.cartItems.find(
				(item) => item.product_id === action.payload.product_id,
			);
			if (item && item.quantity_unit > 1) {
				item.quantity_unit -= 1;
				state.totalPrice -= item.price_unit || 0;
			}
		},
		calculateTotalPriceAction: (state) => {
			state.totalPrice = state.cartItems.reduce((total, item) => {
				return total + (item.quantity_unit || 0) * (item.price_unit || 0);
			}, 0);
		},
	},
});

export const {
	addToCartAction,
	removeFromCartAction,
	incrementQuantityAction,
	decrementQuantityAction,
	calculateTotalPriceAction,
} = cartSlice.actions;

export default cartSlice.reducer;
