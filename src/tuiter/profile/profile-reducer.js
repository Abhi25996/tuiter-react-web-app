import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        firstName: 'Tony',
        lastName: 'Stark',
        handle: '@Iron_Man',
        profilePicture: '../../images/jose.png',
        bannerPicture: 'polyglot.png',
        bio: 'Genius, billionaire, philanthropist.',
        website: 'marvel.com',
        location: 'Boston, MA',
        dateOfBirth: '7/7/1968',
        dateJoined: '5/2012',
        followingCount: 55,
        followersCount: 2800
    },
    reducers:{
        updateProfile(state, action){
            return action.payload;
        }
    }
})

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer