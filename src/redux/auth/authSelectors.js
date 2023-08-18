export const isLoading = state => state.auth.isLoading
export const userName = state => state.auth.name
export const authErrorSelector = state => state.auth.error
export const authStateSelector = state => state.auth
export const isAuthInSelector = state => state.auth.loggedIn