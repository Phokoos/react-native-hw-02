import { createSlice } from '@reduxjs/toolkit'
import initialState from './authState'

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		handleSetEmail: (state, { payload }) => {
			state.email = payload.email
		},
		handleSetPassword: (state, { payload }) => {
			state.password = payload.password
		},
		handleSetName: (state, { payload }) => {
			state.name = payload.name
		}
	},
})

export const { handleSetEmail, handleSetPassword, handleSetName } = authSlice.actions

export default authSlice.reducer