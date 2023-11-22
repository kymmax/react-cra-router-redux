import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const setImageLoad = () => {
  return (dispatch) => {
    const images = document.querySelectorAll('img');
    const promises = [];

    dispatch(setLoadingState(true));

    images.forEach((image) => {
      const promise = new Promise((resolve) => {
        if (!image.src) resolve();

        if (image.complete) {
          image.classList.remove('img-loading');
          image.classList.add('img-loaded');
          resolve();
        } else {
          image.onload = () => {
            image.classList.remove('img-loading');
            image.classList.add('img-loaded');
            resolve();
          };
        }

        
      });
      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      // 在這裡執行所有圖片都加載完畢後的操作
      dispatch(setLoadingState(false)); // 觸發同步 action 更新狀態
    });
  };
};

export const { setLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;