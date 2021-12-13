import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const mascotaSlice = createSlice({
    name: 'mascotas',
    initialState: {
        list: []
    },
    reducers: {
        setMascotasList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setMascotasList } = mascotaSlice.actions;

export default mascotaSlice.reducer;

export const fetchAllMascotas = (dispatch) => () => {
    return axios
        .get('http://localhost:1337/mascotas')
        .then((response) => {
            dispatch(setMascotasList(response.data));
            console.log('reduxMascotas', response)
            console.log('reduxMascotas.data.data', response.data)

        })
        .catch((error) => console.log(error));
}