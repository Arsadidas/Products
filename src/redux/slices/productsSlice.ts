import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IProduct, IProducts} from "../types/types";
import axios from "axios";

const initialState: IProducts = {
    products: [],
    currentProduct: null,
    status: "loading",
    error: null
}

export const fetchProducts = createAsyncThunk('/fetch/products', async () => {
    const res = await axios.get<IProduct[]>('https://609f63e2c512c20017dcd2bd.mockapi.io/api/v1/products')
    return res.data
})

export const fetchProductById = createAsyncThunk<IProduct, string>(
    'products/fetchById',
    async (id) => {
        const response = await axios.get<IProduct>(`https://609f63e2c512c20017dcd2bd.mockapi.io/api/v1/products/${id}`);
        return response.data;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
            state.products = action.payload
            state.status = 'succeeded'
        })
        builder.addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
            state.error = 'Something went wrong'
            state.status = 'failed'
        })
        builder.addCase(fetchProductById.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProductById.fulfilled, (state, action: PayloadAction<IProduct>) => {
            state.currentProduct = action.payload
            state.status = 'succeeded'
        })
        builder.addCase(fetchProductById.rejected, (state) => {
            state.status = 'failed'
            state.error = 'Something went wrong'
        })
    }
})


export default productsSlice.reducer