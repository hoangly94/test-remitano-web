import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie';
import IUser from 'src/models/IUser';

interface IIndexState {
    user: IUser,
}

const cookies = new Cookies();
const initialState = {
    user: {},
} as IIndexState

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
    },
})

export const { setUser, } = indexSlice.actions
export default indexSlice.reducer