import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavsArticleInterface } from '../../features/homepage/interfaces/News';

export interface NotificationInterface {
    id: string,
}

interface FavoritesState {
    data: FavsArticleInterface[];
    notifications: NotificationInterface[],
    newNotification: boolean,
    unlike: boolean
}

const initialState: FavoritesState = {
    data: [],
    notifications: [],
    newNotification: false,
    unlike: false
};

export const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        likeClicked: (state, action: PayloadAction<FavsArticleInterface>) => {
            state.data.push(action.payload);
            state.newNotification = true;
            if (action.payload.source.id !== undefined) {
                state.notifications.push({ id: action.payload.source.id })
            }
        },
        unlikeClicked: (state, action: PayloadAction<FavsArticleInterface>) => {
            let id: string;
            if (action.payload.source.id !== undefined) {
                id = action.payload.urlToImage;
            }
            let filtered = state.data.filter(item => item.urlToImage !== id);
            state.data = filtered;
        },
        notificationsOff: (state) => {
            state.newNotification = false;
        },
        isFavorite: (state, action: PayloadAction<FavsArticleInterface>) => {
            state.data.forEach((item) => {
                if (item.source.id === action.payload.source.id) {
                    return true;
                }
            })
        },
    }
})

export const { likeClicked, unlikeClicked, notificationsOff, isFavorite } = favSlice.actions;
export default favSlice.reducer;
