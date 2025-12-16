import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    // Adds a plant to the cart
    addItem: (state, action) => {
      const plant = action.payload;

      const existingItem = state.items.find(
        item => item.name === plant.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // Removes a plant from the cart based on name
    removeItem: (state, action) => {
      const plantName = action.payload;

      state.items = state.items.filter(
        item => item.name !== plantName
      );
    },

    // Updates quantity of a plant in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const item = state.items.find(
        item => item.name === name
      );

      if (itemToUpdate) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;