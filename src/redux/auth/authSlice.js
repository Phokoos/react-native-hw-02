import { createSlice } from '@reduxjs/toolkit'
import initialState from './authState'
import { loginThunk, registerThunk } from './authThunks'

const handleFulfilledAuth = (state, { payload }) => {
	const { accessToken, email, name, uid } = payload.user
	state.token = accessToken
	state.email = email
	state.uid = uid
	state.name = name
	state.isLoading = false
	state.error = ""
	state.loggedIn = true
}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ""
	state.loggedIn = false
}

const handleRejected = (state, { error }) => {
	if (error.message === "Firebase: Error (auth/email-already-in-use).") {
		state.error = "Ця електронна адреса вже використовується!"
	} else if (error.message === "Password should be at least 6 characters (auth/weak-password).") {
		state.error = "Невірна валідація паролю."
	} else if (error.message === "Firebase: Error (auth/invalid-email).") {
		state.error = "Невірна валідація email."
	} else if (error.message === "Firebase: Error (auth/missing-password).") {
		state.error = "Пропущене поле паролю."
	} else if (error.message === "Firebase: Error (auth/missing-email).") {
		state.error = "Пропущене поле email."
	} else if (error.message === "Firebase: Error (auth/user-not-found).") {
		state.error = "Користувача із таким email не знайдено!"
	} else if (error.message === "Firebase: Error (auth/wrong-password).") {
		state.error = "Невірний пароль користувача"
	} else {
		state.error = error.message
	}
	state.isLoading = false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsLoggedIn: (state, { payload }) => {
			return ({
				...state,
				loggedIn: payload
			})
		},
		setUserDetails: (state, { payload }) => {
			return ({
				...state,
				name: payload.name,
				email: payload.email,
				uid: payload.uid,
				token: payload.token,
				loggedIn: payload.loggedIn
			}
			)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(registerThunk.fulfilled, handleFulfilledAuth)
			.addCase(loginThunk.fulfilled, handleFulfilledAuth)
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
	}
})

export default authSlice.reducer

export const { setIsLoggedIn, setUserDetails } = authSlice.actions