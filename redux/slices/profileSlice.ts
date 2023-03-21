import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

interface ProfileState {
    editingProfile: boolean,
    data: { name: string, email: string },
    confirm: boolean,
}

const initialState: ProfileState = {
    editingProfile: false,
    data: { name: '', email: '' },
    confirm: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        editProfileClicked: (state) => {
            state.editingProfile = true;
        },
        cancelEditProfileClicked: (state) => {
            state.editingProfile = false;
        },
        setNameAndEmailWhenApproved: (state, action: PayloadAction<{ name: string, email: string }>) => {
            state.data.name = action.payload.name;
            state.data.email = action.payload.email;
        },
        setConfirm: (state) => {
            let emailConfirm: boolean = false;
            let nameConfirm: boolean = false;
            auth().currentUser?.updateEmail(state.data.email)
                .then((res) => {
                    emailConfirm = true;
                })
                .catch(err => Alert.alert('Error!', err.message));
            auth().currentUser?.updateProfile({
                displayName: state.data.name,
            }).then(res=>{
                nameConfirm = true;
            })
            .catch(err => Alert.alert('Error!', err.message));
            if(nameConfirm && emailConfirm){
                state.confirm=true;
            }
        }
    },
});

export const { editProfileClicked, cancelEditProfileClicked, setNameAndEmailWhenApproved, setConfirm } = profileSlice.actions;
export default profileSlice.reducer;
