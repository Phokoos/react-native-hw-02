import { createSlice } from '@reduxjs/toolkit'
import initialState from './authState'
import { registerThunk } from './authThunks'

const handleFulfilledRegister = (state, { payload }) => {
	console.log("clg in slice: ", payload);
	const { accessToken, email, name, uid } = payload.user
	state.token = accessToken
	state.email = email
	state.uid = uid
	state.name = name
	state.isLoading = false
	state.error = ""
}
const handlePending = (state) => {
	state.isLoading = true
	state.error = ""
}

const handleRejected = (state, { error }) => {
	if (error.message === "Firebase: Error (auth/email-already-in-use).") {
		console.log("clg in slice is-use error: ", error.message)
		state.error = "Ця електронна адреса вже використовується!"
	} else if (error.message === "Password should be at least 6 characters (auth/weak-password).") {
		console.log("clg in slice least 6 password error: ", error.message)
		state.error = "Невірна валідація паролю"
	} else if (error.message === "Firebase: Error (auth/invalid-email).") {
		console.log("clg in slice invalid-email error: ", error.message)
		state.error = "Невірна валідація email"
	} else {
		console.log("clg in slice after all error: ", error.message)
		state.error = error.message
	}
	state.isLoading = false
	// Firebase: Error (auth/missing-password).
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(registerThunk.fulfilled, handleFulfilledRegister)
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
	}
})

export default authSlice.reducer