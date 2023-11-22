import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncMessage } from "./messageSlice";
import { setLoadingState } from "./loadingSlice";
import axios from "axios";



export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: []
    },
    reducers: {
        getCart(state, action){
            console.log('getCart:',state, action);
            // 更新 cartData 屬性
            state.cartData = action.payload;
        },
    },
})

export const asyncAddToCart = createAsyncThunk(
    'cart/asyncAddToCart',
    async (payload, { dispatch }) => {
        console.log('payload:', payload);
        
        dispatch(setLoadingState(true));

        try {
            const res = await axios.post(
              `/v2/api/${process.env.REACT_APP_API_PATH}/cart`,
              payload
            );
      
            console.log('成功加入購物車：', res);
            dispatch(createAsyncMessage(res.data));
            dispatch(asyncGetCart());
            
            return res.data;
        } catch (error) {
            console.log('加入購物車失敗', error);
            dispatch(createAsyncMessage(error.response.data));
      
            throw error;
        } finally {
            dispatch(setLoadingState(false));
        }
    }
);
export const asyncGetCart = createAsyncThunk(
    'cart/asyncGetCart',
    async (payload, { dispatch }) => {

        // dispatch(setLoadingState(true));

        try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`);
            console.log('Slice 取得購物車內容',res);

            dispatch(cartSlice.actions.getCart(res.data))

            return res.data;
        } catch (error) {
            console.log('Slice 取得購物車內容 失敗', error);
      
            throw error;
        } finally {
            // dispatch(setLoadingState(false));
        }
    }
);
export const asyncRemoveCartItem = createAsyncThunk(
    'cart/asyncRemoveCartItem',
    async (payload, { dispatch }) => {

        dispatch(setLoadingState(true));

        try {
            const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${payload}`);
            console.log('Slice 刪除購物車產品',res);

            dispatch(asyncGetCart());

            return res.data;
        } catch (error) {
            console.log('Slice 刪除購物車產品 失敗', error);
      
            throw error;
        } finally {
            dispatch(setLoadingState(false));
        }
    }
);
export const asyncUpdateCartItem = createAsyncThunk(
    'cart/asyncUpdateCartItem',
    async (payload, { dispatch }) => {
        console.log("start");
        
        dispatch(setLoadingState(true));

        try {
            const res = await axios.put(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${payload.id}`, payload.data);
            console.log('Slice 更新購物車產品數量',res);
            dispatch(asyncGetCart());
            dispatch(createAsyncMessage(res.data));

            return res.data;
        } catch (error) {
            console.log('Slice 更新購物車產品 失敗', error);
            dispatch(createAsyncMessage(error.response.data));
            throw error;
        } finally {
            dispatch(setLoadingState(false));
        }
    }
);



//
export const { getCart } = cartSlice.actions;

export default cartSlice.reducer; 