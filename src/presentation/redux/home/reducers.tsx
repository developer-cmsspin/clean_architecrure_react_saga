import { createSlice } from '@reduxjs/toolkit';
import ResponseHome from '../../../domain/home/model/responseHome';

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: new ResponseHome(),
        loading: false
    },
    reducers: {
        homePageBegin: (state) => { 
            state.loading = true;
        },
        homePageSuccess: (state, response) => {
            state.data = response.payload;
            state.loading = false;
        },
        homePageErr: (state, ex) => { 
            state.data = new ResponseHome(); 
            state.loading = false;
            console.log(ex); 
        },
    }
});

export const { homePageBegin, homePageSuccess, homePageErr } = homeSlice.actions;
export default homeSlice.reducer;