import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'message',
    initialState: [

    ],
    reducers: {
        createMessage(state, action){
            console.log('createMessage:', action);
            
            // console.log('createMessage:', action.payload);
            // const id = new Date().getTime();

            if(action.payload.success){
                state.push({
                    id: action.payload.id,
                    type: 'success',
                    title: '成功',
                    text: action.payload.message
                })
            }else{
                state.push({
                    id: action.payload.id,
                    type: 'danger',
                    title: '錯誤',
                    text: Array.isArray(action.payload?.message)
                        ? action.payload?.message.join('、')
                        : action.payload?.message,
                })
            }

        },
        removeMessage(state, action){
            console.log('removeMessage:',action.payload);
            
            const index = state.findIndex(item => item === action.payload);
            state.splice(index,1);
        },
    }
})

// 這裡建立的方法 可以被其他元件使用
// 字定義名稱 async function
export const createAsyncMessage = createAsyncThunk(
    'message/createAsyncMessage',
    async function(payload, { dispatch, requestId}){
        // console.log('createAsyncMessage:', payload, params);
        dispatch(messageSlice.actions.createMessage({
            ...payload,
            id: requestId,
        }))

        setTimeout(() => {
            dispatch(messageSlice.actions.removeMessage(requestId));
        }, 2000);
        
    }
);

export const { createMessage }  = messageSlice.actions;
export const { removeMessage }  = messageSlice.actions;

export default messageSlice.reducer;