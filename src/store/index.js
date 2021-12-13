import { configureStore } from '@reduxjs/toolkit';
//reducer
import mascotas from './slices/mascotas'

export default configureStore({
    reducer: {
        mascotas
    }
});