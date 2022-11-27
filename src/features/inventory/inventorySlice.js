import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        products: [{name: 'Glass', price: 100}, {name: "Table", price: 100}, {name: "Chair", price: 100}],
    },

    reducers: {
        addItem: (state, action) => {
            let newItem = action.payload
            state.products.push(newItem)
        },

        removeItem: (state, action) => {
            let itemToRemove = action.payload
            state.products = state.products.filter(product => product.name != itemToRemove)
        }, 

        changePrice: (state, action) => {
            const {name, price} = action.payload
            let itemToUpdate = state.products.find(product => product.name === name)
            itemToUpdate.price = price
        }
    }
})

export const {addItem, removeItem, changePrice} = inventorySlice.actions
export const selectInventory = (state) => state.inventory.products
export default inventorySlice.reducer